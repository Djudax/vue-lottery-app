// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/AboutView.vue') },
  {
    path: '/lottery',
    name: 'Lottery',
    component: () => import('@/views/LotteryView.vue'),
    meta: { requiresAuth: true }
  },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginView.vue') },
  { path: '/users/:id', name: 'UserDetail', component: () => import('@/views/UserDetailView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
