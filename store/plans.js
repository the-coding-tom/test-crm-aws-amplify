export const state = () => ({
  plans: [],
  currentPlan: {}
})

export const mutations = {
  setPlans(state, plans) {
    state.plans = plans
  },
  setOnePlan(state, plan) {
    state.currentPlan = plan
  },
  removePlan(state, planId) {
    const index = state.plans.data.findIndex(plan => {
      return plan.id == planId
    })
    if (index !== -1) state.plans.data.splice(index, 1)
  }
}
