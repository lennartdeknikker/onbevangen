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
