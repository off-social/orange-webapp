// CloudFront Function: rewrite directory URLs to index.html (Next.js static export on S3)
//
// Runtime cloudfront-js-1.0 → use this file (ES5 only)
// Runtime cloudfront-js-2.0 → see cloudfront-uri-rewrite.modern.js

function handler(event) {
  var request = event.request;
  var uri = request.uri;

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
