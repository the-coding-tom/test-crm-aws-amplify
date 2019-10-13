export default function(ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space
  }
  const baseUrl = `/${subdomain()}/emails`

  const getError = e => {
    ctx.error({
      statusCode: e.statusCode,
      message: e.response ? JSON.stringify(e.response.data) : e.message
    })
  }

  const Email = {
    getAllEmails: () => {
      return ctx.$axios.$get(baseUrl).catch(e => {
        getError(e)
      })
    },
    getSingleEmail: id => {
      return ctx.$axios.$get(`${baseUrl}/${id}`).catch(e => {
        getError(e)
      })
    },
    createEmail: payload => {
      return ctx.$axios.$post(baseUrl, payload)
    }
  }

  ctx.$email = Email
  inject('email', Email)
}
