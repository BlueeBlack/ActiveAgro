import type { NextConfig } from "next";

// Sanity Studio is hosted by Sanity (deployed with `npm run studio:deploy`)
// instead of being embedded in this site — embedding it added ~1.9 MB
// (gzipped) to the Cloudflare Worker and pushed it past the 3 MB limit.
// If you pick a different hostname during `sanity deploy`, update it here.
const SANITY_STUDIO_URL = "https://activeagro.sanity.studio";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/studio/:path*",
        destination: `${SANITY_STUDIO_URL}/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
