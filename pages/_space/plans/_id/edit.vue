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
            type="submit"
          >Update Plan</b-button
          >
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    :value="plan.name"
                    readonly
                    class="col-md-12"
                    label="Name of Plan"
                    required
                    placeholder="Entrepreneur"
                  />
                  <b-form-group
                    class="col-md-12"
                    label="Plan Description"
                    description="Description should not exceed 22 characters"
                  >
                    <b-form-input
                      v-model="plan.description"
                      maxlength="22"
                      placeholder="Add details about the plan"
                      required
                    />
                  </b-form-group>
                  <b-form-group 
                    label="Price per cycle" 
                    class="col-md-6">
                    <b-form-input
                      v-model="plan.price"
                      type="number"
                      placeholder="0.00"
                      required
                    />
                  </b-form-group>
                  <b-form-group
                    label="Charge Cycle"
                    description="Charge cycle denotes the number of months before charging"
                    class="col-md-6"
                  >
                    <b-form-input
                      v-model="plan.invoice_period"
                      type="number"
                      label="Charge Cycle"
                      required
                    />
                  </b-form-group>
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <b-row>
                    <div class="form-group col-md-12">
                      <label 
                        for="planvisibility" 
                        class="form-control-label"
                      >Plan Status</label
                      >
                      <b-row>
                        <b-col md="10">
                          <b-form-checkbox
                            v-model="plan.is_active"
                            :value="true"
                            :unchecked-value="false"
                            name="planVisibility"
                          >Active</b-form-checkbox
                          >
                          <p class="text-left mt-2">
                            Will be displayed in plans when inviting a new
                            member and all applicants can see this Membership
                            Plan.
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </b-row>
                </div>
              </div>
            </div>
          </card>
        </div>
        <b-button
          class="text-primary mb-2"
          variant="transparent"
          @click="$router.go(-1)"
        ><i class="ti-angle-left" /> Back</b-button
        >
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
      .then(({ data: data }) => {
        console.log('------------------------------------')
        console.log(data)
        console.log('------------------------------------')
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
      const { id, space, plan } = this

      this.loading = !this.loading

      this.$plan
        .updatePlan(id, plan)
        .then(({ data: { data } }) => {
          this.$bvToast.toast(`Plan ~${plan.name}~ updated successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.loading = !this.loading
          this.$router.push({
            name: 'space-plans'
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
