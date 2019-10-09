<template>
  <div>
    <b-form @submit.prevent="updateWellnessSlots">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between py-4">
          <MainTitle title="Slots" />
          <b-button
            :disabled="loading"
            type="submit"
            variant="primary">Update Slots</b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Add a Slot</h3>
            <client-only>
              <b-form @submit.prevent="addSlot">
                <div class="row">
                  <b-form-group
                    label="Day"
                    class="col-md-3">
                    <b-form-select
                      v-model="slot.day"
                      :options="selects"/>
                  </b-form-group>
                  <b-form-group
                    label="Start time"
                    class="col-md-2">
                    <client-only>
                      <date-picker
                        id="time"
                        v-model="slot.start"
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
                    class="col-md-2"
                    label="Duration">
                    <b-form-input
                      v-model="slot.duration"
                      type="number"
                      required />
                  </b-form-group>
                  <b-form-group
                    class="col-md-2"
                    label="Capacity">
                    <b-form-input
                      v-model="slot.capacity"
                      type="number"
                      required />
                  </b-form-group>
                  <b-form-group>
                    <template slot="label">&nbsp;</template>
                    <b-button
                      type="submit"
                      outline
                      variant="primary"
                      class="sh-dashbtn">Add This Slot</b-button>
                  </b-form-group>
                </div>
              </b-form>
            </client-only>

            <div class="mr-tb-80">
              <div class="m-n25">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Start Time</th>
                      <th>Duration (mins)</th>
                      <th>Capacity</th>
                      <th/>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(slot, i) in slots"
                      :key="i">
                      <td><a href="#">{{ translateDay(slot.day) }}</a></td>
                      <td>{{ slot.start }}</td>
                      <td>{{ slot.duration }}</td>
                      <td>{{ slot.capacity }}</td>
                      <td>
                        <b-button
                          variant="transparent"
                          class="text-primary"
                          @click="editSlot(slot)"
                        ><i class="fa fa-edit"/> Edit</b-button>
                        <b-button
                          variant="transparent"
                          class="text-danger"
                          @click="removeSlot(i)"><i class="fa fa-times"/> Delete</b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="sh-alert d-flex align-items-center">
                  <i class="ion-android-bulb fs20"/>
                  <span>If a slot on this wellness is already booked, you will be unable to modify the slots unless all bookings are refunded</span>
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

import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'

export default {
  layout: 'ShackDash',
  async asyncData({ $wellness, route, error }) {
    return await $wellness
      .getAWellnessSession(route.params.id)
      .then(({ data }) => {
        return {
          slots: _.sortBy(data.data.slots, ['day', 'start'])
        }
      })
      .catch(e => {
        error({
          statusCode: 404,
          message: e.response
            ? JSON.stringify(e.response.data.message)
            : e.message
        })
      })
  },
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  data: () => ({
    loading: false,
    slot: {
      day: 0,
      start: '08:00',
      duration: 30,
      capacity: 1
    },
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
    ]
  }),
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    },
    updateWellnessSlots() {
      this.toggleLoading()

      const { id } = this.$route.params
      const { slots } = this

      this.$wellness
        .updateWellnessSlots(id, { slots })
        .then(res => {
          this.$bvToast.toast('Wellness slots updated successfully', {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.$router.go(-1)
        })
        .catch(({ response }) => {
          this.toggleLoading()
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Errors',
            variant: 'danger',
            solid: true
          })
        })
    },
    addSlot() {
      const { slot } = this
      this.slots.push(slot)
    },
    removeSlot(i) {
      this.slots.splice(i, 1)
    },
    translateDay(day) {
      const { selects } = this

      return _.filter(selects, o => {
        return o.value == day
      })[0]['text']
    },
    editSlot(slot) {
      this.slot = slot
    }
  }
}
</script>
<style>
</style>
