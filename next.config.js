/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Compress responses
  compress: true,
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  // Optimize for production builds
  swcMinify: true,
}

module.exports = nextConfig