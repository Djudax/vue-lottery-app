<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <router-link to="/" class="navbar-brand">Lottery</router-link>
      <div class="navbar-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/lottery" class="nav-link">Lottery</router-link>

        <!-- КНОПКА LOGIN -->
        <router-link v-if="!auth.isAuthenticated" to="/login" class="nav-link">Login</router-link>

        <!-- КНОПКА LOGOUT (тільки після входу) -->
        <button v-else @click="auth.logout" class="btn btn-outline-danger ms-2">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
</script>
