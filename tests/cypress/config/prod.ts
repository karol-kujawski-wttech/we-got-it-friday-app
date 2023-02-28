import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://d39x7kisu5mvy0.cloudfront.net",
    setupNodeEvents(on, config) {
      config.video = false;
      return config;
    },
    env: {
      apiUrl: "https://0bortdj0g9.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
