export const state = () => ({
  admins: {
    data: [],
    meta: {
      total: 0,
      per_page: 1,
      current_page: 1
    },
    links: {
      prev: null,
      next: null
    }
  }
})

export const mutations = {
  setAdmins: (state, admins) => {
    state.admins = admins
  },
  removeAdmin: (state, adminId) => {
    const index = state.admins.data.findIndex(el => {
      return el.id === adminId
    })
    if (index !== -1) state.admins.data.splice(index, 1)
  }
}
