<template>
  <FullCalendar
    :plugins="calendarPlugins"
    :header="{
      left: 'prev,next today',
      center: 'title',
      right: right
    }"
    :views="views"
    :events="events"
    :default-view="defaultView"
    :dates-render="datesRender"
    @dateClick="dateClick"
    @eventClick="eventClick" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  props: {
    events: {
      type: Array,
      default: () => []
    },
    defaultView: {
      type: String,
      default: 'listWeek'
    },
    right: {
      type: String,
      default: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    views: {
      type: Object,
      default: () => ({
        listWeek: {
          noEventsMessage: 'No events to display'
        }
      })
    }
  },
  data() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin
      ]
    }
  },
  methods: {
    datesRender({ view }) {
      this.$emit('dateChange', {
        startDate: view.activeStart,
        endDate: view.activeEnd
      })
    },
    eventClick({ event }) {
      this.$emit('eventClick', event)
    },
    dateClick(event) {
      this.$emit('dateClick', event)
    }
  }
}
</script>

<style lang="css">
.fc-event .fc-title {
  color: gray-dark !important;
}
</style>

<style lang="scss">
@import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';
@import '@fullcalendar/timegrid/main.css';
@import '@fullcalendar/list/main.css';
@import '~/assets/sass/core/vendors/_fullcalendar.scss';
</style>
