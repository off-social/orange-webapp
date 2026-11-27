// CloudFront Function (viewer request) for the Next.js static export on S3.
//
// Runtime cloudfront-js-1.0 → use this file (ES5 only)
// Runtime cloudfront-js-2.0 → see cloudfront-uri-rewrite.modern.js (same logic)
//
// For page URLs (no file extension) it:
//   1. lowercases the path,
//   2. adds the trailing slash (`trailingSlash: true`),
//   3. maps legacy / renamed URLs to their current page,
// and if any of that changed the URL, answers with ONE 301 to the final URL
// (query string kept). Otherwise it rewrites /x/ to /x/index.html for S3.
//
// Files (/_next/*, images, PDFs, sitemap.xml, robots.txt) pass through
// untouched — their names are case-sensitive (e.g. /brochures/K64.pdf).

// Old or alias URLs → current page. Keys and values are lowercase directory
// paths with a trailing slash. Aliases come from SLUG_OVERRIDES in
// data/products/index.ts.
var REDIRECTS = {
  // Renamed products
  "/product-details/jetrix-e-hybrid-digital-label-printer/":
    "/product-details/jetixlab-hybrid-digital-label-printer/",
  "/product-details/jetrix-e/":
    "/product-details/jetixlab-hybrid-digital-label-printer/",
  // Short aliases → keyword slugs
  "/product-details/position-pro/": "/product-details/position-printing-machine/",
  "/product-details/k24/": "/product-details/k24-head-digital-textile-printer/",
  "/product-details/k32/": "/product-details/k32-head-digital-textile-printer/",
  "/product-details/k64/": "/product-details/64-head-digital-textile-printer/",
  "/product-details/rocket/":
    "/product-details/rocket-single-pass-digital-textile-printer/",
  "/product-details/jetixlab/":
    "/product-details/jetixlab-hybrid-digital-label-printer/",
  "/product-details/mas-vertical/":
    "/product-details/mas-vertical-double-sided-digital-textile-printer/",
  "/product-details/vividpress-e/":
    "/product-details/vividpress-e-digital-inkjet-printing-machine/",
  // Section URLs that never had a page of their own
  "/product-details/": "/products/",
  "/support-services/": "/services/",
  "/company/": "/about/",
  "/insights/": "/blogs/"
};

function buildQuery(qs) {
  var parts = [];
  for (var key in qs) {
    var entry = qs[key];
    var values = entry.multiValue ? entry.multiValue : [entry];
    for (var i = 0; i < values.length; i++) {
      parts.push(values[i].value === "" ? key : key + "=" + values[i].value);
    }
  }
  return parts.length ? "?" + parts.join("&") : "";
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Next.js assets and any URL that names a file go straight to S3.
  if (uri.indexOf("/_next/") === 0) return request;
  var lastSlash = uri.lastIndexOf("/");
  var lastDot = uri.lastIndexOf(".");
  if (lastDot > lastSlash) return request;

  var target = uri.toLowerCase();
  if (target.charAt(target.length - 1) !== "/") target += "/";
  if (REDIRECTS[target]) target = REDIRECTS[target];

  if (target !== uri) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: target + buildQuery(request.querystring || {}) },
        "cache-control": { value: "max-age=86400" }
      }
    };
  }

  request.uri = uri + "index.html";
  return request;
}
