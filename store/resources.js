import randomColor from './../util/randomColor'
import notify from './../util/notify'
export const state = () => ({
  rooms: [],
  oneroom: '',
  addRoom: {
    id: '',
    name: '',
    description: '',
    currency: '$',
    capacity: '20',
    min_booking_duration: '30',
    max_booking_duration: '60',
    price_per_hour: '2',
    color_code: randomColor(),
    can_book: true,
    seen_by_admin: true,
    photo: '',
    cancellation_notice: '20',
    available_booking_time: '20',
    room_category_id: '7a596361-6154-4cbc-bc12-7eaec0a15ec5',
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
  changeCategory(state, category) {
    state.addRoom.category = category
  }
}

export const actions = {
  getAllRooms: async (context, { vm }) => {
    try {
      const { data } = await vm.$resource.getAllRooms()
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
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  },
  updateRoom: async (context, { vm }) => {
    const payload = context.state.addRoom
    try {
      const res = await vm.$resource.updateRoom(payload.id, payload)
      vm.$bvToast.toast(`Room updated successfully`, notify.sucess)
      console.log(res)
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
    } catch (error) {
      vm.$bvToast.toast(`An internal erorr occured`, notify.error)
    }
  }
}
