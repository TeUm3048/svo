import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import View from '../views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: View
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
