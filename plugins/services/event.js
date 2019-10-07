export default function(ctx, inject) {
  const Event = {
    getAllEvents: () => {
      console.log('>>>>>>>>>>>>>>>>>>>>')
    }
  }
  ;(ctx.$event = Event), inject('event', Event)
}
