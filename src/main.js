import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pina from './store'

const app = createApp(App)
app.use(router)
app.use(pina)
app.mount('#app')
