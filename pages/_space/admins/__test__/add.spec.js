import IndexPage from '@/pages/_space/admins/index.vue'
import AddPage from '@/pages/_space/admins/add.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'

import newAdmin from './resources/new-admin.json'

import VueRouter from 'vue-router'
import { createWrapper } from '@/test.util.js'
import flushPromises from 'flush-promises'

describe('Page: /:space/admins/add | Admins Add Page', () => {
  let NuxtStore, store, wrapper, $admin, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $admin = {
      addAnAdmin: jest.fn().mockResolvedValueOnce({ data: { data: [] } })
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
      AddPage,
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
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('adds an admin', async () => {
    wrapper.find('#firstName').setValue(newAdmin.firstName)
    wrapper.find('#lastName').setValue(newAdmin.lastName)
    wrapper.find('#email').setValue(newAdmin.email)
    wrapper.find('#password').setValue(newAdmin.password)

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($admin.addAnAdmin).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.$route.name).toBe('space-admins')
    expect(wrapper.vm.$route.fullPath).toBe('_space/admins')
  })
})
