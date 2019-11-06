<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Bookings"
          subtitle="Calendar"/>
          <!-- <b-button
          v-b-modal.new-booking-modal
          id="modal-btn"
          variant="primary">Add New Booking</b-button> -->
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
          <b-modal
            id="new-booking-modal"
            hide-footer
            title="Add New Booking">
            <b-form @submit.prevent="addBooking">
              <b-row>
                <b-form-group
                  class="col-md-12"
                  label="Member">
                  <el-select
                    v-model="newBooking.membership_id"
                    :remote-method="searchMembers"
                    :loading="loading"
                    required
                    filterable
                    remote
                    reserve-keyword
                    placeholder="Choose a member">
                    <el-option
                      v-for="option in data"
                      :key="option.id"
                      :label="option.first_name + ' ' + option.last_name"
                      :value="option.id"/>
                  </el-select>
                </b-form-group>
                <b-form-group
                  class="col-md-12"
                  label="Resource to book">
                  <el-select
                    v-model="newBooking.room_id"
                    :remote-method="searchResource"
                    :loading="searching"
                    required
                    filterable
                    remote
                    reserve-keyword
                    placeholder="Choose a resource">
                    <el-option
                      v-for="option in allRooms"
                      :key="option.id"
                      :label="option.name"
                      :value="option.id"/>
                  </el-select>
                </b-form-group>
                <b-form-group
                  label="From"
                  class="col-md-6">
                  <client-only>
                    <date-picker
                      id="time"
                      v-model="newBooking.from"
                      :time-picker-options="timePickerOptions"
                      :not-before="not_before"
                      :disabled-days="disabledates"
                      width="100%"
                      input-class="form-control"
                      lang="en"
                      format="YYYY-MM-DD HH:mm"
                      value-type="format"
                      confirm
                      type="datetime"
                    />
                  </client-only>
                </b-form-group>
                <b-form-group
                  label="To"
                  class="col-md-6">
                  <client-only>
                    <date-picker
                      id="time"
                      v-model="newBooking.to"
                      :time-picker-options="timePickerOptions"
                      :not-before="not_before"
                      :disabled-days="disabledates"
                      width="100%"
                      input-class="form-control"
                      lang="en"
                      format="YYYY-MM-DD HH:mm"
                      value-type="format"
                      confirm
                      type="datetime"
                    />
                  </client-only>
                </b-form-group>
                <b-form-group
                  class="col-md-12"
                  label="Title for Booking"><b-form-input
                    v-model="newBooking.title"
                    type="text"
                    placeholder="Title for booking"
                    required/></b-form-group>
              </b-row>
              <b-button
                :disabled="processing"
                type="submit"
                variant="primary">Book</b-button>
            </b-form>
          </b-modal>
          <client-only>
            <full-calendar
              :events="bookings"
              :views="views"
              :right="calendarPlugin"
              default-view="timeGridWeek"
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
import Modal from '~/components/bookings/Modal'

import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { Select, Option } from 'element-ui'

