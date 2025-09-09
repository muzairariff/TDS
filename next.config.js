/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during Vercel builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors during Vercel builds
  },
};

module.exports = nextConfig;
