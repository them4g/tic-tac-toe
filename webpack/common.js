const { join } = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const Dotenv = require('dotenv-webpack');

const rootDir = join(__dirname, '../');

module.exports = {
  entry: {
    index: ['@babel/polyfill/noConflict', join(rootDir, './src/index.js')],
  },
  output: {
    path: join(rootDir, './build'),
    publicPath: '/',
    filename: './[name].js',
    sourceMapFilename: '[file].map?[hash]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV_ENV: process.env.NODE_ENV === 'development',
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new SvgStore.Options({
      svgoOptions: {
        plugins: [{ removeTitle: true }],
      },
      prefix: 'icon-',
    }),
    new HtmlWebPackPlugin({
      inject: true,
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': join(rootDir, './src'),
      '@features': join(rootDir, './src/features'),
      '@common': join(rootDir, './src/common'),
      '@pages': join(rootDir, './src/pages'),
    },
  },
};
