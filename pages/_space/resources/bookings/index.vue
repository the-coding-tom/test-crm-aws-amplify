<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Resource Bookings"
        />
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <client-only>
            <full-calendar
              :events="bookings"
              :right="null"
              default-view="list"
              @eventClick="eventClick"
              @dateChange="dateChange"
            />
          </client-only>
        </card>
      </div>
    </div>
  </div>

</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  computed: {
    ...mapState({
      allRooms: state => state.resources.rooms.data,
      bookings: state => state.resources.bookings
    })
  },
  created() {
    this.$store.dispatch('resources/getAllBookings', { vm: this })
  },
  methods: {
    eventClick(e) {
      console.log(e)
    },
    dateChange() {},
    getRoomBook(id) {
      this.$store.dispatch('resources/bookingsForARoom', {
        vm: this,
        payload: id
      })
    }
  }
}
</script>
