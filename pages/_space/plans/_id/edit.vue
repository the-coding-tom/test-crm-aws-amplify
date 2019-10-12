<template>
  <div>
    <b-form @submit.prevent="editPlan">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Update Plan" />
          <b-button 
            :disabled="loading" 
            class="btn btn-primary text-white" 
            type="submit">Update Plan</b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    v-model="plan.name"
                    class="col-md-12"
                    label="Name of Plan"
                    required
                    placeholder="Entrepreneur"
                  />
                  <div class="form-group col-md-12">
                    <label>Plan Description</label>
                    <textarea
                      v-model="plan.description"
                      placeholder="Add details about the plan"
                      rows="4"
                      max-rows="6"
                      required
                      description="description"
                      class="form-control"
                    />
                  </div>
                  <base-input
                    v-model="plan.price_per_cycle"
                    class="col-md-6"
                    label="Price"
                    required
                    placeholder="0.00"
                    type="number"
                  />
                  <base-input
                    v-model="plan.cycle_duration"
                    class="col-md-6"
                    label="Per"
                    placeholder="Month(s)"
                    type="number"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <b-row>
                    <div class="form-group col-md-12">
                      <label 
                        for="planvisibility" 
                        class="form-control-label">Plan Visibility</label>
                      <b-row>
                        <b-col md="10">
                          <b-form-checkbox
                            v-model="hidden"
                            name="planVisibility"
                            value="false"
                            unchecked-value="true"
                          >Public</b-form-checkbox>
                          <p
                            class="text-left mt-2"
                          >Will be displayed on Apply change and all applicants can see this Membership Plan.</p>
                        </b-col>
                      </b-row>
                    </div>
                  </b-row>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle
  },
  async asyncData({ store, $plan, params, error }) {
    const { id } = params

    return await $plan
      .getPlan(id)
      .then(({ data: { data } }) => {
        return {
          plan: data,
          id
        }
      })
      .catch(err => {
        error({
          statusCode: err.statusCode,
          message: err.response
            ? JSON.stringify(err.response.data.message)
            : err.message
        })
      })
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    editPlan() {
      const {
        name,
        description,
        price_per_cycle,
        cycle_duration,
        hidden
      } = this.plan

      const { id, space } = this

      this.loading = !this.loading

      const payload = {
        name,
        description,
        cycle_duration: parseInt(cycle_duration),
        price_per_cycle: parseInt(price_per_cycle),
        recurring: true,
        hidden: hidden === 'true' ? true : false
      }

      this.$plan
        .updatePlan(id, payload)
        .then(({ data: { data } }) => {
          this.$bvToast.toast('Success', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.loading = !this.loading
          this.$router.push({
            name: 'space-plans-id-view',
            params: { space: space.subdomain, id }
          })
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
          this.loading = !this.loading
        })
    }
  }
}
</script>
