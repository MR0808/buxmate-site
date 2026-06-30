import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Avoid Turbopack .next cache lock errors on Windows (especially with Dropbox).
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
