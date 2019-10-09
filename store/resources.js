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
  addRoom: {
    id: '',
    name: '',
    description: '',
    currency: '$',
    capacity: '20',
    min_booking_duration: '30',
    max_booking_duration: '60',
    price_per_hour: '2',
    can_book: true,
    seen_by_admin: true,
    photo: '',
    cancellation_notice: '20',
    available_booking_time: '20',
    room_category_id: '',
    amenities: ['projector'],
    room_availability: [
      {
        from: '08:00',
        to: '12:00',
        weekdays: [1, 6]
      }
    ]
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
  toggleButton(state) {
    state.activateButton = false
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
      console.log(context.state.addRoom)
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
  }
}
