import AddPage from '@/pages/_space/resources/add.vue'
import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import BaseHeader from '~/components/argon-core/BaseHeader'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import space from '@/pages/_space/__test__/resources/current-space.json'
import newCategory from './resources/new-resource.json'
import allZoomRooms from './resources/zoom-rooms.json'
import allCategories from './resources/all-categories.json'
import allAccessPoints from './resources/access-points.json'

describe('Page: /:space/resources/ | Resources Add Page', () => {
  let NuxtStore, store, wrapper, router, $resource, $accesspoint, $zoomrooms

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $zoomrooms = {
      getRooms: jest.fn().mockResolvedValue(cloneDeep(allZoomRooms))
    }

    $resource = {
      getAllCategories: jest.fn().mockResolvedValue(cloneDeep(allCategories)),
      createRoom: jest.fn().mockResolvedValue()
    }

    $accesspoint = {
      list: jest.fn().mockResolvedValue(cloneDeep(allAccessPoints))
    }
  })

  beforeEach(async () => {
    router = new VueRouter({
      routes: []
    })

    store = await NuxtStore.createStore()
    store.commit('space/setSpace', space)
    store.$resource = $resource
    store.$router = router
    store.$moment = moment
    store._vm.$bvToast = {
      toast: jest.fn()
    }

    const wrapperAsyncData = await AddPage.asyncData({
      store,
      $zoomrooms,
      $accesspoint
    })

    wrapper = createWrapper(
      AddPage,
      store,
      router,
      {
        loading: false,
        ...wrapperAsyncData
      },
      {
        stubs: {
          NuxtLink: true,
          transition: false
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(Card.name, Card)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.prototype.$accesspoint = $accesspoint
        vueInstance.prototype.$zoomrooms = $zoomrooms
        vueInstance.prototype.$moment = moment
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('adds a resource', async () => {
    // fill input fields
    wrapper.find('#name').setValue(newCategory.name)
    wrapper.find('#pricePerHour').setValue(newCategory.pricePerHour)
    wrapper.find('#capacity').setValue(newCategory.capacity)
    wrapper.find('#description').setValue(newCategory.description)
    wrapper.find('#minBookingDuration').setValue(newCategory.minBookingDuration)
    wrapper.find('#maxBookingDuration').setValue(newCategory.maxBookingDuration)
    wrapper
      .find('#availableBookingTime')
      .setValue(newCategory.availableBookingTime)
    wrapper.find('#canBook').setChecked(true)

    //  select category
    const categoryOptions = wrapper.vm.$el.querySelectorAll(
      '.el-select-dropdown__item'
    )
    const evt = document.createEvent('MouseEvents')
    evt.initEvent('mouseenter')
    categoryOptions[1].dispatchEvent(evt)
    categoryOptions[1].click()
    await flushPromises()

    // select zoom id
    const zoomOptions = wrapper.findAll('#accessPointId option')
    zoomOptions.at(1).setSelected()
    await flushPromises()

    // select accesspoint
    const accessPointOptions = wrapper.findAll('#zoomRoomId option')
    accessPointOptions.at(1).setSelected()
    await flushPromises()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($resource.createRoom).toHaveBeenCalled()
    expect($resource.createRoom.mock.calls[0][0].name).toBeDefined()
    expect($resource.createRoom.mock.calls[0][0].description).toBeDefined()
    expect($resource.createRoom.mock.calls[0][0].capacity).toBeDefined()
    expect(
      $resource.createRoom.mock.calls[0][0].min_booking_duration
    ).toBeDefined()
    expect(
      $resource.createRoom.mock.calls[0][0].max_booking_duration
    ).toBeDefined()
    expect($resource.createRoom.mock.calls[0][0].price_per_hour).toBeDefined()
    expect($resource.createRoom.mock.calls[0][0].can_book).toBeDefined()
    expect($resource.createRoom.mock.calls[0][0].room_category_id).toBeDefined()
    expect(
      $resource.createRoom.mock.calls[0][0].room_availability
    ).toBeDefined()
    expect($resource.createRoom.mock.calls[0][0].zoom_room_id).toBeDefined()
    expect($resource.createRoom.mock.calls[0][0].access_point_id).toBeDefined()
  })
})
