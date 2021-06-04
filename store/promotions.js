export const state = () => ({
  promotions: [],
  currentPromotion: {}
})

export const mutations = {
  setPromotions(state, promotions) {
    state.promotions = promotions
  },
  setOnePromotion(state, promotion) {
    state.currentPromotion = promotion
  },
  removePromotion(state, planId) {
    const index = state.promotions.data.findIndex(plan => {
      return plan.id == planId
    })
    if (index !== -1) state.promotions.data.splice(index, 1)
  }
}
