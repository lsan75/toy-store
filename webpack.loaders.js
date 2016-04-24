var helpers = require('./helpers')

module.exports = [
  {
    test: /\.css$/,
    loader: 'style!css'
  },
  {
    test: /\.less$/,
    loader: 'style!css!less'
  },
  {
    test: /\.ts$/,
    loader: 'awesome-typescript-loader',
    exclude: [/\.(spec|e2e)\.ts$/]
  },
  {
    test: /\.(woff|woff2|ttf|eot|svg|gif|jpg|jpeg|png|ico)(\?]?.*)?$/,
    loader: 'file-loader?name=res/[name].[ext]?[hash]'
  },
  {
    test: /\.html$/,
    loader: 'raw-loader',
    exclude: [helpers.root('www/index.html')]
  }
]
