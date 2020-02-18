export default {
  setWomen(state, women) {
    state.women = women
  },
  setSocial(state, social) {
    state.social = social
  },
  setInformation(state, information) {
    state.information = information
  },
  setNews(state, news) {
    state.news = news
  },
  setnewsitems(state, newsitems) {
    function onDate(a, b) {
      const aDate = new Date(a)
      const bDate = new Date(b)
      if (aDate < bDate) return false
      else return true
    }
    state.newsitems = newsitems.sort(onDate)
  }
}
