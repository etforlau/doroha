/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../../node_modules/.vite/apps/roadmap/roadmap-ui',
  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4201,
    host: 'localhost',
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'roadmap_ui',
      filename: 'remoteEntry.js',
      exposes: {
        './RoadmapApp': './src/app/App',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
