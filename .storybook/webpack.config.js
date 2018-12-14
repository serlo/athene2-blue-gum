module.exports = (_baseConfig, _env, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
      test: /\.tsx?$/,
      loader: require.resolve('babel-loader')
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  )

  defaultConfig.resolve.extensions.unshift('.ts', '.tsx')

  return defaultConfig
}
