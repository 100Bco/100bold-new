/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  eslint: {
    // motion from framer-motion triggers false positive no-unused-vars
    // (used as <motion.div> in JSX member expressions)
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
