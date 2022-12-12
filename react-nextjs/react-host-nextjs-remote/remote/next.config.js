const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './nextjs-remote-component': './components/nextjs-remote-component.js',
          './nextjs-remote-page': './pages/index.js',
        },
        shared: {
          react: {
            requiredVersion: false,
            singleton: true,
          },
        },
        extraOptions: {
          skipSharingNextInternals: true,
        },
      }),
    );
    return config;
  },
  // your original next.config.js export
  reactStrictMode: true,
};
