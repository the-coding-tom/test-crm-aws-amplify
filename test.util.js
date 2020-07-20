import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'

export const createWrapper = function(
  component,
  store = {},
  router = {},
  data = {},
  options = {},
  cb
) {
  const localVue = createLocalVue()

  if (cb && typeof cb === 'function') {
    cb(localVue)
  }

  localVue.use(VueRouter)

  return mount(component, {
    localVue,
    store,
    router,
    data() {
      return data
    },
    ...options
  })
}

export const createContainer = (tag = 'div') => {
  const node = document.createElement(tag)
  document.appendChild(node)

  return node
}
