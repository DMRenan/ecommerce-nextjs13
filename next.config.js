/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Matches all paths under res.cloudinary.com
        search: '',
      },
    ],
  },
};

module.exports = nextConfig
