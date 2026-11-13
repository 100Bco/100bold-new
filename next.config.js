/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  eslint: {
    // motion from framer-motion triggers false positive no-unused-vars
    // (used as <motion.div> in JSX member expressions)
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: '/industries/law-firms', destination: '/industries/personal-injury-law-firms', permanent: true },
      { source: '/industries/rehab-chiro', destination: '/industries/pi-medical-providers', permanent: true },
      { source: '/industries/construction', destination: '/industries/construction-trades', permanent: true },
      { source: '/industries/plumbing-roofing', destination: '/industries/construction-trades', permanent: true },
      { source: '/minai', destination: '/services', permanent: true },
    ]
  },
}

export default nextConfig
