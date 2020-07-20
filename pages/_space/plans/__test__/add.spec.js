import AddPage from '@/pages/_space/plans/add.vue'
import IndexPage from '@/pages/_space/plans/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import Card from '~/components/argon-core/Cards/Card.vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'

import { createWrapper } from '@/test.util.js'

import newPlan from './resources/new-plan.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/plans/ | Plans Index Page', () => {
  let NuxtStore, store, wrapper, $plan, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $plan = {
      addPlan: jest.fn().mockResolvedValueOnce(cloneDeep(newPlan))
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', cloneDeep(currentSpace))

    router = new VueRouter({
      routes: [
        {
          name: 'space-plans',
          path: '/_space/plans',
          component: IndexPage
        }
      ]
    })

    wrapper = createWrapper(
      AddPage,
      store,
      router,
      {
        name: '',
        description: '',
        price_per_cycle: 0,
        cycle_duration: 1,
        hidden: false,
        loading: false
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)
        vueInstance.prototype.$plan = $plan
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('adds a plan', async () => {
    wrapper.find('#name').setValue(newPlan.data.data.name)
    wrapper.find('#description').setValue(newPlan.data.data.description)
    wrapper.find('#price_per_cycle').setValue(newPlan.data.data.price_per_cycle)
    wrapper.find('#cycle_duration').setValue(newPlan.data.data.cycle_duration)
    wrapper.find('#planVisibility').setChecked()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($plan.addPlan.mock.calls.length).toBe(1)
    expect(wrapper.vm.$route.name).toBe('space-plans')
    expect(wrapper.vm.$route.fullPath).toBe('/_space/plans')
  })
})
