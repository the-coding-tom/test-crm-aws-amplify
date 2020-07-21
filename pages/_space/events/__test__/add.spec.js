import AddPage from '@/pages/_space/events/add.vue'
import IdIndexPage from '@/pages/_space/events/_id/index.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import FullCalendar from '@/components/widgets/FullCalendar'
import BasePagination from '~/components/argon-core/BasePagination'
import { Editor } from '@toast-ui/vue-editor'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import allCategories from './resources/all-categories.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'
import allResources from '@/pages/_space/resources/__test__/resources/all-resources.json'

describe('Page: /:space/events/add | Events Add Page', () => {
  let NuxtStore, store, wrapper, $event, router, newEvent

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    newEvent = {
      title: 'Teseralt',
      capacity: 40,
      price: 40,
      maxTicketPerPerson: 3,
      startTime: '2020-05-02 05:00:00',
      endTime: '2020-05-06 02:00:00'
    }

    $event = {
      getEventCategories: jest.fn().mockResolvedValue(cloneDeep(allCategories)),
      getRooms: jest.fn().mockResolvedValue(cloneDeep(allResources)),
      addEvent: jest.fn().mockResolvedValue({ data: newEvent })
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
          path: '_space/events/id',
          name: 'space-events-id',
          component: IdIndexPage
        }
      ]
    })

    await AddPage.asyncData({ store, $event })

    wrapper = createWrapper(
      AddPage,
      store,
      router,
      {
        category: '',
        title: '',
        description: '',
        capacity: 10,
        price: 10,
        startTime: newEvent.startTime,
        endTime: newEvent.endTime,
        eventLogo: '',
        hostLogo: '',
        sendMail: false,
        emailSubject: 'Booking Confirmed',
        emailMessage: '',
        selectedRoom: null,
        max_ticket_per_person: 3,
        external: false,
        external_location: null,
        banner_image: ''
      },
      {
        stubs: {
          'nuxt-link': true,
          'client-only': true,
          transition: false,
          'date-picker': {
            template: '<div>date-picker-stub</div>',
            props: {
              value: ''
            }
          }
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component('full-calendar', FullCalendar)
        vueInstance.component(Card.name, Card)
        vueInstance.component('Editor', Editor)
        vueInstance.prototype.$event = $event
        vueInstance.prototype.$moment = moment
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('add an event', async () => {
    wrapper.find('#title').setValue(newEvent.title)
    wrapper.find('#capacity').setValue(newEvent.capacity)
    // wrapper.find('#description').setValue(newEvent.description)
    wrapper.find('#price').setValue(newEvent.price)
    wrapper.find('#maxTicketPerPerson').setValue(newEvent.maxTicketPerPerson)
    wrapper.find('#sendMailCheckbox').setChecked(false)

    //  select category
    const categoryOptions = wrapper.vm.$el.querySelectorAll(
      '.el-select-dropdown__item'
    )
    const evt = document.createEvent('MouseEvents')
    evt.initEvent('mouseenter')
    categoryOptions[1].dispatchEvent(evt)
    categoryOptions[1].click()
    await wrapper.vm.$nextTick()

    // select room
    wrapper.find('#external-1').setChecked(false)
    const roomOptions = wrapper.findAll('#rooms input')
    roomOptions.at(0).setChecked(true)
    await wrapper.vm.$nextTick()

    wrapper
      .find('button.btn.btn-primary.text-white.btn-secondary')
      .trigger('click')

    expect($event.addEvent).toHaveBeenCalled()
    expect($event.addEvent.mock.calls[0][0].name).toBe(newEvent.title)
    expect(parseInt($event.addEvent.mock.calls[0][0].price)).toBe(
      newEvent.price
    )
    expect($event.addEvent.mock.calls[0][0].type).toBe('event')
    expect($event.addEvent.mock.calls[0][0].room_id).toBe(
      allResources.data.data[0].id
    )
    expect(
      parseInt($event.addEvent.mock.calls[0][0].max_ticket_per_person)
    ).toBe(newEvent.maxTicketPerPerson)
    expect(parseInt($event.addEvent.mock.calls[0][0].total_tickets)).toBe(
      newEvent.capacity
    )
  })
})
