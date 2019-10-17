export default function(ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space
  }

  const baseUrl = () => {
    return `/${subdomain()}/community/feeds`
  }

  const Community = {
    getAllFeeds: () => {
      return ctx.$axios.get(`${baseUrl()}`)
    },
    createFeed: payload => {
      return ctx.$axios.post(`${baseUrl()}`, payload)
    },
    updateFeed: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}`, payload)
    },
    deleteFeed: id => {
      return ctx.$axios.delete(`${baseUrl()}/${id}`)
    }
  }
  ;(ctx.$community = Community), inject('community', Community)
}
