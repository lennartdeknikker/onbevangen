<template>
  <div class="container">
    <Header :page="'detail'" />
    <Detail :woman="detail" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Detail from '~/components/Detail.vue'

export default {
  components: {
    Header,
    Detail
  },
  async asyncData({ params, payload }) {
    if (payload) return { detail: payload }
    else
      return {
        detail: await require(`~/assets/content/women/${params.detail}.json`)
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
  background-color: black;
}

button:focus {
  outline: none;
  background: transparent;
}

.json {
  color: white;
}
</style>
