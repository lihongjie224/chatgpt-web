import { ss } from '@/utils/storage'

const LOCAL_NAME = 'appSetting'

export type Theme = 'light' | 'dark' | 'auto'

export type Language = 'zh-CN' | 'zh-TW' | 'en-US' | 'ko-KR' | 'ru-RU'

export type Model = 'gpt-3.5-turbo-0613' | 'gpt-4-0613'

export interface AppState {
  siderCollapsed: boolean
  theme: Theme
  language: Language
	apiKey: string
	model: Model
}

export function defaultSetting(): AppState {
  return { siderCollapsed: false, theme: 'light', language: 'zh-CN', apiKey : '', model: 'gpt-3.5-turbo-0613' }
}

export function getLocalSetting(): AppState {
  const localSetting: AppState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalSetting(setting: AppState): void {
  ss.set(LOCAL_NAME, setting)
}
