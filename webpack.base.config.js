// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const Dotenv = require('dotenv-webpack');

// const config = {
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         exclude: /node_modules/,
//         use: 'babel-loader'
//       },
//       {
//         test: /\.scss$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader
//           },
//           {
//             loader: 'css-loader'
//           },
//           {
//             loader: 'postcss-loader'
//           }
//         ]
//       },
//       { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: 'file-loader' }
//     ]
//   },
//   resolve: {
//     extensions: ['.ts']
//   },
//   plugins: [
//     new Dotenv(),
//     new MiniCssExtractPlugin({
//       filename: './styles.css'
//     })
//   ]
// };

// module.exports = config;
