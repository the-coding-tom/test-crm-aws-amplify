<template>
  <div>
    <b-form @submit.prevent="updateEvent">

      <base-header
        class="pb-6"
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Event"
            subtitle="Update" />
          <div>

            <b-button
              :disabled="loading"
              type="submit"
              class="btn btn-primary text-white"
            >Update Event</b-button>
            <b-button
              variant="transparent"
              class="text-danger"
              @click="$router.go(-1)"><i class="fa fa-angle-left"/> Cancel Update</b-button>
          </div>
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
                    v-model="event.name"
                    class="col-md-6"
                    label="Event Title"
                    placeholder="Awesome Co"
                  />
                  <base-input
                    v-model="event.total_tickets"
                    class="col-md-6"
                    label="Capacity"
                    type="number"
                    placeholder="0"
                  />
                  <div class="form-group col-md-12">
                    <label>Event Description</label>
                    <html-editor
                      v-model="event.description"
                      placeholder="Add details about the event" />
                  </div>
                  <b-form-group
                    label="Start Date"
                    class="col-md-6">
                    <client-only>
                      <date-picker
                        id="time"
                        v-model="event.start_time"
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
                        v-model="event.end_time"
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
                    v-model="event.price"
                    class="col-md-6"
                    label="Price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                  />
                  <base-input
                    v-model="event.max_ticket_per_person"
                    class="col-md-6"
                    label="Max Ticket Per Person"
                    type="number"
                    placeholder="3"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <div class="form-group col-md-12">
                    <label>Event Category:</label>
                    <el-select
                      v-model="event.event_category_id"
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
                      v-model="event.external_location"
                      placeholder="External Location"
                      required />
                  </div>

                  <Room
                    v-if="!external"
                    v-model="event.room_id" />

                  <div class="form-group col-md-12">
                    <b-form-checkbox
                      v-model="event.send_email"
                      :value="true">Send email to attendees</b-form-checkbox>
                  </div>

                  <div
                    v-if="event.send_email"
                    class="form-group col-md-12">
                    <base-input
                      v-model="event.email_subject"
                      label="Email Subject"
                      placeholder="Add subject of Email"
                    />
                    <b-form-group label="Email Content">
                      <html-editor
                        v-model="event.email_content"
                        placeholder="Message body for attendees email" />
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>

            <UploadButton
              :url="event.banner_url"
              v-model="event.event_logo"
              name="eventbanner"
              label="Upload Event Image (<500KB & size 1125x582)"
              service="event" />
            <UploadButton
              :url="event.banner_image"
              v-model="event.banner_image"
              name="eventbanner"
              label="Upload Event Banner (<500KB & size 1125x582)"
              service="event" />
            <UploadButton
              v-model="event.host_logo"
              :url="event.host_logo"
              name="hostlogo"
              label="Upload Host Logo (<500KB & size 500x500)"
              service="event" />
          </card>
        </div>
      </div>
    </b-form>

  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'
import HtmlEditor from '@/components/argon-core/Inputs/HtmlEditor'
import UploadButton from '@/components/shack/UploadButton.vue'
import Room from '@/components/events/Room'

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
    HtmlEditor,
    [Select.name]: Select,
    [Option.name]: Option,
    Room
  },
  async asyncData({ store, $event, params, error }) {
    const { id } = params

    await $event
      .getEventCategories()
      .then(({ data }) => {
        store.commit('events/setCategories', data)
      })
      .catch(err => {
        error({
          statusCode: err.statusCode,
          message: e.response
            ? JSON.stringify(e.response.data.message)
            : e.message
        })
      })

    return await $event
      .getEvent(id)
      .then(({ data }) => {
        data.event_category_id = data.event_category.id

        let external = false

        if (data.room) {
          data.room_id = data.room ? data.room.id : null
        } else {
          external = true
        }

        return {
          external,
          event: data
        }
      })
      .catch(err => {
        error({
          statusCode: err.statusCode,
          message: e.response
            ? JSON.stringify(e.response.data.message)
            : e.message
        })
      })
  },
  data: () => ({
    loading: false
  }),
  computed: {
    ...mapState({
      categories: state => state.events.categories,
      space: state => state.space.currentSpace.subdomain
    })
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    },
    startChange(e) {
      this.event.end_time = this.$moment(e)
        .add(1, 'hour')
        .format('YYYY-MM-DD HH:mm:ss')
    },
    convertTextToHtml(text) {
      const showdown = require('showdown')
      const converter = new showdown.Converter()

      return converter.makeHtml(text)
    },
    async updateEvent() {
      this.loading = !this.loading

      const emailMessage = this.convertTextToHtml(this.event.email_content)

      let eventUpdate = this.event
      eventUpdate.description = eventUpdate.description.replace(
        /(?:<br>)/g,
        '\n'
      )

      if (this.external) {
        eventUpdate.room_id = null
      } else {
        eventUpdate.external_location = null
      }

      await this.$event
        .updateEvent(this.event.id, {
          ...eventUpdate,
          email_content: emailMessage
        })
        .then(({ data }) => {
          this.$bvToast.toast(`Event updated successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.$router.push({
            name: 'space-events-id',
            params: { id: this.event.id }
          })
        })
        .catch(({ response }) => {
          this.loading = !this.loading
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
