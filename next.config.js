/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'itradebtc.github.io',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };