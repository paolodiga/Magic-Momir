import '@/assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
import router from './router'

console.log("here")

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
