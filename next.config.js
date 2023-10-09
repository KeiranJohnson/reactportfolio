/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",
  basePath: "/reactportfolio",
  images: {
    unoptimized: true,
  },
  
}

module.exports = nextConfig;
