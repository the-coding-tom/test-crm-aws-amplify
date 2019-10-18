export const state = () => ({
  categories: {},
  eatries: {},
  orderedEatries: {}
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  removeOneCategory(state, categoryId) {
    const index = state.categories.data.findIndex(category => {
      return category.id === categoryId
    })
    if (index !== -1) state.categories.data.splice(index, 1)
  },
  updateOneCategory(state, category) {
    const index = state.categories.data.findIndex(el => {
      return el.id === category.id
    })
    if (index !== -1) state.categories.data[index] = category
  },
  setEatries(state, eatries) {
    state.eatries = eatries
  },
  removeOneEatry(state, eatryId) {
    const index = state.eatries.data.findIndex(eatry => {
      return eatry.id === eatryId
    })
    if (index !== eatryId) state.eatries.data.splice(index, 1)
  },
  setOrderedEatries(state, orderedEatries) {
    state.orderedEatries = orderedEatries
  }
}
