var wkcMerge = require('webpack-merge')
var wkcValidator = require('webpack2-validator')
var config = require('./config')

var baseConfig = require('./webpack/base')(config)
var envConfig = require('./webpack/' + config.ENV)(config)

var mergedConfig = wkcMerge(baseConfig, envConfig)
module.exports = wkcValidator(mergedConfig)
