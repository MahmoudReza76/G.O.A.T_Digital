/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: ["react-redux"],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    externalDir: true,
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
