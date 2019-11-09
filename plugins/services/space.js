export default function(ctx, inject) {
  const Space = {
    updateOneSpace: (spaceId, payload) => {
      return ctx.$axios.$patch(`/spaces/${spaceId}`, payload)
    }
  }
  ;(ctx.$space = Space), inject('space', Space)
}
