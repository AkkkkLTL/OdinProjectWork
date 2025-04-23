/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path, { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const getEnterPages = () => {
  
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OdinProjectWork/',
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    tailwindcss(),
    vanillaExtractPlugin({
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, "./"),
      '@': path.join(__dirname, "./src"),
      '#': path.join(__dirname, "./src/types"),
      '@project': path.join(__dirname, "./src/projects")
    }
  },
  build: {
    rollupOptions: {
      input: {
        project_library: resolve(__dirname, "src/projects/library/index.html"),
      }
    }
  },
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
