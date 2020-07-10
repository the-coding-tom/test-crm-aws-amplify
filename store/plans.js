export const state = () => ({
  plans: {
    data: [],
    meta: {
      total: 1,
      per_page: 1,
      current_page: 1
    },
    links: {}
  },
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
