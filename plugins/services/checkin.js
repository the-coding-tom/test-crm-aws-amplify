export default function(ctx, inject) {
  const subdomain = `${ctx.route.params.space}/checkins`

  const Checkin = {
    checkins: () => {
      return ctx.$axios.$get(subdomain).catch(e => {
        console.log(e)
      })
    },
    checkin: payload => {
      return ctx.$axios.$post(subdomain, payload).catch(e => {
        console.log(e)
      })
    },
    checkout: (id, payload) => {
      return ctx.$axios.$patch(`${subdomain}/${id}`, payload).catch(e => {
        console.log(e)
      })
    }
  }

  ctx.$checkin = Checkin
  inject('checkin', Checkin)
}
