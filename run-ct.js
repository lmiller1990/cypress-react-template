const cypress = require('cypress')

;(async () => {
  const results = await cypress.run({
    browser: 'chrome',
    testingType: 'component'
  })

  console.log(results)
})()
