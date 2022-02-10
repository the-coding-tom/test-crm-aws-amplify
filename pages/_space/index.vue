<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between py-4">
        <MainTitle 
          title="Dashboard" 
          subtitle="This Month" />
      </div>

      <div class="row">
        <TopWidget
          :value="summary.checkins"
          img="/img/icon-user.png"
          destination-link="space-checkins"
          text="Members Checked In"
        />

        <TopWidget
          :value="summary.unpaidInvoices"
          img="/img/icon-wallet.png"
          destination-link="space-invoice"
          text="Unpaid Invoices"
        />
        <TopWidget
          :value="summary.bookings"
          :text="`Bookings Revenue (${space.currency})`"
          img="/img/icon-discount.png"
          destination-link="space-resources"
        />
        <TopWidget
          :value="summary.events"
          img="/img/icon-help.png"
          destination-link="space-events"
          text="Events"
        />
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <div 
            slot="header" 
            class="row align-items-center">
            <div class="col">
              <SectionTitle
                title="Activity Feed"
                subtitle="Usage Stream on Mobile Platform"
              />
            </div>
          </div>
          <div class="m-n25 sh-activity">
            <table class="table table-hover table-striped">
              <tbody>
                <EmptyActivity v-if="activities.length === 0" />
                <template v-else>
                  <Activity
                    v-for="activity in activities"
                    :key="activity.id"
                    :date="getTimestamp(activity)"
                  >
                    <span>{{ activity.description }}</span>
                  </Activity>
                </template>
              </tbody>
            </table>
          </div>
          <nuxt-link
            slot="footer"
            :to="{ name: 'space-activities' }"
            class="mr-t-10"
          >See More</nuxt-link
          >
        </card>

        <card header-classes="bg-transparent">
          <div 
            slot="header" 
            class="row align-items-center">
            <div class="col">
              <SectionTitle
                title="Bookings"
                subtitle="Space, Events, Meals, and Resources"
              />
            </div>
          </div>
          <div class="m-n25 sh-activity sh-bookings">
            <table class="table table-hover table-striped">
              <tbody>
                <EmptyActivity v-if="bookings.length === 0" />
                <template v-else>
                  <Booking
                    v-for="(booking, index) in bookings"
                    :key="index"
                    :title="
                      booking.title +
                        ' ' +
                        $moment(booking.start_timestamp).format('dddd MMM Do') +
                        ' ' +
                        booking.from +
                        ' - ' +
                        booking.to
                    "
                    :img="booking.room.photo"
                  >Room: {{ booking.room.name }}</Booking
                  >
                </template>
              </tbody>
            </table>
          </div>
          <div slot="footer" />
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import TopWidget from '~/components/shack/TopWidget.vue'
import Activity from '~/components/shack/Activity.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import EmptyActivity from '~/components/shack/EmptyActivity.vue'
import FeedTable from '~/components/shack/FeedTable.vue'
import Booking from '~/components/shack/Booking.vue'

import { mapState } from 'vuex'
import mz from 'moment-timezone'

export default {
  layout: 'ShackDash',
  components: {
    Activity,
    TopWidget,
    Booking,
    FeedTable,
    EmptyActivity,
    SectionTitle,
    MainTitle
  },
  async asyncData({ error, $activity, $resource, store, $moment }) {
    try {
      const query = `?from=${$moment().format('YYYY-MM-DD')}&to=${$moment()
        .add(1, 'days')
        .format('YYYY-MM-DD')}`

      const payload = {
        from: $moment()
          .startOf('day')
          .format('YYYY-MM-DD'),
        to: $moment()
          .endOf('day')
          .format('YYYY-MM-DD')
      }

      const activities = await $activity.getAllActivities()
      store.commit('activity/setActivities', activities)

      const bookings = await $resource.getBookingByDate(payload)
      store.commit('activity/setActivityBookings', bookings.data)

      const summaries = await $activity.getSummary(query)
      const data = {
        checkins: summaries['check-ins'],
        events: summaries['events'],
        bookings: summaries['bookings'],
        unpaidInvoices: summaries['unpaid-invoices']
      }
      store.commit('activity/setSummary', data)
    } catch (err) {
      error({
        statusCode: err.status || 404,
        message: err.response
          ? JSON.stringify(err.response.data.errors)
          : err.message
      })
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace,
      summary: state => state.activity.summary,
      activities: state => state.activity.activities.data,
      bookings: state => state.activity.bookings.data
    })
  },
  methods: {
    getTimestamp(activity) {
      return mz(activity.created_at)
        .tz(this.space.timezone)
        .fromNow()
    }
  }
}
</script>
<style>
</style>
