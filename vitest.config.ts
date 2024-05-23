import { defineConfig } from "vitest/config";
import path from 'path';

export default defineConfig({
  test: {
    environment: "jsdom"
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'utils': path.resolve(__dirname, './src/utils'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'store': path.resolve(__dirname, './src/store'),
    },
  },
});