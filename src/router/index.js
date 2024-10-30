import { createRouter, createWebHistory } from 'vue-router'
import VueView from '../views/PageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VueView,
    },
  ],
})

export default router
