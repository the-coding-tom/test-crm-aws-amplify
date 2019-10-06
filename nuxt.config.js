const pkg = require('./package')

const baseURL = 'https://shack15-staging.herokuapp.com/api/v1'

module.exports = {
  mode: 'universal',
  router: {
    middleware: ['auth']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL
  },
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `/login`,
            method: 'post',
            propertyName: 'data.access_token'
          },
          logout: {
            url: 'https://shack15-staging.herokuapp.com/api/v1/logout',
            method: 'get'
          },
          user: {
            url: 'https://shack15-staging.herokuapp.com/api/v1/user',
            method: 'get',
            propertyName: 'data'
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

console.log(process.env.baseUrl)
