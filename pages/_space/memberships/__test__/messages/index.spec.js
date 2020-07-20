import MessagesPage from '@/pages/_space/memberships/messages/index.vue'
import CreateMessagePage from '@/pages/_space/memberships/messages/create.vue'
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

describe('Page: /:space/memberships/messages | Memberships View All Messages Page', () => {
  let NuxtStore, store, wrapper, $email, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $email = {
      getAllEmails: jest.fn().mockResolvedValue(cloneDeep(allMessages))
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: [
        {
          name: 'space-memberships-messages-create',
          component: CreateMessagePage,
          path: '_space/memberships/messages/create'
        },
        {
          name: 'space-memberships-messages-id',
          component: ViewMessagePage,
          path: '_space/memberships/messages/:id'
        }
      ]
    })

    const asyncDataResponse = await MessagesPage.asyncData({
      store,
      $email
    })

    wrapper = createWrapper(
      MessagesPage,
      store,
      router,
      {
        fields: [
          {
            key: 'emails',
            sortable: false
          },
          { key: 'subject', sortable: true },
          { key: 'created_at', sortable: true }
        ],
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
