export const state = () => ({
  companies: {
    data: [],
    links: {},
    meta: {}
  }
})

export const mutations = {
  setCompanies(state, companies) {
    state.companies = companies
  },
  removeOneCompany(state, companyId) {
    const index = state.companies.data.findIndex(company => {
      return company.uuid === companyId
    })
    if (index !== -1) state.companies.data.splice(index, 1)
  }
}
