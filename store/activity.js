export const state = () => ({
  summary: {},
  activities: {},
  bookings: {}
})

export const mutations = {
  setSummary(state, summary) {
    state.summary = summary
  },
  setActivities(state, activities) {
    state.activities = activities
  },
  setActivityBookings(state, bookings) {
    state.bookings = bookings
  }
}
