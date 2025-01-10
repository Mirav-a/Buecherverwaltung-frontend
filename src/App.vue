<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <header>
    <nav>
      <RouterLink
        to="/"
        :class="{ active: route.path === '/' }"
      >Home</RouterLink>
      <RouterLink
        to="/about"
        :class="{ active: route.path === '/about' }"
      >About</RouterLink>
      <RouterLink
        to="/books"
        :class="{ active: route.path === '/books' }"
      >Bücherliste</RouterLink>
      <RouterLink
        to="/add-book"
        :class="{ active: route.path === '/add-book' }"
      >Buch hinzufügen</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>&copy; 2025 Bücherverwaltung. All rights reserved.</p>
  </footer>
</template>

<style scoped>
header {
  background-color: #cccccc;
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
  color: #149219;
  font-weight: bold;
}

nav a:hover {
  text-decoration: none;
  color: #ffffff;
  background-color: #4caf50;
}

nav a.active {
  text-decoration: none;
  color: #ffffff;
  background-color: #4caf50;
}

main {
  padding: 2rem;
}

footer {
  background-color: #cccccc;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
