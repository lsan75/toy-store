var loaders = require('./loaders')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    exprContextCritical: false,
    loaders: [
      loaders.scripts,
      loaders.html,
      loaders.assets,
      loaders.json,
      loaders.scriptsTestReport
    ]
  },
  stats: { colors: true, reasons: true }
}
