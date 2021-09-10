<template>
  <div>
    <b-form @submit.prevent="updateRoom">
      <base-header 
        class="pb-6" 
        type="">
        <div class="d-flex justify-content-between py-4">
          <MainTitle title="Update Resource" />
          <b-button 
            type="submit" 
            variant="primary"> Save Resource </b-button>
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
                    id="name"
                    v-model="name"
                    class="col-md-6"
                    label="Name"
                    required
                    placeholder="Name of Resource"
                  />
                  <div class="form-group col-md-6">
                    <label>Category</label>
                    <el-select 
                      id="category" 
                      v-model="category" 
                      required>
                      <el-option
                        v-for="item in categories"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      />
                    </el-select>
                  </div>
                  <base-input
                    id="pricePerHour"
                    v-model="price_per_hour"
                    class="col-md-6"
                    label="Price per hour"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                  />
                  <div class="col-md-6">
                    <base-input
                      id="capacity"
                      v-model="capacity"
                      label="Max Capacity"
                      type="number"
                      placeholder="0"
                    />
                    <b-form-text>Maximum number of people per room</b-form-text>
                  </div>
                  <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea
                      id="description"
                      v-model="description"
                      placeholder="Add details about this resource"
                      rows="4"
                      max-rows="6"
                      class="form-control"
                    />
                  </div>

                  <base-input
                    id="minBookingDuration"
                    v-model="min_booking_duration"
                    class="col-md-6"
                    label="Minimum Booking Duration"
                    type="number"
                    min="0"
                    step="30"
                    placeholder="60"
                  >
                    <div slot="append">min</div>
                  </base-input>

                  <base-input
                    id="maxBookingDuration"
                    v-model="max_booking_duration"
                    class="col-md-6"
                    label="Maximum Booking Duration"
                    type="number"
                    step="30"
                    placeholder="120"
                  >
                    <div slot="append">max</div>
                  </base-input>
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <base-input
                    id="availableBookingTime"
                    v-model="available_booking_time"
                    class="col-md-12"
                    label="Available Booking Time"
                    placeholder="0"
                  />
                  <b-form-text 
                    class="col-md-12"
                  >You can enter multiple time frames separated by comma, e.g.
                  e.g. mo-fr 9-17, sa 10-3.</b-form-text
                  >

                  <div class="col-md-12 form-group">
                    <label>Amenities</label>
                    <TagsInput
                      id="amenities"
                      v-model="amenities"
                      type="Text"
                      required
                    />
                  </div>

                  <b-form-group 
                    class="col-md-12" 
                    label="Zoom Rooms">
                    <b-form-select
                      id="zoomRoomId"
                      v-model="zoom_room_id"
                      :options="zoom_rooms"
                      value-field="id"
                      text-field="name"
                    >
                      <option :value="null">Choose a zoom room</option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group 
                    class="col-md-12" 
                    label="Brivo Access Point">
                    <b-form-select
                      id="accessPointId"
                      v-model="access_point_id"
                      :options="access_points"
                      value-field="id"
                      text-field="name"
                    >
                      <option :value="null">
                        Choose a zoom room
                    </option></b-form-select
                    >
                  </b-form-group>

                  <div 
                    class="form-group col-md-12" 
                    style="margin-bottom: 16px">
                    <label>Resource Settings</label>
                    <b-form-checkbox
                      id="canBook"
                      v-model="can_book"
                      :value="true"
                      :unchecked-value="false"
                    >Room is bookable</b-form-checkbox
                    >
                  </div>
                  <div class="form-group col-md-12">
                    <b-form-group
                      :label="'Select Member(s) With Access To ' + name"
                    >
                      <el-select
                        v-model="membership_ids"
                        :remote-method="searchMembers"
                        :loading="searching"
                        required
                        filterable
                        multiple="true"
                        remote
                        reserve-keyword
                        placeholder="Choose a member"
                      >
                        <el-option
                          v-for="option in data"
                          :key="option.id"
                          :label="option.first_name + ' ' + option.last_name"
                          :value="option.id"
                        />
                      </el-select>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class=""> -->
            <UploadButton
              v-model="photo"
              :url="photo"
              service="resources"
              label="Upload File (<500KB & size 1125x582)"
            />
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
import TagsInput from '@/components/argon-core/Inputs/TagsInput'
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
    [Option.name]: Option,
    TagsInput
  },
  async asyncData(vm) {
    await vm.store.dispatch('resources/getAllCategories')

    const { id } = vm.route.params

    await vm.store.dispatch('resources/getOneRoom', id)
    const access_points = await vm.$accesspoint.list()

    return await vm.$zoomrooms.getRooms().then(res => {
      return {
        zoom_rooms: res,
        access_points
      }
    })
  },
  data: () => ({ searching: false }),
  computed: {
    ...mapState({
      categories: state => state.resources.categories.data
    }),
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
      can_book: 'resources.addRoom.can_book',
      available_booking_time: 'resources.addRoom.available_room',
      photo: 'resources.addRoom.photo',
      category: 'resources.addRoom.room_category_id',
      amenities: 'resources.addRoom.amenities',
      zoom_room_id: 'resources.addRoom.zoom_room_id',
      access_point_id: 'resources.addRoom.access_point_id',
      membership_ids: 'resources.addRoom.membership_ids'
    })
  },
  methods: {
    addNewRoom() {
      this.$store.dispatch('resources/createRoom')
    },
    updateRoom() {
      this.$store.dispatch('resources/updateRoom')
    },
    searchMembers(query) {
      const link = `filter[search]=${query}&filter[status]=accepted`

      this.searching = !this.searching

      const _self = this

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({ data }) => {
          _self.searching = !_self.searching
          _self.data = data
        })
      }, 350)()
    }
  }
}
</script>
<style>
</style>
