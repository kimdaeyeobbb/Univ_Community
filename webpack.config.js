// const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    login: './src/js/login.js',
  },

  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      title: 'Index Title',
      hash: true,
      filename: 'index.html',
      excludeChunks: ['login'],
      template: './index.html',
    }),

    new HtmlPlugin({
      title: 'Login Title',
      hash: true,
      filename: 'login.html',
      chunks: ['login'],
      template: './login.html',
    }),

    new CopyPlugin({
      patterns: [{ from: './src/static' }],
    }),
  ],

  devServer: {
    host: 'localhost',
  },
};
