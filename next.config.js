const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  onDemandEntries: {
    maxInactiveAge: 10 * 1000,
    pagesBufferLength: 1,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap"],
  },
  serverExternalPackages: ["mongoose", "nodemailer"],
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
    ],
  },
};

module.exports = nextConfig;
