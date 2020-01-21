<template>
  <div class="detail-container">
    <img :src="woman.image" class="photo" alt="" />
    <div class="quotes-text-wrapper">
      <h2 class="full-name">
        {{ `${woman.first_name} ${woman.last_name}` }}
      </h2>
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
  padding: 10rem 2.5rem;
  color: white;
  display: flex;
  font-family: var(--font);
  flex-wrap: wrap;
  justify-content: space-between;
}

.photo {
  width: 25%;
}

.quotes-text-wrapper {
  width: 50%;
  margin: 0 2.5rem;
}

.about-text-wrapper {
  display: flex;
  flex-direction: column;
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

@media (max-width: 700px) {
  .photo {
    width: 100%;
  }
}

@media (max-width: 1350px) {
}
</style>
