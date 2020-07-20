import IndexPage from '@/pages/_space/checkins/index.vue'
import SettingsPage from '@/pages/_space/checkins/settings.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allMemberships from '@/pages/_space/memberships/__test__/resources/all-memberships.json'

describe('Page: /:space/checkins/ | Checkins Index Page', () => {
  let NuxtStore, store, wrapper, $membership, $checkin, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      getAllMemberships: jest.fn().mockResolvedValue({
        data: cloneDeep(allMemberships),
        meta: {},
        links: {}
      })
    }

    $checkin = {
      checkins: jest.fn().mockResolvedValue({ data: [], meta: {}, links: {} }),
      checkin: jest.fn().mockResolvedValue({ data: {} })
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: [
        {
          name: 'space-checkins-settings',
          component: SettingsPage,
          path: '_space/checkins/settings'
        }
      ]
    })

    const asyncDataResponse = await IndexPage.asyncData({
      store,
      $checkin,
      $membership
    })

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        searching: false,
        type: 0,
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        email: '',
        membership_id: '',
        loading: false,
        meeting_guest: false,
        ...asyncDataResponse
      },
      {
        stubs: {
          transition: false
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.prototype.$checkin = $checkin
        vueInstance.prototype.$membership = $membership
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('checkin member', async () => {
    wrapper.find('button.btn.btn-primary').trigger('click')
    await wrapper.vm.$nextTick()
    await flushPromises()

    //  select member
    const memberOptions = wrapper.vm.$el.querySelectorAll(
      '.member-checkin-form .el-select-dropdown__item'
    )

    const evt = document.createEvent('MouseEvents')
    evt.initEvent('mouseenter')
    memberOptions[1].dispatchEvent(evt)
    memberOptions[1].click()
    await flushPromises()

    // mock location reload
    const { location } = window
    delete window.location
    window.location = { ...location, reload: jest.fn() }

    // submit form
    wrapper.find('form.member-checkin-form').trigger('submit.prevent')

    expect($checkin.checkin).toHaveBeenCalled()
    expect($checkin.checkin.mock.calls[0][0].type).toBe('member')
    expect($checkin.checkin.mock.calls[0][0].membership_id).toBe(
      allMemberships[1].id
    )
  })

  it('checkin guest', async () => {
    wrapper.find('button.btn.btn-primary').trigger('click')
    await wrapper.vm.$nextTick()
    await flushPromises()

    //  select member
    const memberOptions = wrapper.vm.$el.querySelectorAll(
      '.guest-checkin-form .el-select-dropdown__item'
    )

    const evt = document.createEvent('MouseEvents')
    evt.initEvent('mouseenter')
    memberOptions[0].dispatchEvent(evt)
    memberOptions[0].click()
    await flushPromises()

    const guestDetails = {
      firstName: 'Kim',
      lastName: 'Conveni',
      email: 'kimconveni@ui.com',
      company: 'UI LLC'
    }

    wrapper
      .find('.guest-checkin-form #firstName')
      .setValue(guestDetails.firstName)
    wrapper
      .find('.guest-checkin-form #lastName')
      .setValue(guestDetails.lastName)
    wrapper.find('.guest-checkin-form #email').setValue(guestDetails.email)
    wrapper.find('.guest-checkin-form #company').setValue(guestDetails.company)
    wrapper.find('.guest-checkin-form #meetingGuest').setChecked(true)
    await wrapper.vm.$nextTick()

    // mock location reload
    const { location } = window
    delete window.location
    window.location = { ...location, reload: jest.fn() }

    // submit form
    wrapper.find('form.guest-checkin-form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect($checkin.checkin).toHaveBeenCalled()
    expect($checkin.checkin.mock.calls[1][0].type).toBe('guest')
    expect($checkin.checkin.mock.calls[1][0].membership_id).toBe(
      allMemberships[0].id
    )
    expect($checkin.checkin.mock.calls[1][0].first_name).toBe(
      guestDetails.firstName
    )
    expect($checkin.checkin.mock.calls[1][0].last_name).toBe(
      guestDetails.lastName
    )
    expect($checkin.checkin.mock.calls[1][0].email).toBe(guestDetails.email)
    expect($checkin.checkin.mock.calls[1][0].company).toBe(guestDetails.company)
    expect($checkin.checkin.mock.calls[1][0].meeting_guest).toBe(true)
  })
})
