import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      config.video = false;
      return config;
    }
  }
});
