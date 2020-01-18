<template>
  <div class="gallery-container">
    <GalleryItem
      v-for="woman of women"
      :key="woman.full_name + '_image_container'"
      :woman="woman"
      :data-person="woman.full_name"
    >
    </GalleryItem>
  </div>
</template>

<script>
import GalleryItem from './GalleryItem.vue'

export default {
  components: {
    GalleryItem
  },
  computed: {
    women() {
      return this.$store.state.women
    }
  }
}
</script>

<style scoped>
.gallery-container {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
