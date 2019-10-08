<template>
  <div>
    <b-form @submit.prevent="addWellness">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Wellness"
          />
          <b-button
            type="submit"
            class="btn btn-primary">Add Wellness</b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Wellness Details</h3>
            <div class="row">

              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    class="col-md-12"
                    label="Name"
                    required
                    placeholder="Awesome Wellness Sesstion"/>
                  <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea
                      required
                      placeholder="Add details about the wellness"
                      rows="4"
                      max-rows="6"
                      class="form-control"/>
                  </div>
                  <base-input
                    class="col-md-6"
                    label="Start Date"
                    type="date"
                    placeholder=""/>
                  <base-input
                    class="col-md-6"
                    label="Start Date"
                    type="date"
                    placeholder=""/>
                  <base-input
                    class="col-md-6"
                    label="End Time"
                    type="time"
                    placeholder=""/>
                  <base-input
                    class="col-md-6"
                    label="End Time"
                    type="time"
                    placeholder=""/>
                  <base-input
                    class="col-md-6"
                    label="Price"
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
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <div class="form-group col-md-6">
                    <label>Event Category:</label>
                    <el-select
                      v-model="categories"
                      placeholder="Select Category">
                      <el-option
                        v-for="n in 6"
                        :key="n"
                        :label="'Category' + n"
                        :value="n"/>
                    </el-select>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Organizer:</label>
                    <el-select
                      v-model="organisers"
                      placeholder="Select Organizer">
                      <el-option
                        v-for="n in 6"
                        :key="n"
                        :label="'Organizer' + n"
                        :value="n"/>
                    </el-select>
                  </div>
                  <div class="form-group col-md-12">
                    <label>Resource</label>
                    <b-form-checkbox-group>
                      <b-form-checkbox>Neural Room</b-form-checkbox>
                      <b-form-checkbox>Restaurant</b-form-checkbox>
                    </b-form-checkbox-group>
                  </div>

                  <div class="form-group col-md-12">
                    <label>Attendee Email</label>
                    <el-select
                      v-model="selects"
                      multiple
                      filterable
                      placeholder="Attendees will be sent emails as below if you fill out the fields below:">
                      <el-option
                        v-for="option in selectOptions"
                        :key="option.label"
                        :label="option.label"
                        :value="option.value"/>
                    </el-select>
                  </div>

                  <base-input
                    class="col-md-6"
                    label="Email Subject"
                    placeholder="Add subject of Email"/>

                  <div class="form-group col-md-12">
                    <label>Message</label>
                    <textarea
                      placeholder="Message body for attendees’ email"
                      rows="4"
                      max-rows="6"
                      class="form-control"/>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="bg-lgray pd-10 pd-l-20 col-md-12"> -->
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
// Components
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
      organisers: [],
      currency: []
    }
  }
}
</script>
