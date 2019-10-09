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
            :disabled="loading"
            type="submit"
            style="color: white;"
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
                    v-model="name"
                    class="col-md-12"
                    label="Name"
                    required
                    placeholder="Awesome Wellness Sesstion"/>
                  <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea
                      v-model="description"
                      required
                      placeholder="Add details about the wellness"
                      rows="4"
                      max-rows="6"
                      class="form-control"/>
                  </div>
                  <b-form-group
                    label="Start Date"
                    class="col-md-6">
                    <client-only>
                      <date-picker
                        id="time"
                        v-model="start_date"
                        width="100%"
                        input-class="form-control"
                        lang="en"
                        format="YYYY-MM-DD HH:mm:ss"
                        value-type="format"
                        confirm
                        type="datetime"
                        placeholder="Start Date"
                        @change="setEndDate"/>
                    </client-only>
                  </b-form-group>
                  <b-form-group
                    label="End Date"
                    class="col-md-6">
                    <client-only>
                      <date-picker
                        id="time"
                        v-model="end_date"
                        width="100%"
                        input-class="form-control"
                        lang="en"
                        format="YYYY-MM-DD HH:mm:ss"
                        value-type="format"
                        confirm
                        type="datetime"
                        placeholder="End Date"/>
                    </client-only>
                  </b-form-group>
                  <base-input
                    v-model="price_per_session"
                    class="col-md-6"
                    label="Price Per Session"
                    type="number"
                    step="0.01"
                    placeholder="0.00"/>
                  <base-input
                    v-model="location"
                    class="col-md-6"
                    label="Location"
                    type="text"
                    placeholder="Open Lounge"/>
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <div class="form-group col-md-6">
                    <label>Wellness Category:</label>
                    <el-select
                      v-model="wellness_category_id"
                      placeholder="Select Category"
                      required>
                      <el-option
                        v-for="category in categories"
                        :key="category.id"
                        :label="category.name"
                        :value="category.id"/>
                    </el-select>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Duration:</label>
                    <b-form-input
                      v-model="duration"
                      type="number"
                      placeholder="30"/>
                    <b-form-text>Duration should be a number that denotes minutes. E.g. 30 is 30 mins</b-form-text>
                  </div>
                </div>
                <div class="row pd-l-20"/>

                <div
                  class="row pd-l-20">
                  <h5 class="col-md-12"><span style="text-decoration: underline;">Slots</span> <b-button
                    variant="link"
                    @click="addSlot()">Add Slot</b-button> </h5>
                  <div
                    v-for="(sl, i) in slots"
                    :key="i"
                    class="row pd-l-20">
                    <b-form-group
                      label="Day"
                      label-for="date"
                      class="col-md-4">
                      <b-form-select
                        v-model="sl.day"
                        :options="selects"/>
                    </b-form-group>
                    <b-form-group
                      label="Time"
                      label-for="time"
                      class="col-md-3">
                      <!-- <b-form-input id="time" type="time" class="form-control" v-model="sl.time" /> -->
                      <client-only>
                        <date-picker
                          id="time"
                          v-model="sl.start"
                          width="100%"
                          input-class="form-control"
                          lang="en"
                          value-type="format"
                          confirm
                          type="time"
                          format="HH:mm"
                          placeholder="00:00"
                        />
                      </client-only>
                    </b-form-group>
                    <b-form-group
                      label="Capacity"
                      label-for="capacity"
                      class="col-md-3">
                      <b-form-input
                        id="capacity"
                        v-model="sl.capacity"
                        type="number"
                        class="form-control"
                        placeholder="1" />
                    </b-form-group>
                    <b-form-group
                      v-if="i !== 0"
                      label="Remove"
                      label-for="remove"
                      class="col-md-2">
                      <b-button
                        id="remove"
                        class="text-danger"
                        variant="transparent"
                        @click="removeSlot(i)"><i class="fa fa-times"/></b-button>
                    </b-form-group>
                  </div>
                  <p class="text-mute pd-l-20">Note: Slots are key to how the retrieve wellness slots.</p>
                </div>
              </div>
            </div>

            <UploadButton
              v-model="banner_url"
              service="wellness"
              label="Upload File (<500KB & size 1125x582)" />
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
  async asyncData({ $wellness }) {
    let categories

    await $wellness.getWellnessCategories().then(({ data }) => {
      categories = data.data
    })

    return {
      categories,
      wellness_category_id: categories[0].id
    }
  },
  data() {
    return {
      loading: false,
      name: '',
      description: '',
      price_per_session: 0,
      start_date: '',
      end_date: '',
      location: '',
      duration: 30,
      weekly: true,
      wellness_category_id: null,
      slots: [{ day: 0, start: '08:00', capacity: 1 }],
      banner_url: null,
      selects: [
        {
          text: 'Sunday',
          value: 0
        },
        { text: 'Monday', value: 1 },
        { text: 'Tuesday', value: 2 },
        { text: 'Wednesday', value: 3 },
        { text: 'Thursday', value: 4 },
        { text: 'Friday', value: 5 },
        { text: 'Saturday', value: 6 }
      ],
      categories: []
    }
  },
  mounted() {
    this.start_date = this.$moment()
      .add(1, 'hour')
      .format('YYYY-MM-DD HH:00:00')
    this.end_date = this.$moment(this.start_date)
      .add(this.duration, 'minutes')
      .format('YYYY-MM-DD HH:mm:ss')

    this.slots[0].day = this.$moment().day()
    this.slots[0].start = this.$moment(this.start_date).format('HH:mm')
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    },
    addSlot() {
      const { start_date } = this
      this.slots.push({
        day: this.$moment(start_date).day(),
        start: this.$moment(start_date).format('HH:mm'),
        capacity: 1
      })
    },
    removeSlot(i) {
      this.slots.splice(i, 1)
    },
    setEndDate() {
      const { duration, start_date } = this
      this.slots[0].day = this.$moment(start_date).day()
      this.slots[0].start = this.$moment(start_date).format('HH:mm')
      this.end_date = this.$moment(start_date)
        .add(duration, 'minutes')
        .format('YYYY-MM-DD HH:mm:ss')
    },
    addWellness() {
      const {
        name,
        description,
        banner_url,
        price_per_session,
        duration,
        slots,
        location,
        start_date,
        end_date,
        weekly,
        wellness_category_id
      } = this

      let slotList = _.sortBy(
        _.map(slots, o => {
          return {
            ...o,
            duration
          }
        }),
        ['day', 'start']
      )

      const payload = {
        name,
        description,
        banner_url,
        location,
        start_date,
        end_date,
        weekly,
        wellness_category_id,
        price_per_session,
        slots: slotList
      }

      if (!banner_url) {
        this.$bvToast.toast(
          'No image provided or please wait for image to complete upload'
        )
      }

      this.toggleLoading()

      this.$wellness
        .addWellnessSession(payload)
        .then(({ data }) => {
          this.$bvToast.toast('Wellness added successfully', {
            variant: 'sucess',
            solid: true
          })

          this.$router.go(-1)
        })
        .catch(({ response }) => {
          this.toggleLoading()
          this.$bvToast.toast(JSON.stringify(response.data.errors))
        })
    }
  }
}
</script>
