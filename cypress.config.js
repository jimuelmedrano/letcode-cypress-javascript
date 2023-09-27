const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://letcode.in',
  },
  env: {
    test_endpoint: '/test',
    random_user_api: 'https://random-data-api.com/api/v2/users',
  },
});
