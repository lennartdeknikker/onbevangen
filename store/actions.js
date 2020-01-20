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

    // social data
    const socialFiles = await require.context(
      '~/assets/content/general/',
      false,
      /\.json$/
    )
    const social = socialFiles.keys().map((key) => {
      const res = socialFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    await commit('setSocial', social)
    await commit('setWomen', women)
  }
}
