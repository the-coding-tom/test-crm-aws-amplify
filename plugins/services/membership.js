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
    getSubscriptionHistory: link => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${link}`).catch(e => {
        getError(e)
      })
    },
    getAllMembers: (filter, link = null) => {
      if (!link) {
        return ctx.$axios.$get(`/${subdomain()}/all-members`).catch(e => {
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
    addFreeMonths: payload => {
      return ctx.$axios
        .$post(`/${subdomain()}/memberships/addfreemonths`, payload)
        .catch(e => {
          getError(e)
        })
    },
    getCustomCharges: payload => {
      return ctx.$axios
        .$post(`/${subdomain()}/membership/customcharges/get-all`, payload)
        .catch(e => {
          getError(e)
        })
    },
    addCustomCharge: payload => {
      return ctx.$axios
        .$post(`/${subdomain()}/memberships/customcharges`, payload)
        .catch(e => {
          getError(e)
        })
    },
    editCustomCharge: payload => {
      return ctx.$axios
        .$patch(`/${subdomain()}/memberships/customcharges`, payload)
        .catch(e => {
          console.log(e)
          getError(e)
        })
    },
    billCustomCharge: payload => {
      return ctx.$axios
        .$post(`/${subdomain()}/membership/customcharge/settle`, payload)
        .catch(e => {
          console.log(e)
          getError(e)
        })
    },
    addCredit: payload => {
      return ctx.$axios.$post(`/${subdomain()}/deposits`, payload).catch(e => {
        getError(e)
      })
    },
    addCreditAll: payload => {
      return ctx.$axios
        .$post(`/${subdomain()}/deposits/all-users`, payload)
        .catch(e => {
          getError(e)
        })
    },
    editCredit: payload => {
      return ctx.$axios
        .$put(`/${subdomain()}/deposits/edit`, payload)
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
    inviteAllPendingMembers: () => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/pending/invite-all`)
    },
    deleteMembership: id => {
      return ctx.$axios.$delete(`/${subdomain()}/memberships/${id}`)
      // .catch(e => {
      //   getError(e)
      // })
    },
    deleteArchivedInvite: id => {
      return ctx.$axios.$delete(`/${subdomain()}/archives/${id}`)
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
    getArchivedInvites: filter => {
      return ctx.$axios
        .$get(`/${subdomain()}/invitations/archived?${filter}`)
        .catch(e => {
          getError(e)
        })
    },
    cancelScheduledPlanChange: (id, payload) => {
      return ctx.$axios
        .$post(
          `/${subdomain()}/memberships/${id}/cancel-scheduled-plan-change`,
          payload
        )
        .catch(e => {
          getError(e)
        })
    },
    changeSubscriptionRenewalState: (id, payload) => {
      return ctx.$axios
        .$post(
          `/${subdomain()}/memberships/${id}/change-subscription-renewal-state`,
          payload
        )
        .catch(e => {
          getError(e)
        })
    },
    changeFreeRenewalState: (id, payload) => {
      return ctx.$axios
        .$post(
          `/${subdomain()}/memberships/${id}/change-free-renewal-state`,
          payload
        )
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
    changePlanBulk: payload => {
      return ctx.$axios.$patch(
        `/${subdomain()}/memberships/changeplan-bulk`,
        payload
      )
    },
    editGuests: (id, payload) => {
      return ctx.$axios
        .$patch(`/${subdomain()}/memberships/${id}/guests`, payload)
        .catch(e => {
          getError(e)
        })
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
    updateProfile: payload => {
      return ctx.$axios
        .$post(`/onboarding/update-profile`, payload)
        .catch(e => {
          ctx.error({
            statusCode: e.statusCode,
            message: e.response.data.message
          })
        })
    },
    getPaidFor: id => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}/paid-for`)
    },
    expiringSubscriptions: day => {
      return ctx.$axios.$get(`/${subdomain()}/expiring-subscriptions/${day}`)
    },
    subscribedToPlan: plan_id => {
      return ctx.$axios.$get(
        `/${subdomain()}/expiring-subscriptions/0?plan=${plan_id}`
      )
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
      return ctx.$axios.$get(`/${subdomain()}/file-export-invited`)
    },
    exportDirectory: () => {
      return ctx.$axios.$get(`/${subdomain()}/file-export-directory`)
    },
    makePlanPrimary: (id, data) => {
      return ctx.$axios.$put(
        `/${subdomain()}/memberships/${id}/make-plan-primary`,
        data
      )
    }
  }
  ;(ctx.$membership = Membership), inject('membership', Membership)
}
