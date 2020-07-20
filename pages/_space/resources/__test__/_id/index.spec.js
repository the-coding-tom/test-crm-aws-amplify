import Card from '~/components/argon-core/Cards/Card.vue'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import IndexPage from '@/pages/_space/resources/_id/index.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import { createWrapper } from '@/test.util.js'
import moment from 'moment'

import space from '@/pages/_space/__test__/resources/current-space.json'
// import newCategory from './resources/new-resource.json'
import allRooms from '../resources/all-rooms.json'
import allResources from '../resources/all-resources.json'
import allZoomRooms from '../resources/zoom-rooms.json'
import allCategories from '../resources/all-categories.json'
import allAccessPoints from '../resources/access-points.json'

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
      createRoom: jest.fn().mockResolvedValue(),
      updateRoom: jest.fn().mockResolvedValue(),
      getARoom: jest
        .fn()
        .mockResolvedValue({ data: { data: allResources.data.data[0] } })
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

    const route = {
      params: {
        id: allRooms.data[0].id
      }
    }

    const wrapperAsyncData = await IndexPage.asyncData({
      store,
      $zoomrooms,
      route,
      $accesspoint
    })

    wrapper = createWrapper(
      IndexPage,
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

  it('update a resource', async () => {
    // check some of the values of input box
    expect(wrapper.find('#name').element.value).toBe(
      allResources.data.data[0].name
    )
    expect(parseInt(wrapper.find('#pricePerHour').element.value)).toBe(
      allResources.data.data[0].price_per_hour
    )
    expect(parseInt(wrapper.find('#capacity').element.value)).toBe(
      allResources.data.data[0].capacity
    )
    expect(wrapper.find('#description').element.value).toBe(
      allResources.data.data[0].description
    )
    expect(parseInt(wrapper.find('#minBookingDuration').element.value)).toBe(
      allResources.data.data[0].min_booking_duration
    )
    expect(parseInt(wrapper.find('#maxBookingDuration').element.value)).toBe(
      allResources.data.data[0].max_booking_duration
    )

    const updateInfo = {
      name: 'Jxa Room',
      description: 'Must be a mighty'
    }

    // change name
    wrapper.find('#name').setValue(updateInfo.name)
    wrapper.find('#description').setValue(updateInfo.description)

    // submit form
    wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect($resource.updateRoom).toHaveBeenCalled()
    expect($resource.updateRoom.mock.calls[0][0]).toBe(
      allResources.data.data[0].id
    )
    expect($resource.updateRoom.mock.calls[0][1].name).toBe(updateInfo.name)
    expect($resource.updateRoom.mock.calls[0][1].description).toBe(
      updateInfo.description
    )
  })
})
