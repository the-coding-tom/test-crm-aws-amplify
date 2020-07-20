import MemberPage from '@/pages/_space/memberships/_id/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import Card from '~/components/argon-core/Cards/Card.vue'
import Badge from '~/components/argon-core/Badge.vue'
import Vue2Filters from 'vue2-filters'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import lodash from 'lodash'
import moment from 'moment'

import cards from '@/pages/_space/memberships/__test__/resources/cards.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'
import allMembers from '@/pages/_space/memberships/__test__/resources/all-memberships-uninvited.json'

describe('Page: /:space/memberships/_id/ | Memberships Id Page', () => {
  let NuxtStore, store, wrapper, $membership, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      getPaymentMethods: jest.fn().mockResolvedValue(cloneDeep(cards)),
      getAMembership: jest.fn().mockResolvedValue({ data: allMembers[1] }),
      deleteMembership: jest.fn().mockResolvedValue({ data: {} }),
      updateMembership: jest.fn().mockResolvedValue()
    }

    global._ = lodash
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: []
    })

    const params = {
      id: allMembers[1].id
    }

    const asyncDataResponse = await MemberPage.asyncData({
      store,
      $membership,
      params
    })

    wrapper = createWrapper(
      MemberPage,
      store,
      router,
      {
        loading: false,
        admins: [],
        options: [
          { text: 'Referral', value: 'referral' },
          { text: 'Application', value: 'application' }
        ],
        paid_by: null,
        prefix_type: [
          {
            text: 'Founding Member',
            value: '0'
          },
          {
            text: 'Fast Track',
            value: '1'
          },
          {
            text: 'Early Invite',
            value: '2'
          },
          {
            text: 'General Member',
            value: '3'
          }
        ],
        prefix_locality: [
          {
            text: 'Bay Area',
            value: 'A'
          },
          {
            text: 'US outside of the Bay',
            value: 'B'
          },
          {
            text: 'EMEA',
            value: 'C'
          },
          {
            text: 'APAC',
            value: 'D'
          }
        ],
        searching: false,
        cards: [],
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          'no-ssr': true,
          'client-only': true,
          transition: false,
          'b-popover': true,
          'date-picker': true
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
        vueInstance.component(Badge.name, Badge)
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('cancel member', async () => {
    // mock confirm
    global.confirm = jest.fn().mockReturnValue(true)

    wrapper.find('button.btn.text-danger.btn-transparent').trigger('click')
    await flushPromises()

    expect($membership.deleteMembership).toHaveBeenCalled()
  })

  it('renders member information', async () => {
    expect(wrapper.find('#email').element.value).toBe(allMembers[1].email)
    expect(wrapper.find('#firstName').element.value).toBe(
      allMembers[1].first_name
    )
    expect(wrapper.find('#lastName').element.value).toBe(
      allMembers[1].last_name
    )
    expect(wrapper.find('#membershipNumber').element.value).toBe(
      allMembers[1].membership_number
    )
    expect(wrapper.find('#linkedinURL').element.value).toBe(
      allMembers[1].linkedin_url
    )
    expect(wrapper.find('#comment').element.value).toBe(
      allMembers[1].extras[0].comment
    )
    expect(wrapper.find('#email').element.value).toBe(allMembers[1].email)
  })

  it('updates member', async () => {
    const updateMemberInfo = {
      firstName: 'Lata',
      lastName: 'Paul'
    }

    wrapper.find('#lastName').setValue(updateMemberInfo.lastName)
    wrapper.find('#firstName').setValue(updateMemberInfo.firstName)
    await flushPromises()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($membership.updateMembership).toHaveBeenCalled()
    expect($membership.updateMembership.mock.calls[0][1].first_name).toBe(
      updateMemberInfo.firstName
    )
    expect($membership.updateMembership.mock.calls[0][1].last_name).toBe(
      updateMemberInfo.lastName
    )
  })
})
