<template>
  <div class="detail-container">
    <img :src="woman.image" class="photo" alt="" />
    <h2 class="full-name">
      {{ `${woman.first_name} ${woman.last_name}` }}
    </h2>
    <div class="quotes-text-wrapper">
      <ul class="quotes">
        <li v-for="quote of woman.quotes" :key="quote" class="quote">
          {{ quote }}
        </li>
      </ul>
    </div>
    <div class="about-text-wrapper">
      <h3 class="profession">{{ woman.profession }}</h3>
      <p class="function">{{ woman.function }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    woman: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.detail-container {
  padding: 1rem 2.5rem;
  color: white;
  font-family: var(--font);
  display: grid;
  grid-template-areas: 'photo fullname about' 'photo quotes about';
  grid-template-columns: 3fr 5fr 1fr;
  grid-template-rows: 2.5rem 1fr;
}

.photo {
  width: 100%;
  grid-area: photo;
}

.quotes-text-wrapper {
  margin: 0 2.5rem;
  grid-area: quotes;
}

.about-text-wrapper {
  display: flex;
  flex-direction: column;
  grid-area: about;
}

.profession {
  font-size: 1.6rem;
}

.function {
  color: var(--grey);
  width: 10rem;
}

.full-name {
  font-size: 2rem;
  font-weight: normal;
  grid-area: fullname;
  margin-left: 2.5rem;
}

.quotes {
  list-style-type: none;
  padding: 0;
}

.quote {
  margin-top: 2em;
  text-align: justify;
  font-size: 1.3em;
}

@media (max-width: 1350px) {
  .detail-container {
    grid-template-areas:
      'photo fullname'
      'photo about'
      'photo quotes';
    grid-template-columns: 3fr 5fr;
    grid-template-rows: 4rem 5rem 1fr;
  }
  .about-text-wrapper {
    margin-left: 2.5rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 700px) {
  .detail-container {
    grid-template-areas:
      'photo'
      'fullname'
      'about'
      'quotes';
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .about-text-wrapper,
  .full-name {
    padding-top: 2rem;
  }

  .quote {
    margin-top: 0;
    margin-bottom: 2em;
  }
}
</style>
