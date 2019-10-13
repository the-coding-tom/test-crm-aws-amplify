export const state = () => ({
  admins: []
})

export const mutations = {
  setAdmins: (state, admins) => {
    state.admins = admins
  }
}
