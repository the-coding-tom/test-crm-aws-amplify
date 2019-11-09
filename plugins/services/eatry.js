export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const Eatry = {
    getAllEatryCategories(link) {
      if (link) return ctx.$axios.$get(link)
      return ctx.$axios.$get(`/${subdomain()}/eatry-categories`)
    },
    addOneCategory(payload) {
      return ctx.$axios.$post(`/${subdomain()}/eatry-categories`, payload)
    },
    removeOneCategory(categoryId) {
      return ctx.$axios.$delete(
        `/${subdomain()}/eatry-categories/${categoryId}`
      )
    },
    updateOneCategory(categoryId, payload) {
      return ctx.$axios.$patch(
        `/${subdomain()}/eatry-categories/${categoryId}`,
        payload
      )
    },
    addOneEatry(payload) {
      return ctx.$axios.$post(`/${subdomain()}/eatries/create`, payload)
    },
    getOneEatry(eatryId) {
      return ctx.$axios.$get(`/${subdomain()}/eatries/${eatryId}`)
    },
    getAllEatries(link) {
      if (link) return ctx.$axios.$get(link)
      return ctx.$axios.$get(`/${subdomain()}/eatries`)
    },
    updateOneEatry(eatryId, payload) {
      return ctx.$axios.$put(
        `/${subdomain()}/eatries/${eatryId}/update`,
        payload
      )
    },
    deleteOneEatry(eatryId) {
      return ctx.$axios.$delete(`/${subdomain()}/eatries/${eatryId}/delete`)
    },
    getAllOrderedEatries() {
      return ctx.$axios.$get(`/${subdomain()}/eatry-orders`)
    }
  }
  ;(ctx.$eatry = Eatry), inject('eatry', Eatry)
}
