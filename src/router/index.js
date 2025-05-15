import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/scenarios',
      name: 'scenarios',
      component: () => import('../views/ScenariosView.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/AnalyticsView.vue')
    },
    {
      path: '/simulator',
      name: 'simulator',
      component: () => import('../views/SimulatorView.vue')
    }
  ]
})

export default router
