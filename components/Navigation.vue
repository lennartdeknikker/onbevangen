<template>
  <nav class="nav-container">
    <ul class="full-menu">
      <li class="nav-item">
        <a
          :class="{ selected: page === 'nieuws' }"
          :href="online ? '/nieuws' : '/'"
          class="link"
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
      <li v-if="enableMultiLang" class="nav-item">
        <a class="link" href="#"
          ><span class="language-indicator-not-selected">EN</span>/<span
            >NL</span
          ></a
        >
      </li>
    </ul>
    <div :class="{ unfolded: showMobileMenu }" class="mobile-menu-container">
      <button @click="showMobileMenu = !showMobileMenu" class="toggle-menu">
        <span id="x" :class="{ clicked: showMobileMenu }"></span>
      </button>
      <ul v-if="showMobileMenu" class="mobile-menu">
        <li v-if="online" class="nav-item">
          <a class="link" href="/">Foto's</a>
        </li>
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
            :href="online ? '/nieuws' : '/'"
            class="link"
            >Nieuws</a
          >
        </li>
        <li class="nav-item"><Social /></li>
        <li v-if="enableMultiLang" class="nav-item">
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
      showMobileMenu: false,
      enableMultiLang: false,
      online: true,
      mobile: false
    }
  },
  methods: {
    checkMobile() {
      if (window) {
        if (window.innerWidth < 700) {
          this.mobile = true
        } else if (window.innerWidth < 1350) {
          this.mobile = true
        }
      }
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
  cursor: pointer;
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

.icon-line {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 10px;
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

/* menu icon transitions */
span {
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 0px;
  margin: 15% auto;
  -webkit-transition: all 0.3s ease, -webkit-transform 0.2s ease;
  transition: all 0.3s ease, transform 0.2s ease;
  background: -webkit-linear-gradient(
      top,
      transparent 0%,
      transparent 10%,
      white 10%,
      white 16%,
      transparent 16%,
      transparent 47%,
      white 47%,
      white 53%,
      transparent 53%,
      transparent 84%,
      white 84%,
      white 90%,
      transparent 90%
    ),
    -webkit-linear-gradient(transparent, transparent);
  background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 10%,
      white 10%,
      white 16%,
      transparent 16%,
      transparent 47%,
      white 47%,
      white 53%,
      transparent 53%,
      transparent 84%,
      white 84%,
      white 90%,
      transparent 90%
    ),
    linear-gradient(transparent, transparent);
}
span:active,
span:hover {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
span.clicked {
  background: -webkit-linear-gradient(
      135deg,
      transparent 0%,
      transparent 48%,
      white 48%,
      white 52%,
      transparent 52%,
      transparent 100%
    ),
    -webkit-linear-gradient(45deg, transparent 0%, transparent 48%, white 49%, white
          51%, transparent 51%, transparent 100%);
  background: linear-gradient(
      -45deg,
      transparent 0%,
      transparent 48%,
      white 49%,
      white 51%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(
      45deg,
      transparent 0%,
      transparent 48%,
      white 49%,
      white 51%,
      transparent 51%,
      transparent 100%
    );
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
span.clicked:active,
span.clicked:hover {
  -webkit-transform: scale(0.9) rotate(180deg);
  -ms-transform: scale(0.9) rotate(180deg);
}
</style>
