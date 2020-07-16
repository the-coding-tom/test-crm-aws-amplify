import IdIndexPage from '@/pages/_space/events/_id/index.vue'
import IdEditPage from '@/pages/_space/events/_id/edit.vue'
import IndexPage from '@/pages/_space/events/index.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import Vue2Filters from 'vue2-filters'
import BootstrapVue from 'bootstrap-vue'
import Badge from '~/components/argon-core/Badge.vue'

import VueRouter from 'vue-router'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import event from '../resources/event.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/events/:id | Events Id Index Page', () => {
  let NuxtStore, store, wrapper, $event, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $event = {
      getEvent: jest.fn().mockResolvedValue({ data: event })
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: [
        {
          name: 'space-events',
          path: '_space/events',
          component: IndexPage
        },
        {
          name: 'space-events-id-edit',
          path: '_sapce/events/:id/edit',
          component: IdEditPage
        }
      ]
    })

    const params = {
      id: event.id
    }

    const asyncDataResponse = await IdIndexPage.asyncData({
      store,
      $event,
      params
    })

    wrapper = createWrapper(
      IdIndexPage,
      store,
      router,
      {
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          'client-only': true,
          transition: false
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.use(Vue2Filters)
        vueInstance.component(Card.name, Card)
        vueInstance.component(Badge.name, Badge)
        vueInstance.prototype.$event = $event
        vueInstance.prototype.$moment = moment
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
