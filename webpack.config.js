// const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    login: './src/js/login.js',
    askCreateRoom: './src/js/askCreateRoom.js',
    writeRoomInfo: './src/js/writeRoomInfo.js',
    member: './src/js/member.js',
    mission: './src/js/mission.js',
    roomCode: './src/js/roomCode.js',
    roomList: './src/js/roomList.js',
    editProfile: './src/js/editProfile.js',
    myPage: './src/js/myPage.js',
    homeHost: './src/js/homeHost.js',
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
      template: './index.html',
    }),

    new HtmlPlugin({
      title: 'Login Title',
      hash: true,
      filename: 'login.html',
      template: './login.html',
    }),

    new HtmlPlugin({
      title: 'askCreateRoom Title',
      hash: true,
      filename: 'askCreateRoom.html',
      template: './askCreateRoom.html',
    }),

    new HtmlPlugin({
      title: 'writeRoomInfo Title',
      hash: true,
      filename: 'writeRoomInfo.html',
      template: './writeRoomInfo.html',
    }),

    new HtmlPlugin({
      title: 'homeHost Title',
      hash: true,
      filename: 'homeHost.html',
      template: './homeHost.html',
    }),

    new HtmlPlugin({
      title: 'myPage Title',
      hash: true,
      filename: 'myPage.html',
      template: './myPage.html',
    }),

    new CopyPlugin({
      patterns: [{ from: './src/static' }],
    }),
  ],

  devServer: {
    host: 'localhost',
  },
};
