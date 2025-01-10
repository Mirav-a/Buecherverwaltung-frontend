<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

// Dynamische ID aus der Route holen
const route = useRoute();
const bookId = route.params.id as string;

// Buchdetails
const book = ref({
  id: '',
  title: '',
  author: '',
  year: '',
});

// Fehler-Handling
const errorMessage = ref('');

// Buchdetails laden
async function fetchBookDetails() {
  try {
    const response = await axios.get(`http://localhost:5173/api/books/${bookId}`); // Passe die API-URL an
    book.value = response.data;
  } catch (error) {
    errorMessage.value = 'Fehler beim Laden der Buchdetails!';
    console.error(error);
  }
}

// Beim Mounten die Buchdetails abrufen
onMounted(() => {
  fetchBookDetails();
});
</script>

<template>
  <div class="book-detail">
    <h2>Buchdetails</h2>

    <div v-if="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
    </div>

    <div v-else>
      <p><strong>Titel:</strong> {{ book.title }}</p>
      <p><strong>Autor:</strong> {{ book.author }}</p>
      <p><strong>Erscheinungsjahr:</strong> {{ book.year }}</p>
    </div>
  </div>
</template>

<style scoped>
.book-detail {
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

p {
  margin: 0.5rem 0;
}

.error {
  color: red;
  text-align: center;
  margin: 1rem 0;
}
</style>
