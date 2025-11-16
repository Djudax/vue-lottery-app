<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body p-4">
            <h2 class="text-center mb-4">Вхід</h2>

            <form @submit.prevent="onSubmit">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Пароль</label>
                <input v-model="password" type="password" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">Увійти</button>
            </form>

            <p class="text-center mt-3 text-muted small">
              Тест: eve.holt@reqres.in + cityslicka
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('eve.holt@reqres.in')
const password = ref('cityslicka')
const router = useRouter()
const auth = useAuthStore()

const onSubmit = () => {
  try {
    auth.login(email.value, password.value)
    router.push('/lottery')
  } catch {
    alert('Невірний логін або пароль')
  }
}
</script>
