var path = require('path')
var loaders = require('./webpack.loaders')
var plugins = require('./webpack.plugins')

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
    extensions: ['', '.js', '.ts', '.tsx']
  },
  devtool: 'source-map',
  module: {
    loaders: loaders
  },
  plugins: plugins,
  node: {
    fs: 'empty'
  }
}
