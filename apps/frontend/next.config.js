const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["design-system"],
  webpack: (config, options) => {
    const { isServer } = options;
    (config.experiments = { layers: true, topLevelAwait: true }),
      config.plugins.push(
        new NextFederationPlugin({
          name: "frontend",
          remotes: {
            docs: `blog@http://localhost:3002/_next/static/${
              isServer ? "ssr" : "chunks"
            }/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
        })
      );
    return config;
  },
};
