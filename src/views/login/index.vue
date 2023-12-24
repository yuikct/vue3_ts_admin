<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rules"
          status-icon
        >
          <h1>Hello</h1>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'

import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElMessage, ElNotification } from 'element-plus'
import { getTime } from '../../../utils/time'
let $router = useRouter()
let useStore = useUserStore()
let loading = ref(false)
// const identifyCode = ref('1234')
// const identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz')
// 收集表单数据
let loginForm = reactive({ username: 'admin', password: '111111' })
// 重置验证码
// const refreshCode = () => {
//   identifyCode.value = ''
//   makeCode(identifyCode, 4)
// }

// const makeCode = (o: Ref<any>, l: number) => {
//   for (let i = 0; i < l; i++) {
//     identifyCode.value +=
//       identifyCodes.value[randomNum(0, identifyCodes.value.length)]
//   }
// }

// const randomNum = (min: number, max: number) => {
//   return Math.floor(Math.random() * (max - min) + min)
// }
const validatorUsername = (rule: any, value: any, callback: any) => {
  console.log(rule, value)
  if (value.length === 0) {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  console.log(rule, value)
  if (value.length === 0) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'))
  } else {
    callback()
  }
}

// const validatorVerifyCode = (rule: any, value: any, callback: any) => {
//   // console.log(value, identifyCode.value)

//   if (value.length === 0) {
//     callback(new Error('请输入验证码'))
//   } else if (value.length < 4) {
//     callback(new Error('请输入正确的验证码'))
//   } else if (identifyCode.value !== value) {
//     callback(new Error('请输入正确的验证码'))
//   } else if (identifyCode.value === value) {
//     callback()
//   }
// }
const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
  // verifyCode: [
  //   {
  //     trigger: 'blur',
  //     validator: validatorVerifyCode,
  //   },
  // ],
}
let login = async () => {
  //
  loading.value = true
  console.log('提交表单：', loginForm)
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登陆成功',
      title: `Hi, ${getTime()}好`,
    })
    loading.value = false
  } catch (error) {
    ElMessage({
      type: 'error',
      message: (error as Error).message,
    })
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    width: 80%;
    position: relative;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    margin: 0 auto;
    h1 {
      font-size: 40px;
      color: white;
      padding-bottom: 20px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
