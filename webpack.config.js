const path = require('path')
const webpack = require('webpack')

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
}