import IndexPage from '@/pages/_space/directory/index.vue'
import IdIndexPage from '@/pages/_space/directory/_id/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import Card from '~/components/argon-core/Cards/Card.vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import lodash from 'lodash'

import allMemberships from '@/pages/_space/memberships/__test__/resources/all-memberships.json'

describe('Page: /:space/directory/ | Directory Index Page', () => {
  let NuxtStore, store, wrapper, $membership, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      getAllMemberships: jest.fn().mockResolvedValue({
        data: cloneDeep(allMemberships),
        meta: { total: 1, per_page: 15, current_page: 1 },
        links: {}
      })
    }

    global._ = lodash
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: [
        {
          path: '_space/directory/_id/index.vue',
          name: 'space-directory-id',
          component: IdIndexPage
        }
      ]
    })

    const route = {
      query: {
        page: 1
      }
    }

    const asyncDataResponse = await IndexPage.asyncData({
      store,
      $membership,
      route
    })

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        loading: false,
        filter: '',
        options: [
          {
            text: 'All',
            value: ''
          },
          {
            text: 'Founding Member',
            value: '0'
          },
          {
            text: 'Fast Track',
            value: '1'
          },
          {
            text: 'Early Invite',
            value: '2'
          },
          {
            text: 'General Member',
            value: '3'
          }
        ],
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          transition: false
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)

        vueInstance.prototype.$membership = $membership
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
