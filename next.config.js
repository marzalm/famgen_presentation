/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/famgen_presentation',
    assetPrefix: '/famgen_presentation',
    trailingSlash: true
  }
  
  module.exports = nextConfig