import Card from '~/components/argon-core/Cards/Card.vue'
import IndexPage from '@/pages/_space/resources/bookings/index.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import FullCalendar from '@/components/widgets/FullCalendar'

import VueRouter from 'vue-router'
import { createWrapper } from '@/test.util.js'
import cloneDeep from 'lodash/cloneDeep'
import moment from 'moment'

import allRooms from '../resources/all-rooms.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/resources | Resources Index Page', () => {
  let NuxtStore, store, wrapper, $membership, $resource, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $membership = {
      getAllMemberships: jest.fn().mockResolvedValue({ data: { data: [] } })
    }

    $resource = {
      getAllBookings: jest.fn().mockResolvedValue(),
      getAllRooms: jest.fn().mockResolvedValue(cloneDeep(allRooms))
    }
  })

  beforeEach(async () => {
    router = new VueRouter({
      routes: []
    })

    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)
    store.$resource = $resource
    store.$router = router
    store._vm.$bvToast = {
      toast: jest.fn()
    }

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        processing: false,
        loading: false,
        searching: false,
        newBooking: {
          from: null,
          to: null,
          title: null,
          membership_id: null,
          room_id: null,
          payment_method: null,
          card: null,
          source: null
        },
        timePickerOptions: {
          start: '00:00',
          step: '00:15',
          end: '23:30'
        },
        calendarPlugin: 'dayGridMonth,timeGridWeek',
        views: {
          listWeek: {
            noEventsMessage: 'No bookings to display'
          }
        },
        bookdata: {
          from: null,
          to: null,
          title: null,
          membership_id: null,
          room_id: null,
          booking_id: null
        },
        modalText: 'Add New Booking',
        showmodal: true,
        modalUpdate: false,
        disabledates: [],
        paymenttype: [{ id: 1, name: 'card' }, { id: 2, name: 'credit' }],
        payCards: []
      },
      {
        stubs: {
          'client-only': true
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(Card.name, Card)
        vueInstance.component('full-calendar', FullCalendar)
        vueInstance.prototype.$moment = moment
      }
    )

    await wrapper.vm.$options.asyncData({ store, $membership, $resource })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()

    expect($membership.getAllMemberships).toHaveBeenCalled()
    expect($resource.getAllRooms).toHaveBeenCalled()
    expect($resource.getAllBookings).toHaveBeenCalled()
  })
})
