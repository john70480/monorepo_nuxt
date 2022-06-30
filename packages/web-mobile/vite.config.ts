import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { visualizer } from 'rollup-plugin-visualizer';

export const pluginsConfig = [
  Vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('lottie-player')
      }
    }
  }),
  Pages({ extensions: ['vue', 'js', 'ts'] }),
  Layouts(),
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
];
// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: '0.0.0.0'
  // },
  envDir: '../../',
  plugins: pluginsConfig,
  // publicDir: "../web/public",
  resolve: {
    alias: {
      '/src/icons': '@tg/web/src/icons',
      '/src/assets': '@tg/web/src/assets',
      '@tg/web': '@tg/web/',
      '@tg/web-mobile': '@tg/web-mobile/src',
      '@tg/shared': '@tg/shared/src',
      '@tg/utils': '@tg/utils/src',
      '@tg/api': '@tg/api/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        // additionalData: `@tge "sass:math"; @import "@tg/web-tg/asset/scss/common";`
      },
    },
    postcss: {
      plugins: [
        // flexGapPolyfill({ only: true }),
      ],
    },
  },
})
