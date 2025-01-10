<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { Book } from '@/model/book';

const books = ref<Book[]>([]);
const errorMessage = ref('');

async function fetchBooks() {
  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_BASE_URL+'/api/books');
    books.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchBooks();
});
</script>

<template>
  <div>
    <h1>Bücherliste</h1>
    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>
    <ul v-else>
      <li v-for="book in books" :key="book.id">
        <strong>{{ book.title }}</strong> - {{ book.author }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
