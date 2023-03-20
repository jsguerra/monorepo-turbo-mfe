const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["design-system"],
  basePath: "/blog",
  webpack: (config, options) => {
    const { isServer } = options;
    (config.experiments = { layers: true, topLevelAwait: true }),
      config.plugins.push(
        new NextFederationPlugin({
          name: "blog",
          remotes: {
            frontend: `frontend@https://monorepo-frontend.netlify.app/_next/static/${
              isServer ? "ssr" : "chunks"
            }/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
        })
      );
    return config;
  },
};

module.exports = nextConfig;
