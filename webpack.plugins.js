var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  new HtmlWebpackPlugin({
    template: './www/index-base.html',
    inject: 'body',
    favicon: './www/img/favicon.ico'
  })
]
