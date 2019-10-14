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
        <h1 class="mr-b-10">Forgot Password</h1>
        <div class="mr-b-20 text-success">{{ msg }}</div>
        <base-input
          v-model="user.email"
          placeholder="Email"
          type="email"
          required />
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
  data: () => ({
    user: { email: '' },
    msg: ''
  }),
  methods: {
    resetPassword() {
      this.$authLocal.forgotPassword(this.user.email).then(({ data }) => {
        if (data) {
          this.msg =
            'Password reset link sent to your email if it exists in our database'
        }
      })
    }
  }
}
</script>
