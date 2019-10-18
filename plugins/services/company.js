export default function(ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space
  }

  const Company = {
    addCompany(payload) {
      return ctx.$axios.$post(`/${subdomain()}/companies`, payload)
    },
    getCompanies(link = null) {
      if (link) return ctx.$axios.$get(link)
      return ctx.$axios.$get(`/${subdomain()}/companies`)
    },
    getCompanyByName(name) {
      return ctx.$axios.$get(
        `/${subdomain()}/companies/?filter[search]=${name}`
      )
    },
    removeOneCompany(companyId) {
      return ctx.$axios.$delete(`/${subdomain()}/companies/${companyId}`)
    },
    getOneCompany(companyId) {
      return ctx.$axios.$get(`/${subdomain()}/companies/${companyId}`)
    },
    updateOneCompany(companyId, payload) {
      return ctx.$axios.put(`/${subdomain()}/companies/${companyId}`, payload)
    }
  }
  ;(ctx.$company = Company), inject('company', Company)
}
