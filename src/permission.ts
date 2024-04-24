import router from './router'
import setting from './setting'
import pinia from './store'
import useUserStore from './store/modules/user'
// import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'
// nprogress.configure({showSpinner:false})
let userStore = useUserStore(pinia)
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title + ` |${setting.title}`
  let token = userStore.token
  let username = userStore.username
  console.log(username, from)

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next({ ...to })
        } catch (error) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      console.log('进来0')

      next({ path: 'login', query: { redirect: to.path } })
    }
  }
})
