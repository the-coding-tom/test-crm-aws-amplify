<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Events" 
          subtitle="Published" />
        <nuxt-link 
          :to="{ name: 'space-events-add' }" 
          class="btn btn-primary"
        >Add Event</nuxt-link
        >
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <client-only>
            <full-calendar
              :events="events"
              :right="calendarPlugin"
              @eventClick="showEvent"
              @dateChange="dateChange"
              @viewSwitched="viewSwitched"
            />
          </client-only>
        </card>
      </div>
      <b-modal 
        id="eventModal" 
        size="lg">
        <template v-slot:modal-title>
          <b-row>
            <b-col md="12">
              <h1>{{ currentEvent.title }}</h1>
            </b-col>
          </b-row>
        </template>
        <b-row>
          <b-col md="12">
            <p class="d-flex align-items-center text-muted">
              {{ $moment(currentEvent.start).format('MMMM DD YYYY') }},
              {{ formatTime(currentEvent.start) }} -
              {{ formatTime(currentEvent.end) }}
              <i 
                class="fa fa-circle mx-2" 
                style="font-size: 5px" />
              {{ getRoomDetail(currentEvent) }}
            </p>
          </b-col>
        </b-row>
        <!-- <b-row> -->
        <!-- <b-col md="12"> -->
        <span
          v-html="
            currentEvent.extendedProps
              ? convertMarkdown(currentEvent.extendedProps.description)
              : null
          "
        />
        <!-- </b-col> -->
        <!-- </b-row> -->
        <b-row class="mt-2">
          <b-col md="12">
            <p>
              Price:
              {{
                currentEvent.extendedProps &&
                  currentEvent.extendedProps.price
                  | currency(space.currency_symbol)
              }}
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <badge type="info">{{
              currentEvent.extendedProps &&
                currentEvent.extendedProps.event_category.name
            }}</badge>
          </b-col>
        </b-row>
        <template v-slot:modal-footer>
          <div class="w-100">
            <template v-if="currentEvent.extendedProps.is_drafted">
              <b-button 
                class="float-left" 
                variant="primary"
              >Publish Event</b-button
              >
              <b-button
                :to="{
                  name: 'space-events-id-edit',
                  params: { id: currentEvent.id },
                }"
                class="text-primary float-left"
                variant="transparent"
              ><i class="fa fa-pen" /> Edit Event</b-button
              >
            </template>
            <b-button
              v-else
              :to="{
                name: 'space-events-id-edit',
                params: { id: currentEvent.id },
              }"
              class="float-left"
              variant="primary"
            >Edit Event</b-button
            >
            <b-button
              :to="{ name: 'space-events-id', params: { id: currentEvent.id } }"
              variant="transparent"
              class="text-primary float-left"
            ><i class="fa fa-eye" /> Preview</b-button
            >
            <b-button
              :to="{
                name: 'space-events-id-attendees',
                params: { id: currentEvent.id },
              }"
              variant="transparent"
              class="text-primary float-left"
            ><i class="fa fa-copy" /> View Attendees</b-button
            >
            <b-button
              variant="transparent"
              class="text-danger float-right"
              @click="showConfirmationAlert"
            >
              <i class="fa fa-times" /> Cancel Event
            </b-button>
          </div>
        </template>
      </b-modal>
      <b-modal 
        id="deleteConfirmationModal" 
        size="sm">
        <template v-slot:modal-title>
          <b-row>
            <b-col md="12">
              <h1>Confirm delete</h1>
            </b-col>
          </b-row>
        </template>
        <template v-if="currentEvent.extendedProps">
          <p
            v-if="
              currentEvent.extendedProps.attendees_count > 0 &&
                currentEvent.extendedProps.attendees_count > 0
            "
          >
            This event has
            {{ currentEvent.extendedProps.attendees_count }} attendees. If you
            choose to proceed with this event cancellation, a refund will be
            made to all attendees.
          </p>
          <p v-else>Are you sure you want to delete this event?</p>
        </template>
        <template v-slot:modal-footer>
          <div class="w-100">
            <b-button
              class="float-left"
              variant="primary"
              @click="$bvModal.hide('deleteConfirmationModal')"
            >No, don't delete</b-button
            >
            <b-button
              class="text-danger float-left"
              variant="transparent"
              @click="deleteEvent"
            >Yes, Delete</b-button
            >
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'
import { convertMarkdownToHtml } from '@/util/convertMarkdownToHtml.js'

import { mapState } from 'vuex'
import mz from 'moment-timezone'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  async asyncData({ store, params, $event, error }) {
    // await $event
    //   .getEvents()
    //   .then(({ data }) => {
    //     store.commit('events/setEvents', data)
    //   })
    //   .catch(err => {
    //     const message = err.response
    //       ? JSON.stringify(err.response.data.errros)
    //       : err.message
    //     error({ statusCode: 404, message: message })
    //   })
  },
  data() {
    return {
      calendarPlugin: 'dayGridMonth,timeGridWeek,listWeek',
      currentEvent: {},
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      currentViewType: 'listYear'
    }
  },
  computed: {
    ...mapState({
      events: state =>
        state.events.calendarEvents.filter(
          event => !event.extendedProps.is_drafted
        ),
      space: state => state.space.currentSpace
    })
  },
  methods: {
    convertMarkdown(text) {
      return convertMarkdownToHtml(text)
    },
    getRoomDetail(event) {
      if (event.extendedProps) {
        if (event.extendedProps.room) {
          return event.extendedProps.room.name
        } else {
          return event.extendedProps.external_location
        }
      }
    },
    formatTime(time) {
      return mz(time)
        .tz('Africa/Accra')
        .format('HH:mm')
    },
    showEvent(event) {
      this.currentEvent = event
      console.log(event)
      this.$bvModal.show('eventModal')
    },
    dateChange({ startDate, endDate }) {
      startDate =
        this.currentViewType != 'listYear'
          ? this.$moment(startDate).format('YYYY-MM-DD')
          : this.$moment(new Date()).year() > this.$moment(startDate).year()
            ? this.$moment(startDate).format('YYYY-MM-DD')
            : this.$moment(new Date()).format('YYYY-MM-DD')
      endDate = this.$moment(endDate).format('YYYY-MM-DD')

      this.$event
        .getEventsByDate(startDate, endDate)
        .then(({ data: { data } }) => {
          this.$store.commit('events/setEvents', data)
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    showConfirmationAlert() {
      this.$bvModal.show('deleteConfirmationModal')
    },
    deleteEvent() {
      const eventId = this.currentEvent.id
      this.$event
        .deleteEvent(eventId)
        .then(res => {
          this.$store.commit('events/removeEvent', eventId)
          this.$bvModal.hide('deleteConfirmationModal')
          this.$bvModal.hide('eventModal')
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    viewSwitched(eventData) {
      this.currentViewType = eventData.viewType
    }
  }
}
</script>

<style>
.fc-event .fc-title {
  color: black !important;
}
</style>
