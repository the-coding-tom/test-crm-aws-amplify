export default function(ctx, inject) {
  const subdomain = ctx.route.params.space

  const Wellness = {
    getAllWellnessSessions: () => {
      ctx.$axios.get(`/${subdomain}/wellness`).then(res => {
        return res
      })
    }
  }
  ;(ctx.$wellness = Wellness), inject('wellness', Wellness)
}
