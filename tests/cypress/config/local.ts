import { defineConfig } from 'cypress';
import cypressSplit = require('cypress-split');

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "http://localhost:3000",
    video: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      return config;
    },
    env: {
      apiUrl: "https://cidayq1sbj.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
