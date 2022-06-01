<template>
  <div>
    <base-header class="pb-6" type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Members" subtitle="Check-in" />
        <div>
          <b-button
            :to="{ name: 'space-checkins-settings' }"
            variant="transparent"
            ><i class="fa fa-cogs" /> Settings</b-button
          >
          <b-button variant="transparent" @click="toggleModal('scanqrcode')"
            ><i class="fas fa-qrcode" /> Scan QR Code</b-button
          >
          <b-button v-b-modal.checkin variant="primary"
            >Manual Check-in</b-button
          >
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <MembersCheckin
            :checkins="checkins"
            :loading="loading"
            :toggle-loading="togggleLoading"
          />
        </div>
      </div>
    </div>
    <b-modal id="checkin" :static="true" title="Checkin" hide-footer>
      <b-tabs
        v-model="type"
        pills
        card
        class="nav-fill flex-column flex-sm-row"
      >
        <b-tab active title="Member">
          <b-form
            class="member-checkin-form"
            @submit.prevent="checkinMember('manual')"
          >
            <b-form-group label="Member">
              <el-select
                v-model="membership_id"
                :remote-method="searchMembers"
                :loading="searching"
                required
                filterable
                remote
                reserve-keyword
                placeholder="Choose a member"
              >
                <el-option
                  v-for="option in data"
                  :key="option.id"
                  :label="option.first_name + ' ' + option.last_name"
                  :value="option.id"
                />
              </el-select>
            </b-form-group>
            <b-button
              :disabled="loading"
              type="submit"
              class="float-right member-checkin-btn"
              variant="primary"
              >Checkin</b-button
            >
          </b-form>
        </b-tab>
        <b-tab title="Guest"
          ><b-form class="guest-checkin-form" @submit.prevent="checkinGuest">
            <b-form-group label="Member">
              <el-select
                v-model="membership_id"
                :remote-method="searchMembers"
                :loading="searching"
                required
                filterable
                remote
                reserve-keyword
                placeholder="Choose a member"
              >
                <el-option
                  v-for="option in data"
                  :key="option.id"
                  :label="option.first_name + ' ' + option.last_name"
                  :value="option.id"
                />
              </el-select>
            </b-form-group>
            <b-form-group label="Bookings">
              <el-select
                v-model="booking_info"
                filterable
                placeholder="Choose a booking"
              >
                <el-option
                  v-for="option in bookings"
                  :key="option.id"
                  :label="option.title"
                  :value="option.id + ' ' + option.membership.id"
                />
              </el-select>
            </b-form-group>
            <b-form-group label="First Name">
              <b-form-input
                id="firstName"
                v-model="first_name"
                placeholder="John"
                required
              />
            </b-form-group>
            <b-form-group label="Last Name">
              <b-form-input
                id="lastName"
                v-model="last_name"
                placeholder="Doe"
                required
              />
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input
                id="email"
                v-model="email"
                type="email"
                placeholder="john@doe.com"
                required
              />
            </b-form-group>
            <b-form-group label="Company">
              <b-form-input
                id="company"
                v-model="company"
                placeholder="SHACK15"
                required
              />
            </b-form-group>
            <!-- <b-form-checkbox
              id="meetingGuest"
              v-model="meeting_guest"
              :value="true"
              :unchecked-value="false"> Is a meeting guest
            </b-form-checkbox> -->
            <b-button
              :disabled="loading"
              type="submit"
              class="float-right"
              variant="primary"
              >Checkin</b-button
            >
          </b-form></b-tab
        >
      </b-tabs>
    </b-modal>
    <b-modal
      id="scanqrcode"
      :title="scanComplete ? 'Please Wait' : 'Show QR Code To The Camera'"
      hide-footer
    >
      <qrcode-stream v-if="!scanComplete" @onDecode="onDecode" />
      <div v-else>
        <b-spinner variant="primary" type="grow" label="Spinning" />
        <span>Processing...</span>
      </div>
    </b-modal>
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
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui'
import RouteBreadCrumb from '@/components/argon-core/Breadcrumb/RouteBreadcrumb'
import MembersCheckin from '~/components/shack/MembersCheckin.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import SearchForm from '~/components/shack/SearchForm.vue'
import { Select, Option } from 'element-ui'
import { displayError } from '../../../util/errors'
import { mapState } from 'vuex'

const moment = require('moment')

