import IndexPage from '@/pages/_space/events/categories/index.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import AddPage from '@/pages/_space/events/categories/add.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allCategories from '../resources/all-categories.json'

describe('Page: /:space/events/categories/ | Events Categories Index Page', () => {
  let NuxtStore, store, wrapper, $event, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $event = {
      getEventCategories: jest.fn().mockResolvedValue(cloneDeep(allCategories)),
      updateCategory: jest.fn().mockResolvedValue({ data: {} }),
      deleteCategory: jest.fn().mockResolvedValue()
    }

    global.confirm = jest.fn().mockReturnValue(true)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: [
        {
          path: '_space/events/categories/add',
          name: 'space-events-categories-add',
          component: AddPage
        }
      ]
    })

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        cat: null,
        name: null,
        color: null,
        disable: false
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

  it('renders all categories', () => {
    const categoriesOptions = wrapper.findAll(
      '.category__item input.custom-control-input'
    )

    expect(categoriesOptions.length).toBe(2)
    expect(categoriesOptions.at(0).element.value).toBe(allCategories.data[0].id)
    expect(categoriesOptions.at(1).element.value).toBe(allCategories.data[1].id)
  })

  it('updates a category', async () => {
    wrapper.find('.category__item input.custom-control-input').setChecked(true)
    await wrapper.vm.$nextTick()

    // check if input is set
    expect(wrapper.find('#name').element.value).toBe(allCategories.data[0].name)
    expect(wrapper.find('#color').element.value).toBe(
      allCategories.data[0].color
    )

    const updateInfo = {
      name: 'fungather',
      color: '#cfcfff'
    }

    // change values
    wrapper.find('#name').setValue(updateInfo.name)
    wrapper.find('#color').setValue(updateInfo.color)
    await wrapper.vm.$nextTick()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($event.updateCategory).toHaveBeenCalled()
    expect($event.updateCategory.mock.calls[0][0]).toBe(
      allCategories.data[0].id
    )
    expect($event.updateCategory.mock.calls[0][1].name).toBe(updateInfo.name)
    expect($event.updateCategory.mock.calls[0][1].color).toBe(updateInfo.color)
  })

  it('removes a category', async () => {
    wrapper.find('.category__item input.custom-control-input').setChecked(true)
    await wrapper.vm.$nextTick()

    // check if input is set
    expect(wrapper.find('#name').element.value).toBe(allCategories.data[0].name)
    expect(wrapper.find('#color').element.value).toBe(
      allCategories.data[0].color
    )

    wrapper.find('button.text-danger.mr-r-20').trigger('click')
    await flushPromises()

    const categoriesOptions = wrapper.findAll(
      '.category__item input.custom-control-input'
    )

    expect(categoriesOptions.length).toBe(1)
    expect(categoriesOptions.at(0).element.value).toBe(allCategories.data[1].id)
  })
})
