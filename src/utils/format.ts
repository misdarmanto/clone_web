export function formatTextToUrlPath(path: string): string {
  let cleanedPath = path.replace("handler/http/", "");
  cleanedPath = cleanedPath.replace(/\\/g, "/");
  cleanedPath = cleanedPath.replace(/\/\/+/g, "/");

  const encodedPath = cleanedPath
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  return encodedPath;
}
