/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-16 23:11:38
 * @LastEditors: ${author}
 * @LastEditTime: 2023-07-22 15:44:01
 */
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Info from '@/components/Info.vue'
import DubDebug from '@/components/DubDebug.vue'

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
    },
    {
      path: "/debug",
      name: "Debug",
      component: DubDebug,
    }
  ]
})

export default router