export default {
  name: 'Checkin',
  layout: 'ShackDash',
  components: {
    MainTitle,
    SearchForm,
    SectionTitle,
    MembersCheckin,
    RouteBreadCrumb,
    [Select.name]: Select,
    [Option.name]: Option,
    QrcodeStream: () => import('@/components/qrscanner/qrscanner.vue'),
  },
  async asyncData({ $membership, $checkin, error, route }) {
    try {
      const link = 'filter[status]=accepted&include=profile'
      const checkinFilter = `?filter[status]=checkin&filter[checkin_timestamp]=${moment().format(
        'YYYY-MM-DD'
      )},${moment().add(1, 'days').format('YYYY-MM-DD')}&page=${
        route.query.page
      }&sort=-id`

      let imeta, ilinks

      const checkins = await $checkin
        .checkins(checkinFilter)
        .then(({ data, meta, links }) => {
          imeta = meta
          ilinks = links
          return data
        })

      return await $membership.getAllMemberships(link).then(({ data }) => {
        return { data, checkins, meta: imeta, links: ilinks }
      })
    } catch (e) {
      const message = e.response ? e.response.data.message : e.message

      error({ statusCode: e.statusCode, message: message })
    }
  },
  data: () => ({
    searching: false,
    type: 0,
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    email: '',
    membership_id: '',
    booking_id: '',
    booking_info: '',
    loading: false,
    scanComplete: false,
    meeting_guest: false,
    options: [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ],
    value: '',
  }),
  computed: {
    ...mapState({
      bookings: (state) => state.resources.bookingsForDate,
    }),
  },
  mounted() {
    const data = {
      from: this.$moment().format('YYYY-MM-DD'),
      to: this.$moment().add(1, 'days').format('YYYY-MM-DD'),
    }
    this.$store.dispatch('resources/getBookingsByDate', data)
  },
  methods: {
    onDecode(data) {
      if (data) {
        this.scanComplete = true
        this.membership_id = data.split('//')[1]
        this.checkinMember('scan')
      }
    },
    next() {
      const { next } = this.links
      const params = getQueryParams(next)

      this.$router.push(params)
      location.href = location.origin + this.$route.path + params
    },
    prev() {
      const { prev } = this.links
      const params = getQueryParams(prev)

      this.$router.push(params)
      location.href = location.origin + this.$route.path + params
    },
    changePage(pageNumber) {
      const params = `?page=${pageNumber}`
      this.$router.push(params)
      location.href = location.origin + this.$route.path + params
    },
    searchMembers(query) {
      const link = `filter[search]=${query}&filter[status]=accepted`

      this.searching = !this.searching

      const _self = this

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({ data }) => {
          _self.searching = !_self.searching
          _self.data = data
        })
      }, 350)()
    },
    checkinGuest() {
      this.loading = !this.loading
      this.booking_id = this.booking_info.split(' ')[0]
      this.membership_id = this.membership_id
        ? this.membership_id
        : this.booking_info.split(' ')[1]
      const {
        first_name,
        last_name,
        email,
        company,
        membership_id,
        booking_id,
        meeting_guest,
      } = this
      this.$checkin
        .checkin({
          type: 'guest',
          first_name,
          last_name,
          email,
          company,
          membership_id,
          booking_id,
          meeting_guest,
        })
        .then(({ data }) => {
          this.loadiing = !this.loading
          // this.checkins.push(data)
          this.$bvToast.toast(`Guest checked in successfully`, {
            title: 'Success',
            variant: 'success',
          })

          this.$bvModal.hide('checkin')
          location.reload()
        })
        .catch((e) => {
          this.loading = !this.loading
          const message = e.response ? e.response.data.message : e.message
          // console.log(e.message)
          // this.$bvToast.toast(e.message, { title: 'Error', variant: 'danger' })

          this.$bvToast.toast(`Error - ${message}`, {
            title: 'Error',
            variant: 'danger',
          })
        })
    },
    checkinMember(source = 'manual') {
      this.loading = !this.loading
      const { membership_id } = this
      try {
        this.$checkin
          .checkin({
            type: 'member',
            checkin_type: source,
            membership_id,
            membership: membership_id,
          })
          .then(({ data }) => {
            this.loading = false
            // this.checkins.push(data)

            this.$bvToast.toast('Member checked in successfully', {
              title: 'Success',
              variant: 'success',
            })

            this.$bvModal.hide('scanqrcode')

            this.$bvModal.hide('checkin')
            location.reload()
          })
          .catch((error) => {
            this.$bvModal.hide('scanqrcode')

            this.loading = !this.loading
            const message = error.response
              ? error.response.data.message
              : error.message
            this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
          })
      } catch (e) {
        this.loading = !this.loading
        const message = e.response ? e.response.data.message : e.message
        this.$bvModal.hide('scanqrcode')
        this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
      }
    },
    togggleLoading() {
      this.loading = !this.loading
    },
    toggleModal(id) {
      this.$bvModal.show(id)
      this.scanComplete = false
    },
  },
}
</script>
