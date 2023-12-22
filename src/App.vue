<template>
  <div>
    <!-- <SvgIcon name="svgIcon" color="pink" width="350px" height="350px"></SvgIcon> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// import SvgIcon from '@/components/SvgIcon/index.vue'
// console.log('环境变量', import.meta.env)
// import request from '../utils/request'
import { onMounted } from 'vue'
import { reqLogin } from './api/user'
// 当你组件挂载完毕测试发一个请求
onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
  // request({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username: 'admin',
  //     password: '111111',
  //   },
  // }).then((res) => {
  //   console.log(res)
  // })
})
</script>

<style scoped lang="scss">
.colors {
  color: $color;
}
</style>
