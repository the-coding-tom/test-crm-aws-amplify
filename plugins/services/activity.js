export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const Activity = {
    getSummary(query) {
      return ctx.$axios.$get(`${subdomain()}/summary${query}`)
    },
    getAllActivities() {
      return ctx.$axios.$get(`${subdomain()}/activities?sort=-created_at`)
    },
    getAllBookings: () => {
      return ctx.$axios.get(`${subdomain()}/rooms/bookings/admin`)
    }
  }
  ;(ctx.$activity = Activity), inject('activity', Activity)
}
