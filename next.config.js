/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GREETING: process.env.GREETING,
  }
}

module.exports = nextConfig