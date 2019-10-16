<template>
  <div>
    <b-form @submit.prevent="updateTable">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between py-4">
          <MainTitle
            title="Add New Table"/>
          <b-button
            :disabled="loading"
            type="submit"
            variant="primary">
            Save Table
          </b-button>
        </div>
      </base-header>

      <!--Charts-->
      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Table Details</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    v-model="name"
                    class="col-md-6"
                    label="Name"
                    required
                    placeholder="Name of Table"/>
                  <div class="col-md-6">
                    <base-input
                      v-model="capacity"
                      label="Number of Units"
                      type="number"
                      required
                      placeholder="0" />
                  </div>
                  <div class="col-md-6">
                    <base-input
                      v-model="bookable_seat_limit"
                      label="Bookable seat limit"
                      type="number"
                      required
                      placeholder="0" />
                  </div>
                  <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea
                      v-model="description"
                      placeholder="Add details about this table"
                      rows="4"
                      max-rows="6"
                      required
                      class="form-control"/>
                  </div>

                  <base-input
                    v-model="min_booking_duration"
                    class="col-md-6"
                    label="Minimum Booking Duration"
                    type="number"
                    min="15"
                    required
                    placeholder="0">
                    <div slot="append">min</div>
                  </base-input>

                  <base-input
                    v-model="max_booking_duration"
                    class="col-md-6"
                    label="Maximum Booking Duration"
                    type="number"
                    required
                    placeholder="0">
                    <div slot="append">max</div>
                  </base-input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row pd-l-20">
                  <base-input
                    v-model="available_booking_time"
                    class="col-md-12"
                    label="Available Booking Time"
                    required
                    placeholder="0" />
                  <b-form-text class="col-md-12">You can enter multiple time frames separated by comma, e.g. e.g. mo-fr 9-17, sa 10-3.</b-form-text>

                  <div class="col-md-12 form-group">
                    <label>Amenities</label>
                    <TagsInput
                      v-model="amenities"
                      type="Text"
                      required />
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class=""> -->
            <!-- <UploadButton
              v-model="banner_url"
              service="resources"
              label="Upload File (<500KB & size 1125x582)" /> -->
            <!-- </div> -->
          </card>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import UploadButton from '~/components/shack/UploadButton.vue'
import TagsInput from '@/components/argon-core/Inputs/TagsInput'
import { Select, Option } from 'element-ui'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    UploadButton,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option,
    TagsInput
  },
  async asyncData(vm) {
    const { id } = vm.route.params
    await vm.store.dispatch('tablebookings/getOneTable', id)
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapFields({
      name: 'tablebookings.addTable.name',
      capacity: 'tablebookings.addTable.capacity',
      description: 'tablebookings.addTable.description',
      min_booking_duration: 'tablebookings.addTable.min_booking_duration',
      max_booking_duration: 'tablebookings.addTable.max_booking_duration',
      available_booking_time: 'tablebookings.addTable.reservation_available',
      amenities: 'tablebookings.addTable.amenities',
      bookable_seat_limit: 'tablebookings.addTable.bookable_seat_limit'
    })
  },
  methods: {
    updateTable() {
      this.$store.dispatch('tablebookings/updateTable')
    }
  }
}
</script>
<style>
</style>
