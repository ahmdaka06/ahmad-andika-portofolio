import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560],
    imageSizes: [256, 384, 512, 640, 750, 828, 1080, 1200, 1440, 1920],
  },
};

export default nextConfig;
