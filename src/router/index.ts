import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/components/ProjectView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { el: to.hash, top: 32 }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/projects/:slug',
      component: ProjectView,
    },
  ],
})

export default router
