<template>
  <div>
    <div class="mr-t-20">
      <p style="text-decoration: underline;">Slots</p>
      <p
        v-for="(slot, i) in slotsList()"
        :key="i">
        {{ $moment().day(slot.day).format('dddd') }} {{ slot.start }} - {{ $moment(slot.start, "H:mm").add(slot.duration, 'minutes').format('HH:mm') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    slotsList() {
      return _.sortBy(this.data.slots, 'day')
    }
  }
}
</script>

<style>
</style>
