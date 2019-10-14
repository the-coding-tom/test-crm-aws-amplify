export default function(ctx, inject) {
  const AuthLocal = {
    forgotPassword: email => {
      return ctx.$axios.post('/password/forgot', { email }).then(res => {
        return res
      })
    },
    resetPassword: (token, password) => {
      return ctx.$axios
        .post('/password/reset', { token, password })
        .then(res => {
          return res
        })
    }
  }

  ctx.$authLocal = AuthLocal
  inject('authLocal', AuthLocal)
}
