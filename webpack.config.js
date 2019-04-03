const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['module:metro-react-native-babel-preset'],
        }
      }
    ]
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    }
  }
}