9<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BookDetail',
})
</script>

<template>
  <div class="book-detail">
    <h2>Buchdetails</h2>
    <p>Hier werden die Details des Buches angezeigt.</p>
  </div>
</template>

<style scoped>
.book-detail {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
</style>
