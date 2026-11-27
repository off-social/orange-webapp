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
  "/insights/": "/blogs/",
  // Old WordPress URLs
  "/alpha-iii/": "/product-details/alpha-iii/",
  "/support-services-of-fabric-digital-printer/": "/services/",
  "/category/success-stories/": "/blogs/",
  "/category/news-and-events/": "/news-events/",
  "/sublimation-printing/": "/products/",
  "/2025/12/19/export-opportunities-for-digital-textile-printers/":
    "/blogs/export-opportunities-for-digital-textile-printers-beyond-the-buzz/",
  // Corrected blog slug
  "/blogs/how-position-printing-improves-print-accuracy-and-reducing-fabric-waste/":
    "/blogs/how-position-printing-improves-print-accuracy-and-reduces-fabric-waste/"
};

// Old file URLs (exact, case-sensitive match) → current page.
var FILE_REDIRECTS = {
  "/wp-content/uploads/2025/06/MS-MINILARIO.pdf": "/product-details/minilario/",
  "/wp-content/uploads/2025/06/COLORIX-Subpro-2-2.pdf": "/product-details/subpro-ii/"
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

function redirect(location, request) {
  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: location + buildQuery(request.querystring || {}) },
      "cache-control": { value: "max-age=86400" }
    }
  };
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (FILE_REDIRECTS[uri]) return redirect(FILE_REDIRECTS[uri], request);

  // Next.js assets and any URL that names a file go straight to S3.
  if (uri.indexOf("/_next/") === 0) return request;
  var lastSlash = uri.lastIndexOf("/");
  var lastDot = uri.lastIndexOf(".");
  if (lastDot > lastSlash) return request;

  var target = uri.toLowerCase();
  if (target.charAt(target.length - 1) !== "/") target += "/";
  if (REDIRECTS[target]) target = REDIRECTS[target];

  if (target !== uri) return redirect(target, request);

  request.uri = uri + "index.html";
  return request;
}
