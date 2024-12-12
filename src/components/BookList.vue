<script lang="ts">
import BookItem from './BookItem.vue'

export default {
  name: 'BookList',
  components: {
    BookItem,
  },
  data() {
    return {
      books: [
        { id: 1, title: 'Der kleine Prinz', author: 'Antoine de Saint-Exupéry' },
        { id: 2, title: '1984', author: 'George Orwell' },
        { id: 3, title: 'Moby Dick', author: 'Herman Melville' },
      ],
    };
  },
}
</script>

<template>
  <div class="book-list">
    <h1>Bücherliste</h1>
    <div
      v-for="book in books" :key="book.id">
      <BookItem :book="book" />
    </div>
  </div>
</template>

<style scoped>
.book-list {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
