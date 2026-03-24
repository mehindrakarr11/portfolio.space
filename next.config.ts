import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack root to this app when multiple lockfiles exist on the machine
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
