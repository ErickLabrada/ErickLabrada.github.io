import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormSubmissionView from '../views/FormSubmissionView.vue'
import LoginView from '../views/LoginView.vue'
import ReflectionsView from '../views/ReflectionsView.vue'
import ThanksView from '../views/ThanksView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/submit/:slug?',
      component: FormSubmissionView
    },
    {
      path: '/login',
      component: LoginView
    },

    {
      path: '/reflections',
      component: ReflectionsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/thanks',
      component:ThanksView
    }
  ]
})

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('auth_token')) {
    next('/login')
  } else {
    next()
  }
})

export default router