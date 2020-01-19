<template>
  <nav class="nav-container">
    <ul class="nav-items">
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
  </nav>
</template>

<script>
import Social from './Social.vue'
export default {
  components: {
    Social
  }
}
</script>

<style scoped>
.nav-container {
  display: flex;
  width: 50%;
}

a {
  color: white;
  font-family: var(--font);
  text-decoration: none;
  font-size: 1.2em;
}

.nav-items {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 2rem;
}

.nav-item {
  margin-left: 2rem;
}

.language-indicator-not-selected {
  color: #b3b3b3;
}
</style>
