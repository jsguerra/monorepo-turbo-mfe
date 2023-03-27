const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: 'https://monorepo-blog.netlify.app/blog/',
      },
      {
        source: '/blog/:path*',
        destination: 'https://monorepo-blog.netlify.app/blog/:path*',
      },
    ]
  },
  transpilePackages: ["design-system"],
  webpack: (config, options) => {
    const { isServer } = options;
    const nextFederationConfig = {
      name: "frontend",
      remotes: {
        blog: `blog@https://monorepo-blog.netlify.app/_next/static/${
          isServer ? "ssr" : "chunks"
        }/remoteEntry.js`,
        docs: `docs@https://monorepo-docs.netlify.app/_next/static/${
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
