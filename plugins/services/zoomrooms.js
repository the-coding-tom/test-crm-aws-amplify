export default function(ctx, inject) {
  const subdomain = () => ctx.route.params.space

  const ZoomRooms = {
    getRooms() {
      return ctx.$axios.$get(`/zoom-rooms`)
    }
  }
  ;(ctx.$zoomrooms = ZoomRooms), inject('zoomrooms', ZoomRooms)
}
