<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Attendees" />
        <SearchForm
          :loading="loading"
          :required="false"
          @search="searchAttendees"
        />
        <div>
          <b-button
            variant="transparent"
            class="text-primary"
            @click="exportData"
          ><i class="fa fa-file-export" /> Export
          </b-button>
          <b-button 
            v-b-modal.appreciation 
            variant="primary"
          >Send Appreciation</b-button
          >
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <card>
            <b-row>
              <div class="form-group col-md-3">
                <label>Add new Attendee</label>
                <el-select
                  v-model="attendee"
                  placeholder="Select Member"
                  filterable
                >
                  <el-option
                    v-for="member in memberships"
                    :key="member.id"
                    :label="member.first_name + ' ' + member.last_name"
                    :value="member.id"
                  />
                </el-select>
              </div>
              <div 
                v-if="attendee" 
                class="form-group col-md-2">
                <label for="source">Payment Source</label>
                <el-select
                  v-model="source"
                  placeholder="Choose a source"
                  @change="getCards"
                >
                  <el-option
                    v-for="source in sources"
                    :key="source.text"
                    :label="source.value"
                    :value="source.value"
                  />
                </el-select>
              </div>
              <div 
                v-if="source === 'card'" 
                class="form-group col-md-2">
                <label>Payment Method</label>
                <el-select 
                  v-model="payment_method" 
                  placeholder="Choose a card">
                  <el-option
                    v-for="card in cards"
                    :key="card.id"
                    :label="`${card.card_brand} ~ **** ${card.last_4}`"
                    :value="card.id"
                  />
                </el-select>
              </div>
              <base-input
                v-model="tickets"
                class="col-md-1"
                label="Tickets"
                placeholder="Enter number of tickets"
                type="number"
                min="1"
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
                >Add To Attendee List</b-button
                >
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
                      v-for="(attendee, i) in attendees.filter(
                        (item) => item.membership != null
                      )"
                      :key="i"
                    >
                      <td>
                        {{
                          attendee.membership.first_name +
                            ' ' +
                            attendee.membership.last_name
                        }}
                      </td>
                      <td>{{ attendee.number_of_tickets }}</td>
                      <td>
                        <b-button
                          :disabled="
                            attendee.membership.last_checkin[0] &&
                              attendee.membership.last_checkin[0].status ===
                              'checkin'
                          "
                          variant="info"
                          @click="checkinToggle(attendee)"
                        >
                          <i class="fas fa-check-square" />
                          <span>Checkin</span>
                        </b-button>
                        <b-button
                          :disabled="loading"
                          type="submit"
                          variant="transparent"
                          class="text-danger"
                          @click="removeTicket(i, attendee)"
                        >
                          <i class="fa fa-times" /> Cancel
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
                @input="changePage"
              />
            </div>
          </card>
        </div>
      </div>

      <appreciation-modal />
    </div>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'
import SearchForm from '~/components/shack/SearchForm.vue'
import AppreciationModal from '~/components/shack/AppreciationModal'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle,
    SearchForm,
    [Select.name]: Select,
    [Option.name]: Option,
    AppreciationModal
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
      attendee: '',
      payment_method: '',
      cards: [],
      source: '',
      sources: [
        { text: 'Card', value: 'card' },
        { text: 'Credit', value: 'credit' }
      ]
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
    exportData() {
      this.$event.exportAttendees(this.id).then(res => {
        console.log(res)
        let blob = new Blob([res], { type: 'text/csv' })
        // window.location.href = URL.createObjectURL(blob)

        const a = document.createElement('a')
        const url = URL.createObjectURL(blob)

        // Put the link somewhere in the body
        document.body.appendChild(a)
        a.innerHTML = 'download me'
        a.href = url
        // Set our custom filename
        a.download = 'event-attendees.csv'
        // Automatically click the link
        a.click()
      })
    },
    next() {
      const { next } = this.links
      this.$event.getAttendees(null, next).then(({ data }) => {
        this.$store.commit('events/setAttendees', data)
      })
    },
    prev() {
      const { prev } = this.links
      this.$event.getAttendees(null, prev).then(({ data }) => {
        this.$store.commit('events/setAttendees', data)
      })
    },
    changePage(pageNumber) {
      const link = `${this.meta.path}?page=${pageNumber}`
      this.$event.getAttendees(null, link).then(({ data }) => {
        this.$store.commit('events/setAttendees', data)
      })
    },
    getCards(source) {
      if (source !== 'card') return

      const id = this.attendee

      this.$membership
        .getPaymentMethods(id)
        .then(({ data }) => {
          this.cards = data
          this.payment_method = data[0].id
        })
        .catch(e => {
          const message = e.response
            ? e.response.data.message +
              ' ' +
              JSON.stringify(error.response.data.errors)
            : e.message
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    adminPurchaseTicket() {
      this.loading = true

      const payload = {
        number_of_tickets: this.tickets,
        membership_id: this.attendee,
        payment_method: this.payment_method,
        source: this.source
      }

      this.$event
        .purchaseTicketByAdmin(this.id, payload)
        .then(({ data: { data } }) => {
          this.$bvToast.toast('Added New Attendee', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.$store.commit('events/addAttendee', data)
        })
        .catch(error => {
          const message = error.response
            ? error.response.data.message +
              ' ~ ' +
              JSON.stringify(error.response.data.errors)
            : error.message
          this.$bvToast.toast(message, {
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
    },
    checkinToggle(e) {
      this.$checkin
        .checkin({
          type: 'member',
          membership_id: e.membership.id
        })
        .then(({ data }) => {
          this.$bvToast.toast('Member checked in successfully', {
            title: 'Success',
            variant: 'success'
          })

          location.reload()
        })
        .catch(e => {
          this.$bvToast.toast('Member checkin failed', {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    searchAttendees(term) {
      const { id } = this.$route.params
      this.$event
        .searchAttendees(id, term)
        .then(data => {
          this.$store.commit('events/setAttendees', data)
        })
        .catch(e => {
          this.$bvToast.toast(JSON.stringify(e.response.data.errors), {
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
