import { defineStore } from 'pinia'
import type {AppState, Language, Model, Theme} from './helper'
import { getLocalSetting, setLocalSetting } from './helper'
import { store } from '@/store'

export const useAppStore = defineStore('app-store', {
  state: (): AppState => getLocalSetting(),
  actions: {
    setSiderCollapsed(collapsed: boolean) {
      this.siderCollapsed = collapsed
      this.recordState()
    },

    setTheme(theme: Theme) {
      this.theme = theme
      this.recordState()
    },

    setLanguage(language: Language) {
      if (this.language !== language) {
        this.language = language
        this.recordState()
      }
    },

		setApiKey(apiKey: string) {
			this.apiKey = apiKey
			this.recordState()
		},

		setModel(model: Model) {
			if (this.model !== model) {
				this.model = model
				this.recordState()
			}
		},

    recordState() {
      setLocalSetting(this.$state)
    },
  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
