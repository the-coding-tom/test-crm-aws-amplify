<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Bookings"
          subtitle="Calendar"/>
        <!--<a
          class="btn btn-primary"
          @click="$store.commit('resources/toggleModal', true)"
        >Add Booking</a>-->
        <b-button
          v-b-modal.booking-modal
          variant="primary">Add New Booking</b-button>
        <b-modal
          id="booking-modal"
          hide-footer
          title="Add New Booking">
          <booking-modal @details="submitBooking" />
        </b-modal>
        <modal
          :show="$store.state.resources.bookingModal">
          <template slot="header">
            <h5
              id="exampleModalLabel"
              class="modal-title">Update Booking - {{ this.$store.state.resources.addBooking.title }}</h5>
          </template>
          <div>
            <div class="row">
              <b-form-group
                label="From"
                class="col-md-6">
                <client-only>
                  <date-picker
                    id="time"
                    v-model="from"
                    width="100%"
                    input-class="form-control"
                    lang="en"
                    format="YYYY-MM-DD HH:mm"
                    value-type="format"
                    confirm
                    type="datetime"
                    placeholder="Start Date"/>
                </client-only>
              </b-form-group>
              <b-form-group
                label="To"
                class="col-md-6">
                <client-only>
                  <date-picker
                    id="time"
                    v-model="to"
                    width="100%"
                    input-class="form-control"
                    lang="en"
                    format="YYYY-MM-DD HH:mm"
                    value-type="format"
                    confirm
                    type="datetime"
                    placeholder="End Date"/>
                </client-only>
              </b-form-group>
            </div>
            <div class="row">
              <b-form-group
                label="Title"
                class="col-md-12">
                <client-only>
                  <base-input
                    v-model="title"
                    placeholder="Booking Title"/>
                </client-only>
              </b-form-group>
            </div>
          </div>
          <template slot="footer">
            <a
              type="secondary"
              @click="$store.commit('resources/toggleModal', false)">Close</a>
            <b-button
              type="submit"
              class="btn btn-primary"
              @click="updateBooking">
              Update Booking
            </b-button>
          </template>
        </modal>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <client-only>
            <full-calendar
              :events="bookings"
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
  async asyncData(vm) {
    await vm.store.dispatch('resources/getAllBookings', { vm })
  },
  computed: {
    ...mapState({
      allRooms: state => state.resources.rooms.data,
      bookings: state => state.resources.bookings
    }),
    ...mapFields({
      from: 'resources.addBooking.from',
      to: 'resources.addBooking.to',
      title: 'resources.addBooking.title'
    })
  },
  methods: {
    eventClick(e) {
      const data = {
        from: this.$moment(e.start).format('YYYY-MM-DD HH:mm'),
        to: this.$moment(e.end).format('YYYY-MM-DD HH:mm'),
        title: e.title,
        id: e.extendedProps.uuid
      }
      this.$store.commit('resources/editBooking', data)
      this.$store.commit('resources/toggleModal', true)
    },
    dateChange() {},
    getRoomBook(id) {
      this.$store.dispatch('resources/bookingsForARoom', {
        vm: this,
        payload: id
      })
    },
    updateBooking() {
      this.$store.dispatch('resources/updateRoomBooking', { vm: this })
    },
    submitBooking(e) {
      alert(JSON.stringify(e))
    }
  }
}
</script>

<style>
.fc-title {
  color: #000 !important;
}
</style>
