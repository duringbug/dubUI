/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-16 23:11:38
 * @LastEditors: ${author}
 * @LastEditTime: 2023-07-21 23:59:48
 */
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Info from '@/components/Info.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },
    {
      path: "/info",
      name: "Info",
      component: Info,
    }
  ]
})

export default router
