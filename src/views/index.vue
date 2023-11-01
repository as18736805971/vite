<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import { userStore } from  '@/store/user/index.js'

const user = userStore()
user.handleAge()
console.log(user.info.name, 'state')
console.log(user.handleNumber, 'getters')
const num = ref(100)
</script>

<template>
  <div>
    <HelloWorld msg="诶嘿" />
    我是{{ user.info.name }}，今年{{ user.info.age }}岁，但是现在我是{{ user.handleNumber }}岁
  </div>
</template>

<style scoped>
</style>
