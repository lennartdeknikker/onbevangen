<template>
  <ul class="social-buttons">
    <li v-for="link in social" :key="link.name" class="social-button">
      <a :href="link.link">
        <i :class="link.FAIconClass"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    social() {
      return this.$store.state.social[0].social
    }
  }
}
</script>

<style scoped>
a {
  color: white;
  font-family: var(--font);
  text-decoration: none;
  font-size: 1.2em;
}

.social-button {
  margin-left: 1.3rem;
  transition: transform 0.5s ease;
}

.social-button:hover {
  transform: scale(1.2);
}

.social-buttons {
  display: flex;
  padding: 0;
  list-style-type: none;
  margin-left: 1rem;
}
</style>
