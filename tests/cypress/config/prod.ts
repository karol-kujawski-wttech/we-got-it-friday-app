import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://d3hp4tguev37fw.cloudfront.net",
    video: false,
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      apiUrl: "https://xbuc2y35e1.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
