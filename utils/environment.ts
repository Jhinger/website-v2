export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function isDevelopment() {
  return process.env.NODE_ENV === "development";
}

export default function environment() {
  return process.env.NODE_ENV;
}