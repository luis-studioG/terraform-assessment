/// <reference types="vitest" />
import reactRefresh from '@vitejs/plugin-react';
import dns from 'dns';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  test: {
    css: false,
    include: ['src/**/*.spec.{ts,tsx}'],
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'src/app/utils/setupTests.ts',
    clearMocks: true,
    reporters: 'verbose',
    coverage: {
      provider: 'istanbul',
      enabled: true,
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
    },
  },
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    checker({
      typescript: true,
      enableBuild: true,
    }),
  ],
  server: {
    // open: '/',
    port: 8000,
  },
  build: {
    sourcemap: false,
  },
});
