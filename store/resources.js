export const state = () => ({
  rooms: [],
  oneroom: ''
})

export const mutations = {
  setRooms(state, rooms) {
    state.rooms = rooms
  },
  setOneRoom(state, room) {
    state.oneroom = room
  }
}

export const actions = {
  getAllRooms: async (context, { vm }) => {
    try {
      const { data } = await vm.$resource.getAllRooms()
      context.commit('setRooms', data)
    } catch (error) {
      console.log(error)
    }
  },
  createRooms: async (context, payload, { vm }) => {
    try {
      const res = await vm.$resource.createRooms(payload)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
  updateRoom: async (context, payload, { vm }) => {
    try {
      const res = await vm.$resource.updateRoom(payload)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
  getOneRoom: async (context, { vm, payload }) => {
    try {
      const { data } = await vm.$resource.getARoom(payload)
      context.commit('setOneRoom', data)
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }
  },
  deleteRoom: async (context, payload, { vm }) => {
    try {
      const res = await vm.$resource.deleteRoom(payload)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}
