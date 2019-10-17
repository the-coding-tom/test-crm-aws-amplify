<template>
  <div class="row justify-content-center align-items-center flex-column h-100">
    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3 my-auto">
      <form
        class="mr-b-30"
        @submit.prevent="login">
        <!-- redirect to /ui/home/space -->
        <img
          src="/img/logo2.png"
          class="mr-b-20"
          alt="Shack 15 Logo"
          height="20px" >
        <h1 class="mr-b-10">Dashboard Login</h1>
        <div class="mr-b-20 text-danger">{{ error }}</div>
        <base-input
          v-model="user.email"
          placeholder="Email"
          type="email"
          required />
        <base-input
          v-model="user.password"
          placeholder="Password"
          type="password"
          required />
        <b-button
          :disabled="loading"
          block
          type="submit"
          variant="outline-dark">SIGN IN</b-button>
      </form>

      <div class="text-muted">
        Forgot Password?
        <nuxt-link
          :to="{name: 'auth-forgot-password'}"
          class="text-dark">
          <u>Reset Here</u>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AuthNavbar from '~/components/shack/AuthNavbar.vue'

export default {
  layout: 'ShackAuth',
  components: {
    AuthNavbar
  },
  data: () => ({
    loading: false,
    user: { email: '', password: '' },
    error: ''
  }),
  methods: {
    async login() {
      this.loading = !this.loading
      this.$auth
        .loginWith('local', {
          data: {
            email: this.user.email,
            password: this.user.password
          }
        })
        .then(() => {
          this.error = ''
        })
        .catch(e => {
          this.loading = !this.loading
          this.error = 'Email or password is invalid'
        })
    }
  }
}
</script>
