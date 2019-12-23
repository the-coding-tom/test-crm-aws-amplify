export const displayError = function(e, vm = null) {
  if (e.response) {
    processError(e.response.data.message, vm)

    if (e.response.data.errors) {
      _.each(e.response.data.errors, (o, i) => {
        return _.each(o, (v, k) => processError(v, vm))
      })
    }

    return
  }

  processError(e.message, vm)
}

const processError = function(message, vm) {
  console.log('------------------------------------')
  console.log(message)
  console.log('------------------------------------')
  vm && vm.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
}
