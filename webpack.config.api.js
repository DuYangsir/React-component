const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const pkg = require(path.join(process.cwd(), 'package.json'))

const config = {
  entry: {
    [`${pkg.name}.min`]: './index.js'
  },
  output: {
    library: pkg.name,
    libraryTarget: 'umd'
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
}

module.exports = config
