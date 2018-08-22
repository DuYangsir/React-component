const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const developConfig = require('./webpack.config.development.js')
const productionConfig = require('./webpack.config.production.js')

let config = {}
const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'start') {
  config = merge(common, developConfig)
}

if (TARGET === 'build') {
  config = merge(common, productionConfig)
}

module.exports = config
