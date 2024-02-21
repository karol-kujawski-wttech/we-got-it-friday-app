import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "5b2u4f",
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://d1695jp1dqp7q6.cloudfront.net",
    video: false,
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      apiUrl: "https://qg1euumfl1.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
