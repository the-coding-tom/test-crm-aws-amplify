export const state = () => ({
  events: [],
  calendarEvents: [],
  categories: [],
  currentEvent: {},
  rooms: [],
  attendees: [],
  memberships: []
})

export const mutations = {
  setEvents(state, events) {
    state.events = events

    // full calendar has its attibute props it takes
    // map the events according to its attributes
    let calendarEvents = events.map(event => {
      return {
        title: event.name,
        start: event.start_time,
        end: event.end_time,
        description: event.description,
        eventId: event.id,
        backgroundColor:
          event.event_category && `${event.event_category.color}3A`,
        borderColor: event.event_category && `${event.event_category.color}3A`,
        id: event.id,
        extendedProps: event
      }
    })
    state.calendarEvents = calendarEvents
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  addCategory(state, category) {
    state.categories.push(category)
  },
  setEvent(state, event) {
    state.currentEvent = event
  },
  setRooms(state, rooms) {
    state.rooms = rooms.data
  },
  setAttendees(state, attendees) {
    state.attendees = attendees
  },
  addAttendee(state, attendee) {
    state.attendees.data.push(attendee)
  },
  setMemberships(state, members) {
    state.memberships = members
  },
  removeAttendee(state, index) {
    state.attendees.data.splice(index, 1)
  },
  removeEvent(state, eventId) {
    const index = state.calendarEvents.findIndex(event => {
      return event.id === eventId
    })
    if (index !== -1) state.calendarEvents.splice(index, 1)
  },
  removeCategory(state, categoryId) {
    const index = state.categories.findIndex(category => {
      return category.id === categoryId
    })
    if (index !== -1) state.categories.splice(index, 1)
  }
}
