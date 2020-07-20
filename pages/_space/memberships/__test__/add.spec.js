import AddPage from '@/pages/_space/memberships/add.vue'
import UninvitedMembership from '@/pages/_space/memberships/uninvited/index.vue'
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
import allPlans from '@/pages/_space/plans/__test__/resources/all-plans.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/memberships/add | Memberships Add Page', () => {
  let NuxtStore, store, wrapper, $membership, router, $plan

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      getPaymentMethods: jest.fn().mockResolvedValue(cloneDeep(cards)),
      addMembership: jest.fn().mockResolvedValue()
    }

    $plan = {
      getAllPlans: jest.fn().mockResolvedValue(cloneDeep(allPlans.data))
    }

    global._ = lodash
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: [
        {
          name: 'space-memberships-uninvited',
          component: UninvitedMembership,
          path: '_space/memberships/uninvited'
        }
      ]
    })

    const asyncDataResponse = await AddPage.asyncData({
      store,
      $plan
    })

    wrapper = createWrapper(
      AddPage,
      store,
      router,
      {
        data: [],
        cards: [],
        admins: [],
        loading: false,
        searching: false,
        options: [
          { text: 'Referral', value: 'referral' },
          { text: 'Application', value: 'application' }
        ],
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
        membership: {
          first_name: '',
          last_name: '',
          linkedin_url: '',
          membership_id: '',
          email: '',
          extras: [{ type: 'referral', comment: '' }],
          founding_member: false,
          trial: false,
          paid_for: false,
          trial_days: '0',
          prefix_type: '0',
          prefix_locality: 'A',
          paid_by: null,
          assigned_admin: null,
          trial_ends_at: '2020-02-05 10:00:00'
        },
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          'no-ssr': true,
          'client-only': true,
          transition: false,
          'date-picker': true
        },
        mocks: {
          $membership: $membership,
          $moment: moment,
          $plan: $plan
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

  it('adds a member', async () => {
    const newMember = {
      firstName: 'larly',
      lastName: 'Ozo',
      email: 'larozo@gmail.com',
      linkedinURL: 'https://linkedin.com/in/larly-ozo-21893221',
      comments: 'happy to be here',
      isOnTrial: true,
      trialDays: 30
    }

    // fill add member form
    wrapper.find('#firstName').setValue(newMember.firstName)
    wrapper.find('#lastName').setValue(newMember.lastName)
    wrapper.find('#email').setValue(newMember.email)
    wrapper.find('#linkedinURL').setValue(newMember.linkedinURL)
    wrapper.find('#comments').setValue(newMember.comments)

    // select invitation source
    const invitationSources = wrapper.findAll('#invitationSource option')
    invitationSources.at(0).setSelected()

    // select memberType
    const memberTypes = wrapper.findAll('#memberType option')
    memberTypes.at(3).setSelected()

    // select region
    const regions = wrapper.findAll('#region option')
    regions.at(2).setSelected()

    wrapper.find('#isOnTrial').setChecked()
    await wrapper.vm.$nextTick()

    wrapper.find('#trialDays').setValue(newMember.trialDays)

    // select plan
    const plans = wrapper.findAll('#plan input')
    plans.at(1).setChecked()
    await wrapper.vm.$nextTick()

    wrapper.find('form').trigger('submit.prevent')

    expect($membership.addMembership).toHaveBeenCalled()
    expect($membership.addMembership.mock.calls[0][0].first_name).toBe(
      newMember.firstName
    )
    expect($membership.addMembership.mock.calls[0][0].last_name).toBe(
      newMember.lastName
    )
    expect($membership.addMembership.mock.calls[0][0].email).toBe(
      newMember.email
    )
    expect($membership.addMembership.mock.calls[0][0].linkedin_url).toBe(
      newMember.linkedinURL
    )
    expect($membership.addMembership.mock.calls[0][0].trial).toBe(true)
    expect(
      parseInt($membership.addMembership.mock.calls[0][0].trial_days)
    ).toBe(newMember.trialDays)
    expect($membership.addMembership.mock.calls[0][0].prefix_locality).toBe('C')
    expect($membership.addMembership.mock.calls[0][0].extras[0].comment).toBe(
      newMember.comments
    )
  })
})
