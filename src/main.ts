/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-16 23:11:38
 * @LastEditors: ${author}
 * @LastEditTime: 2023-07-24 19:07:32
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/css/tailwind.css'

const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')
