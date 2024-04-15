export default function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n).trim() + "..." : str;
}