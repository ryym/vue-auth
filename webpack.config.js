// webpack.config.js

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loaders: [
          'babel',
          'eslint'
        ],
        exclude: /node_modules/
      }
    ]
  },

  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  devServer: {
    contentBase: __dirname + '/build/'
  },

  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('http://localhost:3001')
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      inject: 'body'
    })
  ]
};
