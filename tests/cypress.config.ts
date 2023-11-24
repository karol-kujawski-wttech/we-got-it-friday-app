import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      apiUrl: "https://cidayq1sbj.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
