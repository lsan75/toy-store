var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var jsonImporter = require('node-sass-json-importer')
var SplitByPathPlugin = require('webpack-split-by-path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

exports.constants = envConfig => new webpack.DefinePlugin({
  '__ENV__': envConfig.ENV,
  '__ISDEV__': JSON.stringify(envConfig.env.isDev),
  '__ISPRD__': JSON.stringify(envConfig.env.isPrd),
  '__DEBUG_MODE__': JSON.stringify(envConfig.debug)
})

exports.htmlWebpack = envConfig => new HtmlWebpackPlugin({
  title: 'Toy Store',
  template: envConfig.FILES.htmlIndexTemplate,
  favicon: envConfig.FILES.favicon,
  inject: 'body'
})

exports.loaderOptions = envConfig => new webpack.LoaderOptionsPlugin({
  options: {

  }
})

exports.copyWebpack = new CopyWebpackPlugin([
  { from: 'www/img' },
  { from: 'www/mocks' }
])

exports.splitByPath = envConfig => new SplitByPathPlugin([
  {name: 'vendor', path: [envConfig.PATHS.vendorDir]}
])

exports.uglifyJs = new webpack.optimize.UglifyJsPlugin({
  beautify: false, //prod
  output: {
    comments: false
  }, //prod
  mangle: {
    screw_ie8: true
  }, //prod
  compress: {
    screw_ie8: true,
    warnings: false,
    conditionals: true,
    unused: true,
    comparisons: true,
    sequences: true,
    dead_code: true,
    evaluate: true,
    if_return: true,
    join_vars: true,
    negate_iife: false // we need this for lazy v8
  }
})

exports.contextReplacement = new webpack.ContextReplacementPlugin(
  /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
  __dirname
)
