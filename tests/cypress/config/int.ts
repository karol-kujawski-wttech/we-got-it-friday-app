import { defineConfig } from 'cypress';
import cypressSplit = require('cypress-split');

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://d1695jp1dqp7q6.cloudfront.net",
    video: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      return config;
    },
    env: {
      apiUrl: "https://qg1euumfl1.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
