import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://api.abtalk.cn/logo.png',
      name: 'AbTalk',
      description: '<a href="https://api.abtalk.cn/token" style="color: blue;" target="_blank">apiKey获取</a>&nbsp;&nbsp;&nbsp;<a href="https://api.abtalk.cn/log" style="color: blue;" target="_blank">日志</a>',
    },
  }
}

export function getLocalState(): UserState {
  return { ...defaultSetting() }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
