import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "http://localhost:3000",
    video: false,
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
