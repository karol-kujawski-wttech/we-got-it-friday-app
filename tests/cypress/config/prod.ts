import { defineConfig } from 'cypress';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    screenshotsFolder: "build/cypress/screenshots",
    baseUrl: "https://d3e0xbhaeocbyv.cloudfront.net",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      config.video = false;
      return config;
    },
    env: {
      allure: true,
      allureResultsPath: "build/allure-results",
      "apiUrl": "https://s9bx66v5li.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
