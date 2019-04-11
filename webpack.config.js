const path = require('path')
const webpack = require('webpack')

const appDirectory = path.resolve(__dirname)
const modulesDirectory = path.resolve(__dirname, 'node_modules')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(js?|ts)$/,
        include: [
          path.resolve(appDirectory, 'src'),
          path.resolve(modulesDirectory, 'react-navigation-tabs'),
          path.resolve(modulesDirectory, 'react-native-safe-area-view'),
          path.resolve(modulesDirectory, 'react-navigation-drawer'),
          path.resolve(modulesDirectory, 'react-navigation-stack'),
          path.resolve(modulesDirectory, '@react-navigation'),
          path.resolve(modulesDirectory, 'react-native-gesture-handler'),
          path.resolve(modulesDirectory, 'react-native-tab-view'),
          path.resolve(modulesDirectory, 'react-native-screens'),
          // path.resolve(modulesDirectory, 'aaaaa'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['module:metro-react-native-babel-preset'],
          plugins: [
            '@babel/plugin-transform-runtime'
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'react-native-screens$': path.resolve(modulesDirectory, 'react-native-screens/src/screens.d.ts')
    },
    extensions: ['.web.js', '.js', '.json']
  }
}