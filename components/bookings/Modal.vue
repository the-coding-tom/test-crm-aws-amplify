<template>
  <div>
    <b-form @submit.prevent="submitDetails">
      <b-row>
        <b-form-group
          class="col-md-12"
          label="Member">
          <b-form-select
            :options="members"
            v-model="membership_id"
            :value="membership_id"
            required />
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group
          class="col-md-12"
          label="Room">
          <b-form-select
            :options="rooms"
            v-model="room_id"
            :value="room_id"
            required />
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group
          class="col-md-6"
          label="From">
          <client-only>
            <date-picker
              id="time"
              v-model="from"
              :time-picker-options="timePickerOptions"
              :disabled-days="disableddates"
              width="100%"
              input-class="form-control"
              lang="en"
              format="YYYY-MM-DD HH:mm"
              value-type="format"
              confirm
              type="datetime"
              @change="changeDate"
            />
          </client-only>
        </b-form-group>
        <b-form-group
          class="col-md-6"
          label="To">
          <client-only>
            <date-picker
              id="time"
              v-model="to"
              :time-picker-options="timePickerOptions"
              :disabled-days="disableddates"
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
      </b-row>
      <b-row>
        <b-form-group
          class="col-md-12"
          label="Title">
          <b-form-input
            v-model="title"
            placeholder="Reason for booking"
            required/>
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group class="col-md-12">
          <b-button
            type="submit"
            variant="primary">Save</b-button>
          <b-button
            type="button"
            class="float-right"
            variant="default"
            @click="cancelBooking">Cancel Booking</b-button>

        </b-form-group>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    ifrom: {
      type: String,
      default: null
    },
    ito: {
      type: String,
      default: null
    },
    ititle: {
      type: String,
      default: null
    },
    imembership_id: {
      type: String,
      default: null
    },
    iroom_id: {
      type: String,
      default: null
    },
    disableddates: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    membership_id: '',
    from: '',
    to: '',
    title: '',
    members: [],
    rooms: [],
    room_id: '',
    timePickerOptions: {
      start: '00:00',
      step: '00:15',
      end: '23:30'
    }
  }),
  mounted() {
    this.from = this.ifrom
      ? this.ifrom
      : this.$moment().format('YYYY-MM-DD HH:mm')
    this.to = this.ito
      ? this.ito
      : this.$moment()
          .add(1, 'hour')
          .format('YYYY-MM-DD HH:mm')
    this.title = this.ititle && this.ititle
    this.membership_id = this.imembership_id && this.imembership_id
    this.room_id = this.iroom_id && this.iroom_id

    this.getConnectedMembers()
    this.getRooms()
  },
  methods: {
    getConnectedMembers() {
      const url = 'filter[status]=accepted&include=profile'
      this.$membership.getAllMemberships(url).then(({ data }) => {
        this.members = _.map(data, o => {
          return {
            text: `${o.user_profile.full_name}`,
            value: o.id
          }
        })
      })
    },
    getRooms() {
      this.$resource.getAllRooms().then(({ data }) => {
        this.rooms = _.map(data.data, o => {
          return {
            text: o.name,
            value: o.id
          }
        })
        // this.room_id = this.rooms[0].value
      })
    },
    changeDate(e) {
      this.to = this.$moment(e)
        .add(1, 'hour')
        .format('YYYY-MM-DD HH:mm')
    },
    submitDetails() {
      const { from, to, title, membership_id, room_id } = this

      this.$emit('details', {
        from,
        to,
        title,
        membership_id,
        room_id
      })
    },
    cancelBooking() {
      this.$emit('deleteBooking')
    }
  }
}
</script>

<style>
</style>
