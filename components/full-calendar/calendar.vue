<template>
  <full-calendar
    :events="bookings"
    :views="views"
    :right="calendarPlugin"
    :time-zone="timezone"
    default-view="timeGridWeek"
    @eventClick="eventClick"
    @dateClick="dateClick"
    @dateChange="dateChange"
  />
</template>
<script>
export default {
  props: {
    bookings: Array,
    views: Array,
    calendarPlugin: Object,
    timezone: String,
    eventClick: Function,
    dateClick: Function,
    dateChange: Function
  },
  mounted() {
    // exists only on client:
  },
  methods: {}
}
</script>
