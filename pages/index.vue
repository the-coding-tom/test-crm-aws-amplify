<template>
  <div class="row flex-column h-100">
    <div class="w-100">
      <auth-navbar :type="$route.name === 'alternative' ? 'light': 'default'" />
    </div>
    <div class="my-auto p-4">
      <h1>Select Your Co-working Space</h1>

      <b-form
        class="onboard"
        @submit.prevent="setSpace">
        <div class="row mr-t-30">
          <div
            v-for="(space) in spaces"
            :key="space.id"
            class="col-sm-6 col-md-6 col-lg-4">
            <input
              :id="'sh-space-'+space.id"
              v-model="selectedSpace"
              :value="space"
              type="radio"
              name="sh-space" >
            <label
              :for="'sh-space-'+space.id"
              class="card-box">
              <img
                src="img/logo2.png"
                class="mr-b-20"
                alt="Space Logo"
                height="20px" >
              <p class="m-0">
                {{ space.name }}
                <br >{{ space.address }}
              </p>
            </label>
          </div>

          <div class="col-sm-12 mr-t-50">
            <b-button
              type="submit"
              variant="outline-dark"
              class="pd-lr-50"
            >GO TO SPACE</b-button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
import AuthNavbar from '~/components/shack/AuthNavbar.vue'

export default {
  layout: 'ShackAuth',
  asyncData({ store }) {
    const spaces = store.state.auth.user.admin_of

    return {
      spaces
    }
  },
  components: {
    AuthNavbar
  },
  data: () => ({
    selectedSpace: null
  }),
  methods: {
    setSpace() {
      const { selectedSpace } = this
      if (!selectedSpace) {
        this.$bvToast.toast(`No space selected`, {
          title: 'Heads up',
          autoHideDelay: 5000,
          variant: 'info',
          solid: true
        })

        return
      }

      this.$store.commit('space/setSpace', selectedSpace)

      location.href = `/${selectedSpace.subdomain}`

      // this.$router.push(`/${selectedSpace.subdomain}`)
    }
  }
}
</script>
