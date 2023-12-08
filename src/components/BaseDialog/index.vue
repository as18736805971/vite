<template>
  <el-dialog
      v-model="show"
      :title="title"
      :width="width"
      :class="className"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      @closed="closed"
  >
    <div ref="contentWapper"></div>
    <template #footer>
      <div v-if="footerShow" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { VueExtend } from '@/core/VueExtend.js'
import { extend } from 'lodash'
export default {
  data() {
    return {
      footerShow: true, // 是否显示底部footer
      show: false, // 是否显示
      title: '', // 弹窗标题
      width: '50%', // 弹窗宽度
      component: null, // 弹窗展示的内部组件
      data: {}, // 传递给内部组件的数据
      className: '' // 弹窗的扩展类名
    }
  },
  created() {},
  beforeCreate() {},
  unmounted() {},
  mounted() {
    console.log(this.className, '98989898')
    if (!this.component) {
      return
    }
    this.$nextTick(() => {
      const data = this.data
      this.vm = VueExtend(this.component)
      this.vm.mixin({
        created() {
          extend(this.$data, data)
        }
      })
      this.vmInstance = this.vm.mount(this.$refs.contentWapper)
      this.vmInstance.callBack = this.callBack
    })
  },
  methods: {
    isBaseDialog() {
      return true
    },
    closed() {
      this.callBack = null
      this.$el.remove()
      this.$el = null
      this.vmInstance = null
      this.vm && this.vm.unmount()
      this.vm = null
      this.onClosed()
    },
    close() {
      this.show = false
    },
    /**
     * 点击确定时的方法, 调用内部组件的onSubmit方法
     */
    onSubmit() {
      console.log('**/*/*/')
      this.vmInstance.onSubmit && this.vmInstance.onSubmit()
    }
  }
}
</script>
<style>
.el-dialog {
  display: flex;
  flex-direction: column;
}
.el-dialog__header,
.el-dialog__footer {
  flex-shrink: 0;
}
.el-dialog__body {
  flex: 1;
  overflow: auto;
}
.dialog_size_800_600 {
  width: 800px !important;
  height: 600px !important;
}
</style>
