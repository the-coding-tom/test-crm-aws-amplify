export default function(ctx, inject) {
  const Resource = {
    getAllRooms: () => {
      console.log('>>>>>>>>>>>>>>>>>>>>')
    }
  }
  ;(ctx.$resource = Resource), inject('resource', Resource)
}
