import AddPage from '@/pages/_space/tags/add.vue'
import IndexPage from '@/pages/_space/tags/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allTags from './resources/all-tags.json'
import updateTag from './resources/update-tag.json'

describe('Page: /:space/tags/ | Tags Index Page', () => {
  let NuxtStore, store, wrapper, $tag, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $tag = {
      getAllTags: jest.fn().mockResolvedValue(cloneDeep(allTags)),
      removeTag: jest.fn().mockResolvedValue({ message: 'tag removed' }),
      updateTag: jest.fn().mockResolvedValue(cloneDeep(updateTag))
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
        }
      ]
    })

    wrapper = createWrapper(
      IndexPage,
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
        vueInstance.prototype.$tag = $tag
      }
    )

    await wrapper.vm.$options.asyncData({ store, $tag })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('shows all tags', async () => {
    const wrapArr = wrapper.findAll('.cell h4')

    expect(wrapArr.length).toBe(2)
    expect(wrapArr.at(0).text()).toBe(allTags.data.data[0].name)
    expect(wrapArr.at(1).text()).toBe(allTags.data.data[1].name)
  })

  it('removes a tag on click', async () => {
    wrapper.find('button.btn.text-danger.btn-transparent').trigger('click')
    await flushPromises()

    const wrapArr = wrapper.findAll('.cell h4')

    expect(wrapArr.length).toBe(1)
    expect(wrapArr.at(0).text()).toBe(allTags.data.data[1].name)
  })

  it('renders add tag route', async () => {
    wrapper.find('a.btn.text-white.btn-primary.rounded-0').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$route.name).toBe('space-tags-add')
    expect(wrapper.vm.$route.fullPath).toBe('_space/tags/add')
  })

  it('edit modal for tag', async () => {
    const editButton = wrapper.find('button.btn.text-primary.btn-transparent')
    editButton.trigger('click')
    await flushPromises()

    wrapper.find('input').setValue(updateTag.data.data.name)

    wrapper
      .find('button.btn.text-white.float-right.btn-primary.rounded-0')
      .trigger('click')
    await flushPromises()

    const firstTagRow = wrapper.find('.cell h4')

    expect(firstTagRow.text()).not.toBe(allTags.data.data[0].name)
    expect(firstTagRow.text()).toBe(updateTag.data.data.name)
  })
})
