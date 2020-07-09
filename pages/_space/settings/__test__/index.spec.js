import IndexPage from '../index.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import flushPromises from 'flush-promises'

import passwordChange from './resources/password-change.json'

import { createWrapper } from '@/test.util.js'

describe('Page: /:space/settings/ | Settings Index Page', () => {
  let NuxtStore, store, wrapper, $settings, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $settings = {
      changePassword: jest.fn().mockResolvedValueOnce({})
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({})

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        loading: false,
        new_password: '',
        old_password: ''
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(Card.name, Card)
        vueInstance.prototype.$settings = $settings
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('changes password', async () => {
    wrapper.find('#currentPassword').setValue(passwordChange.old_password)
    wrapper.find('#newPassword').setValue(passwordChange.new_password)

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($settings.changePassword.mock.calls.length).toBe(1)
    expect($settings.changePassword).toHaveBeenCalledWith(passwordChange)
  })
})
