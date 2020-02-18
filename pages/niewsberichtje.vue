<template>
  <div class="container">
    <Header :page="'detail'" />
    <section class="newsitem">
      <article class="text">
        <h1 v-if="newsitem.title" class="newsitem-title">
          {{ newsitem.title }}
        </h1>
        <h2 v-if="newsitem.date" class="newsitem-date">
          {{ normalizeDate(newsitem.date) }}
        </h2>
        <p
          v-if="newsitem.body"
          v-html="$md.render(newsitem.body)"
          class="newsitem-description"
        ></p>
        <!-- <div class="newsitem-body"  /> -->
      </article>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  },
  computed: {
    newsitem() {
      return this.$store.state.newsitems[2]
    }
  },
  methods: {
    normalizeDate(value) {
      const date = new Date(value)
      function addPad(value) {
        return String(value).padStart(2, '0')
      }
      return `${addPad(date.getDate())}/${addPad(date.getMonth() + 1)}/${addPad(
        date.getFullYear()
      )}
  ${addPad(date.getHours())}:${addPad(date.getMinutes())}`
    }
  }

  // async asyncData({ params, payload }) {
  //   if (payload) return { newsitem: payload }
  //   else
  //     return {
  //       newsitem: await require(`~/assets/content/newsitems/${params.newsitem}.json`)
  //     }
  // }
}
</script>

<style>
:root {
  --font: 'PT Sans Narrow', sans-serif;
  --grey: rgb(94, 94, 94);
}

.newsitem {
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: var(--font);
  color: white;
}

.text {
  width: 50%;
  min-width: 17rem;
  max-width: 42rem;
  margin: 0 2.5rem 2rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: black;
  font-family: var(--font);
}

.newsitem img {
  width: 100%;
}

.newsitem-title {
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
  border-bottom: 1px solid white;
  padding: 0 0 0.5rem 0;
}
.newsitem-date {
  color: white;
  font-size: 1rem;
  font-weight: normal;
  margin: 0.5rem 0 1rem 0;
  text-align: right;
}
.newsitem-description {
  color: white;
}
</style>
