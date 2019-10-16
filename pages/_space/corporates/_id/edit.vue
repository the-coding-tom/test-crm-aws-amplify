<template>
  <div>
    <b-form @submit.prevent="updateCompany">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Update Corporate" />
          <b-button 
            :disabled="loading" 
            class="btn btn-primary text-white" 
            type="submit">
            <i class="fa fa-save" /> Save Corporate
          </b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Edit Corporate</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    v-model="name"
                    class="col-md-12"
                    label="Name"
                    placeholder="John Snow"
                    required
                  />
                  <base-input
                    v-model="contact_name"
                    class="col-md-12"
                    label="Contact Name"
                    required
                    placeholder="Director, John Doe"
                  />
                  <base-input
                    v-model="contact_email"
                    class="col-md-12"
                    label="Contact Email"
                    type="email"
                    required
                    placeholder="john@planor.com"
                  />
                  <base-input
                    v-model="address"
                    class="col-md-12"
                    label="Address"
                    required
                    placeholder="12 Maddison Street"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    v-model="city"
                    class="col-md-6"
                    label="City"
                    placeholder="Silicon Valley"
                    required
                  />
                  <base-input
                    v-model="state"
                    class="col-md-6"
                    label="State"
                    required
                    placeholder="San Francisco"
                  />
                  <base-input
                    v-model="zipcode"
                    class="col-md-6"
                    label="Zip Code"
                    required
                    placeholder="0021"
                  />
                  <div class="form-group col-md-6">
                    <label>Country:</label>
                    <el-select 
                      v-model="country" 
                      placeholder="Select Country">
                      <el-option
                        v-for="(country, index) in countries"
                        :key="index"
                        :label="country"
                        :value="country"
                      />
                    </el-select>
                  </div>
                  <base-input
                    v-model="billing_email"
                    class="col-md-12"
                    type="email"
                    label="Billing Email"
                    required
                    placeholder="john@plantor.com"
                  />
                </div>
              </div>
            </div>
          </card>
        </div>
        <b-button 
          class="text-primary mb-2" 
          variant="transparent" 
          @click="$router.go(-1)">
          <i class="ti-angle-left" /> Back
        </b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import { Select, Option } from 'element-ui'

import { mapState } from 'vuex'
import countries from '@/util/countries'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, error, $company, params }) {
    const { id } = params

    return await $company
      .getOneCompany(id)
      .then(({ data }) => {
        return {
          ...data,
          contact_email: data.contat_email, // TODO: Ask tsatsu to fix typo in response,
          old_contact_email: data.contat_email,
          old_billing_email: data.billing_email
        }
      })
      .catch(err => {
        error({
          statusCode: err.status || 404,
          message: err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message
        })
      })
  },
  data() {
    return {
      countries,
      loading: false
    }
  },
  methods: {
    updateCompany() {
      this.loading = !this.loading

      const {
        name,
        contact_name,
        contact_email,
        address,
        city,
        state,
        country,
        billing_email,
        zipcode,
        old_contact_email,
        old_billing_email,
        uuid
      } = this

      const payload = {
        name,
        contact_name,
        address,
        city,
        state,
        country,
        zipcode
      }

      if (old_billing_email !== billing_email) {
        payload.billing_email = billing_email
      }

      if (old_contact_email !== contact_email) {
        payload.contact_email = contact_email
      }

      this.$company
        .updateOneCompany(uuid, payload)
        .then(res => {
          this.$bvToast.toast('Successfully updated corporation', {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          setTimeout(() => {
            this.$router.push({ name: 'space-corporates' })
          }, 3000)
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
