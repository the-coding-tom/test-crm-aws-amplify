<template>
  <div>
    <b-form @submit.prevent="addNewRoom">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between py-4">
          <MainTitle
            title="Add New Resource"/>
          <b-button 
            type="submit"
            class="btn btn-primary">
            Save Resource
          </b-button>
        </div>
      </base-header>

      <!--Charts-->
      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Resource Details</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input 
                    v-model="name"
                    class="col-md-6" 
                    label="Name" 
                    placeholder="Name of Resource"/>
                  <base-input 
                    v-model="color_code"
                    class="col-md-3" 
                    label="Color Tag" 
                    placeholder="#4C4D4F"/>
                  <base-input 
                    v-model="price_per_hour"
                    class="col-md-6" 
                    label="Price per hour" 
                    type="number" 
                    step="0.01" 
                    placeholder="0.00"/>
                  <div class="form-group col-md-3">
                    <label>Currency:</label>
                    <el-select 
                      v-model="currency" 
                      name="currency"
                      placeholder="USD ($)">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"/>
                    </el-select>
                  </div>
                  <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea 
                      v-model="description"
                      placeholder="Add details about this resource" 
                      rows="4" 
                      max-rows="6" 
                      class="form-control"/>
                  </div>

                  <base-input 
                    v-model="min_booking_duration"
                    class="col-md-6" 
                    label="Minimum Booking Duration" 
                    type="number" 
                    placeholder="0">
                    <div slot="append">min</div>
                  </base-input>
                
                  <base-input 
                    v-model="max_booking_duration"
                    class="col-md-6" 
                    label="Maximum Booking Duration" 
                    type="number" 
                    placeholder="0">
                    <div slot="append">max</div>
                  </base-input>
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <base-input 
                    v-model="cancellation_notice"
                    class="col-md-12" 
                    label="Cancellation Notice" 
                    type="number" 
                    placeholder="0">
                    <div slot="append">hrs</div>
                  </base-input>
                  <b-form-text class="col-md-12">Prevent members from cancelling bookings within x hours before a booking starts.</b-form-text>

                  <base-input 
                    v-model="capacity"
                    class="col-md-5" 
                    label="Number of Units" 
                    type="number" 
                    placeholder="0" />
                  <b-form-text class="col-md-12">How many people can book this at the same time</b-form-text>

                  <base-input 
                    v-model="available_booking_time"
                    class="col-md-12" 
                    label="Available Booking Time" 
                    placeholder="0" />
                  <b-form-text class="col-md-12">You can enter multiple time frames separated by comma, e.g. 8am - 12pm, 14 - 22. You can also use week days, e.g. mo - fr 9 - 17, sa 10am - 3pm.</b-form-text>
                
                  <div class="form-group col-md-12">
                    <label>Resource Settings</label>
                    <b-form-checkbox-group>
                      <b-form-checkbox v-model="seen_by_admin">Hidden Resource. Can only be booked/seen by admins</b-form-checkbox>
                      <b-form-checkbox v-model="admin_can_book">Only admins can book</b-form-checkbox>
                    </b-form-checkbox-group>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class=""> -->
            <UploadButton 
              name="Hello" 
              label="Upload File" />
              <!-- </div> -->
          </card>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import UploadButton from '~/components/shack/UploadButton.vue'
import { Select, Option } from 'element-ui'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    UploadButton,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      options: [
        { value: 'USD ($)', label: 'USD ($)' },
        { value: 'GBP (£)', label: 'GBP (£)' },
        { value: 'EUR (€)', label: 'EUR (€)' },
        { value: 'CNY (¥)', label: 'CNY (¥)' }
      ],
      selectOptions: [
        { label: 'Phelicia Drake ', value: 'info1@example.com' },
        { label: 'Samuel Ekubona', value: 'info2@example.com' },
        { label: 'Goku Justin', value: 'info3@example.com' },
        { label: 'Kofi Pampaso', value: 'info4@example.com' },
        { label: 'Tulasi Boni', value: 'info5@example.com' },
        { label: 'Michael Smith', value: 'info6@example.com' }
      ],
      selects: [],
      categories: [],
      organisers: []
    }
  },
  computed: {
    ...mapFields({
      name: 'resources.addRoom.name',
      price_per_hour: 'resources.addRoom.price_per_hour',
      color_code: 'resources.addRoom.color_code',
      currency: 'resources.addRoom.currency',
      capacity: 'resources.addRoom.capacity',
      description: 'resources.addRoom.description',
      min_booking_duration: 'resources.addRoom.min_booking_duration',
      max_booking_duration: 'resources.addRoom.max_booking_duration',
      seen_by_admin: 'resources.addRoom.seen_by_admin',
      admin_can_book: 'resources.addRoom.can_book',
      cancellation_notice: 'resources.addRoom.cancellation_notice',
      available_booking_time: 'resources.addRoom.available_booking_time'
    })
  },
  methods: {
    addNewRoom() {
      this.$store.dispatch('resources/createRoom', { vm: this })
    }
  }
}
</script>
<style>
</style>
