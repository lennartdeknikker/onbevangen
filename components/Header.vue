<template>
  <div class="header-container">
    <h1 class="title">{{ title.toUpperCase() }}</h1>
    <Navigation />
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  components: {
    Navigation
  },
  data() {
    return {
      title: 'Onbevangen'
    }
  }
}
</script>

<style scoped>
.header-container {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 10em;
  z-index: 3;
}
.title {
  height: 4em;
  font-family: var(--font);
  color: white;
  font-size: 3.5em;
  font-weight: normal;
  margin: 1.5rem 2rem;
}
</style>
