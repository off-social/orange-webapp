/**
 * CloudFront Function: attach to the default cache behavior (viewer request).
 *
 * Next.js static export with trailingSlash writes pages as /path/index.html.
 * S3 REST origins do not resolve directory indexes automatically, so map:
 *   /blogs/my-post/  → /blogs/my-post/index.html
 *   /blogs/my-post   → /blogs/my-post/index.html
 *
 * AWS Console: CloudFront → your distribution → Behaviors → Edit →
 * Function associations → Viewer request → Create associated CloudFront function
 * (paste this file's handler body).
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri += "index.html";
  } else if (!uri.includes(".")) {
    request.uri += "/index.html";
  }

  return request;
}
