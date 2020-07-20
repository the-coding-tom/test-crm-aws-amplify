import IndexPage from '@/pages/_space/events/index.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import FullCalendar from '@/components/widgets/FullCalendar'
import Vue2Filters from 'vue2-filters'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/events/ | Events Index Page', () => {
  let NuxtStore, store, wrapper, $event, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $event = {
      getEvents: jest.fn().mockResolvedValue({ data: [] }),
      getEventsByDate: jest.fn().mockResolvedValue({ data: { data: [] } })
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: []
    })

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {},
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
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component('full-calendar', FullCalendar)
        vueInstance.component(Card.name, Card)
        vueInstance.prototype.$event = $event
        vueInstance.prototype.$moment = moment
      }
    )

    await wrapper.vm.$options.asyncData({ store, $event })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
