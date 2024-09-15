/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import  tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths()
  ],
  server: {
    host: '0.0.0.0'
  },
  base: '/OdinProjectWork',
  test: {
    includeSource: ['src/**/*.{ts,tsx}'],
    globals: true,
    environment: "jsdom",
    /* coverage: {
      enabled: true,
      provider: "v8",
      cleanOnRerun: true,
      reporter: ["text", "json", "html"]
    } */
  }
})
