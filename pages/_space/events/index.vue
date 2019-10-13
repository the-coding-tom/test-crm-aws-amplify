<template>
  <div>
    <base-header
      class="pb-6"
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Events"
          subtitle="All" />
        <nuxt-link
          :to="{ name: 'space-events-add'}"
          class="btn btn-primary"
        >Add Event</nuxt-link>
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
              @dateChange="dateChange" />
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
          <b-col
            md="12">

            <p class="d-flex align-items-center text-muted">{{ $moment(currentEvent.start).format('MMMM DD YYYY') }}, {{ $moment(currentEvent.start).format('HH:mm') }} - {{ $moment(currentEvent.end).format('HH:mm') }} <i
              class="fa fa-circle mx-2"
              style="font-size: 5px;"/> {{ currentEvent.extendedProps && (currentEvent.extendedProps.room) ? currentEvent.extendedProps.room.name : null }} </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <p>{{ currentEvent.extendedProps ? currentEvent.extendedProps.description: null }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <p>Price: {{ space.currency_symbol }} {{ currentEvent.extendedProps ? currentEvent.extendedProps.price : null }}</p>
          </b-col>
        </b-row>
        <template v-slot:modal-footer>
          <div class="w-100">
            <b-button
              :to="{name: 'space-events-id-edit', params: {id: currentEvent.id}}"
              class="float-left"
              variant="primary"
            >Edit Event</b-button>
            <b-button
              :to="{name: 'space-events-id-attendees', params: {id: currentEvent.id}}"
              variant="transparent"
              class="text-primary float-left"
            ><i class="fa fa-copy"/> View Attendees</b-button>
            <b-button
              variant="transparent"
              class="text-danger float-right"
              @click="deleteEvent"
            >
              <i class="fa fa-times"/> Cancel Event
            </b-button>
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

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  async asyncData({ store, params, $event, error }) {
    await $event
      .getEvents()
      .then(({ data }) => {
        store.commit('events/setEvents', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Error getting events' })
      })
  },
  data() {
    return {
      calendarPlugin: 'dayGridMonth,timeGridWeek,listWeek',
      currentEvent: {},
      modals: {
        classic: false,
        notice: false,
        form: false
      }
    }
  },
  computed: {
    ...mapState({
      events: state => state.events.calendarEvents,
      space: state => state.space.currentSpace
    })
  },
  methods: {
    showEvent(event) {
      this.currentEvent = event
      this.$bvModal.show('eventModal')
    },
    dateChange({ startDate, endDate }) {
      startDate = this.$moment(startDate).format('YYYY-MM-DD')
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
    deleteEvent() {
      if (!confirm('Are you sure?')) return

      const eventId = this.currentEvent.id
      this.$event
        .deleteEvent(eventId)
        .then(res => {
          this.$store.commit('events/removeEvent', eventId)
          this.$modal.hide('event')
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

<style>
.fc-event .fc-title {
  color: black !important;
}
</style>
