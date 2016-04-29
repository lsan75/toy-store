var loaders = require('./webpack.loaders')
var path = require('path')
module.exports = {
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'inline-source-map',
  entry: {},
  module: {
    loaders: loaders,
    postLoaders: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules)/,
        include: path.resolve('www'),
        loader: 'istanbul-instrumenter'
      }
    ]
  },
  node: {
    global: 'window',
    crypto: 'empty',
    fs: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
