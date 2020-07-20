import AddPage from '@/pages/_space/events/categories/add.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allCategories from '../resources/all-categories.json'
import newCategory from '../resources/new-category.json'

describe('Page: /:space/events/categories/add | Events Categories Add Page', () => {
  let NuxtStore, store, wrapper, $event, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $event = {
      getEventCategories: jest.fn().mockResolvedValue(cloneDeep(allCategories)),
      addCategory: jest.fn().mockResolvedValue()
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: []
    })

    wrapper = createWrapper(
      AddPage,
      store,
      router,
      {
        name: null,
        color: null,
        loading: false
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)
        vueInstance.prototype.$event = $event
      }
    )

    await wrapper.vm.$options.asyncData({ store, $event })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('adds a category', async () => {
    wrapper.find('#name').setValue(newCategory.name)
    wrapper.find('#color').setValue(newCategory.color)
    await wrapper.vm.$nextTick()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    const categoryOptions = wrapper.findAll('tr td')
    expect(categoryOptions.length).toBe(6)
    expect(categoryOptions.at(0).text()).toBe(allCategories.data[0].name)
    expect(categoryOptions.at(1).text()).toBe(allCategories.data[0].color)
    expect(categoryOptions.at(2).text()).toBe(allCategories.data[1].name)
    expect(categoryOptions.at(3).text()).toBe(allCategories.data[1].color)
    expect(categoryOptions.at(4).text()).toBe(newCategory.name)
    expect(categoryOptions.at(5).text()).toBe(newCategory.color)
  })
})
