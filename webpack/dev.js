const { join } = require('path');
const mergeConfigs = require('./utils/mergeConfigs');
const config = require('./common');

const rootDir = join(__dirname, '../');

const devConfig = {
  devtool: 'eval',
  devServer: {
    contentBase: join(rootDir, 'static'),
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
  },
};

module.exports = mergeConfigs(config, devConfig);
