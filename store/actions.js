export default {
  async nuxtServerInit({ commit }) {
    // project data
    const womenFiles = await require.context(
      '~/assets/content/women/',
      false,
      /\.json$/
    )
    const women = womenFiles.keys().map((key) => {
      const res = womenFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    await commit('setWomen', women)
  }
}
