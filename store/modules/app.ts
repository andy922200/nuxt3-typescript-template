import { defineStore } from 'pinia'

import { useNuxtApp } from '#app'
import { appLangs } from '~/plugins/lang'
import type { appState } from '~/types/store'
import { getLanguage } from '~/utils/mixinTools'

const useAppStore = defineStore('app', {
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
    storage: localStorage,
  },
})

export default useAppStore
