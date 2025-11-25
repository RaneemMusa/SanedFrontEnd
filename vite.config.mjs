import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for Saned client (React)
export default defineConfig({
  plugins: [react()],
  root: '.',          // project root is this folder
  publicDir: 'public',
  server: {
    port: 5173,
  },
});
