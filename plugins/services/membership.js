export default function(ctx, inject) {
  let subdomain = () => {
    return ctx.route.params.space
  }

  const getError = e => {
    const message = e.response
      ? JSON.stringify(e.response.data.errors)
      : e.message
    // ctx.$bvToast.toast(message, {
    //   title: 'Error',
    //   variant: 'error'
    // })

    return message
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
    getMemberships: link => {
      return ctx.$axios.$get(link)
    },
    getAMembership: id => {
      return ctx.$axios
        .$get(
          `/${subdomain()}/memberships/${id}?include=profile,primaryPlan,plans,subscriptions,eventsAttended,checkin`
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
    addPaymentMethod: (id, payload) => {
      return ctx.$axios
        .$post(`/${subdomain()}/memberships/${id}/addcard`, payload)
        .catch(e => {
          getError(e)
        })
    },
    deletePaymentMethod: (id, payload) => {
      return ctx.$axios.$delete(
        `/${subdomain()}/memberships/${id}/removepaymentmethod`,
        {
          data: payload
        }
      )
      // .catch(e => {
      //   getError(e)
      // })
    },
    addMembership: payload => {
      return ctx.$axios.$post(`/${subdomain()}/memberships`, payload)
    },
    inviteMember: id => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/invitation`)
    },
    deleteMembership: id => {
      return ctx.$axios.$delete(`/${subdomain()}/memberships/${id}`)
      // .catch(e => {
      //   getError(e)
      // })
    },
    getSubscriptions: id => {
      return ctx.$axios
        .$get(`/${subdomain()}/memberships/${id}/get-subscriptions`)
        .catch(e => {
          getError(e)
        })
    },
    cancelSubscription: (id, plan) => {
      return ctx.$axios.$delete(
        `/${subdomain()}/memberships/${id}/cancelplan`,
        { data: plan }
      )
    },
    addPlan: (id, payload) => {
      return ctx.$axios.$post(
        `/${subdomain()}/memberships/${id}/addplan`,
        payload
      )
    },
    changePlan: (id, payload) => {
      return ctx.$axios.$patch(
        `/${subdomain()}/memberships/${id}/changeplan`,
        payload
      )
    },
    getAllNotes: (id, link = null) => {
      if (link) {
        return ctx.$axios.$get(link).catch(e => getError(e))
      }
      return ctx.$axios
        .$get(`/${subdomain()}/memberships/${id}/notes`)
        .catch(e => getError(e))
    },
    getANote: (id, noteId) => {
      return ctx.$axios
        .$get(`/${subdomain()}/memberships/${id}/notes/${noteId}`)
        .catch(e => getError(e))
    },
    updateNote: (id, noteId, payload) => {
      return ctx.$axios
        .$patch(`/${subdomain()}/memberships/${id}/notes/${noteId}`, payload)
        .catch(e => getError(e))
    },
    addNote: (id, payload) => {
      return ctx.$axios
        .$post(`/${subdomain()}/memberships/${id}/notes`, payload)
        .catch(e => getError(e))
    },
    deleteNote: (id, noteId) => {
      return ctx.$axios
        .$delete(`/${subdomain()}/memberships/${id}/notes/${noteId}`)
        .catch(e => getError(e))
    },
    updateMembership: (id, payload) => {
      return ctx.$axios.$patch(`/${subdomain()}/memberships/${id}`, payload)
    },
    getPaidFor: id => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}/paid-for`)
    },
    expiringSubscriptions: day => {
      return ctx.$axios.$get(`/${subdomain()}/expiring-subscriptions/${day}`)
    },
    renewSubscription: (id, data) => {
      return ctx.$axios.$post(
        `/${subdomain()}/memberships/${id}/renew-subscription`,
        data
      )
    },
    onboardBrivo: id => {
      return ctx.$axios.$put(`/${subdomain()}/memberships/${id}/onboard-brivo`)
    },
    export: () => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/export-to-csv`)
    }
  }
  ;(ctx.$membership = Membership), inject('membership', Membership)
}
