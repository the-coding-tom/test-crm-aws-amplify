export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const Plan = {
    getAllPlans: () => {
      return ctx.$axios.$get(`/${subdomain()}/plans`)
    },
    getAllPlan(link = null) {
      if (link) {
        return ctx.$axios.get(link)
      }
      return ctx.$axios.get(`/${subdomain()}/plans`)
    },
    addPlan(payload) {
      return ctx.$axios.post(`/${subdomain()}/plans`, payload)
    },
    getPlan(planId) {
      return ctx.$axios.get(`/${subdomain()}/plans/${planId}`)
    },
    removePlan(planId) {
      return ctx.$axios.delete(`/${subdomain()}/plans/${planId}`)
    },
    updatePlan(planId, payload) {
      return ctx.$axios.patch(`/${subdomain()}/plans/${planId}`, payload)
    }
  }
  ;(ctx.$plan = Plan), inject('plan', Plan)
}
