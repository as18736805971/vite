import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 配置文档 https://vitejs.dev/config/

export default defineConfig({
  // 共享选项
  base: '/vite/',     // 公共基础路径
  plugins: [vue()],  // 引用插件
  envPrefix: 'VITE_',  // 配置环境变量开头
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  // 服务器选项
  server: {
    host: '0.0.0.0', // 使用本机ip地址
    port: 8888,      // 设置固定端口号
    open: false      // 运行后自动打开网址
  },
  // 构建选项
  build: {
    outDir: 'dist',  // 指定输出路径目录
    assetsDir: 'static' // 指定生成静态资源的存放路径
  }
})
