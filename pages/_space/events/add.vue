<template>
  <div>
    <base-header
      class="pb-6"
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Add New Event" />
        <b-button
          class="btn btn-primary text-white"
          @click="addEvent">Publish</b-button>
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
                  id="title"
                  v-model="title"
                  class="col-md-6"
                  label="Event Title"
                />
                <base-input
                  id="capacity"
                  v-model="capacity"
                  class="col-md-6"
                  label="Capacity"
                  type="number"
                />
                <div class="form-group col-md-12">
                  <label>Event Description</label>
                  <html-editor
                    id="description"
                    v-model="description"
                    placeholder="Add details about the event" />
                </div>
                <b-form-group
                  label="Start Date"
                  class="col-md-6">
                  <client-only>
                    <date-picker
                      id="startTime"
                      v-model="startTime"
                      :time-picker-options="{
                        start: '00:30',
                        step: '00:15',
                        end: '23:30',
                        format: 'hh:mm a'
                      }"
                      width="100%"
                      input-class="form-control"
                      lang="en"
                      format="YYYY-MM-DD HH:mm:ss"
                      value-type="format"
                      type="datetime"
                      placeholder="Select Date"
                      @change="startChange"
                    />
                  </client-only>
                </b-form-group>
                <b-form-group
                  label="End Date"
                  class="col-md-6">
                  <client-only>
                    <date-picker
                      id="endTime"
                      v-model="endTime"
                      :time-picker-options="{
                        start: '00:30',
                        step: '00:15',
                        end: '23:30',
                        format: 'hh:mm a'
                      }"
                      width="100%"
                      input-class="form-control"
                      lang="en"
                      format="YYYY-MM-DD HH:mm:ss"
                      value-type="format"
                      type="datetime"
                    />
                  </client-only>
                </b-form-group>
                <base-input
                  id="price"
                  v-model="price"
                  class="col-md-6"
                  label="Price"
                  type="number"
                  step="0.01"
                />
                <base-input
                  id="maxTicketPerPerson"
                  v-model="max_ticket_per_person"
                  class="col-md-6"
                  label="Max Ticket Per Person"
                  type="number"
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

                  <b-form-checkbox
                    id="external-1"
                    v-model="external"
                    :value="true"
                    :unchecked-value="null"
                    name="external-1"
                  >
                    Host at an external location
                  </b-form-checkbox>
                  <b-form-input
                    v-if="external"
                    v-model="external_location"
                    placeholder="External Location"
                    required />
                </div>
                <room
                  v-if="!external"
                  v-model="selectedRoom" />

                <div class="form-group col-md-12">
                  <b-form-checkbox
                    id="sendMailCheckbox"
                    v-model="sendMail"
                    value="true">Send email to attendees</b-form-checkbox>
                </div>

                <div
                  v-if="sendMail"
                  class="form-group col-md-12">
                  <base-input
                    id="emailSubject"
                    v-model="emailSubject"
                    label="Email Subject"
                    placeholder="Add subject of Email"
                  />
                  <b-form-group label="Email Content">
                    <html-editor
                      id="emailMessage"
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
            label="Upload Event Image (<500KB & size 1125x582)"
          />
          <UploadButton
            v-model="banner_image"
            service="event"
            label="Upload Event Banner (<500KB)"
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
import Room from '@/components/events/Room'
import { convertMarkdownToHtml } from '@/util/convertMarkdownToHtml.js'

export default {
  layout: 'ShackDash',
  name: 'EventAdd',
  components: {
    BaseHeader,
    MainTitle,
    UploadButton,
    SectionTitle,
    HtmlEditor,
    [Select.name]: Select,
    [Option.name]: Option,
    Room
  },
  async asyncData({ store, $event }) {
    await $event
      .getEventCategories()
      .then(({ data }) => {
        store.commit('events/setCategories', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Server Error. Try Again !!!' })
      })
  },
  data() {
    return {
      category: '',
      title: '',
      description: '',
      capacity: null, //10,
      price: null, //10,
      startTime: '',
      endTime: '',
      eventLogo: '',
      hostLogo: '',
      sendMail: false,
      emailSubject: 'Booking Confirmed',
      emailMessage: '',
      selectedRoom: null,
      max_ticket_per_person: null, //3,
      external: false,
      external_location: null,
      banner_image: ''
    }
  },
  computed: {
    ...mapState({
      categories: state => state.events.categories,
      space: state => state.space.currentSpace.subdomain
    })
  },
  /*mounted() {
    this.startTime = this.$moment().format('YYYY-MM-DD HH:00:00')
    this.endTime = this.$moment(this.startTime)
      .add(1, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')
    this.category = this.categories[0].id
  },*/
  methods: {
    startChange(e) {
      this.endTime = this.$moment(e)
        .add(1, 'hour')
        .format('YYYY-MM-DD HH:mm:ss')
    },
    convertTextToHtml(text) {
      return convertMarkdownToHtml(text)
    },
    async addEvent() {
      // Change to preferred display format -- 'YYYY-MM-DD HH:mm:ss'
      const start_time = this.$moment(this.startTime).format(
        'YYYY-MM-DD HH:mm:ss'
      )
      const end_time = this.$moment(this.endTime).format('YYYY-MM-DD HH:mm:ss')

      const emailMessage = this.convertTextToHtml(this.emailMessage)

      if (this.external) {
        this.selectedRoom = null
      } else {
        this.external_location = null
      }

      const eventDescription = this.description.replace(/(?:<br>)/g, '\n')
      const eventDetails = {
        name: this.title,
        description: eventDescription,
        price: this.price,
        start_time,
        end_time,
        event_logo: this.eventLogo,
        host_logo: this.hostLogo,
        type: 'event',
        room_id: this.selectedRoom,
        event_category_id: this.category,
        max_ticket_per_person: this.max_ticket_per_person,
        total_tickets: this.capacity,
        send_mail: this.sendMail === 'true' ? true : false,
        email_subject: this.emailSubject,
        email_message: emailMessage,
        external_location: this.external_location,
        banner_image: this.banner_image
      }
      // console.log('event details', eventDetails)
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
