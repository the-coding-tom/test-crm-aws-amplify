import ViewMessagePage from '@/pages/_space/memberships/messages/_id/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import Card from '~/components/argon-core/Cards/Card.vue'
import Badge from '~/components/argon-core/Badge.vue'
import DatePicker from 'vue2-datepicker'
import Vue2Filters from 'vue2-filters'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import currentSpace from '@/pages/_space/__test__/resources/current-space.json'
import allMessages from '@/pages/_space/memberships/__test__/resources/messages.json'

describe('Page: /:space/memberships/:id/ | Memberships View Messsage Page', () => {
  let NuxtStore, store, wrapper, $email, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $email = {
      getSingleEmail: jest.fn().mockResolvedValue({ data: allMessages.data[2] })
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: []
    })

    const params = {
      id: 'e2e5f8d3-b2a6-4a77-a95c-a7aa7b8287b0'
    }

    const asyncDataResponse = await ViewMessagePage.asyncData({
      store,
      $email,
      params
    })

    wrapper = createWrapper(
      ViewMessagePage,
      store,
      router,
      {
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          'no-ssr': true,
          'client-only': true,
          transition: false,
          'b-popover': true
        },
        mocks: {
          $email: $email,
          $moment: moment
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.use(Vue2Filters)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)
        vueInstance.component('date-picker', DatePicker)
        vueInstance.component(Badge.name, Badge)
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
