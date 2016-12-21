var loaders = require('./loaders')

module.exports = () => {
  var config = {
    devtool: 'source-map',
    output: {
      sourceMapFilename: '[name].js.map'
    }
  }
  return config
}
