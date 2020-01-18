<template>
  <div class="container">
    <Gallery />
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  components: {
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
.container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
