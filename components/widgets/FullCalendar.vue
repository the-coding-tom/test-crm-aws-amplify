<template>
  <FullCalendar
    :plugins="calendarPlugins"
    :header="{
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    }"
    :events="events"
    default-view="dayGridMonth" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
// import '@fullcalendar/list/main.css'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  props: {
    events: {
      type: Array,
      default: () => []
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
  }
}
</script>

<style lang="css">
.fc-event .fc-title {
  color: gray-dark !important;
}
</style>
