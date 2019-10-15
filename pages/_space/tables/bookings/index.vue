<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Table Bookings"
          subtitle="Calendar"/>
        <b-button
          v-b-modal.booking-modal
          id="modal-btn"
          variant="primary">Add New Table Booking</b-button>
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
              :imembership_id="bookdata.membership_id"
              :iroom_id="bookdata.room_id"
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
import Modal from '~/components/bookings/TableModal'

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
        membership_id: null,
        table_id: null,
        booking_id: null
      },
      modalText: 'Add New Table Booking',
      showmodal: true,
      modalUpdate: false
    }
  },
  async asyncData({ store }) {
    await store.dispatch('tablebookings/getAllBookings')
  },
  computed: {
    ...mapState({
      allRooms: state => state.tablebookings.rooms.data,
      bookings: state => state.tablebookings.bookings
    }),
    ...mapFields({
      from: 'tablebookings.addBooking.from',
      to: 'tablebookings.addBooking.to',
      title: 'tablebookings.addBooking.title',
      id: 'tablebookings.addBooking.id'
    })
  },
  methods: {
    eventClick(e) {
      console.log(e)
      this.bookdata.from = this.$moment(e.start).format('YYYY-MM-DD HH:mm')
      this.bookdata.to = this.$moment(e.end).format('YYYY-MM-DD HH:mm')
      this.bookdata.title = e.title
      this.bookdata.membership_id = e.extendedProps.extendProps.uuid
      this.bookdata.table_id = e.extendedProps.extendProps.table.id
      this.bookdata.booking_id = e.extendedProps.extendProps.uuid
      this.modalText = 'Update Table Booking'
      this.modalUpdate = true
      this.$bvModal.show('booking-modal')
    },
    bookDate(e) {
      console.log(e)
      this.bookdata.from = this.$moment(e.date).format('YYYY-MM-DD HH:mm')
      this.bookdata.to = this.$moment(e.date).format('YYYY-MM-DD HH:mm')
      this.$bvModal.show('booking-modal')
    },
    dateChange(e) {
      const data = {
        from: this.$moment(e.startDate).format('YYYY-MM-DD'),
        to: this.$moment(e.endDate).format('YYYY-MM-DD')
      }
      this.$store.dispatch('tablebookings/getAllBookingsByDate', data)
    },
    getRoomBook(id) {
      this.$store.dispatch('tablebookings/bookingsForARoom', id)
    },

    submitBooking(e) {
      const data = {
        from: this.$moment(e.from).format('YYYY-MM-DD HH:mm'),
        to: this.$moment(e.to).format('YYYY-MM-DD HH:mm'),
        title: e.title,
        number_of_seats: e.number_of_seats,
        membership_id: e.user_id,
        table_id: e.table_id,
        booking_id: this.bookdata.booking_id
      }
      let ms = this.$moment(data.to).diff(this.$moment(data.from))

      if (this.modalUpdate && this.bookdata.booking_id) {
        this.updateBooking(data)
      } else {
        this.$store.dispatch('tablebookings/createBooking', data)
        this.$bvModal.hide('booking-modal')
      }
    },
    updateBooking(data) {
      this.$store.dispatch('tablebookings/updateRoomBooking', data)
      this.$bvModal.hide('booking-modal')
    }
  }
}
</script>

<style>
.fc-title {
  color: #000 !important;
}
</style>
