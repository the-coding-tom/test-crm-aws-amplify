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
    imembership_id: {
      type: String,
      default: null
    }
  },
  data: () => ({
    membership_id: '',
    from: '',
    to: '',
    title: '',
    members: []
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

    this.getConnectedMembers()
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

        this.membership_id = this.members[0].value
      })
    },
    changeDate(e) {
      this.to = this.$moment(e)
        .add(1, 'hour')
        .format('YYYY-MM-DD HH:mm')
    },
    submitDetails() {
      const { from, to, title } = this

      this.$emit('details', {
        from,
        to,
        title
      })
    }
  }
}
</script>

<style>
</style>
