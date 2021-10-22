const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        net: 'empty',
      };
    }
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    });

    return config;
  },
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        output: { path: path.resolve(__dirname, 'static') },
      },
    ],
  },
};
