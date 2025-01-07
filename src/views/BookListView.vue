<script setup lang="ts">
import BookItem from '../components/BookItem.vue';
import { ref, onMounted } from 'vue';

import axios from 'axios';

// API-Endpunkt
const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/books';

// Datenzustand
const books = ref<{ id: number; title: string; author: string; price: number}[]>([]);
const inputTitle = ref('');
const inputAuthor = ref('');
const inputPrice = ref('0');

// Buch hinzufügen
async function addBook() {
  if (!inputTitle.value || !inputAuthor.value) {
    alert('Bitte Titel und Autor eingeben!');
    return;
  }

  try {
    const response = await axios.post(apiEndpoint, {
      title: inputTitle.value,
      author: inputAuthor.value,
      price: inputPrice.value
    }
    );
    books.value.push(response.data);
    inputTitle.value = ''
    inputAuthor.value = '';
    inputPrice.value = '0';
  } catch (err) {
    console.error('Fehler beim Hinzufügen des Buchs:', err);
  }
}

// Buch entfernen
async function removeBook(id: number) {
  try {
    await axios.delete(`${apiEndpoint}/${id}`);
    books.value = books.value.filter((book) => book.id !== id);
  } catch (err) {
    console.error('Fehler beim Entfernen des Buchs:', err);
  }
}

// Bücher beim Laden abrufen
onMounted(async () => {
  try {
    const response = await axios.get(apiEndpoint);
    books.value = response.data;
  } catch (err) {
    console.error('Fehler beim Laden der Bücher:', err);
  }
});
</script>

<template>
  <main>
    <h1>Bücherliste</h1>
    <ul>
      <BookItem
        v-for="book in books"
        :key="book.id"
        :book="book"
        @remove="removeBook"
      />
    </ul>

    <div>
      <h2>Neues Buch hinzufügen</h2>
      <input v-model="inputTitle" placeholder="Buchtitel" />
      <input v-model="inputAuthor" placeholder="Autor" />
      <input v-model="inputPrice" placeholder="Price" />
      <button @click="addBook">Hinzufügen</button>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}
h1 {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
