<template>
  <div class="information-container">
    <section class="text">
      <article>
        <p class="introduction">
          Onbevangen is een serie naar het idee van journalist Ingeborg van der
          Ven. De verhalen van 8 vrouwen werkzaam op een toppositie binnen de
          Nederlandse kennissector. De portretten zijn sinds juni 2018 in
          ontwikkeling en vormen met het verhaal van Ingeborg zelf een serie van
          9. Politiek fotograaf Freek van den Bergh heeft de serie een extra
          dimensie gegeven door elke vrouw op een speciale locatie te
          portretteren.
        </p>
        <p class="quote">
          "We zetten onszelf graag vast in denkpatronen. Het is veilig. Jij bent
          bestuurder, jij docent. Dit is hoe het eruit ziet. Daarmee kunnen we
          het benoemen, gezamenlijk bespreken en aan elkaar overbrengen. Ik vond
          het geweldig om het afgelopen jaar te spelen met deze patronen."
        </p>
        <p class="ingeborg">Ingeborg van der Ven</p>
      </article>
    </section>
    <section class="thanks-text">
      <h2 class="thanks-title">Dankzij alle medewerking van:</h2>
      <ul class="thanks-list">
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
        <li><span class="task">Website:</span> Lennart de Knikker</li>
        <li>
          <span class="task">Vormgeving:</span> *Glitterstudio
          www.glitterstudio.nl
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
  padding: 10rem 2.5rem;
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
  font-weight: bold;
}

@media (max-width: 800px) {
  .text,
  .thanks-text {
    width: 100%;
  }
}
</style>
