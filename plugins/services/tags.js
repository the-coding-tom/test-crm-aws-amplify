export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const Tag = {
    getAllTags(page = null) {
      if (page) {
        return ctx.$axios.get(`/tags?page=${page}`)
      }
      return ctx.$axios.get(`/tags`)
    },
    removeTag(tagType, payload) {
      return ctx.$axios.delete(`/tags/${tagType}`, payload)
    },
    updateTag(tagType, payload) {
      return ctx.$axios.patch(`/tags/${tagType}`, payload)
    },
    addTag(payload) {
      return ctx.$axios.post('/tags', payload)
    }
  }
  ;(ctx.$tag = Tag), inject('tag', Tag)
}
