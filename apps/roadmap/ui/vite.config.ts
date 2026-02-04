import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'roadmap_ui',
      filename: 'remoteEntry.js',
      exposes: {
        './RoadmapApp': './src/App',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
