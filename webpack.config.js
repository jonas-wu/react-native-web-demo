const path = require('path')
const webpack = require('webpack')

const appDirectory = path.resolve(__dirname)
const modulesDirectory = path.resolve(__dirname, 'node_modules')

module.exports = {
    entry: {
        main: './index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
           {
               test: /\.(js?|ts)$/,
               include: [path.resolve(__dirname, 'src')],
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
        },
        extensions: ['.web.js', '.js', '.json'],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: false,
      port: 8080,
    }
}