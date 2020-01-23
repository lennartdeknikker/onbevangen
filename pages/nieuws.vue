<template>
  <div class="container">
    <Header :page="'nieuws'" />
    <News />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import News from '~/components/News.vue'

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
    News
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
</style>
