/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  output: 'export',
};

export default nextConfig;
