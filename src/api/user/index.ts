// 统一管理用户相关的接口
import request from '@/utils/request'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from './type'
// 统一管理接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}
// 对外暴露请求函数
// 登录接口方法
export const reqLogin = (data: LoginFormData) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)

export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)
