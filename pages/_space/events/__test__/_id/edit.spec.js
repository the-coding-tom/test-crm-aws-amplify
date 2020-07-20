import IdIndexPage from '@/pages/_space/events/_id/index.vue'
import IdEditPage from '@/pages/_space/events/_id/edit.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import FullCalendar from '@/components/widgets/FullCalendar'
import { Editor } from '@toast-ui/vue-editor'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import eventCategories from '../resources/all-categories.json'
import event from '../resources/event.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/events/:id/edit | Events Edit Page', () => {
  let NuxtStore, store, wrapper, $event, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $event = {
      getEvent: jest.fn().mockResolvedValue({ data: event }),
      getEventCategories: jest
        .fn()
        .mockResolvedValue(cloneDeep(eventCategories)),
      updateEvent: jest.fn().mockResolvedValue({ data: event })
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
          name: 'space-events-id',
          path: '_space/events/:id',
          component: IdIndexPage
        }
      ]
    })

    const params = {
      id: event.id
    }

    const asyncDataResponse = await IdEditPage.asyncData({
      store,
      $event,
      params
    })

    wrapper = createWrapper(
      IdEditPage,
      store,
      router,
      {
        ...asyncDataResponse
      },
      {
        stubs: {
          'nuxt-link': true,
          'client-only': true,
          transition: false,
          'date-picker': true
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(Card.name, Card)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component('full-calendar', FullCalendar)
        vueInstance.component('Editor', Editor)
        vueInstance.prototype.$event = $event
        vueInstance.prototype.$moment = moment
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('shows event info', () => {
    expect(wrapper.find('#title').element.value).toBe(event.name)
    expect(parseInt(wrapper.find('#capacity').element.value)).toBe(
      event.total_tickets
    )
    // expect(wrapper.find('#description').element.value).toBe(
    //   event.description
    // )
    expect(wrapper.vm.$data.event.start_time).toBe(event.start_time)
    expect(wrapper.vm.$data.event.end_time).toBe(event.end_time)
    expect(parseInt(wrapper.find('#price').element.value)).toBe(event.price)
    expect(parseInt(wrapper.find('#maxTicketPerPerson').element.value)).toBe(
      event.max_ticket_per_person
    )
  })

  it('updates event info', async () => {
    const updatedInfo = {
      name: 'Wrap Ahead',
      capacity: 1000,
      price: 1
    }

    wrapper.find('#title').setValue(updatedInfo.name)
    wrapper.find('#capacity').setValue(updatedInfo.capacity)
    wrapper.find('#price').setValue(updatedInfo.price)
    await wrapper.vm.$nextTick()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($event.updateEvent).toHaveBeenCalled()
    expect($event.updateEvent.mock.calls[0][1].name).toBe(updatedInfo.name)
    expect(parseInt($event.updateEvent.mock.calls[0][1].price)).toBe(
      updatedInfo.price
    )
    expect(parseInt($event.updateEvent.mock.calls[0][1].total_tickets)).toBe(
      updatedInfo.capacity
    )
  })
})
