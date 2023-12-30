import { defineConfig } from "cypress";
import { cookieKey } from './src/lib/black-friday'

export default defineConfig({
  component: {
    devServer: {
      framework: 'svelte',
      bundler: 'vite'
    }
  },
  e2e: {
    env: {
      cookieKey
    },
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
    },
  },
});
