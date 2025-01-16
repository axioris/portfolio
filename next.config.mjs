/** @type {import('next').NextConfig} */
const isProd = true;

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  output: 'export',
};

export default nextConfig;
