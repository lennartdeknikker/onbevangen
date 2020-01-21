<template>
  <div class="vrouw-container">
    {{ vrouw }}
  </div>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { vrouw: payload }
    else
      return {
        vrouw: await require(`~/assets/content/women/${params.vrouw}.json`)
      }
  }
}
</script>
