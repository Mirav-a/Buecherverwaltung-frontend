<template>
  <div class="book-item" v-if="book">
    <h3>{{ book.title }}</h3>
    <p>Autor: {{ book.author }}</p>
  </div>
  <div v-else>
    <p>Keine Buchdaten verfügbar</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      required: false, // Prop ist nicht zwingend erforderlich
      default: () => ({ title: 'Unbekannter Titel', author: 'Unbekannter Autor' }),
    },
  },
})
</script>

<style scoped>
.book-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
