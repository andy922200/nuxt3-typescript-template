import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: 'Demo Site',
            htmlAttrs: {
                lang: 'zh-Hant'
            },
            meta: [
                {
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'ie=edge'
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'ccClub'
                },
                {
                    property: 'og:locale',
                    content: 'zh_TW'
                }
            ]
        }
    },
    typescript: {
        typeCheck: true
    },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
    ],
    vite: {
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './plugins/lang/*.ts')
                ]
            })
        ]
    }
})
