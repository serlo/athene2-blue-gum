const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
//

module.exports = withCSS(
  withImages(
    withBundleAnalyzer({
      webpack: config => {
        return config
      }
    })
  )
)
