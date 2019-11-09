export default function(ctx, inject) {
  const Settings = {
    changePassword: payload => {
      return ctx.$axios.$patch(`/user/change-password`, payload)
    }
  }

  ctx.$settings = Settings
  inject('settings', Settings)
}
