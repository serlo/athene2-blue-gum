module.exports = (_baseConfig, _env, defaultConfig) => {
  defaultConfig.module.rules = [
    {
      test: /\.(tsx?|js)$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader')
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader' // compiles Sass to CSS, using Node Sass by default
      ]
    },
    ...defaultConfig.module.rules.slice(1)
  ]
  defaultConfig.resolve.extensions.unshift('.ts', '.tsx')

  return defaultConfig
}
