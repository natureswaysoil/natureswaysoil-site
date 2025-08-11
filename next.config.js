/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // replace with your actual image domains
  },
  experimental: {
    modern: true,
  },
}

module.exports = nextConfig;