import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output static files for GitHub Pages
  output: 'export',
  
  // GitHub Pages uses relative paths
  trailingSlash: true,
  
  // Image optimization config for static export
  images: {
    unoptimized: true,
  },
  
  // Base path for GitHub Pages
  basePath: '',
  
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
