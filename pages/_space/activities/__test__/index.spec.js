import Card from '~/components/argon-core/Cards/Card.vue'
import IndexPage from '../index.vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'

import space from '@/pages/_space/__test__/resources/current-space.json'
import activities from './resources/activities.json'
import nextActivities from './resources/next-activities.json'
import prevActivities from './resources/prev-activities.json'
import emptyActivities from './resources/empty-activities.json'

import { createWrapper } from '@/test.util.js'

describe('Page: /:space/activities/ | Activities Index Page', () => {
  let NuxtStore, store, wrapper, $activity, $axios, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)
    createRouter()

    $activity = {
      getAllActivities: jest
        .fn()
        .mockResolvedValueOnce(cloneDeep(emptyActivities))
        .mockResolvedValue(cloneDeep(activities))
    }

    $axios = {
      $get: jest
        .fn()
        .mockResolvedValueOnce(cloneDeep(nextActivities))
        .mockResolvedValueOnce(cloneDeep(prevActivities))
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', cloneDeep(space))

    const asyncDataResponse = await IndexPage.asyncData({ $activity })

    router = new VueRouter({})

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      asyncDataResponse,
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(Card.name, Card)
        vueInstance.prototype.$activity = $activity
        vueInstance.prototype.$axios = $axios
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('shows all activites', async () => {
    const wrapArr = wrapper.findAll('td.activity')

    expect(wrapArr.length).toBe(2)
    expect(wrapArr.at(0).text()).toBe(activities.data[0].description)
    expect(wrapArr.at(1).text()).toBe(activities.data[1].description)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders next page', async () => {
    wrapper.find('button.btn.mr-l-30.btn-link').trigger('click')
    await flushPromises()

    const wrapArr = wrapper.findAll('td.activity')

    expect(wrapArr.length).toBe(1)
    expect(wrapArr.at(0).text()).toBe(nextActivities.data[0].description)
  })

  it('renders prev page', async () => {
    wrapper.find('button.btn.mr-r-30.btn-link').trigger('click')
    await flushPromises()

    const wrapArr = wrapper.findAll('td.activity')

    expect(wrapArr.length).toBe(1)
    expect(wrapArr.at(0).text()).toBe(prevActivities.data[0].description)
  })
})
