<template>
  <el-icon
    style="margin-right: 10px; cursor: pointer"
    size="20px"
    @click="changeIcon"
  >
    <component :is="LayOutSettingStore.isCollapse ? Expand : Fold"></component>
  </el-icon>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '../../../store/modules/setting'

import { Fold, Expand } from '@element-plus/icons-vue'
let LayOutSettingStore = useLayoutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.isCollapse = !LayOutSettingStore.isCollapse
}
</script>

<style scoped></style>
