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
          <button class="button-more-info">
            <svg viewBox="0 0 253 253" class="plus-svg">
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
              <line class="a" x1="126.5" y1="4" x2="126.5" y2="249" />
              <line class="a" x1="4" y1="126.5" x2="249" y2="126.5" />
            </svg>
          </button>
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
      show: false
    }
  },
  computed: {
    style() {
      return `background: center / cover no-repeat url(${this.woman.image});`
    }
  }
}
</script>

<style>
.slide-enter-active {
  transition: opacity 1.5s;
}

.slide-enter {
  opacity: 0;
}

.gallery-item {
  height: 100%;
  width: 33.33%;
}

@media (max-width: 1350px) {
  .gallery-item {
    height: 100%;
    width: 50%;
  }
}

@media (max-width: 880px) {
  .gallery-item {
    height: 100%;
    width: 100%;
  }
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
  width: 8rem;
  cursor: pointer;
}

.name {
  font-family: var(--font);
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 13rem;
}

.first-name {
  font-size: 2.7rem;
  font-weight: normal;
}

.info-wrapper {
  width: 10rem;
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
  width: 10rem;
}
</style>
