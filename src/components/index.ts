import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import type { App, Component } from 'vue'
// 全局对象
const components: { [name: string]: Component } = { SvgIcon }
export default {
  install(app: App) {
    // 注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
    // 将element-plus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
