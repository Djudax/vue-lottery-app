// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/about', component: () => import('@/views/AboutView.vue') },
  { path: '/login', component: () => import('@/views/LoginView.vue') },
  {
    path: '/lottery',
    component: () => import('@/views/LotteryView.vue'),
    meta: { requiresAuth: true }
  },
  { path: '/users/:id', component: () => import('@/views/UserDetailView.vue') },
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.token) {
    next('/login')
  } else {
    next()
  }
})

export default router
