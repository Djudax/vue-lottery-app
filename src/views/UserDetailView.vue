<template>
  <div class="container py-4" v-if="user">
    <div class="row">
      <div class="col-md-3 text-center">
        <img :src="user.avatar" class="img-fluid rounded-circle" style="max-width: 150px;" />
      </div>
      <div class="col-md-9">
        <h2>{{ user.first_name }} {{ user.last_name }}</h2>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <router-link to="/lottery" class="btn btn-outline-secondary">Назад</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const user = ref<any>(null)

onMounted(async () => {
  const id = route.params.id
  const res = await axios.get(`https://reqres.in/api/users/${id}`)
  user.value = res.data.data
})
</script>
