<template>
  <div
    :class="{
      onlyDisplayOnHover: page === 'index' && mobile === false,
      appearAfterDelay: mobile === true
    }"
    class="header-container"
  >
    <a href="/"
      ><h1 class="title">{{ title.toUpperCase() }}</h1></a
    >
    <Navigation :page="page" />
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  components: {
    Navigation
  },
  props: {
    page: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: 'Onbevangen',
      mobile: false
    }
  },
  mounted() {
    this.photosToShow = this.checkMobile()
  },
  methods: {
    checkMobile() {
      if (window) {
        if (window.innerWidth < 700) {
          this.mobile = true
        } else if (window.innerWidth < 1350) {
          this.mobile = true
        } else {
        }
      }
    }
  }
}
</script>

<style>
.header-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  transition: opacity 1s ease;
}

.appearAfterDelay {
  transition-delay: 2500ms;
}

.onlyDisplayOnHover {
  opacity: 0;
}

.onlyDisplayOnHover:hover {
  opacity: 1;
}

.title {
  font-family: var(--font);
  color: white;
  font-size: 3.5em;
  font-weight: normal;
  margin: 1.5rem 2rem;
}

@media (max-width: 800px) {
  .title {
    font-size: 2.5rem;
  }
}
</style>
