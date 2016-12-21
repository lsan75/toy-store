var path = require('path')
var process = require('process')

var defaultEnv = 'production'
var ENV = process.env.NODE_ENV || defaultEnv

var USE_AOT = process.env.USE_AOT

exports.ENV = ENV
exports.env = {
  isDev: ENV === 'development',
  isPrd: ENV === 'production'
}

var rootDir = path.join(__dirname, '..')
var srcDir = path.join(rootDir, 'www')
var vendorDir = path.join(rootDir, 'node_modules')
var distDir = path.join(rootDir, 'dist')
var imagesDir = path.join(srcDir, 'img')
var reportsDir = path.join(rootDir, 'reports')
var coverageDir = path.join(reportsDir, 'coverage')

var paths = {
  rootDir: rootDir,
  distDir: distDir,
  srcDir: srcDir,
  vendorDir: vendorDir,
  imagesDir: imagesDir,
  reportsDir: reportsDir,
  coverageDir: coverageDir
}
Object.freeze(paths)
exports.PATHS = paths

var appEntry = USE_AOT === 'true' ? 'index.aot' : 'index'

var files = {
  appEntry: path.join(paths.srcDir, appEntry),
  favicon: path.join(paths.imagesDir, 'favicon.ico'),
  htmlIndexTemplate: path.join(paths.srcDir, 'index.ejs')
}
Object.freeze(files)
exports.FILES = files
