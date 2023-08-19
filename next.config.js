/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  // Other configuration options
  out: 'build', // Make sure this is correctly configured
};

module.exports = nextConfig;
