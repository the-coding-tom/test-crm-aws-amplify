import SettingsPage from '@/pages/_space/checkins/settings.vue'
import BootstrapVue from 'bootstrap-vue'
import BaseHeader from '~/components/argon-core/BaseHeader'

import VueRouter from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import flushPromises from 'flush-promises'
import { createWrapper } from '@/test.util.js'
import lodash from 'lodash'

import allSettings from './resources/all-settings.json'
import currentSpace from '@/pages/_space/__test__/resources/current-space.json'

describe('Page: /:space/checkins/settings | Checkins Settings Index Page', () => {
  let NuxtStore, store, wrapper, $checkin, router

  beforeAll(async () => {
    NuxtStore = await import(`${process.env.buildDir}/store.js`)
    const { createRouter } = await import(`${process.env.buildDir}/router.js`)

    createRouter()

    $checkin = {
      saveSetting: jest.fn().mockResolvedValue(),
      deleteSetting: jest.fn().mockResolvedValue(),
      settings: jest.fn().mockResolvedValue(cloneDeep(allSettings))
    }

    global._ = lodash

    // mock reload
    const { location } = window
    delete window.location
    window.location = { ...location, reload: jest.fn() }
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.commit('space/setSpace', currentSpace)

    router = new VueRouter({
      routes: []
    })

    const asyncDataResponse = await SettingsPage.asyncData({ store, $checkin })

    wrapper = createWrapper(
      SettingsPage,
      store,
      router,
      {
        loading: false,
        fields: [
          {
            key: 'type',
            label: 'Membership Type'
          },
          {
            key: 'option',
            label: 'Number of Guests'
          },
          {
            key: 'action',
            label: ''
          }
        ],
        setting: {
          option: '1',
          type: ''
        },
        ...asyncDataResponse
      },
      {},
      vueInstance => {
        vueInstance.use(BootstrapVue)
        vueInstance.component(BaseHeader.name, BaseHeader)
        vueInstance.prototype.$checkin = $checkin
      }
    )
  })

  it('renders properly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('adds a setting', async () => {
    wrapper.find('#add-setting-modal').trigger('click')
    await wrapper.vm.$nextTick()

    const settingOptions = wrapper.findAll('select option')
    settingOptions.at(2).setSelected()
    await wrapper.vm.$nextTick()

    wrapper.find('input').setValue(20)
    await wrapper.vm.$nextTick()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($checkin.saveSetting).toHaveBeenCalled()
    expect(parseInt($checkin.saveSetting.mock.calls[0][1].option)).toBe(20)
    expect($checkin.saveSetting.mock.calls[0][1].type).toBe('1')
  })

  it('edits a setting', async () => {
    wrapper.find('button.btn.btn-primary.btn-sm').trigger('click')
    await flushPromises()

    const settingOptions = wrapper.findAll('select option')
    settingOptions.at(4).setSelected()
    await wrapper.vm.$nextTick()

    wrapper.find('input').setValue(60)
    await wrapper.vm.$nextTick()

    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect($checkin.saveSetting).toHaveBeenCalled()
    expect(parseInt($checkin.saveSetting.mock.calls[1][1].option)).toBe(60)
    expect($checkin.saveSetting.mock.calls[1][1].type).toBe('3')
  })

  it('removes a setting', async () => {
    // mock confirm
    global.confirm = jest.fn().mockReturnValue(true)

    wrapper
      .find('button.btn.text-danger.btn-transparent.btn-sm')
      .trigger('click')

    expect($checkin.deleteSetting).toHaveBeenCalled()
    expect($checkin.deleteSetting.mock.calls[0][1]).toBe(allSettings.data[0].id)
  })
})
