var path = require('path')
var loaders = require('./webpack.loaders')
var plugins = require('./webpack.plugins')
const helpers = require('./helpers')

var webpack = require('webpack')
plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"dev"'
  })
)
module.exports = {
  entry: {
    app: './index'
  },
  output: {
    path: path.resolve(__dirname, './www'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    root: helpers.root('www')
  },
  devtool: 'source-map',
  module: {
    loaders: loaders
  },
  plugins: plugins,
  node: {
    global: 'window',
    crypto: 'empty',
    fs: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
