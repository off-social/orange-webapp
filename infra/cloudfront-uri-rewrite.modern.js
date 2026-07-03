function handler(event) {
  const request = event.request;
  const uri = request.uri;

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
