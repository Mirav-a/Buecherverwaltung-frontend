<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

// Lokale Variablen für Formularwerte
const title = ref('');
const author = ref('');
const price = ref('0');

// Your backend API URL
const apiUrl = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/books'; // Change to your actual backend URL

async function addBook() {
  if (!title.value || !author.value) {
    alert('Bitte Titel und Autor eingeben!');
    return;
  }

  // Create book object to send to the backend
  const book = {
    title: title.value,
    author: author.value,
    price: 0, // Example value, you can add this to the form as needed
  };

  try {
    // Send the POST request to your backend
    const response = await axios.post(apiUrl, book);

    // Handle the response from the backend
    console.log('Neues Buch hinzugefügt:', response.data);

    // Optional: Notify user that the book was successfully added
    alert('Buch wurde hinzugefügt!');

    // Reset the form
    title.value = '';
    author.value = '';
    price.value = '0';
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Buches:', error);
    alert('Beim Hinzufügen des Buches ist ein Fehler aufgetreten.');
  }
}
</script>

<template>
  <div class="add-book">
    <h2>Buch hinzufügen</h2>
    <form @submit.prevent="addBook" class="add-book-form">
      <div class="form-group">
        <label for="title">Titel</label>
        <input id="title" v-model="title" placeholder="Titel eingeben" />
      </div>

      <div class="form-group">
        <label for="author">Autor</label>
        <input id="author" v-model="author" placeholder="Autor eingeben" />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model="price" placeholder="price eingeben" />
      </div>
      <button type="submit" class="submit-button">Hinzufügen</button>
    </form>
  </div>
</template>

<style scoped>
.add-book {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
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
</style>
