export const actions = {
  nuxtServerInit({ commit, state }, { req, route, env, redirect }) {
    if (state.auth.user) {
      const spaces = state.auth.user.admin_of

      if (!state.space.currentSpace) {
        spaces.map(space => {
          if (space.subdomain === route.params.space) {
            commit('space/setSpace', space)
          }
        })

        if (!state.space.currentSpace) {
          redirect('/')
        }
      }
    }
  }
}
