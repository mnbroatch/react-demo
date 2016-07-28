const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('here')
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

module.exports = {
  entry: {
    src: PATHS.src,
  },
  output: {
    path: PATHS.dist,
    filename: '[name]'.js,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Property Manager',
    }),
  ],
};

// // import webpack from 'webpack'
// // import { join } from 'path'
//
//
//
// export default {
//   debug: true,
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client?reload=true',
//     'bootstrap-loader',
//     './src/index',
//   ],
//   target: 'web',
//   output: {
//     path: join(__dirname, 'dist'),
//     publicPath: '/',
//     filename: 'bundle.js',
//   },
//   devServer: {
//     contentBase: './src',
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         include: join(__dirname, 'src'),
//         loader: 'babel',
//       },
//       { test: /(\.css)$/, loaders: ['style', 'css'] },
//       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
//       { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
//       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url?limit=10000&mimetype=application/octet-stream' },
//       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
//       // Bootstrap 3 jquery requirement
//       { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
//         loader: 'imports?jQuery=jquery' },
//     ],
//   },
// }
