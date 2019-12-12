const pkg = require('./package')
const webpack = require('webpack')
const config = require('dotenv').config()

let baseURL = config.parsed.base_url

if (process.env.NODE_ENV == 'development') {
  baseURL = config.parsed.staging_base_url
}

console.log('------------------------------------')
console.log(baseURL)
console.log('------------------------------------')

module.exports = {
  mode: 'universal',
  router: {
    middleware: ['auth'],
    linkExactActiveClass: 'active'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'SHACK15 CRM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'SHACK15 is a new kind of social space dedicated to entrepreneurship, community, and big ideas'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
        integrity:
          'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: 'https://js.squareup.com/v2/paymentform',
        body: true
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'assets/css/nucleo/css/nucleo.css',
    'assets/css/themify-icons/themify-icons.css',
    'assets/css/ionicons/css/ionicons.css',
    'assets/sass/argon.scss',
    'assets/css/helpers.css',
    'assets/css/custom.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/dashboard/dashboard-plugin',
    {
      src: '~/plugins/dashboard/full-calendar',
      ssr: false
    },
    {
      src: '~/plugins/vue-quill',
      ssr: false
    },
    '~/plugins/services/auth',
    '~/plugins/services/activity',
    '~/plugins/services/wellness',
    '~/plugins/services/event',
    '~/plugins/services/images',
    '~/plugins/services/plans',
    '~/plugins/services/resource',
    '~/plugins/services/membership',
    '~/plugins/services/community',
    '~/plugins/services/emails',
    '~/plugins/services/tags',
    '~/plugins/services/table',
    '~/plugins/services/admin',
    '~/plugins/services/checkin',
    '~/plugins/services/company',
    '~/plugins/services/invoice',
    '~/plugins/services/eatry',
    '~/plugins/services/space',
    '~/plugins/services/settings',
    { src: '~/plugins/vue2-datepicker', ssr: false },
    { src: '~/plugins/vue2-filters', ssr: true },
    {
      src: '~/plugins/tui-editor',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/dotenv', { systemvars: true }],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/moment'
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
            url: '/logout',
            method: 'get'
          },
          user: {
            url: '/user',
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
    transpile: ['vee-validate/dist/rules'],
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
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}
