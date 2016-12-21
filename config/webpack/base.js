var loaders = require('./loaders')
var plugins = require('./plugins')

module.exports = (envConfig) => {
  return {
    entry: {
      app: envConfig.FILES.appEntry
    },
    output: {
      path: envConfig.PATHS.distDir,
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.ts', '.css', '.html', '.json'],
      modules: [ envConfig.PATHS.vendorDir ]
    },
    module: {
      loaders: [
        loaders.scripts,
        loaders.html,
        loaders.styles,
        loaders.json,
        loaders.assets
      ]
    },
    plugins: [
      plugins.constants(envConfig),
      plugins.htmlWebpack(envConfig),
      plugins.loaderOptions(envConfig),
      plugins.contextReplacement
    ]
  }
}
