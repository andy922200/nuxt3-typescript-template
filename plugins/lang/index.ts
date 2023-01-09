import { createI18n } from 'vue-i18n'
import enUsLocale from './en-us'
import zhTwLocale from './zh-tw'

const messages = {
    'zh-tw': {
        ...zhTwLocale
    },
    'en-us': {
        ...enUsLocale
    }
}

export const appLangs = Object.keys(messages)
export type appLangType = keyof typeof messages
export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'en-us',
        globalInjection: true,
        fallbackLocale: 'en-us',
        messages
    })

    vueApp.use(i18n)
})
