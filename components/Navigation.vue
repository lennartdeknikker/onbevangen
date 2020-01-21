<template>
  <nav class="nav-container">
    <ul class="full-menu">
      <li class="nav-item">
        <a :class="{ selected: page === 'nieuws' }" class="link" href="/nieuws"
          >Nieuws</a
        >
      </li>
      <li class="nav-item">
        <a
          :class="{ selected: page === 'informatie' }"
          class="link"
          href="/informatie"
          >Informatie</a
        >
      </li>
      <li><Social /></li>
      <li class="nav-item">
        <a class="link" href="#"
          ><span class="language-indicator-not-selected">EN</span>/<span
            >NL</span
          ></a
        >
      </li>
    </ul>
    <div :class="{ unfolded: showMobileMenu }" class="mobile-menu-container">
      <button @click="showMobileMenu = !showMobileMenu" class="toggle-menu">
        <svg
          v-if="!showMobileMenu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          class="i-cross"
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
          <title>Artboard 4</title>
          <line class="a" x1="37" y1="85" x2="282" y2="85" />
          <line class="a" x1="37" y1="150" x2="282" y2="150" />
          <line class="a" x1="37" y1="215" x2="282" y2="215" />
        </svg>
        <svg
          v-if="showMobileMenu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          class="i-menu"
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
          <title>Artboard 3</title>
          <line class="a" x1="63.38" y1="63.38" x2="236.62" y2="236.62" />
          <line class="a" x1="63.38" y1="236.62" x2="236.62" y2="63.38" />
        </svg>
      </button>
      <ul v-if="showMobileMenu" class="mobile-menu">
        <li class="nav-item"><a class="link" href="/">Foto's</a></li>
        <li class="nav-item">
          <a
            :class="{ selected: page === 'informatie' }"
            class="link"
            href="/informatie"
            >Informatie</a
          >
        </li>
        <li class="nav-item">
          <a
            :class="{ selected: page === 'nieuws' }"
            class="link"
            href="/nieuws"
            >Nieuws</a
          >
        </li>
        <li class="nav-item"><Social /></li>
        <li class="nav-item">
          <a href="#" class="language-indicators link"
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
  props: {
    page: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style>
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

.link {
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
  color: var(--grey-light);
}

.selected {
  color: var(--grey-light);
}

.i-cross,
.i-menu {
  width: 1em;
}

@media (max-width: 780px) {
  .toggle-menu {
    display: flex;
    position: absolute;
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
