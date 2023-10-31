<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
// console.log(import.meta.env.VITE_BASE_URL, '****')
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">{{ count }}</button>
    <img src="@/assets/vue.svg">
  </div>
</template>

<style scoped>
</style>
