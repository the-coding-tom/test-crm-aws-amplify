import Vue from 'vue'
import Rollbar from 'rollbar'

const createRollbarInstance = function (accessToken) {
  const config = {}
  config.accessToken = accessToken
  return new Rollbar(config)
}

const serverRollbar = createRollbarInstance('f6992963cbab499890c235f6e446d353')

const clientRollbar = createRollbarInstance('e25d4776e2cb4dd385dbe74ffd47cb43')

const noop = function () {}
const stubRollbar = Object.create(null)
Object.defineProperties(
  stubRollbar,
  Object.getOwnPropertyNames(Rollbar.prototype).reduce(function (acc, key) {
    acc[key] = { value: noop }
    return acc
  }, {}))

const RollbarAdapter = Object.create(null)
Object.defineProperty(RollbarAdapter, 'instance', {
  get() {
    if (process.server) {
      return serverRollbar
    }

    if (process.client) {
      return clientRollbar
    }

    return stubRollbar
  },
})

export default function (ctx, inject) {
  // Inject Rollbar to the context as $rollbar
  ctx.$rollbar = RollbarAdapter.instance
  inject('rollbar', RollbarAdapter.instance)
  Vue.rollbar = RollbarAdapter.instance
}
