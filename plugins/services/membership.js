export default function(ctx, inject) {
  let subdomain = () => {
    return ctx.route.params.space
  }

  const Membership = {
    getAllMemberships: (filter, link = null) => {
      if (!link) {
        return ctx.$axios.$get(`/${subdomain()}/memberships?${filter}`)
      }

      return ctx.$axios.$get(link)
    },
    addMembership: payload => {
      return ctx.$axios.$post(`/${subdomain()}/memberships`, payload)
    },
    inviteMember: id => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/invitation`)
    },
    deleteMembership: id => {
      return ctx.$axios.$delete(`/${subdomain()}/memberships/${id}`)
    }
  }
  ;(ctx.$membership = Membership), inject('membership', Membership)
}
