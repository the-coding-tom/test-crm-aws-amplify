export default function(ctx, inject) {
  const subdomain = `${ctx.route.params.space}/checkins`

  const Checkin = {
    checkins: filter => {
      return ctx.$axios.$get(`${subdomain}${filter}`)
    },
    checkin: payload => {
      return ctx.$axios.$post(subdomain, payload)
    },
    checkout: (id, payload) => {
      return ctx.$axios.$patch(`${subdomain}/${id}`, payload)
    },
    exportCheckins: filter => {
      return ctx.$axios.$get(
        `/${ctx.route.params.space}/file-export-checkin-history${filter}`
      )
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
