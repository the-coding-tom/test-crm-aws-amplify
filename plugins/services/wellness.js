export default function(ctx, inject) {
  const Wellness = {
    getAllWellnessSessions: () => {
      console.log('>>>>>>>>>>>>>>>>>>>>')
    }
  }
  ;(ctx.$wellness = Wellness), inject('wellness', Wellness)
}
