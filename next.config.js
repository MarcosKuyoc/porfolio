/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: ['img.shields.io', 'marcoskuyoc.com'],
  }
}

module.exports = nextConfig
