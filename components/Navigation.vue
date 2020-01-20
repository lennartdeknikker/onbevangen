<template>
  <nav class="nav-container">
    <ul class="full-menu">
      <li class="nav-item"><a href="/nieuws">nieuws</a></li>
      <li class="nav-item"><a href="/nieuws">informatie</a></li>
      <li><Social /></li>
      <li class="nav-item">
        <a href="/nieuws"
          ><span class="language-indicator-not-selected">EN</span>/<span
            >NL</span
          ></a
        >
      </li>
    </ul>
    <div :class="{ unfolded: showMobileMenu }" class="mobile-menu-container">
      <button @click="showMobileMenu = !showMobileMenu" class="toggle-menu">
        <i class="fas fa-bars"></i>
      </button>
      <ul v-if="showMobileMenu" class="mobile-menu">
        <li class="nav-item"><a href="/nieuws">Foto's</a></li>
        <li class="nav-item"><a href="/nieuws">Informatie</a></li>
        <li class="nav-item">
          <a href="/nieuws">Nieuws</a>
        </li>
        <li class="nav-item"><Social /></li>
        <li class="nav-item">
          <a href="/nieuws" class="language-indicators"
            ><span class="language-indicator-not-selected">EN</span>/<span
              >NL</span
            ></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Social from './Social.vue'
export default {
  components: {
    Social
  },
  data() {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style scoped>
.mobile-menu-container {
  display: none;
}
.mobile-menu {
  display: none;
}

.toggle-menu {
  display: none;
}

.nav-container {
  display: flex;
  margin-right: 2rem;
}

a {
  color: white;
  font-family: var(--font);
  text-decoration: none;
  font-size: 1.2em;
}

.full-menu {
  display: flex;
  justify-content: flex-end;
  width: auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 2rem;
}

.nav-item {
  margin-left: 2rem;
  height: auto;
}

.language-indicator-not-selected {
  color: #b3b3b3;
}

@media (max-width: 800px) {
  .toggle-menu {
    display: flex;
    position: fixed;
    right: 2rem;
    top: 2rem;
    font-size: 1.5rem;
    color: white;
    background-color: transparent;
    border: none;
    height: auto;
    font-size: 2.2rem;
  }

  .mobile-menu-container {
    display: flex;
  }

  .unfolded {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    justify-content: center;
  }
  .full-menu {
    display: none;
  }
  .nav-item {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    min-height: 3rem;
    align-items: center;
    display: flex;
  }
  .language-indicators {
    font-size: 1.7rem;
  }
}
</style>
