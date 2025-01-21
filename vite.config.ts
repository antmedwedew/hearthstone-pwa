import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

const mainBg: string = '#64EBED';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'Hearthstone-pwa',
        short_name: 'Hearthstone-pwa',
        description: 'Hearthstone the best game',
        theme_color: mainBg,
        background_color: mainBg,
        display: 'standalone',
        orientation: 'landscape-primary',
        lang: 'ru',
        icons: [
          {
            src: '/assets/favicons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/favicons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/favicons/192x192.jpg',
            sizes: '192x192',
            type: 'image/jpg',
            purpose: 'maskable',
          },
          {
            src: '/assets/favicons/512x512.jpg',
            sizes: '512x512',
            type: 'image/jpg',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
