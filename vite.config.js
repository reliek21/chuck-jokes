import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  // mode: 'development',
  server: {
    port: 8080,
    strictPort: true,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  // base: 'https://clockpi.github.io/clockpi-todo/'
});