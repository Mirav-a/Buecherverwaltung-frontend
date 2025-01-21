<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue'; // Type-only Import
import type { Book } from '@/model/book';


// Props definieren, wobei book auch `null` sein darf
defineProps({
  book: {
    type: Object as PropType<Book | null>, // Akzeptiert sowohl `Book` als auch `null`
    required: false, // Nicht erforderlich
    default: null, // Standardwert ist `null`
  },
});
const emit = defineEmits(['remove']);
function removeBook(id: number) {
  emit('remove', id);
}
</script>

<template>
  <li class="book-item">
    <!-- Wenn Buchdaten vorhanden -->
    <div v-if="book" class="book-item">
      <img src="@/assets/book-item.png" alt="Book Cover" class="book-image" />
      <div class="book-info">
        <p><strong>{{ book.title }}</strong></p>
        <p>{{ book.author }}</p>
        <p>{{ book.price }} €</p>
        <button @click="removeBook(book.id)">Delete</button>
      </div>
    </div>
    <!-- Wenn keine Buchdaten vorhanden -->
    <div v-else class="no-book">
      <p>Keine Buchdaten verfügbar</p>
    </div>
  </li>
</template>

<style scoped>
.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 10px;
  width: 32%;
  box-shadow: none;
  background: #FFFFFF;
}

.book-image {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.book-info {
  text-align: center;
}

p {
  color: black;
  font-size: 1rem;
  margin: 5px 0;
}

.no-book {
  width: 100%;
  text-align: center;
  color: gray;
}

.delete-button {
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

.delete-button:hover {
  background-color: #45a049;
}

@media (max-width: 1692px) {
  .book-item {
    width: 31%;
  }
}

@media (max-width: 1042px) {
  .book-item {
    width: 100%;
  }
}
</style>
