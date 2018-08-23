const autoprefixer = require('autoprefixer')

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.(css|less)$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: require.resolve('less-loader')
          }
        ]
      }
    ]
  }
}

module.exports = config
