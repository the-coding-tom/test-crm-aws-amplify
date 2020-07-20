import Card from '~/components/argon-core/Cards/Card.vue'
import AddPage from '@/pages/_space/resources/categories/add.vue'
import IndexPage from '@/pages/_space/resources/categories/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allCategories from '../resources/all-categories.json'

describe('Page: /:space/resources/categories | Categories Index Page', () => {
  let NuxtStore, store, wrapper, $resource, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $resource = {
      getAllCategories: jest
        .fn()
        .mockResolvedValueOnce({ data: [] })
        .mockResolvedValue(cloneDeep(allCategories)),
      updateCategory: jest.fn().mockResolvedValue(),
      deleteCategory: jest.fn().mockResolvedValue()
    }

    // mock confirm for removal
    global.confirm = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.$resource = $resource

    // mock toast
    store._vm.$bvToast = {
      toast: jest.fn()
    }

    router = new VueRouter({
      routes: [
        {
          name: 'space-resources-categories-add',
          path: '_space/resources/categories/add',
          component: AddPage
        }
      ]
    })

    wrapper = createWrapper(IndexPage, store, router, {}, {}, vueInstance => {
      vueInstance.use(BootstrapVue)
      vueInstance.component(BaseInput.name, BaseInput)
      vueInstance.component(Card.name, Card)
      vueInstance.prototype.$resource = $resource
    })

    await wrapper.vm.$options.asyncData({ store })
  })

  it('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('get all categories', async () => {
    const wrapArr = wrapper.findAll('label.custom-control-label')

    expect(wrapArr.length).toBe(2)
    expect(wrapArr.at(0).text()).toBe(allCategories.data.data[0].name)
    expect(wrapArr.at(1).text()).toBe(allCategories.data.data[1].name)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('update a category', async () => {
    // set the first radio input to active
    wrapper.find('input.custom-control-input').setChecked(true)
    await flushPromises()

    // check if input has been updated with values
    expect(wrapper.find('#name').element.value).toBe(
      allCategories.data.data[0].name
    )
    expect(wrapper.find('#color').element.value).toBe(
      allCategories.data.data[0].color
    )

    // change it value to 'get-together'
    wrapper.find('#name').setValue('get-together')

    // click on update
    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($resource.updateCategory).toHaveBeenCalled()
    expect($resource.getAllCategories).toHaveBeenCalled()
  })

  it('remove a category', async () => {
    // set the first radio input to active
    wrapper.find('input.custom-control-input').setChecked(true)
    await flushPromises()

    // click remove on remove category button
    wrapper
      .find('button.btn.text-danger.mr-r-20.btn-transparent')
      .trigger('click')
    await flushPromises()

    expect($resource.getAllCategories).toHaveBeenCalled()
    expect($resource.deleteCategory).toHaveBeenCalled()
  })
})
