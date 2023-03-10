import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://d3fqu26uykinfi.cloudfront.net",
    setupNodeEvents(on, config) {
      config.video = false;
      return config;
    },
    env: {
      "apiUrl": "https://msc3cjto3a.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
