# CloudFront settings for crawlability

The site is a Next.js static export (`out/`) on S3 behind CloudFront. Three
fixes from the crawlability audit live in the CloudFront distribution, not in
the code, so they have to be applied in the AWS console (or IaC). Do them on a
staging distribution first.

## 1. Update the viewer-request function

Paste `cloudfront-uri-rewrite.js` (runtime `cloudfront-js-1.0`) or
`cloudfront-uri-rewrite.modern.js` (`cloudfront-js-2.0`) into the existing
function, **Publish**, and make sure it is associated with the default cache
behaviour as a *Viewer request* function.

It now sends a single 301 for page URLs that are:

- missing the trailing slash: `/about` → `/about/`
- not lowercase: `/About/` → `/about/`
- legacy aliases: `/product-details/k24/` → `/product-details/k24-head-digital-textile-printer/`,
  `/company/` → `/about/`, `/insights/` → `/blogs/`, `/support-services/` → `/services/`,
  `/product-details/` → `/products/` (full list in `REDIRECTS`)

Query strings are kept. Files (`/_next/*`, images, PDFs, `sitemap.xml`) pass
through unchanged.

## 2. Redirect HTTP to HTTPS

Distribution → **Behaviors** → default behaviour → **Edit** →
*Viewer protocol policy* = **Redirect HTTP to HTTPS**.

## 3. Serve real 404s instead of the homepage

Today the distribution maps S3 errors to `/index.html` with status **200**, so
every unknown URL is a soft-404 copy of the homepage.

Distribution → **Error pages** → edit the 403 and 404 entries:

| HTTP error code | Response page path | HTTP response code |
| --- | --- | --- |
| 403 | `/404.html` | **404** |
| 404 | `/404.html` | **404** |

(S3 REST origins answer 403 for missing keys, hence both.)
`out/404.html` is built from `app/not-found.tsx` and carries
`<meta name="robots" content="noindex">`.

## Check after deploying

```sh
curl -sI http://orangeotec.com/                     # 301 → https://
curl -sI https://orangeotec.com/about               # 301 → /about/
curl -sI https://orangeotec.com/About/              # 301 → /about/
curl -sI https://orangeotec.com/product-details/k24/  # 301 → keyword slug
curl -sI https://orangeotec.com/does-not-exist/     # 404
curl -sI https://orangeotec.com/blogs/page/2/       # 200
```
