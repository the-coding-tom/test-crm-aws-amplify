import AddPage from '@/pages/_space/admins/add.vue'
import IndexPage from '@/pages/_space/admins/index.vue'
import EditPage from '@/pages/_space/admins/_id/edit.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allAdmins from './resources/all-admins.json'
import emptyAdmins from './resources/empty-admins.json'

describe('Page: /:space/admins/ | Admins Index Page', () => {
  let NuxtStore, store, wrapper, $admin, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $admin = {
      getAllAdmins: jest
        .fn()
        .mockResolvedValueOnce(cloneDeep(emptyAdmins))
        .mockResolvedValue(cloneDeep(allAdmins)),
      deleteAnAdmin: jest
        .fn()
        .mockResolvedValue({ message: 'deleted successfully' })
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: [
        {
          path: '_space/admins/add',
          name: 'space-admins-add',
          component: AddPage
        },
        {
          path: '_space/admins/:id/edit',
          name: 'space-admins-id-edit',
          component: EditPage
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
        vueInstance.prototype.$admin = $admin
      }
    )

    await wrapper.vm.$options.asyncData({ store, $admin })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('shows all admins', async () => {
    const wrapArr = wrapper.findAll('.cell h4')

    expect(wrapArr.length).toBe(2)
    expect(wrapArr.at(0).text()).toBe(allAdmins.data[0].name)
    expect(wrapArr.at(1).text()).toBe(allAdmins.data[1].name)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('removes admin on click', async () => {
    wrapper.find('button.btn.text-danger.btn-transparent').trigger('click')
    await flushPromises()

    const wrapArr = wrapper.findAll('.cell h4')

    expect(wrapArr.length).toBe(1)
    expect(wrapArr.at(0).text()).toBe(allAdmins.data[1].name)
  })

  it('renders add admin route', async () => {
    wrapper.find('a.btn.text-white.btn-primary.rounded-0').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$route.name).toBe('space-admins-add')
    expect(wrapper.vm.$route.fullPath).toBe('_space/admins/add')
  })

  it('renders edit admin route', async () => {
    wrapper.find('a.btn.text-primary.btn-transparent').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$route.name).toBe('space-admins-id-edit')
    expect(wrapper.vm.$route.fullPath).toBe(
      `_space/admins/${allAdmins.data[1].id}/edit`
    )
  })
})
