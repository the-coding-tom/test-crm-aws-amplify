import Card from '~/components/argon-core/Cards/Card.vue'
import AddPage from '@/pages/_space/resources/categories/add.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allCategories from '../resources/all-categories.json'

describe('Page: /:space/resources/categories/add | Categories Add Page', () => {
  let NuxtStore, store, wrapper, $resource, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $resource = {
      createCategory: jest.fn().mockResolvedValue(),
      getAllCategories: jest.fn().mockResolvedValue(cloneDeep(allCategories))
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.$resource = $resource

    // mock toast
    store._vm.$bvToast = {
      toast: jest.fn()
    }

    router = new VueRouter({
      routes: []
    })

    wrapper = createWrapper(AddPage, store, router, {}, {}, vueInstance => {
      vueInstance.use(BootstrapVue)
      vueInstance.component(BaseInput.name, BaseInput)
      vueInstance.component(Card.name, Card)
    })

    await wrapper.vm.$options.asyncData({ store })
  })

  it('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('add a category', async () => {
    wrapper.find('#name').setValue('meetups')
    wrapper.find('#color').setValue('#4DC876')
    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($resource.createCategory).toHaveBeenCalled()
    expect($resource.getAllCategories).toHaveBeenCalled()
  })
})
