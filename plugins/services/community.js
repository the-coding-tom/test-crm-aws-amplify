import moment from 'moment'

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
      const checkinFilter = `?filter[status]=checkin&filter[checkin_timestamp]=${moment().format(
        'YYYY-MM-DD'
      )},${moment()
        .add(1, 'days')
        .format('YYYY-MM-DD')}&sort=-id`

      console.log(checkinFilter)
      return ctx.$axios.post(`${baseUrl()}${checkinFilter}`, payload)
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
