import App from './App.vue'
import { VueExtend } from '@/core/VueExtend.js'
import router from "@/router"
import pina from "@/store"

const app = VueExtend(App)
app.use(router)
app.use(pina)
app.mount('#app')

