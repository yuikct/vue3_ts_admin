import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入路由
import router from './router'
const app = createApp(App)
// 注册全局组件
import gloablComponent from '@/components/index'
// 安装自定义插件
app.use(gloablComponent)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)

app.mount('#app')
