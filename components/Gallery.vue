<template>
  <div class="gallery-container">
    <button
      @click="updatePhotosToShow('left')"
      class="slide-button-left slide-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 110.18 252.62"
        class="arrow-svg"
      >
        <defs>
          <style>
            .a {
              fill: none;
              stroke: white;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 8px;
            }
          </style>
        </defs>
        <title>arrow</title>
        <polyline class="a" points="106.18 4 5.18 126.5 105.87 248.62" />
      </svg>
    </button>
    <GalleryItem
      v-for="(woman, index) of women"
      :key="woman.full_name + '_image_container'"
      :woman="woman"
      :data-person="woman.full_name"
      :photoIndex="index"
      :photosToShow="photosToShow"
    >
    </GalleryItem>
    <button
      @click="updatePhotosToShow('right')"
      class="slide-button-right slide-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 110.18 252.62"
        class="arrow-svg"
      >
        <defs>
          <style>
            .a {
              fill: none;
              stroke: white;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 8px;
            }
          </style>
        </defs>
        <title>arrow-right</title>
        <polyline class="a" points="4 4 105 126.5 4.31 248.62" />
      </svg>
    </button>
  </div>
</template>

<script>
import GalleryItem from './GalleryItem.vue'

export default {
  components: {
    GalleryItem
  },
  data() {
    return {
      photosToShow: [1, 2, 3]
    }
  },
  computed: {
    women() {
      return this.$store.state.women
    }
  },
  methods: {
    updatePhotosToShow(direction) {
      if (direction === 'left' && this.photosToShow[0] > 0) {
        this.photosToShow = this.photosToShow.map((x) => x - 1)
      }

      if (
        direction === 'right' &&
        this.photosToShow[this.photosToShow.length - 1] <
          this.$store.state.women.length - 1
      ) {
        this.photosToShow = this.photosToShow.map((x) => x + 1)
      }
    }
  }
}
</script>

<style scoped>
.gallery-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.slide-button {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 5rem;
  background-color: transparent;
  border: 0;
  color: white;
  font-weight: bold;
  font-size: 3em;
  overflow: hidden;
  cursor: pointer;
  z-index: 3;
}

.slide-button:active {
  outline: none;
  border: none;
}

.slide-button-left {
  left: 0;
}

.slide-button-right {
  right: 0;
}

.arrow-svg {
  width: 0.8em;
}
</style>
