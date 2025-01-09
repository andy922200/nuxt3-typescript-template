import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-09',
  ssr: false,
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/eslint'],
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './plugins/lang/*.ts')],
      }),
    ],
  },
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      title: 'Demo Site',
      htmlAttrs: {
        lang: 'zh-Hant',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'ie=edge',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Demo Site',
        },
        {
          property: 'og:locale',
          content: 'zh_TW',
        },
      ],
    },
  },
})
