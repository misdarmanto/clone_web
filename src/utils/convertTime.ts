export function convertTime(time: number) {
  const result = new Date(time);
  return result.toLocaleDateString();
}
