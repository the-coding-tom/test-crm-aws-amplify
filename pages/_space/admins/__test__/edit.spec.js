import Card from '~/components/argon-core/Cards/Card.vue'
import EditPage from '@/pages/_space/admins/_id/edit.vue'
import IndexPage from '@/pages/_space/admins/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'

import allAdmin from './resources/all-admins.json'

import VueRouter from 'vue-router'
import flushPromises from 'flush-promises'
import cloneDeep from 'lodash/cloneDeep'
import { createWrapper } from '@/test.util.js'

describe('Page: /:space/admins/:id/edit | Admins Edit Page', () => {
  let NuxtStore, store, wrapper, $admin, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $admin = {
      getAnAdmin: jest
        .fn()
        .mockResolvedValue({ data: cloneDeep(allAdmin.data[0]) }),
      updateAnAdmin: jest.fn().mockResolvedValue()
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: [
        {
          path: '_space/admins',
          name: 'space-admins',
          component: IndexPage
        }
      ]
    })

    wrapper = createWrapper(
      EditPage,
      store,
      router,
      {
        loading: false
      },
      {
        url: null,
        loading: false,
        first_name: '',
        last_name: '',
        picture: '',
        email: '',
        password: '',
        service: 'images'
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(Card.name, Card)
        vueInstance.prototype.$admin = $admin
      }
    )

    const params = { id: allAdmin.data[0].id }
    await wrapper.vm.$options.asyncData({ store, $admin, params })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('update an admin', async () => {
    wrapper.find('#firstName').setValue('Jake')
    wrapper.find('#lastName').setValue('Tims')
    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($admin.updateAnAdmin).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.$route.name).toBe('space-admins')
    expect(wrapper.vm.$route.fullPath).toBe('_space/admins')
  })
})
