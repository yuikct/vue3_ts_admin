
export const constantRoute = [
      {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',
        meta:{
            title:'login',
            hidden:true,
        }
      },
      {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        meta:{
            title:'layout',
            hidden:false,
            icon:'',
        },
        redirect:'/home',
        children:[
            {
               path:'/home',
                component:() => import('@/views/home/index.vue'),
                meta: {
                  title: '首页',
                  hidden: false,
                  icon: 'HomeFilled',
                },
            },
        ]

      },
      {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta:{
          title:'404',
          hidden:true,
      }
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        meta:{
          title:'',
          hidden:true,
      }
      },
    ]
