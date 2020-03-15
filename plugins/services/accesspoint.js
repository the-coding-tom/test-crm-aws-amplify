export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const accesspoint = {
    list() {
      return ctx.$axios.$get(`/access-points`)
    }
  }
  ;(ctx.$accesspoint = accesspoint), inject('accesspoint', accesspoint)
}
