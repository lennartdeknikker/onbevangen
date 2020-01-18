<template>
  <div :style="style" class="gallery-item"></div>
</template>

<script>
export default {
  props: {
    woman: {
      type: Array,
      required: true
    }
  },
  computed: {
    style() {
      return `background: center / cover no-repeat url(${this.woman.image});`
    }
  }
}
</script>

<style scoped>
.gallery-item {
  height: 100%;
  width: 33%;
}
</style>
