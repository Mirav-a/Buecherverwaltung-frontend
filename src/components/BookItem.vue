<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue'; // Type-only Import
import type { Book } from '@/model/book'; // Type-only Import

// Props definieren, wobei book auch `null` sein darf
defineProps({
  book: {
    type: Object as PropType<Book | null>, // Akzeptiert sowohl `Book` als auch `null`
    required: false, // Nicht erforderlich
    default: null, // Standardwert ist `null`
  },
});
</script>

<template>
  <div>
    <!-- Wenn Buchdaten vorhanden -->
    <div v-if="book">
      <p><strong>{{ book.title }}</strong> - {{ book.author }} - {{ book.price }}</p>
    </div>
    <!-- Wenn keine Buchdaten vorhanden -->
    <div v-else>
      <p>Keine Buchdaten verfügbar</p>
    </div>
  </div>
</template>

<style scoped>
p {
  color:black;
  font-size: 1rem;
  margin: 5px 0;
}
</style>
