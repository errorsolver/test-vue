import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
// import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    // viteSingleFile(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // assetsInlineLimit: Infinity,
    cssCodeSplit: true,
    minify: false,
    // minify: 'esbuild',
    // cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: () => 'main.js', // semua digabung jadi 1 JS
      }
    }
  }
})
