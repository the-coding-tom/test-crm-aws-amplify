<template>
  <div>
    <b-form @submit.prevent="addPlan">
      <base-header
        class="pb-6"
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Setup Plan" />
          <b-button
            :disabled="loading"
            class="btn btn-primary text-white"
            type="submit">Add Plan</b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Add New Plan</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    v-model="name"
                    class="col-md-12"
                    label="Name of Plan"
                    placeholder="Entrepreneur"
                    required
                  />
                  <b-form-group
                    class="col-md-12"
                    label="Plan Description"
                    description="Description should not exceed 22 characters">
                    <b-form-input
                      v-model="description"
                      maxlength="22"
                      placeholder="Add details about the plan"
                      required/>
                  </b-form-group>
                  <b-form-group
                    label="Price per cycle"
                    class="col-md-6">
                    <b-form-input
                      v-model="price_per_cycle"
                      type="number"
                      placeholder="0.00"
                      required/>
                  </b-form-group>
                  <b-form-group
                    label="Charge Cycle"
                    description="Charge cycle denotes the number of months before charging"
                    class="col-md-6">
                    <b-form-input
                      v-model="cycle_duration"
                      type="number"
                      label="Charge Cycle"
                      required/>
                  </b-form-group>
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
                            :value="false"
                            :unchecked-value="true"
                            name="planVisibility"
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
        <b-button
          class="text-primary mb-2"
          variant="transparent"
          @click="$router.go(-1)"><i class="ti-angle-left"/> Back</b-button>
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
  data() {
    return {
      name: '',
      description: '',
      price_per_cycle: 0,
      cycle_duration: 1,
      hidden: false,
      loading: false
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    addPlan() {
      const {
        name,
        description,
        price_per_cycle,
        cycle_duration,
        hidden,
        space
      } = this

      this.loading = !this.loading
      const payload = {
        name,
        description,
        cycle_duration,
        price_per_cycle,
        recurring: true,
        hidden
      }
      this.$plan
        .addPlan(payload)
        .then(({ data: { data } }) => {
          this.$bvToast.toast(`Plan ${name} created successfully`, {
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
