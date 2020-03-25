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

      return ctx.$axios.$get(`${subdomain()}/admins`)
    },
    getAnAdmin: id => {
      return ctx.$axios.$get(`${baseUrl}/${id}`)
    },
    updateAnAdmin: (id, payload) => {
      return ctx.$axios.$patch(`${baseUrl}/${id}`, payload)
    },
    deleteAnAdmin: id => {
      return ctx.$axios.$delete(`${baseUrl}/${id}`)
    },
    addAnAdmin: payload => {
      return ctx.$axios.$post(baseUrl, payload)
    }
  }
  ;(ctx.$admin = Admin), inject('admin', Admin)
}