export default {
  layout: 'ShackDash',
  components: {
    BookingModal: Modal,
    BaseHeader,
    MainTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, $membership, $resource, error }) {
    try {
      await store.dispatch('resources/getAllBookings')
      await store.dispatch('resources/getAllRooms')

      const link = 'filter[status]=accepted&include=profile'

      return await $membership.getAllMemberships(link).then(({ data }) => {
        return { data }
      })
    } catch (e) {
      const message = e.response ? e.response.data.message : e.message

      error({ statusCode: e.statusCode, message: message })
    }
  },
  data() {
    return {
      processing: false,
      loading: false,
      searching: false,
      newBooking: {
        from: null,
        to: null,
        title: null,
        membership_id: null,
        room_id: null
      },
      timePickerOptions: {
        start: '00:00',
        step: '00:15',
        end: '23:30'
      },
      calendarPlugin: 'dayGridMonth,timeGridWeek',
      views: {
        listWeek: {
          noEventsMessage: 'No bookings to display'
        }
      },
      bookdata: {
        from: null,
        to: null,
        title: null,
        membership_id: null,
        room_id: null,
        booking_id: null
      },
      modalText: 'Add New Booking',
      showmodal: true,
      modalUpdate: false,
      disabledates: []
    }
  },
  computed: {
    ...mapState({
      allRooms: state => state.resources.rooms.data,
      bookings: state => state.resources.bookings,
      space: state => state.space.currentSpace
    }),
    ...mapFields({
      from: 'resources.addBooking.from',
      to: 'resources.addBooking.to',
      title: 'resources.addBooking.title',
      id: 'resources.addBooking.id'
    }),
    not_before() {
      return this.$moment().format('YYYY-MM-DD HH:mm')
    }
  },
  created() {
    this.bookings.map(booked => {
      this.disabledates.push(booked.start)
      this.disabledates.push(booked.end)
    })
  },
  methods: {
    searchMembers(query) {
      const link = `filter[search]=${query}`

      this.loading = !this.loading

      const _self = this

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({ data }) => {
          _self.loading = !_self.loading
          _self.data = data
        })
      }, 350)()
    },
    async searchResource(query) {
      this.searching = !this.searching
      const link = `/${this.space.subdomain}/admin/rooms/?search=${query}`

      await this.$store.dispatch('resources/getAllRooms', link)
      this.searching = !this.searching
    },
    eventClick(e) {
      this.bookdata.from = this.$moment(e.start).format('YYYY-MM-DD HH:mm')
      this.bookdata.to = this.$moment(e.end).format('YYYY-MM-DD HH:mm')
      this.bookdata.title = e.title
      this.bookdata.membership_id = e.extendedProps.extendProps.uuid
      this.bookdata.room_id = e.extendedProps.extendProps.room.id
      this.bookdata.booking_id = e.extendedProps.extendProps.uuid
      this.modalText = 'Update Booking'
      this.modalUpdate = true
      this.$bvModal.show('booking-modal')
    },
    bookDate(e) {
      this.newBooking.from = this.$moment(e.date).format('YYYY-MM-DD HH:mm')
      this.newBooking.to = this.$moment(e.date)
        .add(1, 'hour')
        .format('YYYY-MM-DD HH:mm')
      this.$bvModal.show('new-booking-modal')
    },
    dateChange(e) {
      const data = {
        from: this.$moment(e.startDate).format('YYYY-MM-DD'),
        to: this.$moment(e.endDate).format('YYYY-MM-DD')
      }
      this.$store.dispatch('resources/getAllBookingsByDate', data)
    },
    getRoomBook(id) {
      this.$store.dispatch('resources/bookingsForARoom', id)
    },
    addBooking() {
      const { newBooking } = this
      this.processing = !this.processing
      this.$resource
        .bookRoomForMember(newBooking.room_id, newBooking)
        .then(res => {
          this.$bvToast.toast('Booking successful', {
            title: 'Success',
            variant: 'success'
          })

          location.reload()
        })
        .catch(e => {
          this.processing = !this.processing
          const message = e.response
            ? `${e.response.data.message} ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    submitBooking(e) {
      const data = {
        from: this.$moment(e.from).format('YYYY-MM-DD HH:mm'),
        to: this.$moment(e.to).format('YYYY-MM-DD HH:mm'),
        title: e.title,
        membership_id: e.membership_id,
        room_id: e.room_id,
        booking_id: this.bookdata.booking_id
      }
      let ms = this.$moment(data.to).diff(this.$moment(data.from))
      if (ms < 900000) {
        return this.$bvToast.toast(
          'Minimum booking duration should be 15 munites and above',
          {
            title: 'Error',
            variant: 'danger',
            solid: true
          }
        )
      }
      if (this.modalUpdate && this.bookdata.booking_id) {
        this.updateBooking(data)
      } else {
        this.$store.dispatch('resources/createBooking', data)
        this.$bvModal.hide('booking-modal')
      }
    },
    updateBooking(data) {
      this.$store.dispatch('resources/updateRoomBooking', data)
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
