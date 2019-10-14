export const state = () => ({
  currentSpace: null
})

export const mutations = {
  setSpace(state, spaceDetails) {
    state.currentSpace = spaceDetails
  }
}
