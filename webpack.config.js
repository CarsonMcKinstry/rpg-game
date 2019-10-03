const Dotenv = require('dotenv-webpack');
const path = require('path');
const merge = require('webpack-merge');

const buildPath = path.join(__dirname, 'build');

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: require.resolve('babel-loader')
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [new Dotenv()]
};

const appConfig = merge(baseConfig, {});

const mainConfig = merge(baseConfig, {
  entry: path.join(__dirname, './main.ts'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: 'electron-main'
});

module.exports = [mainConfig];
