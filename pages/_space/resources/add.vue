<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between py-4">
        <MainTitle
          title="Add New Resource"/>
        <a 
          href="/ui/bookings/resources/add" 
          class="btn btn-primary">
          Save Resource
        </a>
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
                  class="col-md-6" 
                  label="Name" 
                  placeholder="Name of Resource"/>
                <base-input 
                  class="col-md-3" 
                  label="Color Tag" 
                  placeholder="#4C4D4F"/>
                <base-input 
                  class="col-md-6" 
                  label="Price per hour" 
                  type="number" 
                  step="0.01" 
                  placeholder="0.00"/>
                <div class="form-group col-md-3">
                  <label>Currency:</label>
                  <el-select 
                    v-model="currency" 
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
                    placeholder="Add details about this resource" 
                    rows="4" 
                    max-rows="6" 
                    class="form-control"/>
                </div>

                <base-input 
                  class="col-md-6" 
                  label="Minimum Booking Duration" 
                  type="number" 
                  placeholder="0">
                  <div slot="append">min</div>
                </base-input>
                
                <base-input 
                  class="col-md-6" 
                  label="Maximum Booking Duration" 
                  type="number" 
                  placeholder="0">
                  <div slot="append">min</div>
                </base-input>
              </div>
            </div>

            <div class="col-md-6">
              <div class="row pd-l-20">
                <base-input 
                  class="col-md-12" 
                  label="Cancellation Notice" 
                  type="number" 
                  placeholder="0">
                  <div slot="append">hrs</div>
                </base-input>
                <b-form-text class="col-md-12">Prevent members from cancelling bookings within x hours before a booking starts.</b-form-text>

                <base-input 
                  class="col-md-5" 
                  label="Number of Units" 
                  type="number" 
                  placeholder="0" />
                <b-form-text class="col-md-12">How many people can book this at the same time</b-form-text>

                <base-input 
                  class="col-md-12" 
                  label="Available Booking Time" 
                  placeholder="0" />
                <b-form-text class="col-md-12">You can enter multiple time frames separated by comma, e.g. 8am - 12pm, 14 - 22. You can also use week days, e.g. mo - fr 9 - 17, sa 10am - 3pm.</b-form-text>
                
                <div class="form-group col-md-12">
                  <label>Resource Settings</label>
                  <b-form-checkbox-group>
                    <b-form-checkbox>Hidden Resource. Can only be booked/seen by admins</b-form-checkbox>
                    <b-form-checkbox>Only admins can book</b-form-checkbox>
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

  </div>
</template>
<script>
import TopWidget from '~/components/shack/TopWidget.vue'
import Activity from '~/components/shack/Activity.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import EmptyActivity from '~/components/shack/EmptyActivity.vue'
import FeedTable from '~/components/shack/FeedTable.vue'
import Booking from '~/components/shack/Booking.vue'

export default {
  layout: 'ShackDash',
  components: {
    Activity,
    TopWidget,
    Booking,
    FeedTable,
    EmptyActivity,
    SectionTitle,
    MainTitle
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
      organisers: [],
      currency: []
    }
  }
}
</script>
<style>
</style>
