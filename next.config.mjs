/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  logging: {
    fetches: {
        fullUrl: true
    }
  },
  images: {
    domains: [
      "i.scdn.co",
      "localhost"
    ]
  }
};

export default nextConfig;
