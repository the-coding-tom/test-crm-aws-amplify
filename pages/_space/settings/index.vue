<template>
  <div>
    <b-form @submit.prevent="changePassword">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Settings"
            subtitle="Change Password"/>
        </div>
      </base-header>



      <div class="container-fluid mt--6">

        <div class="row">
          <div class="col-md-6">
            <card>
              <div class="row">
                <base-input
                  v-model="old_password"
                  type="password"
                  class="col-md-6"
                  label="Current Password"
                  placeholder="Current Password"/>
                <base-input
                  v-model="new_password"
                  type="password"
                  class="col-md-6"
                  label="New Password"
                  placeholder="New Password"/>

                <div class="col-md-12">
                  <b-button
                    :disabled="loading"
                    type="submit"
                    variant="primary"
                    block
                  >Save</b-button>
                </div>
              </div>
            </card>
          </div>
        </div>

      </div>
    </b-form>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle
  },
  data() {
    return {
      loading: false,
      new_password: '',
      old_password: ''
    }
  },
  methods: {
    changePassword() {
      this.loading = !this.loading

      const { new_password, old_password } = this

      this.$settings
        .changePassword({ new_password, old_password })
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast('Password changed successfully', {
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(e => {
          const message = e.response
            ? `${e.response.data.message} ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.loading = !this.loading

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    }
  }
}
</script>
