export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const Promotion = {
    getAllPromotions: () => {
      return ctx.$axios.$get(`/${subdomain()}/promotions`)
    },
    // getAllPlan(link = null) {
    //   if (link) {
    //     return ctx.$axios.get(link)
    //   }
    //   return ctx.$axios.get(`/${subdomain()}/plans`)
    // },
    addPromotion(payload) {
      return ctx.$axios.post(`/${subdomain()}/promotions`, payload)
    },
    getPromotion(planId) {
      return ctx.$axios.get(`/${subdomain()}/promotions/${planId}`)
    },
    deletePromotion(planId) {
      return ctx.$axios.delete(`/${subdomain()}/promotions/${planId}`)
    },
    updatePromotion(planId, payload) {
      return ctx.$axios.patch(`/${subdomain()}/promotions/${planId}`, payload)
    }
  }
  ;(ctx.$promotion = Promotion), inject('promotion', Promotion)
}
