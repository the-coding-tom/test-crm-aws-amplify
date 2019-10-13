<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Bookings"
          subtitle="Calendar"/>
        <b-button
          v-b-modal.booking-modal
          id="modal-btn"
          variant="primary">Add New Booking</b-button>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <b-modal
            v-if="showmodal"
            id="booking-modal"
            :title="modalText"
            hide-footer>
            <booking-modal 
              :ifrom="bookdata.from" 
              :ito="bookdata.to" 
              :ititle="bookdata.title" 
              @details="submitBooking" />
          </b-modal>
          <client-only>
            <full-calendar
              :events="bookings"
              default-view="list"
              @eventClick="eventClick"
              @dateClick="bookDate"
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
import Modal from '~/components/bookings/Modal'

import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  layout: 'ShackDash',
  components: {
    BookingModal: Modal,
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  data() {
    return {
      bookdata: {
        from: null,
        to: null,
        title: null,
        id: null
      },
      modalText: '',
      showmodal: true
    }
  },
  async asyncData({ store }) {
    await store.dispatch('resources/getAllBookings')
  },
  computed: {
    ...mapState({
      allRooms: state => state.resources.rooms.data,
      bookings: state => state.resources.bookings
    }),
    ...mapFields({
      from: 'resources.addBooking.from',
      to: 'resources.addBooking.to',
      title: 'resources.addBooking.title',
      id: 'resources.addBooking.id'
    })
  },
  methods: {
    eventClick(e) {
      this.bookdata.from = this.$moment(e.start).format('YYYY-MM-DD HH:mm')
      this.bookdata.to = this.$moment(e.end).format('YYYY-MM-DD HH:mm')
      this.title = e.title
      this.id = e.extendedProps.uuid
      this.modalText = 'Update Booking'
      this.$bvModal.show('booking-modal')
    },
    bookDate(e) {
      this.bookdata.from = this.$moment(e.date).format('YYYY-MM-DD HH:mm')
      this.bookdata.to = this.$moment(e.date).format('YYYY-MM-DD HH:mm')
      this.$bvModal.show('booking-modal')
    },
    dateChange(e) {
      const data = {
        from: this.$moment(e.startDate).format('YYYY-MM-DD'),
        to: this.$moment(e.startDate).format('YYYY-MM-DD')
      }
      this.$store.dispatch('resources/getAllBookingsByDate', data)
    },
    getRoomBook(id) {
      this.$store.dispatch('resources/bookingsForARoom', id)
    },
    updateBooking() {
      this.$store.dispatch('resources/updateRoomBooking')
    },
    submitBooking(e) {
      const data = {
        from: this.$moment(e.from).format('YYYY-MM-DD HH:mm'),
        to: this.$moment(e.to).format('YYYY-MM-DD HH:mm'),
        title: e.title,
        membership_id: e.membership_id
      }
      this.$store.dispatch('resources/createBooking', data)
    }
  }
}
</script>

<style>
.fc-title {
  color: #000 !important;
}
</style>
