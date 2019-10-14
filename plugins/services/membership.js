export default function(ctx, inject) {
  let subdomain = () => {
    return ctx.route.params.space
  }

  const getError = e => {
    ctx.error({
      statusCode: e.statusCode,
      message: e.response ? JSON.stringify(e.response.data) : e.message
    })
  }

  const Membership = {
    getAllMemberships: (filter, link = null) => {
      if (!link) {
        return ctx.$axios
          .$get(`/${subdomain()}/memberships?${filter}`)
          .catch(e => {
            getError(e)
          })
      }

      return ctx.$axios.$get(link).catch(e => {
        getError(e)
      })
    },
    getAMembership: id => {
      return ctx.$axios
        .$get(
          `/${subdomain()}/memberships/${id}?include=profile,primaryPlan,plans,subscriptions`
        )
        .catch(e => {
          getError(e)
        })
    },
    getPaymentMethods: id => {
      return ctx.$axios
        .$get(`/${subdomain()}/memberships/${id}/retrievepaymentmethods`)
        .catch(e => {
          getError(e)
        })
    },
    deletePaymentMethod: (id, payload) => {
      return ctx.$axios
        .$delete(`/${subdomain()}/memberships/${id}/removepaymentmethod`, {
          data: payload
        })
        .catch(e => {
          getError(e)
        })
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
