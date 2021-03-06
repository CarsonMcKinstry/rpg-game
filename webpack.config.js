const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    extensions: ['.ts', '.js']
  },
  plugins: [new Dotenv()]
};

const appConfig = merge(baseConfig, {
  entry: path.join(__dirname, 'app/index.ts'),
  output: {
    filename: 'app.js',
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/views/index.ejs'),
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      }
    }),
    new CopyPlugin([
      {
        from: path.join(__dirname, 'app/assets'),
        to: path.resolve(__dirname, 'build/assets')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: './styles.css'
    })
  ],
  target: 'electron-renderer'
});

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

module.exports = [mainConfig, appConfig];
