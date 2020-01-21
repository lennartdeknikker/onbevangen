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

<style>
.header-container {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 4;
  min-width: 600px;
}
.title {
  font-family: var(--font);
  color: white;
  font-size: 3.5em;
  font-weight: normal;
  margin: 1.5rem 2rem;
}

@media (max-width: 800px) {
  .title {
    font-size: 2.5rem;
  }
}
</style>
