// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// const {
//   CleanWebpackPlugin
// } = require('clean-webpack-plugin');

// module.exports = {
//   entry: {
//     app: path.resolve(__dirname, 'src/scripts/index.js')
//     // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   module: {
//     rules: [{
//         test: /\.css$/,
//         use: [{
//             loader: 'style-loader',
//           },
//           {
//             loader: 'css-loader',
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         dependency: {
//           not: ['url']
//         }, // tambah ini: cegah asset yang pake new url() ikut ke kompile sama asset module webpack
//         use: [{
//           loader: 'file-loader',
//         }, ],
//         type: 'javascript/auto', // tambah ini: cegah loader asset module webpack jalan dan pake loader sendiri
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.resolve(__dirname, 'src/templates/index.html'),
//     }),
//     new CopyWebpackPlugin({
//       patterns: [{
//         from: path.resolve(__dirname, 'src/public/'),
//         to: path.resolve(__dirname, 'dist/'),
//       }, ],
//     }),
//   ],
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js')
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        dependency: {
          not: ['url']
        }, // tambah ini: cegah asset yang pake new url() ikut ke kompile sama asset module webpack
        use: [{
          loader: 'file-loader',
        }, ],
        type: 'javascript/auto', // tambah ini: cegah loader asset module webpack jalan dan pake loader sendiri
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/images'),
        to: path.resolve(__dirname, 'dist/images'),
      }, ],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/images/logo.png'),
    }),
    new CleanWebpackPlugin(),
  ],
};