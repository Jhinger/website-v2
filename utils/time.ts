export function hoursAgo(time: string) {
  const date = new Date(time);
  return Math.floor((Date.now() - date.getTime()) / 1000 / 60 / 60);
}

export function minutesAgo(time: string) {
  const date = new Date(time);
  return Math.floor((Date.now() - date.getTime()) / 1000 / 60);
}