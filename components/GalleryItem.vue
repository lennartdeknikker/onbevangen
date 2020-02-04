<template>
  <transition name="slide">
    <div
      v-if="photosToShow.includes(photoIndex)"
      @click="toggleVisible = !toggleVisible"
      class="gallery-item"
    >
      <img :src="woman.image" class="image" />
      <transition name="trans-content">
        <div
          :class="{ actOnHover: !mobile }"
          v-if="!mobile | toggleVisible"
          class="content"
        >
          <h2 class="name">
            <span class="first-name">
              {{ woman.first_name }}
            </span>
            <span class="last-name">
              {{ woman.last_name }}
            </span>
          </h2>
          <a :href="route" class="button-more-info">
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
          </a>
          <div class="info-wrapper">
            <h3 class="profession">{{ woman.profession.nl }}</h3>
            <p class="function">{{ woman.function.nl }}</p>
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
    },
    mobile: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      route: `${
        this.woman.position
      }-${this.woman.first_name
        .toLowerCase()
        .replace(/\s+/g, '-')}-${this.woman.last_name
        .toLowerCase()
        .replace(/\s+/g, '-')}`,
      toggleVisible: false
    }
  }
}
</script>

<style>
.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-enter-active {
  transition: opacity 1.5s;
}

.slide-enter {
  opacity: 0;
}

.gallery-item {
  height: 100vh;
  width: 100%;
  overflow: hidden;
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
  padding: 8rem 2.5rem 5rem 2.5rem;
  position: absolute;
  top: 0;
}

.actOnHover:hover {
  opacity: 1;
}

.actOnHover {
  opacity: 0;
  transition: opacity 0.4s ease;
}

.trans-content-enter-active,
.trans-content-leave-active {
  transition: opacity 0.4s;
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

.button-more-info:hover {
  transform: scale(1.2);
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

@media (min-width: 700px) {
  .gallery-item {
    width: 50%;
  }

  .content {
    width: 50%;
  }
}

@media (min-width: 1350px) {
  .gallery-item {
    width: 33.33%;
  }

  .content {
    width: 33.33%;
  }
}
</style>
