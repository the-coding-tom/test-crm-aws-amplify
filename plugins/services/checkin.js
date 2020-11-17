export default function(ctx, inject) {
  const subdomain = `${ctx.route.params.space}/checkins`

  const Checkin = {
    checkins: filter => {
      return ctx.$axios.$get(`${subdomain}${filter}`).catch(e => {
        console.log(e)
      })
    },
    checkin: payload => {
      return ctx.$axios.$post(subdomain, payload).catch(e => {
        return e
      })
    },
    checkout: (id, payload) => {
      return ctx.$axios.$patch(`${subdomain}/${id}`, payload).catch(e => {
        console.log(e)
      })
    },
    settings: link => {
      return ctx.$axios.$get(link)
    },
    saveSetting: (subdomain, payload) => {
      return ctx.$axios.$post(`${subdomain}/checkin-settings`, payload)
    },
    deleteSetting: (subdomain, id) => {
      return ctx.$axios.$delete(`${subdomain}/checkin-settings/${id}`)
    }
  }

  ctx.$checkin = Checkin
  inject('checkin', Checkin)
}
