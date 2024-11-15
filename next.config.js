/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/famgen',
    assetPrefix: '/famgen',
    // This is important for GitHub Pages
    trailingSlash: true
  }
  
  module.exports = nextConfig