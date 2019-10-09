export default function(ctx, inject) {
  const subdomain = ctx.route.params.space
  const baseUrl = `/${subdomain}/wellness`

  const Wellness = {
    getAllWellnessSessions: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`/${subdomain}/wellness`)
      }

      return ctx.$axios.get(link)
    },
    addWellnessSession: payload => {
      return ctx.$axios.post(`${baseUrl}`, payload)
    },
    createWellnessSession: payload => {
      return ctx.$axios.post(`/${subdomain}/wellness-categories`, payload)
    },
    getAWellnessSession: id => {
      return ctx.$axios.get(`/${subdomain}/wellness/${id}`)
    },
    updateWellnessSession: (id, payload) => {
      return ctx.$axios.patch(`/${subdomain}/wellness/${id}`, payload)
    },
    deleteWellnessSession: id => {
      return ctx.$axios.delete(`/${subdomain}/wellness/${id}`)
    },
    getAllWellnessBookings: id => {
      return ctx.$axios.get(`${baseUrl}/${id}/bookings`)
    },
    cancelWellnessBooking: id => {
      return ctx.$axios.delete(`${baseUrl}/${id}/bookings`)
    },
    getWellnessCategories: (link = null) => {
      if (link) {
        return ctx.$axios.get(link)
      }
      return ctx.$axios.get(`${baseUrl}-categories`)
    },
    getAWellnessCategory: id => {
      return ctx.$axios.get(`${baseUrl}-categories/${id}`)
    },
    updateWellnessCategory: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl}-categories/${id}`, payload)
    },
    deleteWellnessCategory: id => {
      return ctx.$axios.delete(`${baseUrl}-categories/${id}`)
    },
    updateWellnessSlots: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl}/${id}/slots`, payload)
    },
    getWellnessByDate: date => {
      return ctx.$axios.get(`${baseUrl}?filter[start_date]=${date}`)
    },
    getAllBookings: (id, link = null) => {
      if (link) {
        return ctx.$axios.get(link)
      }

      return ctx.$axios.get(`${baseUrl}/${id}/bookings`)
    },
    cancelABooking: (wellnessId, bookingId) => {
      return ctx.$axios.delete(`${baseUrl}/${wellnessId}/bookings/${bookingId}`)
    }
  }
  ;(ctx.$wellness = Wellness), inject('wellness', Wellness)
}
