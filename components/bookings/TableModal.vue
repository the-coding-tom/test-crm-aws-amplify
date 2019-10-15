<template>
  <div>
    <b-form @submit.prevent="submitDetails">
      <b-row>
        <b-form-group
          class="col-md-12"
          label="Member">
          <b-form-select 
            :options="members"
            v-model="user_id" 
            required />
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group
          class="col-md-12"
          label="Table">
          <b-form-select 
            :options="tables"
            v-model="table_id" 
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
        <b-form-group
          class="col-md-12"
          label="Number of seats">
          <b-form-input
            v-model="number_of_seats"
            type="number"
            placeholder="Number of seats"
            required/>
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group class="col-md-12">
          <b-button 
            type="submit" 
            class="float-right"
            variant="primary">Save</b-button>
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
    iuser_id: {
      type: String,
      default: null
    },
    itable_id: {
      type: String,
      default: null
    },
    inumber_of_seats: {
      type: String,
      default: null
    }
  },
  data: () => ({
    user_id: '',
    from: '',
    to: '',
    title: '',
    members: [],
    tables: [],
    table_id: '',
    number_of_seats: ''
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
    this.getTables()
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

        this.user_id = this.members[0].value
      })
    },
    getTables() {
      this.$table.getAllTables().then(({ data }) => {
        this.tables = _.map(data.data, o => {
          return {
            text: o.name,
            value: o.id
          }
        })
        this.table_id = this.rooms[0].value
      })
    },
    changeDate(e) {
      this.to = this.$moment(e)
        .add(1, 'hour')
        .format('YYYY-MM-DD HH:mm')
    },
    submitDetails() {
      const { from, to, title, user_id, table_id, number_of_seats } = this

      this.$emit('details', {
        from,
        to,
        title,
        user_id,
        table_id,
        number_of_seats
      })
    }
  }
}
</script>

<style>
</style>
