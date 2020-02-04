<template>
  <div class="container">
    <Header :page="'index'" class="fixed" />
    <Gallery />
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
    Gallery
  },
  computed: {
    women() {
      return this.$store.state.women
    }
  }
}
</script>

<style>
:root {
  --font: 'PT Sans Narrow', sans-serif;
  --grey: rgb(94, 94, 94);
  --grey-light: #b3b3b3;
}

.container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: black;
}

button:focus {
  outline: none;
  background: transparent;
}

.fixed {
  position: fixed;
  z-index: 4;
}
</style>
