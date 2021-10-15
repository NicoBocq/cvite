import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
  },
  plugins: [
    vue()
    // vueI18n({
    //   include: path.resolve(__dirname, '/src/locales/**')
    //   // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
    //   // compositionOnly: false,
    //
    //   // you need to set i18n resource including paths !
    //   // include: path.resolve(__dirname, './path/to/src/locales/**')
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
})
