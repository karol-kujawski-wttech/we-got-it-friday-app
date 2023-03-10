import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://d3e0xbhaeocbyv.cloudfront.net",
    setupNodeEvents(on, config) {
      config.video = false;
      return config;
    },
    env: {
      "apiUrl": "https://s9bx66v5li.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
