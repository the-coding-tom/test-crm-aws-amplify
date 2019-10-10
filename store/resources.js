import randomColor from './../util/randomColor'
import notify from './../util/notify'
export const state = () => ({
  rooms: [],
  oneroom: '',
  categories: [],
  activateButton: true,
  addCategory: {
    id: '',
    name: '',
    color: randomColor()
  },
  bookings: [],
  addRoom: {
    id: null,
    name: null,
    description: null,
    currency: null,
    capacity: null,
    min_booking_duration: null,
    max_booking_duration: null,
    price_per_hour: null,
    can_book: true,
    photo: null,
    room_category_id: null,
    amenities: ['projector'],
    room_availability: null
  }
})

export const mutations = {
  setRooms(state, rooms) {
    state.rooms = rooms
  },
  setOneRoom(state, room) {
    state.addRoom = room
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
  }
}

export const actions = {
  getAllRooms: async (context, { vm, payload }) => {
    try {
      const { data } = await vm.$resource.getAllRooms(payload)
      context.commit('setRooms', data)
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  createRoom: async (context, { vm }) => {
    try {
      const data = context.state.addRoom
      const roomAvaila = data.room_availability.split(',')
      console.log(roomAvaila)
      return
      await vm.$resource.createRoom(context.state.addRoom)
      vm.$bvToast.toast(`Room created successfully`, notify.sucess)
      vm.$router.go(-1)
    } catch (error) {
      console.log(error)
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  updateRoom: async (context, { vm }) => {
    const payload = context.state.addRoom
    try {
      const res = await vm.$resource.updateRoom(payload.id, payload)
      vm.$bvToast.toast(`Room updated successfully`, notify.sucess)
      vm.$router.go(-1)
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  getOneRoom: async (context, { vm, payload }) => {
    try {
      const { data } = await vm.$resource.getARoom(payload)
      context.commit('setOneRoom', data.data)
      console.log(data.data)
    } catch (error) {
      console.log(error)
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  deleteRoom: async (context, { state, vm, payload }) => {
    try {
      await vm.$resource.deleteRoom(payload)
      vm.$bvToast.toast(`Room deleted successfully`, notify.success)
      location.reload()
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  getAllCategories: async (context, { vm }) => {
    try {
      const { data } = await vm.$resource.getAllCategories()
      context.commit('setCategories', data)
      console.log(data)
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  createCategory: async (context, { vm }) => {
    const payload = context.state.addCategory
    try {
      await vm.$resource.createCategory(payload)
      vm.$bvToast.toast(`Category created successfully`, notify.sucess)
      location.reload()
      //   context.commit('updateCategory', payload)
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  updateCategory: async (context, { vm }) => {
    const payload = context.state.addCategory
    try {
      await vm.$resource.updateCategory(payload.id, payload)
      vm.$bvToast.toast(`Category updated successfully`, notify.sucess)
    } catch ({ response }) {
      vm.$bvToast.toast(response.data.errors.name[0], notify.error)
    }
  },
  deleteCategory: async (context, { vm }) => {
    const payload = context.state.addCategory.id
    try {
      await vm.$resource.deleteCategory(payload)
      vm.$bvToast.toast(`category deleted successfully`, notify.success)
      location.reload()
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  bookingsForARoom: async (context, { vm, payload }) => {
    try {
      const { data } = await vm.$resource.getBookingForARoom(payload)
      context.commit('setBookings', data)
    } catch ({ response }) {
      vm.$bvToast.toast(response.data.message, notify.error)
    }
  },
  getAllBookings: async (context, { vm }) => {
    try {
      const { data } = await vm.$resource.getAllBookings()
      const calData = []
      data.data.map(record => {
        let calObj = {
          title: record.title,
          start: record.start_timestamp,
          end: record.end_timestamp,
          backgroundColor: record.room.category.color
        }
        calData.push(calObj)
      })
      context.commit('setBookings', calData)
    } catch ({ response }) {
      vm.$bvToast.toast(response.data.message, notify.error)
    }
  }
}
