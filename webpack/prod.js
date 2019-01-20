const webpack = require('webpack');
const mergeConfigs = require('./utils/mergeConfigs');
const config = require('./common');

const prodConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        booleans: false,
        unused: false,
      },
    }),
  ],
};

module.exports = mergeConfigs(config, prodConfig);
