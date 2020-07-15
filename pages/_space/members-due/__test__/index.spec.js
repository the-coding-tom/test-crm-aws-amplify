import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import IndexPage from '@/pages/_space/members-due/index.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'

import VueRouter from 'vue-router'
import { createWrapper } from '@/test.util.js'

describe('Page: /:space/members-due/ | Members Due Index Page', () => {
  let NuxtStore, store, wrapper, $membership, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      expiringSubscriptions: jest.fn().mockResolvedValue({ data: { data: [] } })
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: []
    })

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        loading: false,
        data: null,
        card: null,
        cards: [],
        perPage: 10,
        currentPage: 1,
        dropdown: 30,
        data: [],
        items: [],
        days: [30, 15, 5],
        fields: ['full_name', 'plan', 'start_date', 'end_date', 'options']
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.prototype.$membership = $membership
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
