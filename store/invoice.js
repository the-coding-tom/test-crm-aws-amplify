import helper from '../util/helper'
export const state = () => ({
  invoices: [],
  isLoading: false,
  addInvoice: {
    company_id: null
  },
  invoiceTable: [],
  oneInvoice: null
})
export const mutations = {
  setInvoices(state, invoice) {
    state.invoices = invoice
  },
  setTableInvoices(state, invoice) {
    state.invoiceTable = invoice
  },
  initiateInvoice(state, data) {
    state.addInvoice.company_id = data.company_id
    this.$router.push({
      path: `/${data.space}/invoice/add/${data.company_id}`
    })
  },
  setIsLoading(state) {
    state.isLoading = !true
  },
  setOneInvoice(state, invoice) {
    state.oneInvoice = invoice
  }
}

export const actions = {
  async getAllInvoices({ commit }) {
    try {
      const { data } = await this.$invoice.getAllInvoice()
      let emptyIn = []
      data.data.map(item => {
        let invObj = {
          company: item.company.name,
          date: this.$moment(item.created_at).format('LL'),
          contact_person: item.company.contact_name,
          id: item.id,
          invoice_number: item.inv_number,
          paid: item.paid,
          finalize: item.finalize,
          sent: item.sent,
          amount: item.total_amount,
          void: item.void,
          written_off: item.written_off,
          invProps: item
        }
        emptyIn.push(invObj)
      })
      commit('setTableInvoices', emptyIn)
      commit('setInvoices', data)
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async createInvoice({ dispatch, commit }, payload) {
    commit('setIsLoading')
    try {
      await this.$invoice.createInvoice(payload)
      dispatch('getAllInvoices')
      this.$router.go(-1)
      this._vm.$bvToast.toast(
        `Invoice created successfully`,
        helper.notify.sucess
      )
      commit('setIsLoading')
    } catch (error) {
      commit('setIsLoading')
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async getOneInvoice({ commit }, payload) {
    try {
      const { data } = await this.$invoice.getOneInvoice(payload)
      commit('setOneInvoice', data)
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async updateInvoice({ state, dispatch }, payload) {
    try {
      await this.$invoice.updateInvoice(payload.id, payload)
      dispatch('getAllInvoices')

      this._vm.$bvToast.toast(
        `Invoice updated successfully`,
        helper.notify.sucess
      )
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async updateInvoiceItem({ commit, dispatch, state }, payload) {
    try {
      await this.$invoice.updateInvoiceItem(state.oneInvoice.data.id, payload)
      dispatch('getOneInvoice', state.oneInvoice.data.id)
      this._vm.$bvToast.toast(
        `Invoice item updated successfully`,
        helper.notify.sucess
      )
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async addItemToInvoice({ state, dispatch }, payload) {
    try {
      await this.$invoice.addItemToInvoice(state.oneInvoice.data.id, payload)
      this._vm.$bvToast.toast(
        `Invoice item added successfully`,
        helper.notify.sucess
      )
      dispatch('getOneInvoice', state.oneInvoice.data.id)
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async finalizeInv({ dispatch }, payload) {
    try {
      await this.$invoice.finalizeInvoice(payload.id, payload)
      this._vm.$bvToast.toast(
        `Invoice finalized successfully`,
        helper.notify.sucess
      )
      dispatch('getAllInvoices')
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async writeOffInv({ dispatch }, payload) {
    try {
      await this.$invoice.writeOffInvoice(payload)
      this._vm.$bvToast.toast(
        `Invoice written off successfully`,
        helper.notify.sucess
      )
      dispatch('getAllInvoices')
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async sendInv({ dispatch }, payload) {
    try {
      await this.$invoice.sendInvoice(payload)
      this._vm.$bvToast.toast(
        `Invoice was sent successfully`,
        helper.notify.sucess
      )
      dispatch('getAllInvoices')
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async filterInvoice({ commit }, payload) {
    try {
      const { data } = await this.$invoice.filterUnpaid(payload)
      let emptyIn = []
      data.data.map(item => {
        let invObj = {
          company: item.company.name,
          date: this.$moment(item.created_at).format('LL'),
          contact_person: item.company.contact_name,
          id: item.id,
          invoice_number: item.inv_number,
          paid: item.paid,
          finalize: item.finalize,
          sent: item.sent,
          amount: item.total_amount,
          void: item.void,
          written_off: item.written_off,
          invProps: item
        }
        emptyIn.push(invObj)
      })
      commit('setTableInvoices', emptyIn)
      commit('setInvoices', data)
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async deleteInvoiceItem({ state, dispatch }, payload) {
    try {
      await this.$invoice.deleteInvoiceItem(state.oneInvoice.data.id, payload)
      this._vm.$bvToast.toast(
        `Invoice item deleted successfully`,
        helper.notify.sucess
      )
      dispatch('getOneInvoice', state.oneInvoice.data.id)
    } catch (error) {
      this._vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  }
}
