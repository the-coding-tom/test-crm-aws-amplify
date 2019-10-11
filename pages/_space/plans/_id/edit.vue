<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Update Plan" />
        <b-button
          :disabled="loading"
          class="btn btn-primary text-white"
          @click="editPlan"
        >Update Plan</b-button>
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
                  placeholder="Entrepreneur"
                />
                <div class="form-group col-md-12">
                  <label>Plan Description</label>
                  <textarea
                    v-model="plan.description"
                    placeholder="Add details about the plan"
                    rows="4"
                    max-rows="6"
                    description="description"
                    class="form-control"
                  />
                </div>
                <base-input
                  v-model="plan.price_per_cycle"
                  class="col-md-6"
                  label="Price"
                  placeholder="0.00"
                  type="number"
                />
                <base-input
                  v-model="plan.cycle_duration"
                  class="col-md-6"
                  label="Per"
                  placeholder="Month(s)"
                  type="number"
                />
                <div class="form-group col-md-12">
                  <label 
                    for="termsAndConditions" 
                    class="form-control-label">Terms and Conditions</label>
                  <b-row>
                    <b-col md="6">
                      <b-form-radio
                        v-model="termsAndConditions"
                        name="termsAndConditions"
                        value="default"
                      >Default</b-form-radio>
                      <p class="text-left mt-2">
                        Use the default Terms and Conditions set up for for SHACK15. See
                        <a
                          href
                        >Terms and Conditions</a>.
                      </p>
                    </b-col>
                    <b-col md="6">
                      <b-form-radio
                        v-model="termsAndConditions"
                        name="termsAndConditions"
                        value="custom"
                      >Custom</b-form-radio>
                      <p class="text-left mt-2">Define custom Terms and Conditions for this plan.</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="row pd-l-20">
                <b-row>
                  <b-col md="6">
                    <base-input
                      v-model="cancelNotice"
                      label="Cancellation Notice"
                      placeholder="Days"
                      type="number"
                    />
                    <p
                      class="text-left mt-2 text-gray"
                    >Number of days notice member must give when cancelling membrship. If blank, members can cancel to the end of curent billing cycle.</p>
                  </b-col>
                  <b-col md="6">
                    <base-input
                      v-model="minimumCommitment"
                      label="Minimum Commitment"
                      placeholder="Month(s)"
                      type="number"
                    />
                    <p
                      class="text-left mt-2 text-gray"
                    >Member can only cancel/change plan after given number of months.</p>
                  </b-col>
                  <div class="form-group col-md-12">
                    <label 
                      for="planvisibility" 
                      class="form-control-label">Plan Visibility</label>
                    <b-row>
                      <b-col md="6">
                        <b-form-radio
                          v-model="plan.hidden"
                          name="planVisibility"
                          value="false"
                        >Public</b-form-radio>
                        <p
                          class="text-left mt-2"
                        >Will be displayed on Apply change and all applicants can see this Membership Plan.</p>
                      </b-col>
                      <b-col md="6">
                        <b-form-radio
                          v-model="plan.hidden"
                          name="planVisibility"
                          value="true"
                        >Hidden</b-form-radio>
                        <p
                          class="text-left mt-2"
                        >Give selected applicants access to this plan via a secret plan.</p>
                      </b-col>
                    </b-row>
                  </div>

                  <div class="form-group col-md-12">
                    <b-form-checkbox
                      v-model="approveMember"
                      value="true"
                    >New members have to be approved. When a new member signs up for this plan admins get an email to approve them.</b-form-checkbox>
                  </div>
                </b-row>
              </div>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
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
          statusCode: err.response.status,
          message: JSON.stringify(err.response.data)
        })
      })
  },
  data() {
    return {
      loading: false,
      approveMember: '',
      minimumCommitment: '',
      cancelNotice: '',
      termsAndConditions: ''
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace.subdomain
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
            params: { space, id }
          })
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
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
