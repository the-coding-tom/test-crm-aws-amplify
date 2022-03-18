import helper from './../util/helper'
export const state = () => ({
  feeds: [],
  addFeed: {
    feed_text: null,
    attachment_type: null,
    attachment_id: null,
    attachment_url: null,
    attachment_text: null,
    start_time: null,
    end_time: null,
    category: null,
    recipientTypeCode: 0
  },
  isLoading: false,
  postMessage: {
    type: null,
    icon: null,
    show: false,
    text: null
  }
})
export const mutations = {
  setFeeds(state, feeds) {
    state.feeds = feeds
  },
  resetForms(state, recordState) {
    Object.keys(state[recordState]).forEach(key => {
      state[recordState][key] = null
    })
  },
  setIsLoading(state) {
    state.isLoading = !state.isLoading
  },
  setPostMessage(state, message) {
    state.postMessage = message
  },
  setAttachment(state, data) {
    if (data.type == 'image') {
      state.addFeed.attachment_type = data.type
      state.addFeed.attachment_url = data.banner_url
    }

    if (data.type == 'event') {
      state.addFeed.attachment_type = data.type
      state.addFeed.attachment_id = data.attachInfo.id
      state.addFeed.attachment_url = data.attachInfo.banner_url
      state.addFeed.attachment_text = data.attachInfo.name
      state.addFeed.start_time = data.attachInfo.start_time
      state.addFeed.end_time = data.attachInfo.end_time
      state.addFeed.category = data.attachInfo.event_category.name
    }
    if (data.type == 'wellness') {
      state.addFeed.attachment_type = data.type
      state.addFeed.attachment_id = data.attachInfo.id
      state.addFeed.attachment_url = data.attachInfo.banner_url
      state.addFeed.attachment_text = data.attachInfo.name
      state.addFeed.start_time = data.attachInfo.start_date
      state.addFeed.end_time = data.attachInfo.end_date
      state.addFeed.category = data.attachInfo.wellness_category.name
    }
  },
  resetAttachment(state) {
    state.addFeed.attachment_url = null
    state.addFeed.attachment_id = null
    state.addFeed.attachment_text = null
    state.addFeed.attachment_type = null
  }
}
export const actions = {
  async getAllFeeds({ commit }) {
    try {
      const { data } = await this.$community.getAllFeeds()
      commit('setFeeds', data)
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
  async createFeed({ commit, state, dispatch }) {
    try {
      const payload = state.addFeed
      await this.$community.createFeed(payload)
      const postMessage = {
        type: 'success',
        icon: 'fa fa-check-circle',
        show: true,
        text: 'Your post to was published successfully'
      }
      commit('setPostMessage', postMessage)
      commit('resetForms', 'addFeed')
      commit('setIsLoading')
      dispatch('getAllFeeds')
    } catch (error) {
      commit('setIsLoading')
      const errorMessage = {
        type: 'danger',
        icon: 'fa fa-times-circle',
        show: true,
        text: `${
          error.response
            ? JSON.stringify(error.response.data.errors)
            : error.message
        }`
      }
      commit('setPostMessage', errorMessage)
    }
  },
  async deleteFeed({ dispatch }, payload) {
    try {
      await this.$community.deleteFeed(payload)
      this._vm.$bvToast.toast(`Feed deleted successfully`, helper.notify.sucess)
      dispatch('getAllFeeds')
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
