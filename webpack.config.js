/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MinifyPlugin = require('babel-minify-webpack-plugin');
// const { enabledModules } = require('./config');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devtool: '#source-map',
  externals: [nodeExternals()],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, './src')
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, './')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.API_ENV': `"${process.env.API_ENV || 'development'}"`
    }),
    // new webpack.ContextReplacementPlugin(/src/, new RegExp(`^./(lib|hook|${enabledModules.join('|')})/.*$`)),
    new MinifyPlugin()
  ]
};
