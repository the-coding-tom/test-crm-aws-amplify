import Card from '~/components/argon-core/Cards/Card.vue'
import AddPage from '@/pages/_space/tags/add.vue'
import IndexPage from '@/pages/_space/tags/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import newTag from './resources/new-tag.json'

describe('Page: /:space/tags/add | Tags Add Page', () => {
  let NuxtStore, store, wrapper, $tag, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $tag = {
      addTag: jest.fn().mockResolvedValue(cloneDeep(newTag))
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: [
        {
          path: '_space/tags/add',
          name: 'space-tags-add',
          component: AddPage
        },
        {
          path: '_space/tags',
          name: 'space-tags',
          component: IndexPage
        }
      ]
    })

    wrapper = createWrapper(
      AddPage,
      store,
      router,
      {
        loading: false,
        name: '',
        type: ''
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)

        vueInstance.prototype.$tag = $tag
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('adds new tag', async () => {
    const spy = jest.spyOn(router, 'push')

    wrapper.find('input').setValue(newTag.data.data.name)

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect(wrapper.vm.$route.name).toBe('space-tags')
    expect(wrapper.vm.$route.fullPath).toBe('_space/tags')
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
