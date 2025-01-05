<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

// Typ für ein Buch
type Book = Record<string, any> | null;

export default defineComponent({
  name: "BookItem",
  props: {
    book: {
      type: Object as PropType<Book>, // `null` wird explizit erlaubt
      required: false,
      default: null, // Standardwert ist null
    },
  },
});
</script>

<template>
  <div class="book-item">
    <template v-if="book">
      <h3>{{ book.title }}</h3>
      <p>Autor: {{ book.author }}</p>
    </template>
    <template v-else>
      <p>Keine Buchdaten verfügbar</p>
    </template>
  </div>
</template>
