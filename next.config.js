/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-1.api-sports.io',
        port: '',
        pathname: '/football/**',
      },
      {
        protocol: 'https',
        hostname: 'media-2.api-sports.io',
        port: '',
        pathname: '/football/**',
      },
      {
        protocol: 'https',
        hostname: 'media-3.api-sports.io',
        port: '',
        pathname: '/football/**',
      },
      {
        protocol: 'https',
        hostname: 'media-4.api-sports.io',
        port: '',
        pathname: '/football/**',
      },
      {
        protocol: 'https',
        hostname: 'media-5.api-sports.io',
        port: '',
        pathname: '/football/**',
      }
    ],
  }
}

module.exports = nextConfig
