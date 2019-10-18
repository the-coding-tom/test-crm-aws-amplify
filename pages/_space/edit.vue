<template>
  <div>
    <b-form @submit.prevent="updateSpace">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Update Space" />
          <b-button 
            :disabled="loading" 
            class="btn btn-primary text-white" 
            type="submit">Update</b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Update Space Details</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    v-model="name"
                    required
                    class="col-md-6"
                    label="Name"
                    placeholder="SHACK15"
                  />
                  <base-input 
                    v-model="unit" 
                    class="col-md-6" 
                    label="Unit" 
                    placeholder="Suite 201" />
                  <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea
                      v-model="description"
                      placeholder="Details about the space"
                      rows="4"
                      max-rows="6"
                      description="description"
                      class="form-control"
                    />
                  </div>
                  <base-input
                    v-model="currency"
                    class="col-md-6"
                    label="Currency"
                    placeholder="USD"
                  />
                  <base-input
                    v-model="currency_symbol"
                    class="col-md-6"
                    label="Currency Symbol"
                    placeholder="$"
                  />
                  <base-input
                    v-model="tax_rate"
                    class="col-md-12"
                    label="Tax Rate"
                    placeholder="20"
                    type="number"
                  />
                  <div class="form-group col-md-12">
                    <label>Payment Instruction</label>
                    <textarea
                      v-model="payment_instructions"
                      placeholder="Extra instructions for members when making payment"
                      rows="4"
                      max-rows="6"
                      description="payment_instructions"
                      class="form-control"
                    />
                  </div>
                  <base-input
                    v-model="timezone"
                    class="col-md-6"
                    label="Timezone"
                    placeholder="America/Los_Angeles"
                  />
                  <base-input
                    v-model="timezone_name"
                    class="col-md-6"
                    label="Timezone Name"
                    placeholder="Pacific Daylight Time"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <base-input
                    v-model="wifi_name"
                    class="col-md-6"
                    label="Wifi Name"
                    placeholder="SHACK15 WIFI"
                  />
                  <base-input
                    v-model="wifi_password"
                    class="col-md-6"
                    label="Wifi Password"
                    placeholder="password"
                  />
                  <div class="form-group col-md-12">
                    <b-form-checkbox
                      v-model="in_eu"
                      value="true"
                      unchecked-value="false"
                    >Is space in the European Union ?</b-form-checkbox>
                  </div>

                  <base-input
                    v-model="address"
                    class="col-md-6"
                    label="Address"
                    placeholder="19 Ella Street"
                  />
                  <base-input 
                    v-model="city" 
                    class="col-md-6" 
                    label="City" 
                    placeholder="Palo Alto" />

                  <base-input
                    v-model="zipcode"
                    class="col-md-6"
                    label="Zip Code"
                    placeholder="94306"
                  />
                  <base-input
                    v-model="country"
                    class="col-md-6"
                    label="Country"
                    placeholder="Country"
                  />
                  <base-input
                    v-model="neighborhood"
                    class="col-md-12"
                    label="Neighborhood"
                    placeholder="The Palo"
                  />
                  <base-input
                    v-model="latitude"
                    class="col-md-6"
                    label="Latitude"
                    placeholder="40.6892° N"
                  />
                  <base-input
                    v-model="longitude"
                    class="col-md-6"
                    label="Longitude"
                    placeholder="74.0445° W"
                  />
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
import SectionTitle from '@/components/shack/SectionTitle.vue'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  async asyncData({ store }) {
    const space = store.state.space.currentSpace

    return {
      ...space
    }
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
    updateSpace() {
      const {
        name,
        description,
        unit,
        currency,
        currency_symbol,
        tax_rate,
        payment_instructions,
        timezone,
        timezone_name,
        wifi_name,
        wifi_password,
        in_eu,
        address,
        city,
        zipcode,
        country,
        neighborhood,
        latitude,
        longitude,
        id
      } = this

      const payload = {
        name,
        description,
        unit,
        currency,
        currency_symbol,
        tax_rate,
        payment_instructions,
        timezone,
        timezone_name,
        wifi_name,
        wifi_password,
        in_eu: Boolean(in_eu),
        address,
        city,
        zipcode,
        country,
        neighborhood
      }

      if (latitude) payload[latitude] = latitude
      if (longitude) payload[longitude] = longitude

      this.loading = !this.loading

      this.$space
        .updateOneSpace(id, payload)
        .then(({ data }) => {
          this.$store.commit('space/setSpace', data)

          this.$bvToast.toast(`Updated ${name} successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.loading = !this.loading
          setTimeout(() => {
            this.$router.push({ name: 'space' })
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
