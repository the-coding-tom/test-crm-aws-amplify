<template>
  <div>
    <base-header
      class="pb-6"
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Add New Event" />
        <b-button
          class="btn btn-primary text-white"
          @click="addEvent">Add Event</b-button>
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
                      @change="startChange"
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
                  <div>
                    <base-pagination
                      :total="meta.total"
                      :per-page="15"
                      size="sm"
                      @next="next"
                      @prev="prev"
                    />
                  </div>

                </div>

                <div class="form-group col-md-12">
                  <b-form-checkbox
                    v-model="sendMail"
                    value="true">Send email to attendees</b-form-checkbox>
                </div>

                <div
                  v-if="sendMail"
                  class="form-group col-md-12">
                  <base-input
                    v-model="emailSubject"
                    label="Email Subject"
                    placeholder="Add subject of Email"
                  />
                  <b-form-group label="Email Content">
                    <html-editor
                      v-model="emailMessage"
                      placeholder="Message body for attendees email" />
                  </b-form-group>
                </div>
              </div>
            </div>
          </div>
          <UploadButton
            v-model="eventLogo"
            service="event"
            label="Upload Event Banner (<500KB & size 1125x582)"
          />
          <UploadButton
            v-model="hostLogo"
            service="event"
            label="Upload Host Logo (<500KB & size 500x500)"
          />
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
import HtmlEditor from '@/components/argon-core/Inputs/HtmlEditor'
import { mapState } from 'vuex'
import { Select, Option } from 'element-ui'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    UploadButton,
    SectionTitle,
    HtmlEditor,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, $event }) {
    let meta, links

    await $event
      .getRooms()
      .then(({ data }) => {
        meta = data.meta
        links = data.links
        store.commit('events/setRooms', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Server Error. Try Again !!!' })
      })
    await $event
      .getEventCategories()
      .then(({ data }) => {
        store.commit('events/setCategories', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Server Error. Try Again !!!' })
      })

    return {
      meta,
      links
    }
  },
  data() {
    return {
      category: '',
      title: '',
      description: '',
      capacity: 10,
      price: 10,
      startTime: '',
      endTime: '',
      eventLogo: '',
      hostLogo: '',
      sendMail: false,
      emailSubject: '',
      emailMessage: '',
      selectedRoom: ''
    }
  },
  computed: {
    ...mapState({
      rooms: state => state.events.rooms,
      categories: state => state.events.categories,
      space: state => state.space.currentSpace.subdomain
    })
  },
  mounted() {
    this.startTime = this.$moment().format('YYYY-MM-DD HH:00:00')
    this.endTime = this.$moment(this.startTime)
      .add(1, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')
    this.category = this.categories[0].id
  },
  methods: {
    startChange(e) {
      this.endTime = this.$moment(e)
        .add(1, 'hour')
        .format('YYYY-MM-DD HH:mm:ss')
    },
    next() {
      const { next } = this.links
      this.getRooms(next)
    },
    prev() {
      const { prev } = this.links
      this.getRooms(prev)
    },
    getRooms(link) {
      this.$resource
        .getAllRooms(link)
        .then(res => {
          this.meta = data.meta
          this.links = data.links
          this.$store.commit('events/setRooms', data)
        })
        .catch(e => {
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          this.$bvToast.toast(message, {
            variant: 'error',
            title: 'Error'
          })
        })
    },
    async addEvent() {
      const start_time = this.$moment(this.startTime).format(
        'YYYY-MM-DD HH:mm:ss'
      )
      const end_time = this.$moment(this.endTime).format('YYYY-MM-DD HH:mm:ss')

      const eventDetails = {
        name: this.title,
        description: this.description,
        price: this.price,
        start_time,
        end_time,
        event_logo: this.eventLogo,
        host_logo: this.hostLogo,
        type: 'event',
        room_id: this.selectedRoom,
        event_category_id: this.category,
        max_ticket_per_person: 3,
        total_tickets: this.capacity,
        send_mail: this.sendMail === 'true' ? true : false,
        email_subject: this.emailSubject,
        email_message: this.emailMessage
      }

      await this.$event
        .addEvent(eventDetails)
        .then(({ data }) => {
          this.$bvToast.toast(`Event added successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.$router.push({ path: `/${this.space}/events/${data.id}` })
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
