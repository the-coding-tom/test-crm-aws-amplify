<template>
  <div>
    <base-header
      class="pb-6"
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Attendees" />
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <card>
            <b-row>
              <div class="form-group col-md-4">
                <label>Add new Attendee</label>
                <el-select
                  v-model="attendee"
                  placeholder="Select Member">
                  <el-option
                    v-for="member in memberships"
                    :key="member.id"
                    :label="member.first_name + ' ' + member.last_name"
                    :value="member.id"
                  />
                </el-select>
              </div>
              <base-input
                v-model="tickets"
                class="col-md-4"
                label="Tickets"
                placeholder="Enter number of tickets"
                type="number"
                max="3"
              />
              <div class="form-group col-md-3">
                <label>&nbsp;</label>
                <br >
                <b-button
                  :disabled="loading"
                  type="submit"
                  outline
                  class="sh-dashbtn"
                  @click="adminPurchaseTicket"
                >Add To Attendee List</b-button>
              </div>
            </b-row>

            <div class="mr-tb-80">
              <div class="m-n25">

                <table class="table table-hover table-striped sh-border-head">
                  <thead>
                    <tr>
                      <th>Attendee Name</th>
                      <th>Number of Tickets</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(attendee, i) in attendees"
                      :key="i">
                      <td>{{ attendee.membership.first_name + ' ' + attendee.membership.last_name }}</td>
                      <td>{{ attendee.number_of_tickets }}</td>
                      <td>
                        <b-button
                          :disabled="loading"
                          type="submit"
                          variant="transparent"
                          class="text-danger"
                          @click="removeTicket(i, attendee)"
                        >
                          <i class="fa fa-times" /> Remove
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <base-pagination
                :total="meta.total"
                :per-page="meta.per_page"
                :value="meta.current_page"
                align="center"
                @next="next"
                @prev="prev"
              />
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, $event, error, params }) {
    const { id } = params

    await $event
      .getAttendees(id)
      .then(({ data }) => {
        store.commit('events/setAttendees', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'A problem occurred. Try Again...' })
      })

    await $event
      .getMemberships()
      .then(({ data }) => {
        store.commit('events/setMemberships', data)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'A problem occurred. Try Again...' })
      })

    return {
      id
    }
  },
  data() {
    return {
      tickets: 1,
      loading: false,
      attendee: ''
    }
  },
  computed: {
    ...mapState({
      attendees: state => state.events.attendees.data,
      meta: state => state.events.attendees.meta,
      links: state => state.events.attendees.links,
      memberships: state => state.events.memberships.data
    })
  },
  methods: {
    next() {
      const { next } = this.meta
      this.$events.getAttendees(null, next)
    },
    prev() {
      const { prev } = this.meta
      this.$events.getAttendees(null, prev)
    },
    adminPurchaseTicket() {
      const vm = this
      vm.loading = true

      const payload = {
        number_of_tickets: vm.tickets,
        membership_id: vm.attendee
      }

      this.$event
        .purchaseTicketByAdmin(vm.id, payload)
        .then(({ data: { data } }) => {
          this.$bvToast.toast('Added New Attendee', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.$store.commit('events/addAttendee', data)
        })
        .catch(error => {
          this.$bvToast.toast(JSON.stringify(error.response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    removeTicket(index, payload) {
      const ticket = {
        ticket_id: payload.id,
        membership_id: payload.membership.id
      }

      this.loading = !this.loading

      this.$event
        .cancelTicket(this.id, { data: ticket })
        .then(({ data }) => {
          this.$bvToast.toast('Successfully cancelled ticket', {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.loading = !this.loading

          this.$store.commit('events/removeAttendee', index)
        })
        .catch(({ response }) => {
          this.loading = !this.loading
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>
<style>
</style>
<style lang="scss" scoped>
</style>
