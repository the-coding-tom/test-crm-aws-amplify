export default function(ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space
  }

  const baseUrl = () => {
    return `/${subdomain()}/invoices`
  }

  const Invoice = {
    getAllInvoice: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`)
      }
      return ctx.$axios.get(link)
    },
    getOneInvoice: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}`)
    },
    createInvoice: payload => {
      return ctx.$axios.post(`${baseUrl()}`, payload)
    },
    updateInvoice: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}`, payload)
    },
    finalizeInvoice: (id, payload) => {
      return ctx.$axios.post(`${baseUrl()}/${id}/finalize`, payload)
    },
    addItemToInvoice: (id, payload) => {
      return ctx.$axios.post(`${baseUrl()}/${id}/add-item`, payload)
    },
    updateInvoiceItem: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}/update-item`, payload)
    },
    deleteInvoiceItem: (id, payload) => {
      return ctx.$axios.delete(`${baseUrl()}/${id}/delete-item`, {
        data: payload
      })
    },
    searchInvoice: name => {
      return ctx.$axios.get(`${baseUrl()}/?filter[search]=${name}`)
    }
  }
  ;(ctx.$invoice = Invoice), inject('invoice', Invoice)
}
