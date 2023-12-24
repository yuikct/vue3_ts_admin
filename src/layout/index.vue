<template>
  <el-container class="layout-container" style="height: 100vh">
    <el-aside width="200px"
      :class="{ isCollapse: LayOutSettingStore.isCollapse ? true : false }">
      <el-scrollbar>
        <el-menu
          :default-active="$route.path"
          active-text-color="#fff"
          background-color="#001529"
          text-color="#959ea6"
          :collapse="LayOutSettingStore.isCollapse"
          :router="true"
        >
          <!-- :collapse="LayOutSettingStore.isCollapse" -->
          <Login></Login>
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container style="height: 100vh">
      <el-header style="text-align: right; font-size: 12px">
        <TabBar style="width: 100%" />
      </el-header>
      <el-main :style="{
        left: !LayOutSettingStore.isCollapse ? '200px' : '56px',
        width:LayOutSettingStore.isCollapse?'calc(100% - 56px)':'calc(100% - 200px)'
      }">
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Login from './login/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import TabBar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/store/modules/setting'

let userStore = useUserStore()
let $route = useRoute()
console.log(userStore.menuRoutes)
let LayOutSettingStore =useLayOutSettingStore()
</script>

<style scoped lang="scss">
.layout-container {
  height: 100%;
}
.layout-container .el-menu {
  border-right: none;
}
.layout-container .el-main {
  position: absolute;
  padding: 20px;
  left: 200px;
  top: 60px;
  transition: all 0.3s;
  width: calc(100% - $base-menu-width);
  height: calc(100vh - 60px);
}

.el-aside {
  background-color: #001529 !important;
  transition: all 0.3s;
}
.el-header {
  background-color: #fff !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  z-index: 999;
}
.isCollapse {
  width: 56px;
}
</style>
