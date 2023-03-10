import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      config.video = false;
      return config;
    },
    env: {
      "apiUrl": "https://ry0wsrn99d.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
