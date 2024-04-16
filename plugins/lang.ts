import { createI18n } from 'vue-i18n'
import enUsLocale from '../lang/en-us'
import zhTwLocale from '../lang/zh-tw'

const messages = {
  'zh-tw': {
    ...zhTwLocale,
  },
  'en-us': {
    ...enUsLocale,
  },
}

export const appLangs = Object.keys(messages)
export type appLangType = keyof typeof messages
export const i18n = createI18n({
  legacy: false,
  locale: 'en-us',
  globalInjection: true,
  fallbackLocale: 'en-us',
  messages,
})

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})
