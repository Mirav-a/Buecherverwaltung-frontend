<template>
  <div>
    <h1>Willkommen bei der Bücherverwaltung</h1>
    <p>Verwalten Sie Ihre Bücher effizient und einfach.</p>
  </div>
  <div>
    <br><br>
    <h2>Warum unsere Bücherverwaltung?</h2>
    <ul>
      <li>Zeit sparen: Schluss mit chaotischen Listen – behalten Sie Ihre Sammlung im Blick.</li>
      <li>Flexibel: Verwalten Sie Ihre Bücher von überall, jederzeit.</li>
      <li>Individuell: Passen Sie die Plattform an Ihre Bedürfnisse an.</li>
    </ul>
  </div>
  <div style="text-align: center;">
    <br><br>
    <img src="../assets/book-item-2.jpg" alt="Home Seite" class="book-image">
  </div>
</template>

<script setup lang="ts">
// Keine spezielle Logik notwendig
</script>

<style scoped>
h1, h2 {
  color: #000000;
  text-align: center;
}

ul {
  color: #000000;
  text-align: center;
}

li {

  list-style: none;
}

p {
  font-size: 1rem;
  text-align: center;
  color: #000000;
}

.book-image {
  width: 80%;
  margin: 0 auto;
}
</style>
