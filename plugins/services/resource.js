export default function(ctx, inject) {
  const subdomain = ctx.route.params.space
  const baseUrl = `/${subdomain}/admin/rooms`

  const Resource = {
    getAllRooms: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl}`)
      }
      return ctx.$axios.get(link)
    },
    getARoom: id => {
      return ctx.$axios.get(`${baseUrl}/${id}`)
    },
    createRoom: payload => {
      return ctx.$axios.post(`${baseUrl}`, payload)
    },
    updateRoom: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl}/${id}`, payload)
    },
    deleteRoom: id => {
      return ctx.$axios.delete(`${baseUrl}/${id}`)
    },
    getAllCategories: () => {
      return ctx.$axios.get(`${subdomain}/room-categories`)
    },
    createCategory: payload => {
      return ctx.$axios.post(`${subdomain}/room-categories`, payload)
    },
    getOneCategory: id => {
      return ctx.$axios.get(`${subdomain}/room-categories/${id}`)
    },
    updateCategory: (id, payload) => {
      return ctx.$axios.patch(`${subdomain}/room-categories/${id}`, payload)
    },
    deleteCategory: id => {
      return ctx.$axios.delete(`${subdomain}/room-categories/${id}`)
    }
  }
  ;(ctx.$resource = Resource), inject('resource', Resource)
}
