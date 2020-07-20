import RoomsPage from '../rooms.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'

import { createWrapper } from '@/test.util.js'

import space from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/settings/rooms | Settings Room Page', () => {
  let NuxtStore, store, wrapper, $axios, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $axios = {
      post: jest.fn().mockResolvedValueOnce({})
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', cloneDeep(space))

    router = new VueRouter({})

    wrapper = createWrapper(
      RoomsPage,
      store,
      router,
      {
        loading: false,
        interval: 30
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(Card.name, Card)
        vueInstance.prototype.$axios = $axios
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('change booking interval', async () => {
    wrapper.find('input').setValue(45)
    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($axios.post.mock.calls.length).toBe(1)
  })
})
