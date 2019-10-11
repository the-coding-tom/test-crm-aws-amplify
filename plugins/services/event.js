export default function(ctx, inject) {
  // const subdomain() = ctx.route.params.space
  const subdomain = () => {
    return ctx.route.params.space
  }

  const Event = {
    addEvent: payload => {
      return ctx.$axios.$post(`/${subdomain()}/events`, payload)
    },
    deleteEvent: eventId => {
      return ctx.$axios.$delete(`/${subdomain()}/events/${eventId}`)
    },
    updateEvent: (id, payload) => {
      return ctx.$axios.put(`/${subdomain()}/events/${id}`, payload)
    },
    getEvent: eventId => {
      return ctx.$axios.$get(`/${subdomain()}/events/${eventId}`)
    },
    getEvents() {
      return ctx.$axios.$get(`/${subdomain()}/events`)
    },
    addCategory(payload) {
      return ctx.$axios.$post(`/${subdomain()}/event-categories`, payload)
    },
    updateCategory(eventId, payload) {
      return ctx.$axios.$patch(
        `/${subdomain()}/event-categories/${eventId}`,
        payload
      )
    },
    getEventCategories() {
      return ctx.$axios.$get(`/${subdomain()}/event-categories`)
    },
    deleteCategory(eventId) {
      return ctx.$axios.delete(`/${subdomain()}/event-categories/${eventId}`)
    },
    getRooms() {
      return ctx.$axios.get(`/${subdomain()}/admin/rooms`)
    },
    getAttendees(eventId = null, link = null) {
      if (!eventId) {
        return ctx.$axios.get(link)
      }

      return ctx.$axios.get(`/${subdomain()}/events/${eventId}/attendees`)
    },
    purchaseTicketByAdmin(eventId, payload) {
      return ctx.$axios.post(
        `/${subdomain()}/events/${eventId}/purchase-ticket`,
        payload
      )
    },
    cancelTicket(eventId, payload) {
      return ctx.$axios.delete(
        `/${subdomain()}/events/${eventId}/cancel-ticket`,
        payload
      )
    },
    getMemberships() {
      return ctx.$axios.get(`/${subdomain()}/memberships`)
    },
    getEventsByDate(startDate, endDate) {
      return ctx.$axios.get(
        `/${subdomain()}/events?filter[starts_between]=${startDate},${endDate}`
      )
    },
    deleteEvent(eventId) {
      return ctx.$axios.delete(`/${subdomain()}/events/${eventId}/`)
    }
  }
  ;(ctx.$event = Event), inject('event', Event)
}
