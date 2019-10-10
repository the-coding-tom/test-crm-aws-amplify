<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Events" 
          subtitle="All" />
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <client-only>
            <full-calendar 
              :events="events" 
              @eventClick="showEvent" 
              @dateChange="dateChange" />
          </client-only>
        </card>
      </div>
      <modal 
        name="event" 
        class="p-5" 
        width="700" 
        height="auto">
        <b-card>
          <h6 class="modal-title" />
          <h4 class="txt-red">{{ currentEvent.title }}</h4>
          <p class="mb-4">{{ currentEvent.description }}</p>

          <b-button 
            squared 
            variant="primary" 
            @click="editEvent">Edit Event</b-button>

          <b-button 
            squared 
            variant="transparent" 
            class="text-primary" 
            @click="viewAttendees">
            <i class="fa fa-file" /> View Attendees
          </b-button>
          <b-button 
            squared 
            variant="transparent" 
            class="text-danger" 
            @click="deleteEvent">
            <i class="fa fa-times" /> Cancel Event
          </b-button>
        </b-card>
      </modal>
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
        error({ statusCode: 404, message: 'Error geting events' })
      })
  },
  data() {
    return {
      currentEvent: {}
    }
  },
  computed: {
    ...mapState({
      events: state => state.events.calendarEvents,
      space: state => state.space.currentSpace.subdomain
    })
  },
  methods: {
    showEvent({ title, extendedProps }) {
      this.currentEvent = {
        title,
        id: extendedProps.eventId,
        description: extendedProps.description
      }
      this.$modal.show('event')
    },
    viewAttendees() {
      this.$router.push({
        path: `/${this.space}/events/${this.currentEvent.id}/attendees`
      })
    },
    editEvent() {
      this.$router.push({
        path: `/${this.space}/events/${this.currentEvent.id}/edit`
      })
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
