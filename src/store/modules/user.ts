// 创建用户相关的小仓库
import { reqLogin } from '@/api/user'
import { defineStore } from 'pinia'
import type { loginForm } from '@/api/user/type'
import type { UserState } from './types'
import { constantRoute } from '@/router/routes'
const useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: localStorage.getItem('TOKEN'),
      menuRoutes: constantRoute,
    }
  },
  // 异步|逻辑的地方
  actions: {
    async userLogin(data: loginForm) {
      const result: any = await reqLogin(data)
      console.log(result)
      if (result.code == 200) {
        this.token = result.data.token as string
        localStorage.setItem('TOKEN', result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
// 对外暴露获取小仓库
export default useUserStore
