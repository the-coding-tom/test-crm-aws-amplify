export default function(ctx, inject) {
  const Event = {
    addEvent: payload => {
      return ctx.$axios.$post('/shack15/events', payload)
    },
    deleteEvent: eventId => {
      return ctx.$axios.$delete(`/shack15/events/${eventId}`)
    },
    updateEvent: (id, payload) => {
      return ctx.$axios.put(`/shack15/events/${id}`, payload)
    },
    getEvent: eventId => {
      return ctx.$axios.$get(`/shack15/events/${eventId}`)
    },
    getEvents() {
      return ctx.$axios.$get('/shack15/events')
    },
    addCategory(payload) {
      return ctx.$axios.$post('/shack15/event-categories', payload)
    },
    updateCategory(eventId, payload) {
      return ctx.$axios.$patch(`/shack15/event-categories/${eventId}`, payload)
    },
    getEventCategories() {
      return ctx.$axios.$get('/shack15/event-categories')
    },
    deleteCategory(eventId) {
      return ctx.$axios.delete(`/shack15/event-categories/${eventId}`)
    },
    getRooms() {
      return ctx.$axios.get('/shack15/admin/rooms')
    },
    getAttendees(eventId = null, link = null) {
      if (!eventId) {
        return ctx.$axios.get(link)
      }

      return ctx.$axios.get(`/shack15/events/${eventId}/attendees`)
    },
    purchaseTicketByAdmin(eventId, payload) {
      return ctx.$axios.post(
        `/shack15/events/${eventId}/purchase-ticket`,
        payload
      )
    },
    cancelTicket(eventId, payload) {
      return ctx.$axios.delete(
        `/shack15/events/${eventId}/cancel-ticket`,
        payload
      )
    },
    getMemberships() {
      return ctx.$axios.get('/shack15/memberships')
    },
    getEventsByDate(startDate, endDate) {
      return ctx.$axios.get(
        `/shack15/events?filter[starts_between]=${startDate},${endDate}`
      )
    },
    deleteEvent(eventId) {
      return ctx.$axios.delete(`/shack15/events/${eventId}/`)
    }
  }
  ;(ctx.$event = Event), inject('event', Event)
}
