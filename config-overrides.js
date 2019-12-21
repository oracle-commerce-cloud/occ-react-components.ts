const { useBabelRc } = require('customize-cra')
const utils = require('./webpack/utils')
const override = require('./webpack/webpack.config')


const applyConfig = (...plugins) => {
  let result = {}
  plugins.forEach((deco) => result = deco(result))
  return result
}


module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: (config, env) => {

    const init = () => config

    return applyConfig(
      init,
      override,
      useBabelRc(),
      utils.addLessLoader({
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:10]',
      })
    );
  }
}
