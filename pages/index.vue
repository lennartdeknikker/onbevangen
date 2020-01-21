<template>
  <div class="container">
    <Header />
    <Gallery />
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import Header from '~/components/Header.vue'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        { src: 'https://kit.fontawesome.com/80d7baaf7e.js' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap'
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }
      ]
    }
  },
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
}

.container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
}

button {
  outline: none;
}
</style>
