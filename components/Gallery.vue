<template>
  <div class="gallery-container">
    <button
      @click="updatePhotosToShow('left')"
      @keyup.left="updatePhotosToShow('left')"
      @keyup.right="updatePhotosToShow('right')"
      v-if="possibleLeft"
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
      :key="woman.first_name + '_image_container'"
      :woman="woman"
      :data-person="woman.first_name"
      :photoIndex="index"
      :photosToShow="photosToShow"
      :mobile="mobile"
    >
    </GalleryItem>
    <button
      @click="updatePhotosToShow('right')"
      @keyup.right="updatePhotosToShow('right')"
      @keyup.left="updatePhotosToShow('left')"
      v-if="possibleRight"
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
    <ul class="preloader"></ul>
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
      photosToShow: [3, 4, 5],
      possibleLeft: true,
      possibleRight: true,
      mobile: false
    }
  },
  computed: {
    women() {
      function compare(a, b) {
        if (a.position < b.position) {
          return -1
        }
        if (a.position > b.position) {
          return 1
        }
        return 0
      }
      return this.$store.state.women.slice().sort(compare)
    }
  },
  mounted() {
    this.photosToShow = this.checkMobile()
    this.preloadPhotos()
  },
  methods: {
    preloadPhotos() {
      const preloaderElement = document.querySelector('.preloader')
      for (let i = 0; i < this.women.length; i += 1) {
        const newItem = document.createElement('li')
        newItem.style = `background: center / cover no-repeat url(${this.women[i].image});`
        preloaderElement.appendChild(newItem)
      }
    },
    checkMobile() {
      let photos = []
      if (window) {
        if (window.innerWidth < 700) {
          this.mobile = true
          photos = [3]
        } else if (window.innerWidth < 1350) {
          this.mobile = true
          photos = [3, 4]
        } else {
          photos = [3, 4, 5]
        }
      }
      return photos
    },
    updatePhotosToShow(direction) {
      if (direction === 'left' && this.photosToShow[0] > 0) {
        this.photosToShow = this.photosToShow.map((x) => x - 1)
        if (this.photosToShow[0] === 0) this.possibleLeft = false
        if (
          this.photosToShow[this.photosToShow.length - 1] <
          this.women.length - 1
        )
          this.possibleRight = true
      }

      if (
        direction === 'right' &&
        this.photosToShow[this.photosToShow.length - 1] <
          this.$store.state.women.length - 1
      ) {
        this.photosToShow = this.photosToShow.map((x) => x + 1)
        if (
          this.photosToShow[this.photosToShow.length - 1] ===
          this.women.length - 1
        )
          this.possibleRight = false
        if (this.photosToShow[0] > 0) this.possibleLeft = true
      }
    }
  }
}
</script>

<style>
.gallery-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.preloader {
  position: absolute;
  height: 0;
  width: 0;
  left: -1000px;
  top: -1000px;
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
  transition: transform 1s ease;
}

.slide-button:hover {
  transform: scale(1.2);
}

.slide-button:active {
  outline: none;
  border: none;
  background-color: transparent;
}

.slide-button-left {
  left: 0;
  padding: 0 0 0 2rem;
}

.slide-button-right {
  right: 0;
  padding: 0 2rem 0 0;
}

.arrow-svg {
  width: 1.5rem;
}
</style>
