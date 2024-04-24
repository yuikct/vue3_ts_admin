// 创建用户相关的小仓库
import { reqLogin, reqUserInfo, reqLogOut } from '@/api/user'
import { defineStore } from 'pinia'
import type { UserState } from './types'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import { constantRoute } from '@/router/routes'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
const useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  // 异步|逻辑的地方
  actions: {
    // 用户登录方法
    async userLogin(data: LoginFormData) {
      const result: LoginResponseData = await reqLogin(data)
      console.log('登录成功', result)
      if (result.code == 200) {
        this.token = result.data as string
        // localStorage.setItem('TOKEN', result.data.token as string)
        SET_TOKEN(result.data as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    // 获取用户信息
    async userInfo() {
      let res: userInfoResponseData = await reqUserInfo()
      console.log('获取个人信息：', res)

      if (res.code === 200) {
        this.username = res.data.name as string
        this.avatar = res.data.avatar as string
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    // 退出登录
    async userLogout() {
      let res = await reqLogOut()
      console.log('退出登录', res)

      if (res.data.code === 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})
// 对外暴露获取小仓库
export default useUserStore
