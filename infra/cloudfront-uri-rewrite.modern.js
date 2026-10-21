// Renamed pages: 301 the old URL to the new one so indexed and inbound links
// keep working. Keys and values are directory paths with a trailing slash.
const REDIRECTS = {
  "/product-details/jetrix-e-hybrid-digital-label-printer/":
    "/product-details/jetixlab-e-hybrid-digital-label-printer/",
};

function handler(event) {
  const request = event.request;
  const uri = request.uri;

  let path = uri.replace(/index\.html$/, "");
  if (!path.endsWith("/")) path += "/";
  if (REDIRECTS[path]) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: { location: { value: REDIRECTS[path] } },
    };
  }

  if (uri.startsWith("/_next/")) {
    return request;
  }

  const lastSlash = uri.lastIndexOf("/");
  const lastDot = uri.lastIndexOf(".");
  const hasFileExtension = lastDot > lastSlash;

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
