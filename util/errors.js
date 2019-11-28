export const displayError = function(e) {
  if (e.response) {
    processError(e.response.data.message)

    if (e.response.data.errors) {
      _.each(e.response.data.errors, (o, i) => {
        return _.each(o, (v, k) => processError(v))
      })
    }

    return
  }

  processError(e.message)
}

const processError = function(message) {
  console.log('------------------------------------')
  console.log(message)
  console.log('------------------------------------')
}
