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
            :disabled="loading"
            type="submit"
            variant="primary">
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
                  <div class="form-group col-md-6">
                    <label>Category</label>
                    <el-select
                      v-model="category"
                      name="category"
                      required>
                      <el-option
                        v-for="item in categories"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"/>
                    </el-select>
                  </div>
                  <base-input
                    v-model="price_per_hour"
                    class="col-md-6"
                    label="Price per hour"
                    type="number"
                    step="0.01"
                    placeholder="0.00"/>
                  <div class="col-md-6">
                    <base-input
                      v-model="capacity"
                      label="Number of Units"
                      type="number"
                      placeholder="0" />
                    <b-form-text>How many people can book this at the same time</b-form-text>
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
                </base-input>></div>
              </div>
              <div class="col-md-6">
                <div class="row pd-l-20">
                  <base-input
                    v-model="available_booking_time"
                    class="col-md-12"
                    label="Available Booking Time"
                    placeholder="0" />
                  <b-form-text class="col-md-12">You can enter multiple time frames separated by comma, e.g. e.g. mo-fr 9-17, sa 10-3.</b-form-text>

                  <div class="form-group col-md-12">
                    <label>Resource Settings</label>
                    <b-form-checkbox-group>
                      <b-form-checkbox v-model="can_book">Only admins can book</b-form-checkbox>
                    </b-form-checkbox-group>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class=""> -->
            <UploadButton
              v-model="banner_url"
              service="resources"
              label="Upload File (<500KB & size 1125x582)" />
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
    [Option.name]: Option
  },
  async asyncData(vm) {
    await vm.store.dispatch('resources/getAllCategories')
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      categories: state => state.resources.categories.data
    }),
    ...mapFields({
      name: 'resources.addRoom.name',
      price_per_hour: 'resources.addRoom.price_per_hour',
      category: 'resources.addRoom.room_category_id',
      currency: 'resources.addRoom.currency',
      capacity: 'resources.addRoom.capacity',
      description: 'resources.addRoom.description',
      min_booking_duration: 'resources.addRoom.min_booking_duration',
      max_booking_duration: 'resources.addRoom.max_booking_duration',
      can_book: 'resources.addRoom.can_book',
      available_booking_time: 'resources.addRoom.available_room',
      banner_url: 'resources.addRoom.photo',
      amenities: 'resources.addRoom.amenities'
    })
  },
  methods: {
    addNewRoom() {
      this.$store.dispatch('resources/createRoom')
    }
  }
}
</script>
<style>
</style>
