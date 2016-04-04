var loaders = require('./webpack.loaders')

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
  }
}
