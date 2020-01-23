<template>
  <div class="information-container">
    <section class="text">
      <article>
        <p class="introduction">
          {{ information.text.introduction }}
        </p>
        <p class="quote">
          {{ information.text.quote }}
        </p>
        <p class="ingeborg">
          {{ information.text.author }}
        </p>
      </article>
    </section>
    <section class="thanks-text">
      <h2 class="thanks-title">{{ information.thanks.head }}</h2>
      <ul class="thanks-list">
        <li v-for="helper of information.thanks.helpers" :key="helper.name">
          <span class="task">{{ helper.task }}:</span> {{ helper.name }}
        </li>
        <br />
        <br />
        <br />
        <li>
          <span class="task">Projectteam:</span> Naar een idee van Ingeborg van
          der Ven
        </li>
        <li><span class="task">Interviews:</span> Ingeborg van der Ven</li>
        <li>
          <span class="task">Redactie:</span> Manon Blonk Marliese Vollebregt
          Katrin Blomquist Rosanne Sanne Bakelaar
        </li>
        <li><span class="task">Eindredactie:</span> Ingeborg van der Ven</li>
        <li><span class="task">Fotografie:</span> Freek van den Bergh</li>
        <li>
          <span class="task">Website:</span> Lennart de Knikker,
          <a class="link-in-text" href="https://lenn4rt.com/">lenn4RT.com</a>
        </li>
        <li>
          <span class="task">Vormgeving:</span> *Glitterstudio
          <a class="link-in-text" href="https://www.glitterstudio.nl/"
            >www.glitterstudio.nl</a
          >
        </li>
        <li>
          <span class="task">Productie expositie:</span> Kiekie Fotolab Planemos
        </li>
        <li>
          <span class="task">Bijzonder speciale dank aan:</span> Rianne
          Letschert Ingrid van Engelshoven Jean Marie Molina Kitty Nijmeijer
          Nienke Meijer Aminata Caïro Joanne van der Leun Susana Menéndez
        </li>
        <li>
          <span class="task">En:</span> Rijkmuseum Boerhaave Kunstmuseum Den
          Haag Tropenmuseum Hotel Arena Amsterdam Jakarta Hotel Hortus Botanicus
          Leiden Alle ondersteunende staf, secretaresses, facilitair medewerkers
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    information() {
      return this.$store.state.information[0]
    },
    social() {
      return this.$store.state.social[0].social
    },
    facebookLink() {
      function isFbLink(link) {
        return link.name === 'Facebook'
      }
      return this.social.find(isFbLink).link
    },
    instagramLink() {
      function isFbLink(link) {
        return link.name === 'Instagram'
      }
      return this.social.find(isFbLink).link
    }
  }
}
</script>

<style scoped>
p {
  text-align: justify;
}

.information-container {
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: var(--font);
  color: white;
}

.text {
  width: 50%;
  min-width: 17rem;
  max-width: 42rem;
  margin: 0 2.5rem 2rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.thanks-text {
  min-width: 17rem;
  margin-right: 2.5rem;
}

.thanks-title,
.exposition-title {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  font-weight: normal;
}

.thanks-list {
  list-style-type: none;
  padding: 0;
  max-width: 23em;
}

.task {
  color: var(--grey);
}

.introduction {
  margin-bottom: 1em;
}

.quote {
  margin-bottom: 1em;
  font-style: italic;
  margin-left: 1rem;
}

.ingeborg {
  align-self: flex-end;
  margin-bottom: 2em;
}

.exposition-text {
  margin-bottom: 1em;
}

.launch-text {
  font-size: 1.5em;
}

.link-in-text {
  font-size: 1em;
  transition: font-size 0.5s ease;
}

.link-in-text:hover {
  font-size: 1.1em;
}

body {
  align-items: center;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  height: 100vh;
  justify-content: center;
}

@media (max-width: 800px) {
  .text,
  .thanks-text {
    width: 100%;
  }
}
</style>
