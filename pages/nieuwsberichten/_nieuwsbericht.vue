<template>
  <article>
    <h1>{{ newsItem.title }}</h1>
    <h2>{{ newsItem.date }}</h2>
    <p>{{ newsItem.description }}</p>
    <div v-html="$md.render(newsItem.body)" />
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { newsItem: payload }
    else
      return {
        newsItem: await require(`~/assets/content/newsitems/${params.newsItem}.json`)
      }
  }
}
</script>
