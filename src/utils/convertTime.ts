export function convertTime(time: number | string) {
  const result = new Date(time);
  return result.toLocaleDateString();
}
