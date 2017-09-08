const path = require('path');
const webpack = require('webpack');

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/view.jsx',
  target: "node",
  // ファイルの出力設定
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // babel でも可能
      query: {
        presets: ['es2015', 'react'],
      },
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
