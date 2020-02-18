<template>
  <div class="container">
    <Header :page="'nieuws'" />
    <News :newsitems="newsitems" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import News from '~/components/News.vue'

export default {
  components: {
    Header,
    News
  },
  computed: {
    newsitems() {
      return this.$store.state.newsitems
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
</style>
