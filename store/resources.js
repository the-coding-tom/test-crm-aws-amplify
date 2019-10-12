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
  bookingModal: false,
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
    amenities: null,
    room_availability: null,
    available_room: null
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
    state.addRoom.photo = room.photo
    state.addRoom.category = room.category.id
    state.addRoom.room_category_id = room.category.id
    state.addRoom.amenities = room.amenities
    state.addRoom.room_availability = room.room_availability
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
  toggleModal(state, value) {
    state.bookingModal = value
  }
}

export const actions = {
  async getAllRooms(context, payload) {
    try {
      const { data } = await this.$resource.getAllRooms(payload)
      context.commit('setRooms', data)
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async createRoom(context) {
    try {
      const data = context.state.addRoom.available_room
      const roomAvailability = helper.parseRoomdate(data, vm)
      context.commit('setRoomAvailabilty', roomAvailability)
      await this.$resource.createRoom(context.state.addRoom)
      vm.$bvToast.toast(`Room created successfully`, helper.notify.sucess)
      vm.$router.go(-1)
    } catch (error) {
      vm.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async updateRoom(context) {
    const payload = context.state.addRoom
    const roomAvailability = helper.parseRoomdate(payload.available_room, this)
    context.commit('setRoomAvailabilty', roomAvailability)
    try {
      await this.$resource.updateRoom(payload.id, payload)
      this.$bvToast.toast(`Room updated successfully`, helper.notify.sucess)
      this.$router.go(-1)
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async getOneRoom(context, payload) {
    try {
      const { data } = await this.$resource.getARoom(payload)
      context.commit('setOneRoom', data.data)
      context.commit(
        'setAvailability',
        helper.undoParse(data.data.room_availability)
      )
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async deleteRoom(context, payload) {
    try {
      await this.$resource.deleteRoom(payload)
      this.$bvToast.toast(`Room deleted successfully`, helper.notify.sucess)
      location.reload()
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async getAllCategories(context) {
    try {
      const { data } = await this.$resource.getAllCategories()
      context.commit('setCategories', data)
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async createCategory(context) {
    const payload = context.state.addCategory
    try {
      await this.$resource.createCategory(payload)
      this.$bvToast.toast(`Category created successfully`, helper.notify.sucess)
      location.reload()
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async updateCategory(context) {
    const payload = context.state.addCategory
    try {
      await this.$resource.updateCategory(payload.id, payload)
      this.$bvToast.toast(`Category updated successfully`, helper.notify.sucess)
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async deleteCategory(context) {
    const payload = context.state.addCategory.id
    try {
      await this.$resource.deleteCategory(payload)
      this.$bvToast.toast(`Category deleted successfully`, helper.notify.sucess)
      location.reload()
    } catch (error) {
      this.$bvToast.toast(
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
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async getAllBookings(context) {
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
      context.commit('setBookings', calendarBookings)
    } catch (error) {
      this.error({
        statusCode: error.statusCode,
        message: error.response
          ? JSON.stringify(error.response.data.errors)
          : error.message
      })
    }
  },
  async createBooking(context) {
    try {
      await this.$resource.bookRoomForMember(context.state.addBooking)
      this.$bvToast.toast(`Booking created successfully`, helper.notify.sucess)
    } catch (error) {
      this.$bvToast.toast(
        `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`,
        helper.notify.error
      )
    }
  },
  async updateRoomBooking(context) {
    const payload = context.state.addBooking
    try {
      await this.$resource.updateRoomBooking(payload.id, payload)
      context.commit('toggleModal', false)
      this.$bvToast.toast(`Booking updated successfully`, helper.notify.sucess)
      location.reload()
    } catch (error) {
      this.$bvToast.toast(
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
