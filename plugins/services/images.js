export default function(ctx, inject) {
  const subdomain = ctx.route.params.space
  const baseUrl = `/upload`

  const Image = {
    getSignedUrl: (service, mime_type) => {
      return ctx.$axios.post(baseUrl, { service, mime_type })
    }
  }
  ;(ctx.$images = Image), inject('images', Image)
}
