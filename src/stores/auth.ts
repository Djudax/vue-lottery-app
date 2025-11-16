// src/stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') as string | null,
  }),
  getters: {
    isAuthenticated: (state): boolean => !!state.token, // ← ПОТРІБНО!
  },
  actions: {
    login(email: string, password: string): void {
      // ← ТВОЇ СТАТИЧНІ ДАНІ
      if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
        const token = 'static-jwt-token-12345'
        this.token = token
        localStorage.setItem('token', token)
      } else {
        throw new Error('Invalid credentials')
      }
    },
    logout(): void {
      this.token = null
      localStorage.removeItem('token')
    },
  },
})
