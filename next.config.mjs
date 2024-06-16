/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, s-maxage=300, stale-while-revalidate=60",
          }
        ],
      }
    ]
  },
  logging: {
    fetches: {
        fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.jhinger.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
    minimumCacheTTL: 3600
  }
};

export default nextConfig;
