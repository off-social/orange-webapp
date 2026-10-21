// CloudFront Function: rewrite directory URLs to index.html (Next.js static export on S3)
//
// Runtime cloudfront-js-1.0 → use this file (ES5 only)
// Runtime cloudfront-js-2.0 → see cloudfront-uri-rewrite.modern.js

// Renamed pages: 301 the old URL to the new one so indexed and inbound links
// keep working. Keys and values are directory paths with a trailing slash.
var REDIRECTS = {
  "/product-details/jetrix-e-hybrid-digital-label-printer/":
    "/product-details/jetixlab-hybrid-digital-label-printer/"
};

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  var path = uri.replace(/index\.html$/, "");
  if (path.charAt(path.length - 1) !== "/") path += "/";
  if (REDIRECTS[path]) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: { location: { value: REDIRECTS[path] } }
    };
  }

  if (uri.indexOf("/_next/") === 0) {
    return request;
  }

  var lastSlash = uri.lastIndexOf("/");
  var lastDot = uri.lastIndexOf(".");
  var hasFileExtension = lastDot > lastSlash;

  if (hasFileExtension) {
    return request;
  }

  if (uri.charAt(uri.length - 1) === "/") {
    request.uri += "index.html";
  } else {
    request.uri += "/index.html";
  }

  return request;
}
