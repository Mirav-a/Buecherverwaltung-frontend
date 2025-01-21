<template>
  <div>
    <h1>Über uns</h1>
    <p>
      Willkommen bei der Buchverwaltung! Unsere Mission ist es, Ihnen eine einfache und effiziente Möglichkeit zu bieten, Ihre Bücher zu organisieren. Ob Sie begeisterter Leser, Sammler oder einfach jemand sind, der den Überblick über die eigene Bibliothek behalten möchte – wir sind hier, um Ihnen zu helfen.
    </p>
    <div class="mission">
      <h2>Unsere Mission</h2>
      <p>
        Wir glauben daran, dass Bücher nicht nur Objekte sind, sondern Geschichten, Wissen und Inspiration tragen. Unser Ziel ist es, die Verwaltung Ihrer Bücher so einfach und angenehm wie möglich zu gestalten.
      </p>
    </div>
    <div class="features">
      <h2>Warum uns wählen?</h2>
      <ul>
        <li><strong>Benutzerfreundlich:</strong> Eine intuitive Oberfläche, die leicht zu bedienen ist.</li>
        <li><strong>Flexibel:</strong> Greifen Sie von überall auf Ihre Sammlung zu – egal, ob auf dem Desktop, Tablet oder Smartphone.</li>
        <li><strong>Anpassbar:</strong> Passen Sie die Funktionen genau an Ihre Bedürfnisse an.</li>
        <li><strong>Effizient:</strong> Sparen Sie Zeit und behalten Sie den Überblick über Ihre Bücher.</li>
      </ul>
    </div>
    <div class="cta">
      <p>Neugierig? Probieren Sie unsere Buchverwaltung noch heute aus und erleben Sie, wie einfach es sein kann!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Keine spezielle Logik notwendig
</script>

<style scoped>
/* Hauptüberschrift */
h1 {
  font-size: 2.5rem;
  color: #42b983;
  text-align: center;
  margin-bottom: 1rem;
}

/* Absätze */
p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto 1.5rem auto;
  max-width: 800px; /* Begrenzte Breite für bessere Lesbarkeit */
}

/* Unterüberschriften */
h2 {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* Liste */
ul {
  list-style-type: disc;
  margin: 0 auto;
  padding: 0;
  max-width: 800px;
  color: #555;
}

li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* Call-to-Action-Bereich */
.cta {
  background-color: #f4f4f4;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.cta p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}
</style>
