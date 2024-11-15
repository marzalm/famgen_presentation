/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/famgen_presentation',
    assetPrefix: '/famgen_presentation',
    webpack: (config) => {
      config.resolve.fallback = { fs: false, path: false };
      return config;
    }
  }
  
  module.exports = nextConfig