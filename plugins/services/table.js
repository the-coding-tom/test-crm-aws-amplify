export default function(ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space
  }

  const baseUrl = () => {
    return `/${subdomain()}/reservations`
  }

  const Table = {
    getAllTables: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`)
      }
      return ctx.$axios.get(link)
    },
    createTable: payload => {
      return ctx.$axios.post(baseUrl(), payload)
    },
    getOneTable: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}`)
    },
    updateTable: (id, payload) => {
      return ctx.$axios.put(`${baseUrl()}/${id}/update`, payload)
    },
    deleteTable: id => {
      return ctx.$axios.delete(`${baseUrl()}/${id}/delete`)
    },
    getOneTableBookings: id => {
      return ctx.$axios.post(`${subdomain()}/${id}/bookings`)
    },
    updateTableBookings: (id, payload) => {
      return ctx.$axios.put(
        `${subdomain()}/booking-reservations/${id}/update`,
        payload
      )
    },
    bookTableForMember: (id, payload) => {
      return ctx.$axios.post(
        `${subdomain()}/reservations/${id}/behalf`,
        payload
      )
    },
    getTableBookingByDate: ({ from, to }) => {
      return ctx.$axios.get(
        `${subdomain()}/booking-reservations/all?from=${from}&to=${to}`
      )
    }
  }
  ;(ctx.$table = Table), inject('table', Table)
}
