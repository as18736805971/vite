<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import { userStore } from  '@/store/user/index.js'

const user = userStore()
user.handleAge()
console.log(user.info.name, 'state')
console.log(user.handleNumber, 'getters')
const num = ref(100)

const { proxy } = getCurrentInstance()
function handleGet() {
  proxy.$baseDialog(
      import('./404/index.vue'), { id: 20 }
  )
      .className('admin')
 .title('新增手环设备')
 .then(() => {
    console.log('-*-*-**-*-*-')
  }).show()
}
</script>

<template>
  <div>
    <HelloWorld msg="诶嘿" />
    <el-button type="primary" @click="handleGet()">Primary</el-button>
<!--    我是{{ user.info.name }}，今年{{ user.info.age }}岁，但是现在我是{{ user.handleNumber }}岁-->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
      // handleGet() {
      //   this.$baseDialog(import('./404/index.vue'), {id: 20})
      //       .className('admin')
      //     .title('新增手环设备')
      //     .then(() => {
      //       console.log('-*-*-**-*-*-')
      //     }).show()
      // }
  }
}
</script>

<style scoped>
</style>
