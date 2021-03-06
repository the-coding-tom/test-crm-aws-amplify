import helper from './../util/helper'
export const state = () => ({
  rooms: [],
  oneroom: '',
  categories: [],
  activateButton: true,
  addCategory: {
    id: '',
    name: '',
    color: helper.randomColor()
  },
  bookings: [],
  addBooking: {
    id: null,
    from: null,
    to: null,
    title: null
  },
  addRoom: {
    id: null,
    name: null,
    description: null,
    currency: null,
    capacity: null,
    min_booking_duration: null,
    max_booking_duration: null,
    price_per_hour: null,
    can_book: null,
    photo: null,
    category: null,
    room_category_id: null,
    amenities: [],
    room_availability: null,
    available_room: null,
    zoom_room_id: null,
    access_point_id: null
  }
})

export const mutations = {
  setRooms(state, rooms) {
    state.rooms = rooms
  },
  setOneRoom(state, room) {
    state.addRoom.id = room.id
    state.addRoom.name = room.name
    state.addRoom.description = room.description
    state.addRoom.capacity = room.capacity
    state.addRoom.min_booking_duration = room.min_booking_duration
    state.addRoom.max_booking_duration = room.max_booking_duration
    state.addRoom.price_per_hour = room.price_per_hour
    state.addRoom.can_book = room.can_book
    state.addRoom.photo = room.photo
    state.addRoom.category = room.category.id
    state.addRoom.room_category_id = room.category.id
    state.addRoom.amenities = room.amenities
    state.addRoom.room_availability = room.room_availability
    state.addRoom.zoom_room_id = room.zoom_room_id
    state.addRoom.access_point_id = room.access_point_id
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  updateCategory(state, category) {
    state.addCategory.name = category.name
    state.addCategory.color = category.color
    state.addCategory.id = category.id
    state.activateButton = false
  },
  setBookings(state, booking) {
    state.bookings = booking
  },
  setRoomAvailabilty(state, available) {
    state.addRoom.room_availability = available
  },
  setSingleCat(state, category_id) {
    state.addRoom.room_category_id = category_id
  },
  setAvailability(state, date) {
    state.addRoom.available_room = date
  },
  editBooking(state, record) {
    state.addBooking.id = record.id
    state.addBooking.from = record.from
    state.addBooking.to = record.to
    state.addBooking.title = record.title
  },
  resetForms(state, recordState) {
    Object.keys(state[recordState]).forEach(key => {
      if (key == 'amenities') {
        state[recordState][key] = []
      } else {
        state[recordState][key] = null
      }
    })
  }
}

export const actions = {
  async getAllRooms({ commit }, link = null) {
    try {
      const { data } = await this.$resource.getAllRooms(link)
      commit('setRooms', data)
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
  async createRoom({ state, commit }) {
    try {
      const data = state.addRoom.available_room
      const roomAvailability = helper.parseRoomdate(data, this)
      commit('setRoomAvailabilty', roomAvailability)
      await this.$resource.createRoom(state.addRoom)
      this._vm.$bvToast.toast(`Room created successfully`, helper.notify.sucess)
      commit('resetForms', 'addRoom')
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
  async updateRoom({ state, commit }) {
    const payload = state.addRoom
    const roomAvailability = helper.parseRoomdate(payload.available_room, this)
    commit('setRoomAvailabilty', roomAvailability)
    try {
      await this.$resource.updateRoom(payload.id, payload)
      this._vm.$bvToast.toast(`Room updated successfully`, helper.notify.sucess)
      commit('resetForms', 'addRoom')
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
  async getOneRoom({ commit }, payload) {
    try {
      const { data } = await this.$resource.getARoom(payload)
      commit('setOneRoom', data.data)
      commit('setAvailability', helper.undoParse(data.data.room_availability))
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
  async deleteRoom({ dispatch }, payload) {
    try {
      await this.$resource.deleteRoom(payload)
      this._vm.$bvToast.toast(`Room deleted successfully`, helper.notify.sucess)
      dispatch('getAllRooms')
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
  async getAllCategories({ commit }) {
    try {
      const { data } = await this.$resource.getAllCategories()
      commit('setCategories', data)
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
  async createCategory({ state, dispatch, commit }) {
    const payload = state.addCategory
    try {
      await this.$resource.createCategory(payload)
      this._vm.$bvToast.toast(
        `Category created successfully`,
        helper.notify.sucess
      )
      dispatch('getAllCategories')
      commit('resetForms', 'addCategory')
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
  async updateCategory({ state, commit, dispatch }) {
    const payload = state.addCategory
    try {
      await this.$resource.updateCategory(payload.id, payload)
      this._vm.$bvToast.toast(
        `Category updated successfully`,
        helper.notify.sucess
      )
      dispatch('getAllCategories')
      commit('resetForms', 'addCategory')
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
  async deleteCategory({ state, dispatch, commit }) {
    const payload = state.addCategory.id
    try {
      await this.$resource.deleteCategory(payload)
      this._vm.$bvToast.toast(
        `Category deleted successfully`,
        helper.notify.sucess
      )
      dispatch('getAllCategories')
      commit('resetForms', 'addCategory')
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
  async bookingsForARoom(context, payload) {
    try {
      const { data } = await this.$resource.getBookingForARoom(payload)
      context.commit('setBookings', data)
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
  async getAllBookings({ commit }) {
    try {
      const { data } = await this.$resource.getAllBookings()
      const calendarBookings = _.map(data.data, o => {
        return {
          title: o.title,
          start: o.start_timestamp,
          end: o.end_timestamp,
          backgroundColor: o.room && `${o.room.category.color}2A`,
          borderColor: o.room && `${o.room.category.color}2A`,
          extendProps: o
        }
      })
      commit('setBookings', calendarBookings)
    } catch (error) {
      this._vm.$bvToast.toast({
        statusCode: error.statusCode,
        message: error.response
          ? JSON.stringify(error.response.data.errors)
          : error.message
      })
    }
  },
  async getAllBookingsByDate({ commit }, payload) {
    try {
      const { data } = await this.$resource.getBookingByDate(payload)
      const calendarBookings = _.map(data.data, o => {
        return {
          title: o.title,
          start: o.start_timestamp,
          end: o.end_timestamp,
          backgroundColor: o.room && `${o.room.category.color}2A`,
          borderColor: o.room && `${o.room.category.color}2A`,
          extendProps: o
        }
      })
      commit('setBookings', calendarBookings)
    } catch (error) {
      this._vm.$bvToast.toast({
        statusCode: error.statusCode,
        message: error.response
          ? JSON.stringify(error.response.data.errors)
          : error.message
      })
    }
  },
  async createBooking({}, payload) {
    try {
      await this.$resource.bookRoomForMember(payload.room_id, payload)
      this._vm.$bvToast.toast(
        `Booking created successfully`,
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
  async updateRoomBooking({ dispatch }, payload) {
    try {
      await this.$resource.updateRoomBooking(payload.booking_id, payload)
      dispatch('getAllBookings')
      this._vm.$bvToast.toast(
        `Booking updated successfully`,
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
