import IdIndexPage from '@/pages/_space/directory/_id/index.vue'
import MembershipIdIndexPage from '@/pages/_space/memberships/_id/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import Card from '~/components/argon-core/Cards/Card.vue'
import Badge from '~/components/argon-core/Badge.vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import lodash from 'lodash'
import moment from 'moment'

import allPlans from '@/pages/_space/plans/__test__/resources/all-plans.json'
import allMemberships from '@/pages/_space/memberships/__test__/resources/all-memberships.json'
import singleMembership from '@/pages/_space/memberships/__test__/resources/single-membership.json'
import cards from '@/pages/_space/memberships/__test__/resources/cards.json'

describe('Page: /:space/directory/ | Directory Id Index Page', () => {
  let NuxtStore, store, wrapper, $membership, router, $checkin, $plan

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      getPaymentMethods: jest.fn().mockResolvedValue(cloneDeep(cards)),
      getSubscriptions: jest.fn().mockResolvedValue({ data: [] }),
      getPaidFor: jest.fn().mockResolvedValue({ data: [] }),
      getAllMemberships: jest.fn().mockResolvedValue({
        data: cloneDeep(allMemberships),
        meta: { total: 1, per_page: 15, current_page: 1 },
        links: {}
      }),
      getAMembership: jest
        .fn()
        .mockResolvedValue({ data: cloneDeep(singleMembership) }),
      deleteMembership: jest.fn().mockResolvedValue({ data: {} }),
      addPlan: jest.fn().mockResolvedValue(),
      cancelSubscription: jest.fn().mockResolvedValue({})
    }

    $checkin = {
      checkin: jest.fn().mockResolvedValue(),
      checkout: jest.fn().mockResolvedValue(),
      checkins: jest.fn().mockResolvedValue({
        data: [],
        meta: { total: 1, per_page: 15, current_page: 1 },
        links: {}
      })
    }

    $plan = {
      getAllPlan: jest.fn().mockResolvedValue(cloneDeep(allPlans))
    }

    global._ = lodash
  })

  beforeEach(async done => {
    store = await NuxtStore.createStore()

    router = new VueRouter({
      routes: [
        {
          path: '_space/memberships/_id',
          component: MembershipIdIndexPage,
          name: 'space-memberships-id'
        }
      ]
    })

    const route = {
      query: {
        page: 1
      }
    }

    const params = {
      id: singleMembership.id
    }

    const asyncDataResponse = await IdIndexPage.asyncData({
      store,
      $membership,
      route,
      params
    })

    wrapper = createWrapper(
      IdIndexPage,
      store,
      router,
      {
        plan_id: '',
        loading: false,
        checked: false,
        cards: [],
        currentPage: 1,
        perPage: 5,
        drawer: false,
        direction: 'rtl',
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          'no-ssr': true,
          transition: false,
          'b-popover': true,
          'date-picker': {
            template: '<div>date-picker-stub</div>',
            props: {
              value: ''
            }
          }
        },
        mocks: {
          $membership: $membership,
          $checkin: $checkin,
          $moment: moment,
          $plan: $plan
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)
        vueInstance.component(Badge.name, Badge)
      }
    )

    await flushPromises()
    wrapper.vm.$nextTick(done)
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('adds a plan', async () => {
    wrapper.find('#addPlanBtn').trigger('click')
    await wrapper.vm.$nextTick()

    //  select plan
    const planOptions = wrapper.vm.$el.querySelectorAll(
      '#selectPlan .el-select-dropdown__item'
    )
    const evt = document.createEvent('MouseEvents')
    evt.initEvent('mouseenter')
    planOptions[1].dispatchEvent(evt)
    planOptions[1].click()
    await flushPromises()

    // select member
    const cardOptions = wrapper.vm.$el.querySelectorAll(
      '#memberCard .el-select-dropdown__item'
    )
    const evtC = document.createEvent('MouseEvents')
    evtC.initEvent('mouseenter')
    cardOptions[0].dispatchEvent(evtC)
    cardOptions[0].click()
    await flushPromises()

    // mock location.reload()
    const { location } = window
    delete window.location
    window.location = { ...location, reload: jest.fn() }

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($membership.addPlan).toHaveBeenCalled()
    expect($membership.addPlan.mock.calls[0][1].plan_id).toBe(
      allPlans.data.data[1].id
    )
    expect($membership.addPlan.mock.calls[0][1].card_nonce).toBe(
      cards.data[0].id
    )
  })

  it('cancel a plan', async () => {
    // mock confirm
    global.confirm = jest.fn().mockReturnValue(true)

    wrapper
      .find('button.btn.text-danger.btn-transparent.btn-sm')
      .trigger('click')

    expect($membership.cancelSubscription).toHaveBeenCalled()
  })

  it('deletes a member', async () => {
    // mock confirm
    global.confirm = jest.fn().mockReturnValue(true)

    wrapper.find('#deleteMember').trigger('click')

    expect($membership.deleteMembership).toHaveBeenCalled()
  })
})
