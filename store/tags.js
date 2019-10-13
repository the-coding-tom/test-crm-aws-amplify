export const state = () => ({
  tags: []
})

export const mutations = {
  setTags(state, tags) {
    state.tags = tags
  },
  removeTag(state, tag) {
    const index = state.tags.data.findIndex(el => {
      return el.name === tag.name && el.type === tag.type
    })
    if (index !== -1) state.tags.data.splice(index, 1)
  },
  updateTag(state, payload) {
    const index = state.tags.data.findIndex(el => {
      return el.name === payload.old_tag
    })
    if (index !== -1) state.tags.data[index] = payload.data
  }
}
