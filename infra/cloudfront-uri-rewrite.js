/**
 * CloudFront Function (viewer request).
 *
 * Maps clean URLs to Next.js static export files (trailingSlash: true):
 *   /blogs/my-post/  → /blogs/my-post/index.html
 *   /blogs/my-post   → /blogs/my-post/index.html
 *
 * Leaves assets and Next.js data files unchanged:
 *   /_next/static/...  /blogs/my-post/index.txt  etc.
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.startsWith("/_next/")) {
    return request;
  }

  var lastSlash = uri.lastIndexOf("/");
  var lastDot = uri.lastIndexOf(".");
  var hasFileExtension = lastDot > lastSlash;

  if (hasFileExtension) {
    return request;
  }

  if (uri.endsWith("/")) {
    request.uri += "index.html";
  } else {
    request.uri += "/index.html";
  }

  return request;
}
