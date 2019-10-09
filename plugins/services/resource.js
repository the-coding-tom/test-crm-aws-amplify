export default function(ctx, inject) {
  const subdomain = ctx.route.params.space
  const baseUrl = `/${subdomain}/admin/rooms`

  const Resource = {
    getAllRooms: () => {
      return ctx.$axios.get(`${baseUrl}`)
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
    }
  }
  ;(ctx.$resource = Resource), inject('resource', Resource)
}
