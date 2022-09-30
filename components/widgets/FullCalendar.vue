<template>
  <FullCalendar
    :plugins="calendarPlugins"
    :header="{
      left: 'prev,next today',
      center: 'title',
      right: right,
    }"
    :views="views"
    :events="events"
    :default-view="defaultView"
    :dates-render="datesRender"
    :time-zone="timeZone"
    :event-render="viewChanged"
    :resources="resources"
    @dateClick="dateClick"
    @eventClick="eventClick"
  />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import momentTimezonePlugin from '@fullcalendar/moment-timezone'
import { Calendar } from '@fullcalendar/core'
import timelinePlugin from '@fullcalendar/timeline'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

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
      default: 'listYear'
    },
    right: {
      type: String,
      default: 'dayGridMonth,timeGridWeek,timeGridDay,listYear'
    },
    views: {
      type: Object,
      default: () => ({
        listWeek: {
          noEventsMessage: 'No events to display'
        }
      })
    },
    timeZone: {
      type: String,
      default: 'GMT'
    },
    resources: {
      type: Function,
      default: () => [
        { title: 'resource a', id: 'a' },
        { title: 'resource b', id: 'b' }
      ]
    }
  },
  data() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        timelinePlugin,
        resourceTimelinePlugin,
        listPlugin,
        momentTimezonePlugin
      ],
      viewType: '',
      calendarResources: [
        { title: 'resource a', id: 'a' },
        { title: 'resource b', id: 'b' }
      ],
      calendarEvents: [
        // initial event data
        { title: 'Event Now', start: new Date(), resourceId: 'a' }
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
      this.$emit(
        'dateClick',
        event.dateStr.replaceAll('Z', '').replaceAll('T', ' ')
      )
    },
    viewChanged(options) {
      if (this.viewType !== options.view.type) {
        this.viewType = options.view.type
        this.$emit('viewSwitched', { viewType: options.view.type })
      }
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
@import '@fullcalendar/timeline/main.css';
@import '@fullcalendar/resource-timeline/main.css';
@import '~/assets/sass/core/vendors/_fullcalendar.scss';
</style>
