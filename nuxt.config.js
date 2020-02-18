export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap'
      }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      { src: 'https://kit.fontawesome.com/80d7baaf7e.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit'],
  /*
   ** Build configuration
   */
  markdownit: {
    injected: true
  },
  generate: {
    routes() {
      const fs = require('fs')
      const womenRoutes = fs
        .readdirSync('./assets/content/women')
        .map((file) => {
          return {
            route: `/detail/${file.slice(0, -5)}`,
            payload: require(`./assets/content/women/${file}`)
          }
        })
      const newsitemRoutes = fs
        .readdirSync('./assets/content/newsitems')
        .map((file) => {
          return {
            route: `/nieuwsberichten/${file.slice(0, -5)}`,
            payload: require(`./assets/content/newsitems/${file}`)
          }
        })
      const allRoutes = newsitemRoutes.concat(womenRoutes)
      return allRoutes
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
