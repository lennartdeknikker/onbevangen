<template>
  <div class="container">
    <Header :page="'informatie'" />
    <Information />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Information from '~/components/Information.vue'

export default {
  components: {
    Header,
    Information
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
