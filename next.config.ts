import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only build the app directory, ignore backend
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Exclude backend from transpilation
  transpilePackages: [],
};

export default nextConfig;