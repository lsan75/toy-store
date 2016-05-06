var path = require('path')
var loaders = require('./webpack.loaders')
var plugins = require('./webpack.plugins')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
)
plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    mangle: false,
    minimize: true,
    compress: {
      warnings: false
    }
  })
)
plugins.push(
  new CopyWebpackPlugin([
    { from: './www/mocks', to: 'mocks' }
  ])
)
module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
}
