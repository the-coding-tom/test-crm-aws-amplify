export const state = () => ({
  sessions: [],
  categories: []
})

export const mutations = {
  setSessions(state, sessions) {
    state.sessions = sessions
  },
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  persistData: () => {}
}
