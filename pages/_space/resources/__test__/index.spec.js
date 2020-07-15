import Card from '~/components/argon-core/Cards/Card.vue'
import Badge from '~/components/argon-core/Badge.vue'
import AddPage from '@/pages/_space/resources/add.vue'
import ViewPage from '@/pages/_space/resources/_id/index.vue'
import IndexPage from '@/pages/_space/resources/index.vue'
import BaseHeader from '~/components/argon-core/BaseHeader'
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue'
import BootstrapVue from 'bootstrap-vue'
import BasePagination from '~/components/argon-core/BasePagination'

import moment from 'moment'
import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'

import allResources from './resources/all-resources.json'

describe('Page: /:space/resources/ | Resources Index Page', () => {
  let NuxtStore, store, wrapper, $resource, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $resource = {
      getAllRooms: jest.fn().mockResolvedValue(cloneDeep(allResources)),
      deleteRoom: jest.fn().mockResolvedValue()
    }

    // mock confirm
    global.confirm = jest
      .fn()
      .mockReturnValueOnce(false)
      .mockReturnValue(true)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.$resource = $resource
    store._vm.$bvToast = {
      toast: jest.fn().mockReturnValue()
    }

    router = new VueRouter({
      routes: [
        {
          path: '_space/resources/add',
          name: 'space-resources-add',
          component: AddPage
        },
        {
          path: '_space/resources/id/edit',
          name: 'space-resources-id-edit',
          component: ViewPage
        }
      ]
    })

    wrapper = createWrapper(
      IndexPage,
      store,
      router,
      {
        daylookup: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursaday',
          5: 'Friday',
          6: 'Saturday'
        }
      },
      {
        stubs: {
          NuxtLink: true
        }
      },
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BasePagination.name, BasePagination)
        vueInstance.component(BaseInput.name, BaseInput)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.component(Card.name, Card)
        vueInstance.component(Badge.name, Badge)
        vueInstance.prototype.$moment = moment
      }
    )

    await wrapper.vm.$options.asyncData({ store })
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders all resources', async () => {
    const wrapArr = wrapper.findAll('.card')

    expect(wrapArr.length).toBe(2)
  })

  it('reject removal a resource', async () => {
    wrapper.find('a.text-danger').trigger('click')
    await flushPromises()

    expect($resource.deleteRoom).not.toHaveBeenCalled()
  })

  it('removes a resource', async () => {
    wrapper.find('a.text-danger').trigger('click')
    await flushPromises()

    expect($resource.deleteRoom).toHaveBeenCalled()
  })
})
