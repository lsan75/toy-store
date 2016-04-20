var path = require('path')
var node_modules_dir = path.resolve(__dirname, 'node_modules')

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
  }
]
