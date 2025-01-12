<script setup lang="ts">
import BookItem from '../components/BookItem.vue';
import { ref, onMounted, computed } from 'vue'

import axios from 'axios';

// API-Endpunkt
const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL+ "/api/books";

// Datenzustand
const books = ref<{ id: number; title: string; author: string; price: number}[]>([]);
const inputTitle = ref('');
const inputAuthor = ref('');
const inputPrice = ref('0');
const searchQuery = ref('');
const filteredBooks = computed(() =>
  {
    return books.value.filter(book => book.title.toLowerCase().includes(
      searchQuery.value.toLowerCase())
    );
  });

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
    loadBooks();
  }
  // Funktion, um Bücher zu laden
  async function loadBooks() {
    try {
      const response = await axios.get(apiEndpoint);
      console.log("API response:", response);
      books.value = response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-spezifische Fehlermeldung
        console.error("Fehler:", error.response?.data || error.message);
      } else {
        // Allgemeiner Fehler
        console.error("Fehler:", (error as Error).message);
      }
    }
  }

});

</script>

<template>
  <main>
    <h1>Bücherliste</h1>
    <input v-model="searchQuery" placeholder="Titel filtern" />
    <ul>
      <BookItem
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
        @remove="removeBook"
      />
    </ul>

    <!--   <div class="add-book">
      <h2>Neues Buch hinzufügen</h2>
      <form @submit.prevent="addBook" class="add-book-form">
        <div class="form-group">
          <label for="title">Titel</label>
          <input id="title" v-model="inputTitle" placeholder="Titel eingeben" />
        </div>

        <div class="form-group">
          <label for="author">Autor</label>
          <input id="author" v-model="inputAuthor" placeholder="Autor eingeben" />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="inputPrice" placeholder="price eingeben" />
        </div>
        <button type="submit" class="submit-button">Hinzufügen</button>
      </form>
    </div> -->
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}

.add-book {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.submit-button:hover {
  background-color: #45a049;
}

h1 {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
