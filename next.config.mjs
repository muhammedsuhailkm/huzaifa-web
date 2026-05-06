/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images as WebP (smaller than JPEG/PNG, widely supported)
    formats: ["image/webp"],
    // Quality whitelist — 75 is the sweet spot for clarity vs. file size
    qualities: [75],
    // Responsive breakpoints for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 30 days
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
