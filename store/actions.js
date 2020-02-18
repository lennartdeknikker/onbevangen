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

    // information data
    const informationFiles = await require.context(
      '~/assets/content/information/',
      false,
      /\.json$/
    )
    const information = informationFiles.keys().map((key) => {
      const res = informationFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    // news data
    const newsFiles = await require.context(
      '~/assets/content/news/',
      false,
      /\.json$/
    )
    const news = newsFiles.keys().map((key) => {
      const res = newsFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    // news items
    const newsItemFiles = await require.context(
      '~/assets/content/newsitems/',
      false,
      /\.json$/
    )
    const newsItems = newsItemFiles.keys().map((key) => {
      const res = newsItemFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    await commit('setSocial', social)
    await commit('setWomen', women)
    await commit('setInformation', information)
    await commit('setNews', news)
    await commit('setNewsItems', newsItems)
  }
}
