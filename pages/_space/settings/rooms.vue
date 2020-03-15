<template>
  <div>
    <b-form @submit.prevent="roomSettings">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Room"
            subtitle="Setting"/>
        </div>
      </base-header>
      <div class="container-fluid mt--6">

        <div class="row">
          <div class="col-md-6">
            <card>
              <div class="row">
                <base-input
                  v-model="interval"
                  type="number"
                  class="col-md-12"
                  label="Booking Interval"
                  placeholder="30"/>
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
        <b-button
          variant="transparent"
          class="text-primary mb-2"
          @click="$router.go(-1)"><i class="fa fa-angle-left"/> Back</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import { mapState } from 'vuex'
import { displayError } from '../../../util/errors'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle
  },
  data: () => ({
    loading: false,
    interval: 30
  }),
  computed: {
    ...mapState({
      subdomain: state => state.space.currentSpace.subdomain
    })
  },
  methods: {
    roomSettings() {
      this.loading = !this.loading

      this.$axios
        .post(`/${this.subdomain}/rooms-config`, {
          booking_interval: this.interval
        })
        .then(res => {
          this.loading = !this.loading

          this.$bvToast.toast(`Config updated successfully.`, {
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(e => {
          displayError(e, this)
        })
    }
  }
}
</script>

<style>
</style>
