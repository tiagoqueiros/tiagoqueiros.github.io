/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  trailingSlash: true,
  output: "export",
  // Enable modern optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  // Image optimization
  images: {
    unoptimized: true, // Since we're using export
  },
  // Modern JS features
  experimental: {
    optimizePackageImports: ["react", "react-dom", "animejs", "lodash.random"],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

module.exports = nextConfig;
