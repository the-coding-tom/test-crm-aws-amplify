<template>
  <div class="row justify-content-center align-items-center flex-column h-100">
    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3 my-auto">
      <form
        class="mr-b-30"
        @submit.prevent="resetPassword">
        <!-- redirect to /ui/home/space -->
        <img
          src="/img/logo2.png"
          class="mr-b-20"
          alt="Shack 15 Logo"
          height="20px" >
        <h1 class="mr-b-10">Reset Password</h1>
        <div class="mr-b-20 text-danger">{{ error }}</div>
        <base-input
          v-model="password"
          placeholder="New Password"
          type="password"
          required />
        <base-input
          v-model="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          required
        />
        <b-button
          block
          type="submit"
          variant="outline-dark">RESET PASSWORD</b-button>
      </form>

      <div class="text-muted">
        Remembered your password?
        <nuxt-link
          :to="{name: 'auth-login'}"
          class="text-dark">
          <u>Login Here</u>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AuthNavbar from '~/components/shack/AuthNavbar.vue'

export default {
  layout: 'ShackAuth',
  auth: 'guest',
  components: {
    AuthNavbar
  },
  asyncData({ route }) {
    return {
      token: route.query.q
    }
  },
  data: () => ({
    password: '',
    confirmPassword: '',
    error: ''
  }),
  methods: {
    resetPassword() {
      const { password, confirmPassword, token } = this

      if (password !== confirmPassword) {
        this.error = 'Correct password mismatch'
        return
      }

      this.$authLocal.resetPassword(token, password).then(({ data }) => {
        if (data) {
          // this.msg =
          //   'Password reset link sent to your email if it exists in our database'

          this.$bvToast.toast(
            `Login to continue if admin else continue your experience your mobile`,
            {
              title: 'Password Reset Successful',
              autoHideDelay: 5000,
              variant: 'success',
              solid: true
            }
          )

          return
        }

        this.error = 'We are unable to reset your password at this time.'
      })
    }
  }
}
</script>
