export default function(ctx, inject) {
  let baseUrl = () => {
    return `${ctx.route.params.space}/plans`
  }

  const Plan = {
    getAllPlans: () => {
      return ctx.$axios.$get(baseUrl())
    }
  }

  ctx.$plan = Plan
  inject('plan', Plan)
}
