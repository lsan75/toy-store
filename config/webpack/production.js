var plugins = require('./plugins')

module.exports = () => {
  return {
    plugins: [
      plugins.uglifyJs
    ]
  }
}