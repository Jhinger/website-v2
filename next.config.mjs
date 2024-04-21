/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  logging: {
    fetches: {
        fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.jhinger.com", // if your website has no www, drop it
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ]
  }
};

export default nextConfig;
