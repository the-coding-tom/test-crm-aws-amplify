import AddPage from '@/pages/_space/plans/add.vue'
import IndexPage from '@/pages/_space/plans/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'

import { createWrapper } from '@/test.util.js'

import allPlans from './resources/all-plans.json'
import emptyPlans from './resources/empty-plans.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/plans/ | Plans Index Page', () => {
  let NuxtStore, store, wrapper, $plan, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $plan = {
      getAllPlan: jest
        .fn()
        .mockResolvedValueOnce(emptyPlans)
        .mockResolvedValue(cloneDeep(allPlans)),
      removePlan: jest
        .fn()
        .mockResolvedValueOnce(cloneDeep(allPlans.data.data[0]))
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', cloneDeep(currentSpace))

    router = new VueRouter({
      routes: [
        {
          name: 'space-plans-add',
          path: '/_space/plans/add',
          component: AddPage
        }
      ]
    })

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        loading: false
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.prototype.$plan = $plan
      }
    )

    await wrapper.vm.$options.asyncData({ store, $plan })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('shows all plans', () => {
    const wrapArr = wrapper.findAll('.cell h4')

    expect(wrapArr.length).toBe(2)
    expect(wrapArr.at(0).text()).toBe(allPlans.data.data[0].name)
    expect(wrapArr.at(1).text()).toBe(allPlans.data.data[1].name)
  })

  it('removes a plan', async () => {
    // click remove on first row plans
    wrapper.find('button.btn.text-danger.btn-transparent').trigger('click')
    await flushPromises()

    const wrapArr = wrapper.findAll('.cell h4')

    expect(wrapArr.length).toBe(1)
    expect(wrapArr.at(0).text()).toBe(allPlans.data.data[1].name)
  })
})
