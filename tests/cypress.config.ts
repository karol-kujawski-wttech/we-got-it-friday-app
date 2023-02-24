const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1200,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
