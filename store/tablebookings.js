import helper from '../util/helper'
export const state = () => ({
  tables: [],
  bookings: [],
  addTable: {
    id: null,
    name: null,
    description: null,
    capacity: null,
    min_booking_duration: null,
    max_booking_duration: null,
    reservation_availability: null,
    reservation_available: null,
    amenities: [],
    bookable_seat_limit: null
  },
  addBooking: {
    id: null,
    from: null,
    to: null,
    title: null,
    no_of_seats: null,
    user_id: null
  }
})

export const mutations = {
  setTables(state, tables) {
    state.tables = tables
  },
  setOneTable(state, table) {
    state.addTable.id = table.id
    state.addTable.name = table.name
    state.addTable.description = table.description
    state.addTable.capacity = table.capacity
    state.addTable.min_booking_duration = table.min_booking_duration
    state.addTable.max_booking_duration = table.max_booking_duration
    state.addTable.amenities = table.amenities
    state.addTable.reservation_availability = table.room_availability
    state.addTable.bookable_seat_limit = table.bookable_seat_limit
  },
  setTableAvailabilty(state, available) {
    state.addTable.reservation_availability = available
  },
  setTableAvailable(state, available) {
    state.addTable.reservation_available = available
  },
  resetForms(state, recordState) {
    Object.keys(state[recordState]).forEach(key => {
      if (key == 'amenities') {
        state[recordState][key] = []
      } else {
        state[recordState][key] = null
      }
    })
  },
  setTableBookings(state, bookings) {
    state.bookings = bookings
  },
  setAddBooking(state, booking) {
    state.addBooking.id = booking.id
    state.addBooking.from = booking.from
    state.addBooking.to = booking.to
    state.addBooking.title = booking.title
    state.addBooking.user_id = booking.user_id
    state.addBooking.no_of_seats = booking.no_of_seats
  }
}

export const actions = {
  async getAllTables({ commit }) {
    try {
      const { data } = await this.$table.getAllTables()
      commit('setTables', data)
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
  async getOneTable({ commit }, payload) {
    try {
      const { data } = await this.$table.getOneTable(payload)
      commit('setOneTable', data.data)
      commit(
        'setTableAvailable',
        helper.undoParse(data.data.reservation_availability)
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
  async createTable({ state, commit }) {
    try {
      const data = state.addTable.reservation_available
      const tableAvailability = helper.parseRoomdate(data, this)
      commit('setTableAvailabilty', tableAvailability)
      await this.$table.createTable(state.addTable)
      this._vm.$bvToast.toast(
        `Table created successfully`,
        helper.notify.sucess
      )
      commit('resetForms', 'addTable')
      this.$router.go(-1)
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
  async updateTable({ state, commit }) {
    try {
      const payload = state.addTable
      const data = payload.reservation_available
      const tableAvailability = helper.parseRoomdate(data, this)
      commit('setTableAvailabilty', tableAvailability)
      await this.$table.updateTable(payload.id, payload)
      this._vm.$bvToast.toast(
        `Table updated successfully`,
        helper.notify.sucess
      )
      commit('resetForms', 'addTable')
      this.$router.go(-1)
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
  async deleteTable({ dispatch }, payload) {
    try {
      await this.$table.deleteTable(payload)
      this._vm.$bvToast.toast(
        `Table deleted successfully`,
        helper.notify.sucess
      )
      dispatch('getAllTables')
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
  async getTableBookings({ commit }) {
    try {
      const bookings = await this.$table.getAllTableBookings()
      commit('setTableBookings', bookings)
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
  async getOneTableBooking({ commit }, payload) {
    try {
      const booking = await this.$table.getOneTableBooking(payload)
      commit('setTableBookings', booking)
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
  async updateTableBooking({ state, commit }) {
    try {
      const payload = state.addBooking
      await this.$table.updateTableBooking(payload.id, payload)
      this._vm.$bvToast.toast(
        `Table Booking updated successfully`,
        helper.notify.sucess
      )
      commit('resetForms', 'addTable')
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
  async createBooking({}, payload) {
    try {
      await this.$table.bookTableForMember(payload.table_id, payload)
      this._vm.$bvToast.toast(
        `Booking was made successfully`,
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
  }
}
