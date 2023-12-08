<template>
  <div>404</div>
</template>

<script>
export default {
  setup() {
    const count = ref(5)
    return { count }
  },
  data() {
    return {
      id: 10
    }
  },
  created() {
    console.log(this.id, '传递来的id')
    console.log(this.count)
  },
  methods: {
    onSubmit() {
      this.callBack && this.callBack()
    }
  }
}
</script>

<style scoped>

</style>
