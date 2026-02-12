/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.jewelkhata.app',
          },
        ],
        destination: 'https://jewelkhata.app/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
