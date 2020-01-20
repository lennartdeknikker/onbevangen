<template>
  <transition name="slide">
    <div
      :style="style"
      v-if="photosToShow.includes(photoIndex)"
      @mouseenter="show = !show"
      @mouseleave="show = !show"
      class="gallery-item"
    >
      <transition name="trans-content">
        <div v-if="show" class="content">
          <h2 class="name">
            <span class="first-name">
              {{ woman.first_name }}
            </span>
            <span class="last-name">
              {{ woman.last_name }}
            </span>
          </h2>
          <button class="button-more-info">+</button>
          <div class="info-wrapper">
            <h3 class="profession">{{ woman.profession }}</h3>
            <p class="function">{{ woman.function }}</p>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    woman: {
      type: Object,
      required: true
    },
    photoIndex: {
      type: Number,
      required: true
    },
    photosToShow: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      show: true
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
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1.5s;
  z-index: -1;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.gallery-item {
  height: 100%;
  width: 33.33%;
}

/* content card styling */
.content {
  height: 100%;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 6rem 2.5rem 5rem 2.5rem;
}

.trans-content-enter-active,
.trans-content-leave-active {
  transition: opacity 0.3s;
  z-index: -1;
}

.trans-content-enter,
.trans-content-leave-to {
  opacity: 0;
}

.button-more-info {
  align-self: center;
  border: 0;
  background: none;
  color: white;
  font-size: 10rem;
}

.name {
  font-family: var(--font);
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10rem;
}

.first-name {
  font-size: 2.7rem;
  font-weight: normal;
}

.info-wrapper {
  width: 7rem;
  margin-right: 3rem;
  height: 8rem;
}

.profession {
  font-family: var(--font);
  font-size: 1.6rem;
}

.function {
  font-family: var(--font);
  color: var(--grey);
}
</style>
