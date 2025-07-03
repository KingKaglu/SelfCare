import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle: () => {
        const from = resolve(__dirname, 'dist/index.html');
        const to = resolve(__dirname, 'dist/404.html');
        fs.copyFileSync(from, to);
        console.log('📄 404.html copied from index.html');
      }
    }
  ],
  base: '/SelfCare/',
});
