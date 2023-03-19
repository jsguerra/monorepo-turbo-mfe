const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// This variable can reside in a .env file
const BLOG_URL = "http://localhost:3001/";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["design-system"],
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const nextFederationConfig = {
      name: "frontend",
      remotes: {
        blog: `blog@http://localhost:3001/_next/static/${
          isServer ? "ssr" : "chunks"
        }/remoteEntry.js`,
        docs: `docs@http://localhost:3002/_next/static/${
          isServer ? "ssr" : "chunks"
        }/remoteEntry.js`,
      },
      filename: "static/chunks/remoteEntry.js",
      exposes: {
        "./header": "./components/layout/header/Header.tsx",
      },
    };
    (config.experiments = { layers: true, topLevelAwait: true }),
      config.plugins.push(
        new NextFederationPlugin(nextFederationConfig)
      );
    return config;
  },
};

module.exports = nextConfig;
