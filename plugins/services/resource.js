export default function(ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space
  }

  const baseUrl = () => {
    return `/${subdomain()}/admin/rooms`
  }

  const Resource = {
    getAllRooms: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`)
      }
      return ctx.$axios.get(`${baseUrl()}${link}`)
      // return ctx.$axios.get(`${link}`)
    },
    getRoomResources: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`)
      }
      // return ctx.$axios.
      return ctx.$axios.get(`${link}`)
    },
    getARoom: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}`)
    },
    createRoom: payload => {
      return ctx.$axios.post(`${baseUrl()}`, payload)
    },
    updateRoom: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}`, payload)
    },
    deleteRoom: id => {
      return ctx.$axios.delete(`${baseUrl()}/${id}`)
    },
    getAllCategories: () => {
      return ctx.$axios.get(`${subdomain()}/room-categories`)
    },
    createCategory: payload => {
      return ctx.$axios.post(`${subdomain()}/room-categories`, payload)
    },
    getOneCategory: id => {
      return ctx.$axios.get(`${subdomain()}/room-categories/${id}`)
    },
    updateCategory: (id, payload) => {
      return ctx.$axios.patch(`${subdomain()}/room-categories/${id}`, payload)
    },
    deleteCategory: id => {
      return ctx.$axios.delete(`${subdomain()}/room-categories/${id}`)
    },
    getBookingForARoom: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}/bookings`)
    },
    updateRoomBooking: (id, payload) => {
      return ctx.$axios.patch(
        `${subdomain()}/rooms/bookings/${id}/update`,
        payload
      )
    },
    cancelRoomBooking: id => {
      return ctx.$axios.delete(`${subdomain()}/rooms/bookings/${id}`)
    },
    bookRoomForMember: (id, payload) => {
      payload.payment_method = payload.payment_method ?? 'credit'
      return ctx.$axios.post(`${subdomain()}/rooms/${id}/book/behalf`, payload)
    },

    getAllBookings: () => {
      return ctx.$axios.get(`${subdomain()}/rooms/bookings/admin`)
    },
    getAllBookableResources: () => {
      return ctx.$axios.get(`${subdomain()}/resources`)
    },
    getBookingByDate: ({ from, to }) => {
      return ctx.$axios.get(
        `${subdomain()}/rooms/bookings/admin?from=${from}&to=${to}`
      )
    }
  }
  ;(ctx.$resource = Resource), inject('resource', Resource)
}
