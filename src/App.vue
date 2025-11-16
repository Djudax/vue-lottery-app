<template>
  <header class="bg-primary text-white text-center py-3">
    <h1>Vue Lottery App</h1>
  </header>
  <AppNavigation />
  <router-view />
</template>

<script setup lang="ts">
import AppNavigation from '@/components/AppNavigation.vue'
</script>
