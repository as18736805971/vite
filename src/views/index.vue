<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import { userStore } from  '@/store/user/index.js'
import http from "@/utils/http.js";

const user = userStore()
user.handleAge()
console.log(user.info.name, 'state')
console.log(user.handleNumber, 'getters')
const num = ref(100)
console.log(auth, '使用默认为 composables 文件夹下')
console.log(http, '自定义为 utils 文件下')
</script>

<template>
  <div>
    <HelloWorld msg="诶嘿" />
    我是{{ user.info.name }}，今年{{ user.info.age }}岁，但是现在我是{{ user.handleNumber }}岁
    <el-button @click="user.handleAge()">+++</el-button>
    <van-button icon="plus" type="primary" @click="num++">{{ num }}</van-button>
  </div>
</template>

<style scoped>
</style>
