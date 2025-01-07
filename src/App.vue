<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/books">Bücherliste</RouterLink>
      <RouterLink to="/add-book">Buch hinzufügen</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

nav a:hover {
  color: #0056b3;
}

main {
  padding: 2rem;
}
</style>
