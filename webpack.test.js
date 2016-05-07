var loaders = require('./webpack.loaders')
var webpack = require('webpack')

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
        loader: 'istanbul-instrumenter'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"test"'
    })
  ],
  node: {
    global: 'window',
    crypto: 'empty',
    fs: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
