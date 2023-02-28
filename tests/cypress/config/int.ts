import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://dwwsfgcsv3q4k.cloudfront.net",
    setupNodeEvents(on, config) {
      config.video = false;
      return config;
    },
    env: {
      apiUrl: "https://zcg6pnou4b.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
