const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jzs32t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
