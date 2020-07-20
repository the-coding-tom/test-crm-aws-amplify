import UninvitedIndexPage from '@/pages/_space/memberships/uninvited/index.vue'
import MembershipAddPage from '@/pages/_space/memberships/add.vue'
import MessagesIndexPage from '@/pages/_space/memberships/messages/index.vue'
import MemberIndexPage from '@/pages/_space/memberships/_id/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import Card from '~/components/argon-core/Cards/Card.vue'
import Badge from '~/components/argon-core/Badge.vue'
import DatePicker from 'vue2-datepicker'
import Vue2Filters from 'vue2-filters'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import currentSpace from '@/pages/_space/__test__/resources/current-space.json'
import allMemberships from '../resources/all-memberships-uninvited.json'

describe('Page: /:space/memberships/add | Memberships Add Page', () => {
  let NuxtStore, store, wrapper, $membership, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      getAllMemberships: jest.fn().mockResolvedValue({
        data: cloneDeep(allMemberships),
        meta: {
          current_page: 1,
          total: 1,
          per_page: 15
        },
        links: {}
      }),
      deleteMembership: jest.fn().mockResolvedValue(),
      inviteMember: jest.fn().mockResolvedValue()
    }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: [
        {
          name: 'space-memberships-messages',
          component: MessagesIndexPage,
          path: '_space/memberships/messages'
        },
        {
          name: 'space-memberships-add',
          component: MembershipAddPage,
          path: '_space/memberships/add'
        },
        {
          name: 'space-memberships-id',
          component: MemberIndexPage,
          path: '_space/memberships/:id'
        }
      ]
    })

    const route = {
      query: {
        page: 1
      }
    }

    const asyncDataResponse = await UninvitedIndexPage.asyncData({
      store,
      $membership,
      route
    })

    wrapper = createWrapper(
      UninvitedIndexPage,
      store,
      router,
      {
        searchTerm: '',
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
          $membership: $membership,
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
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('confirm membership invitation', async () => {
    const confirmButtons = wrapper.findAll('button.btn.btn-purple.btn-primary')
    confirmButtons.at(1).trigger('click')
    await flushPromises()

    expect($membership.inviteMember).toHaveBeenCalled()
    expect($membership.inviteMember.mock.calls[0][0]).toBe(allMemberships[1].id)
  })

  it('cancels membership invitation', async () => {
    // mock confirm
    global.confirm = jest.fn().mockReturnValue(true)

    const cancelButtons = wrapper.findAll(
      'button.btn.ml-2.text-danger.btn-transparent'
    )
    cancelButtons.at(0).trigger('click')
    await flushPromises()

    expect($membership.deleteMembership).toHaveBeenCalled()
    expect($membership.deleteMembership.mock.calls[0][0]).toBe(
      allMemberships[0].id
    )
  })
})
