<template>
  <div class="container py-4">
    <h2 class="mb-4">Учасники лотереї</h2>

    <!-- КНОПКА ВИБОРУ ПЕРЕМОЖЦЯ -->
    <div class="text-center mb-4">
      <button
        @click="selectWinner"
        class="btn btn-success btn-lg"
        :disabled="!!winner"
      >
        {{ winner ? 'Переможець вибрано!' : 'Вибрати переможця' }}
      </button>
    </div>

    <!-- СПОВІЩЕННЯ -->
    <div v-if="winner" class="alert alert-success text-center mb-4">
      <strong>Переможець:</strong> {{ winner.first_name }} {{ winner.last_name }}<br>
      <small>{{ winner.email }} | {{ winner.phone }}</small>
    </div>

    <!-- ТАБЛИЦЯ З УЧАСНИКАМИ -->
    <table class="table table-hover align-middle">
      <thead class="table-light">
      <tr>
        <th>№</th>
        <th>Аватар</th>
        <th>ПІБ</th>
        <th>Email</th>
        <th>Телефон</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(user, index) in participants"
        :key="user.id"
        :class="{ 'table-success': winner?.id === user.id }"
      >
        <td>{{ index + 1 }}</td>
        <td>
          <div class="avatar-circle">{{ user.first_name[0] }}</div>
        </td>
        <td><strong>{{ user.first_name }} {{ user.last_name }}</strong></td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 10 ВИГАДАНИХ УЧАСНИКІВ
const participants = ref([
  { id: 1, first_name: 'Олена', last_name: 'Кравець', email: 'olena.k@gmail.com', phone: '+380 97 123 4567' },
  { id: 2, first_name: 'Максим', last_name: 'Шевчук', email: 'max.sh@gmail.com', phone: '+380 63 987 6543' },
  { id: 3, first_name: 'Софія', last_name: 'Бондаренко', email: 'sofia.b@gmail.com', phone: '+380 50 111 2233' },
  { id: 4, first_name: 'Дмитро', last_name: 'Ткач', email: 'dmitro.t@gmail.com', phone: '+380 98 555 6677' },
  { id: 5, first_name: 'Анастасія', last_name: 'Мельник', email: 'nastya.m@gmail.com', phone: '+380 67 444 8899' },
  { id: 6, first_name: 'Ігор', last_name: 'Петренко', email: 'igor.p@gmail.com', phone: '+380 93 222 3344' },
  { id: 7, first_name: 'Юлія', last_name: 'Лисенко', email: 'yulia.l@gmail.com', phone: '+380 99 777 8899' },
  { id: 8, first_name: 'Віталій', last_name: 'Коваль', email: 'vitaliy.k@gmail.com', phone: '+380 66 333 2211' },
  { id: 9, first_name: 'Катерина', last_name: 'Савченко', email: 'katya.s@gmail.com', phone: '+380 95 888 7766' },
  { id: 10, first_name: 'Роман', last_name: 'Бойко', email: 'roman.b@gmail.com', phone: '+380 68 555 4433' },
])

const winner = ref<any>(null)

const selectWinner = () => {
  const randomIndex = Math.floor(Math.random() * participants.value.length)
  winner.value = participants.value[randomIndex]
}
</script>

<style scoped>
.avatar-circle {
  width: 40px;
  height: 40px;
  background: #0d6efd;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
}

.table-success {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { background-color: #d4edda; }
  50% { background-color: #a8e4b1; }
}
</style>
