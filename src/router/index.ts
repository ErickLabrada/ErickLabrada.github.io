import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/components/ProjectView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: "/projects/:slug",
      component: ProjectView,
    },
  ]
})


export default router
