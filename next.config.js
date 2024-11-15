/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/family-survey-presentation',
    assetPrefix: '/family-survey-presentation'
  }
  
  module.exports = nextConfig