export function convertTextToUrlSlug(sentence: string): string {
  return sentence
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/-+/g, "-");
}
