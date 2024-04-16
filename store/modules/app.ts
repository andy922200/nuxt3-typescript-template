import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { getLanguage } from '~/utils/mixinTools'
import { type appState } from '~/types/store'
import { appLangs } from '~/plugins/lang'

const useAppStore = defineStore({
  id: 'app',
  state: (): appState => {
    return {
      device: 'desktop',
      language: '',
    }
  },
  actions: {
    getLanguageBasedOnBrowser() {
      let browserLang = this.language.toLowerCase() || getLanguage()
      if (!appLangs.includes(browserLang)) {
        browserLang = 'en-us'
      }
      this.setLanguage(browserLang)
    },
    setLanguage(language: string) {
      this.language = language
      this.changeI18NLang(language)
    },
    changeI18NLang(language: string) {
      const { vueApp } = useNuxtApp()
      vueApp.config.globalProperties.$i18n.locale = language
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

export default useAppStore
