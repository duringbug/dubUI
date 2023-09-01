/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-07-16 23:11:38
 * @LastEditors: ${author}
 * @LastEditTime: 2023-07-29 11:28:22
 */
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Info from '@/components/Info.vue'
import DubDebug from '@/components/DubDebug.vue'
import DubTextures from '@/components/DubTextures.vue'
import DubMaterials from '@/components/DubMaterals.vue'
import DubEnvironment from '@/components/DubEnvironment.vue'
import DubText from '@/components/DubText.vue'
import DubLight from '@/components/DubLight.vue'
import DubShadow from "@/components/DubShadow.vue"
import DubHouse from "@/components/DubHouse.vue"

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
    },
    {
      path: "/textures",
      name: "Textures",
      component: DubTextures,
    },
    {
      path: "/materials",
      name: "materials",
      component: DubMaterials,
    },
    {
      path: "/environment",
      name: "Environment",
      component: DubEnvironment,
    },
    {
      path: "/text",
      name: "Text",
      component: DubText,
    },
    {
      path: "/light",
      name: "Light",
      component: DubLight,
    },
    {
      path: "/shadow",
      name: "Shadow",
      component: DubShadow,
    },
    {
      path: "/house",
      name: "House",
      component: DubHouse,
    },
  ]
})

export default router
