const findReactScriptsWebpackConfig = require("@cypress/react/plugins/react-scripts/findReactScriptsWebpackConfig")
const { startDevServer } = require('@cypress/webpack-dev-server')

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  const webpackConfig = findReactScriptsWebpackConfig(config)

   const rules = webpackConfig.module.rules.find(rule => !!rule.oneOf).oneOf;
  const babelRule = rules.find(rule => /babel-loader/.test(rule.loader))
  babelRule.options.plugins.push(require.resolve('babel-plugin-istanbul'))

  on('dev-server:start', (options) => {
    return startDevServer({ options, webpackConfig })
  })

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}

