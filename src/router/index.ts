// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由器
const router = createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'login',
    },
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      name: 'layout',
    },
    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})
export default router
