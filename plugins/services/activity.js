export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const Activity = {
    getSummary() {
      return ctx.$axios.$get(`${subdomain()}/summary`)
    },
    getAllActivities() {
      return ctx.$axios.$get(`${subdomain()}/activities`)
    },
    getAllBookings: () => {
      return ctx.$axios.get(`${subdomain()}/rooms/bookings/admin`)
    }
  }
  ;(ctx.$activity = Activity), inject('activity', Activity)
}
