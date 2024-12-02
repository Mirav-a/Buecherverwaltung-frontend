<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BuchverwaltungEinführung'
})
</script>

<template>
  <div class="intro">
    <h1>Willkommen zur Bücherverwaltung!</h1>
    <p>Diese Anwendung hilft Ihnen, Ihre Bücher effizient zu verwalten.</p>

    <div class="features">
      <h2>Funktionen:</h2>
      <ul>
        <li>Bücher hinzufügen</li>
        <li>Bücher bearbeiten und löschen</li>
        <li>Details zu jedem Buch anzeigen</li>
      </ul>
    </div>

    <div class="instructions">
      <h2>Anleitung:</h2>
      <p>
        Klicken Sie im Menü auf "Bücherliste", um alle Bücher anzuzeigen. Von dort aus können Sie
        auch neue Bücher hinzufügen, bestehende bearbeiten oder löschen.
      </p>
    </div>
  </div>
</template>

<style scoped>
.intro {
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.features {
  margin-top: 20px;
}

.instructions {
  margin-top: 20px;
}

ul {
  list-style-type: disc;
  text-align: left;
  margin: 0 auto;
  max-width: 400px;
}

h1, h2 {
  color: #2c3e50;
}

p {
  color: #34495e;
  font-size: 1.1em;
}
</style>
