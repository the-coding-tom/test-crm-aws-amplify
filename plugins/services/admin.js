export default function(ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space
  }
  const baseUrl = `/${subdomain()}/admins`

  const getError = e => {
    return e.response ? JSON.stringify(e.response.data) : e.message
  }
  const Admin = {
    getAllAdmins: (link = null) => {
      if (link) {
        return ctx.$axios.$get(link)
      }

      return ctx.$axios.$get(`${subdomain()}/admins`).catch(e => {
        ctx.error({ statusCode: e.statusCode, message: getError(e) })
      })
    },
    getAnAdmin: id => {
      return ctx.$axios.$get(`${baseUrl}/${id}`).catch(e => {
        ctx.error({ statusCode: e.statusCode, message: getError(e) })
      })
    },
    updateAnAdmin: (id, payload) => {
      return ctx.$axios.$patch(`${baseUrl}/${id}`, payload).catch(e => {
        ctx.error({ statusCode: e.statusCode, message: getError(e) })
      })
    },
    deleteAnAdmin: id => {
      return ctx.$axios.$delete(`${baseUrl}/${id}`).catch(e => {
        ctx.error({ statusCode: e.statusCode, message: getError(e) })
      })
    },
    addAnAdmin: payload => {
      return ctx.$axios.$post(baseUrl, payload).catch(e => {
        ctx.error({ statusCode: e.statusCode, message: getError(e) })
      })
    }
  }
  ;(ctx.$admin = Admin), inject('admin', Admin)
}
