import CreateMessagePage from '@/pages/_space/memberships/messages/create.vue'
import ViewMessagePage from '@/pages/_space/memberships/messages/_id/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import Card from '~/components/argon-core/Cards/Card.vue'
import Badge from '~/components/argon-core/Badge.vue'
import DatePicker from 'vue2-datepicker'
import Vue2Filters from 'vue2-filters'
import { Editor } from '@toast-ui/vue-editor'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import currentSpace from '@/pages/_space/__test__/resources/current-space.json'
import allMemberships from '@/pages/_space/memberships/__test__/resources/all-memberships.json'

describe('Page: /:space/memberships/messages/create | Memberships Send Message Page', () => {
  let NuxtStore, store, wrapper, $email, $membership, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $email = {
      createEmail: jest.fn().mockResolvedValue({
        data: { id: 'e2e5f8d3-b2c6-4a77-a95c-27d77b8287b0' }
      })
    }

    $membership = {
      getAllMemberships: jest
        .fn()
        .mockResolvedValue({ data: cloneDeep(allMemberships) })
    }

    // mocking 'scrollIntoView' for tui-editor
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: [
        {
          name: 'space-memberships-messages-id',
          component: ViewMessagePage,
          path: '_space/memberships/messages/:id'
        }
      ]
    })

    const asyncDataResponse = await CreateMessagePage.asyncData({
      store,
      $email,
      $membership
    })

    wrapper = createWrapper(
      CreateMessagePage,
      store,
      router,
      {
        searching: false,
        emails: [],
        subject: '',
        content: '',
        loading: false,
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          'no-ssr': true,
          'client-only': true,
          transition: false,
          'b-popover': true
        },
        mocks: {
          $email: $email,
          $moment: moment
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.use(Vue2Filters)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)
        vueInstance.component('date-picker', DatePicker)
        vueInstance.component(Badge.name, Badge)
        vueInstance.component('Editor', Editor)
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('sends email', async () => {
    const emailInfo = {
      subject: 'Write Test People !!!',
      content:
        "Writing test should have a different feeling. A ring to it. Unfortunately, it doesn't feel like that. How come people swear they enjoy writing it ???"
    }

    //  select user
    const users = wrapper.vm.$el.querySelectorAll('.el-select-dropdown__item')
    const evt = document.createEvent('MouseEvents')
    evt.initEvent('mouseenter')

    users[0].dispatchEvent(evt)
    users[0].click()
    await flushPromises()

    users[1].dispatchEvent(evt)
    users[1].click()

    await flushPromises()

    // enter email subject
    wrapper.find('#subject').setValue(emailInfo.subject)

    // set email content
    wrapper.setData({
      content: emailInfo.content
    })

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($email.createEmail).toHaveBeenCalled()
    expect($email.createEmail.mock.calls[0][0].subject).toBe(emailInfo.subject)
    expect($email.createEmail.mock.calls[0][0].content).toEqual(
      expect.stringContaining(emailInfo.content)
    )
    expect($email.createEmail.mock.calls[0][0].emails).toContain(
      allMemberships[0].email
    )
    expect($email.createEmail.mock.calls[0][0].emails).toContain(
      allMemberships[1].email
    )
  })
})
