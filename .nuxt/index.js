import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_bootstrapvue_62be5382 from 'nuxt_plugin_bootstrapvue_62be5382' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_rollbarclient_2a593646 from 'nuxt_plugin_rollbarclient_2a593646' // Source: ./rollbar-client.js (mode: 'all')
import nuxt_plugin_moment_7f838b88 from 'nuxt_plugin_moment_7f838b88' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_axios_cf6defe0 from 'nuxt_plugin_axios_cf6defe0' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_dashboardplugin_064d869d from 'nuxt_plugin_dashboardplugin_064d869d' // Source: ../plugins/dashboard/dashboard-plugin (mode: 'all')
import nuxt_plugin_fullcalendar_cddfef6a from 'nuxt_plugin_fullcalendar_cddfef6a' // Source: ../plugins/dashboard/full-calendar (mode: 'client')
import nuxt_plugin_vuequill_7354b148 from 'nuxt_plugin_vuequill_7354b148' // Source: ../plugins/vue-quill (mode: 'client')
import nuxt_plugin_auth_baaf45fa from 'nuxt_plugin_auth_baaf45fa' // Source: ../plugins/services/auth (mode: 'all')
import nuxt_plugin_activity_75714cea from 'nuxt_plugin_activity_75714cea' // Source: ../plugins/services/activity (mode: 'all')
import nuxt_plugin_wellness_81d12400 from 'nuxt_plugin_wellness_81d12400' // Source: ../plugins/services/wellness (mode: 'all')
import nuxt_plugin_event_9ac842c2 from 'nuxt_plugin_event_9ac842c2' // Source: ../plugins/services/event (mode: 'all')
import nuxt_plugin_images_b19ad1da from 'nuxt_plugin_images_b19ad1da' // Source: ../plugins/services/images (mode: 'all')
import nuxt_plugin_plans_999b7322 from 'nuxt_plugin_plans_999b7322' // Source: ../plugins/services/plans (mode: 'all')
import nuxt_plugin_promotions_c10e316a from 'nuxt_plugin_promotions_c10e316a' // Source: ../plugins/services/promotions (mode: 'all')
import nuxt_plugin_resource_785dc42e from 'nuxt_plugin_resource_785dc42e' // Source: ../plugins/services/resource (mode: 'all')
import nuxt_plugin_membership_1453d6f1 from 'nuxt_plugin_membership_1453d6f1' // Source: ../plugins/services/membership (mode: 'all')
import nuxt_plugin_community_5769dd24 from 'nuxt_plugin_community_5769dd24' // Source: ../plugins/services/community (mode: 'all')
import nuxt_plugin_emails_bf41861c from 'nuxt_plugin_emails_bf41861c' // Source: ../plugins/services/emails (mode: 'all')
import nuxt_plugin_tags_ba9e9918 from 'nuxt_plugin_tags_ba9e9918' // Source: ../plugins/services/tags (mode: 'all')
import nuxt_plugin_table_9934b05a from 'nuxt_plugin_table_9934b05a' // Source: ../plugins/services/table (mode: 'all')
import nuxt_plugin_admin_9b492158 from 'nuxt_plugin_admin_9b492158' // Source: ../plugins/services/admin (mode: 'all')
import nuxt_plugin_checkin_0d2d621c from 'nuxt_plugin_checkin_0d2d621c' // Source: ../plugins/services/checkin (mode: 'all')
import nuxt_plugin_company_05d1bb42 from 'nuxt_plugin_company_05d1bb42' // Source: ../plugins/services/company (mode: 'all')
import nuxt_plugin_invoice_4200c1f2 from 'nuxt_plugin_invoice_4200c1f2' // Source: ../plugins/services/invoice (mode: 'all')
import nuxt_plugin_eatry_9adae8b8 from 'nuxt_plugin_eatry_9adae8b8' // Source: ../plugins/services/eatry (mode: 'all')
import nuxt_plugin_space_994345ea from 'nuxt_plugin_space_994345ea' // Source: ../plugins/services/space (mode: 'all')
import nuxt_plugin_settings_2da815fe from 'nuxt_plugin_settings_2da815fe' // Source: ../plugins/services/settings (mode: 'all')
import nuxt_plugin_zoomrooms_dfd876ec from 'nuxt_plugin_zoomrooms_dfd876ec' // Source: ../plugins/services/zoomrooms (mode: 'all')
import nuxt_plugin_accesspoint_34101a1e from 'nuxt_plugin_accesspoint_34101a1e' // Source: ../plugins/services/accesspoint (mode: 'all')
import nuxt_plugin_vue2datepicker_04943087 from 'nuxt_plugin_vue2datepicker_04943087' // Source: ../plugins/vue2-datepicker (mode: 'client')
import nuxt_plugin_vue2filters_60d05d10 from 'nuxt_plugin_vue2filters_60d05d10' // Source: ../plugins/vue2-filters (mode: 'all')
import nuxt_plugin_tuieditor_ce6c9e70 from 'nuxt_plugin_tuieditor_ce6c9e70' // Source: ../plugins/tui-editor (mode: 'client')
import nuxt_plugin_plugin_8be46d68 from 'nuxt_plugin_plugin_8be46d68' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"SHACK15 CRM","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"SHACK15 is a new kind of social space dedicated to entrepreneurship, community, and big ideas"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.6.3\u002Fcss\u002Fall.css","integrity":"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s\u002F","crossorigin":"anonymous"}],"script":[{"src":"https:\u002F\u002Fjs.squareup.com\u002Fv2\u002Fpaymentform","body":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_62be5382 === 'function') {
    await nuxt_plugin_bootstrapvue_62be5382(app.context, inject)
  }

  if (typeof nuxt_plugin_rollbarclient_2a593646 === 'function') {
    await nuxt_plugin_rollbarclient_2a593646(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_7f838b88 === 'function') {
    await nuxt_plugin_moment_7f838b88(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_cf6defe0 === 'function') {
    await nuxt_plugin_axios_cf6defe0(app.context, inject)
  }

  if (typeof nuxt_plugin_dashboardplugin_064d869d === 'function') {
    await nuxt_plugin_dashboardplugin_064d869d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_fullcalendar_cddfef6a === 'function') {
    await nuxt_plugin_fullcalendar_cddfef6a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuequill_7354b148 === 'function') {
    await nuxt_plugin_vuequill_7354b148(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_baaf45fa === 'function') {
    await nuxt_plugin_auth_baaf45fa(app.context, inject)
  }

  if (typeof nuxt_plugin_activity_75714cea === 'function') {
    await nuxt_plugin_activity_75714cea(app.context, inject)
  }

  if (typeof nuxt_plugin_wellness_81d12400 === 'function') {
    await nuxt_plugin_wellness_81d12400(app.context, inject)
  }

  if (typeof nuxt_plugin_event_9ac842c2 === 'function') {
    await nuxt_plugin_event_9ac842c2(app.context, inject)
  }

  if (typeof nuxt_plugin_images_b19ad1da === 'function') {
    await nuxt_plugin_images_b19ad1da(app.context, inject)
  }

  if (typeof nuxt_plugin_plans_999b7322 === 'function') {
    await nuxt_plugin_plans_999b7322(app.context, inject)
  }

  if (typeof nuxt_plugin_promotions_c10e316a === 'function') {
    await nuxt_plugin_promotions_c10e316a(app.context, inject)
  }

  if (typeof nuxt_plugin_resource_785dc42e === 'function') {
    await nuxt_plugin_resource_785dc42e(app.context, inject)
  }

  if (typeof nuxt_plugin_membership_1453d6f1 === 'function') {
    await nuxt_plugin_membership_1453d6f1(app.context, inject)
  }

  if (typeof nuxt_plugin_community_5769dd24 === 'function') {
    await nuxt_plugin_community_5769dd24(app.context, inject)
  }

  if (typeof nuxt_plugin_emails_bf41861c === 'function') {
    await nuxt_plugin_emails_bf41861c(app.context, inject)
  }

  if (typeof nuxt_plugin_tags_ba9e9918 === 'function') {
    await nuxt_plugin_tags_ba9e9918(app.context, inject)
  }

  if (typeof nuxt_plugin_table_9934b05a === 'function') {
    await nuxt_plugin_table_9934b05a(app.context, inject)
  }

  if (typeof nuxt_plugin_admin_9b492158 === 'function') {
    await nuxt_plugin_admin_9b492158(app.context, inject)
  }

  if (typeof nuxt_plugin_checkin_0d2d621c === 'function') {
    await nuxt_plugin_checkin_0d2d621c(app.context, inject)
  }

  if (typeof nuxt_plugin_company_05d1bb42 === 'function') {
    await nuxt_plugin_company_05d1bb42(app.context, inject)
  }

  if (typeof nuxt_plugin_invoice_4200c1f2 === 'function') {
    await nuxt_plugin_invoice_4200c1f2(app.context, inject)
  }

  if (typeof nuxt_plugin_eatry_9adae8b8 === 'function') {
    await nuxt_plugin_eatry_9adae8b8(app.context, inject)
  }

  if (typeof nuxt_plugin_space_994345ea === 'function') {
    await nuxt_plugin_space_994345ea(app.context, inject)
  }

  if (typeof nuxt_plugin_settings_2da815fe === 'function') {
    await nuxt_plugin_settings_2da815fe(app.context, inject)
  }

  if (typeof nuxt_plugin_zoomrooms_dfd876ec === 'function') {
    await nuxt_plugin_zoomrooms_dfd876ec(app.context, inject)
  }

  if (typeof nuxt_plugin_accesspoint_34101a1e === 'function') {
    await nuxt_plugin_accesspoint_34101a1e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vue2datepicker_04943087 === 'function') {
    await nuxt_plugin_vue2datepicker_04943087(app.context, inject)
  }

  if (typeof nuxt_plugin_vue2filters_60d05d10 === 'function') {
    await nuxt_plugin_vue2filters_60d05d10(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_tuieditor_ce6c9e70 === 'function') {
    await nuxt_plugin_tuieditor_ce6c9e70(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_8be46d68 === 'function') {
    await nuxt_plugin_plugin_8be46d68(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
