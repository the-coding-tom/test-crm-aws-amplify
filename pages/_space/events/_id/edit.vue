<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Dashboard" 
          subtitle="This Week" />
        <b-button 
          class="btn btn-primary text-white" 
          @click="updateEvent">Update Event</b-button>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <h3 class="mr-b-20">Event Details</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="row pd-r-20">
                <base-input
                  v-model="title"
                  class="col-md-6"
                  label="Event Title"
                  placeholder="Awesome Co"
                />
                <base-input
                  v-model="capacity"
                  class="col-md-6"
                  label="Capacity"
                  type="number"
                  placeholder="0"
                />
                <div class="form-group col-md-12">
                  <label>Event Description</label>
                  <textarea
                    v-model="description"
                    placeholder="Add details about the event"
                    rows="4"
                    max-rows="6"
                    description="description"
                    class="form-control"
                  />
                </div>
                <b-form-group 
                  label="Start Date" 
                  class="col-md-6">
                  <client-only>
                    <date-picker
                      id="time"
                      v-model="startTime"
                      width="100%"
                      input-class="form-control"
                      lang="en"
                      format="YYYY-MM-DD HH:mm:ss"
                      value-type="format"
                      confirm
                      type="datetime"
                      placeholder="Start Date"
                    />
                  </client-only>
                </b-form-group>
                <b-form-group 
                  label="End Date" 
                  class="col-md-6">
                  <client-only>
                    <date-picker
                      id="time"
                      v-model="endTime"
                      width="100%"
                      input-class="form-control"
                      lang="en"
                      format="YYYY-MM-DD HH:mm:ss"
                      value-type="format"
                      confirm
                      type="datetime"
                      placeholder="End Date"
                    />
                  </client-only>
                </b-form-group>
                <base-input
                  v-model="price"
                  class="col-md-6"
                  label="Price"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="row pd-l-20">
                <div class="form-group col-md-12">
                  <label>Event Category:</label>
                  <el-select 
                    v-model="category" 
                    placeholder="Select Category">
                    <el-option
                      v-for="category in categories"
                      :key="category.id"
                      :label="category.name"
                      :value="category.id"
                    />
                  </el-select>
                </div>
                <div class="form-group col-md-12">
                  <b-form-group label="Rooms Available">
                    <b-form-radio
                      v-for="room in rooms"
                      v-model="selectedRoom"
                      :value="room.id"
                      :key="room.id"
                      name="room"
                    >{{ room.name }}</b-form-radio>
                  </b-form-group>
                </div>

                <div class="form-group col-md-12">
                  <b-form-checkbox 
                    v-model="sendMail" 
                    value="yes">Send email to attendees</b-form-checkbox>
                </div>

                <div 
                  v-if="sendMail === 'yes'" 
                  class="form-group col-md-12">
                  <base-input
                    v-model="emailSubject"
                    class="col-md-6"
                    label="Email Subject"
                    placeholder="Add subject of Email"
                  />

                  <div class="form-group col-md-12">
                    <label>Message</label>
                    <textarea
                      v-model="emailMessage"
                      placeholder="Message body for attendees’ email"
                      rows="4"
                      max-rows="6"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <UploadButton 
            name="Hello" 
            label="Upload Event Logo" 
            service="event" />
          <UploadButton 
            name="Hello" 
            label="Upload Host Logo" 
            service="event" />
        </card>
      </div>
    </div>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'
import UploadButton from '@/components/shack/UploadButton.vue'

import { Select, Option } from 'element-ui'
import moment from 'moment'
import { mapState } from 'vuex'

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
  async asyncData({ store, $event, params, error }) {
    const { id } = params

    await $event
      .getEventCategories()
      .then(({ data }) => {
        store.commit('events/setCategories', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Server Error. Try Again !!!' })
      })

    await $event
      .getEvent(id)
      .then(({ data }) => {
        store.commit('events/setEvent', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Server Error. Try Again !!!' })
      })

    await $event
      .getRooms()
      .then(({ data }) => {
        store.commit('events/setRooms', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Server Error. Try Again !!!' })
      })

    return {
      id
    }
  },
  data() {
    return {
      sendMail: 'yes',
      emailSubject: '',
      emailMessage: '',
      selectedRoom: '',
      title: '',
      description: '',
      price: 0,
      startTime: '',
      endTime: '',
      capacity: '',
      category: ''
    }
  },
  computed: {
    ...mapState({
      categories: state => state.events.categories,
      rooms: state => state.events.rooms,
      space: state => state.space.currentSpace.subdomain,
      event: state => state.events.currentEvent
    })
  },
  mounted() {
    if (this.event) {
      this.title = this.event.name
      this.description = this.event.description
      this.price = this.event.price
      this.startTime = this.event.start_time
      this.endTime = this.event.end_time
      this.capacity = this.event.total_tickets
      this.category = this.event.event_category.id
      this.selectedRoom = this.event.room.id
      this.eventLogo = this.event.banner_url
      this.hostLogo = this.event.host_logo
    }
  },
  methods: {
    async updateEvent() {
      const start_time = this.$moment(this.startTime).format(
        'YYYY-MM-DD HH:mm:ss'
      )
      const end_time = this.$moment(this.endTime).format('YYYY-MM-DD HH:mm:ss')

      const vm = this
      const eventDetails = {
        id: vm.id,
        name: vm.title,
        description: vm.description,
        price: vm.price,
        start_time: start_time,
        end_time: end_time,
        event_logo: vm.eventLogo,
        host_logo: vm.hostLogo,
        type: 'event',
        room_id: vm.selectedRoom,
        event_category_id: vm.category,
        max_ticket_per_person: 3,
        total_tickets: vm.capacity
      }

      await this.$event
        .updateEvent(vm.id, eventDetails)
        .then(({ data }) => {
          this.$bvToast.toast(`Event updated successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.$router.push({
            path: `/${this.space}/events/${data.data.id}/view`
          })
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>
