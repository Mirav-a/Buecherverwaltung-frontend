<script setup lang="ts">
import { ref } from 'vue';

// Lokale Variablen für Formularwerte
const title = ref('');
const author = ref('');

function addBook() {
  if (!title.value || !author.value) {
    alert('Bitte Titel und Autor eingeben!');
    return;
  }

  // Hier kannst du die Logik zum Speichern eines Buchs implementieren, z. B. über eine API
  console.log('Neues Buch hinzugefügt:', { title: title.value, author: author.value });

  // Formular zurücksetzen
  title.value = '';
  author.value = '';
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
