<template>
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
              subtitle="Usage Stream on Mobile Platform"/>
          </div>
        </div>
        <div class="m-n25 sh-activity">
          <table class="table table-hover table-striped">
            <tbody>
              <EmptyActivity v-if="data.length == 0" />
              <template v-else>
                <Activity
                  v-for="activity in data"
                  :key="activity.id"
                  :date="getTimestamp(activity)">
                  {{ activity.description }}
                </Activity>
              </template>
            </tbody>
          </table>
        </div>
        <div
          slot="footer"
          class="text-center">
          <b-button
            variant="link"
            class="mr-r-30"
            @click="prev"
          >&lsaquo; Previous</b-button>  <b-button
            variant="link"
            class="mr-l-30"
            @click="next"
          > Next &rsaquo;</b-button>
        </div>
      </card>
    </div>
  </div>

</template>
<script>
import Activity from '~/components/shack/Activity.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import EmptyActivity from '~/components/shack/EmptyActivity.vue'
import FeedTable from '~/components/shack/FeedTable.vue'
import Booking from '~/components/shack/Booking.vue'
import mz from 'moment-timezone'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  layout: 'ShackDash',
  async asyncData({ $activity, error }) {
    return await $activity
      .getAllActivities()
      .then(({ data, meta, links }) => {
        return {
          data,
          links,
          meta
        }
      })
      .catch(e => {
        const message = e.response
          ? `${e.response.data.message} ~ ${JSON.stringify(
              e.response.data.errors
            )}`
          : e.message
        error({ statusCode: e.statusCode, message })
      })
  },
  components: {
    Activity,
    Booking,
    FeedTable,
    EmptyActivity,
    SectionTitle,
    MainTitle
  },
  data() {
    return {
      data: []
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    getTimestamp(activity) {
      return mz(activity.created_at)
        .tz(this.space.timezone)
        .fromNow()
    },
    next() {
      this.getActivity(this.links.next)
    },
    prev() {
      this.getActivity(this.links.prev)
    },
    getActivity(link) {
      this.$axios
        .$get(link)
        .then(res => {
          this.data = res.data
          this.meta = res.meta
          this.links = res.links
        })
        .catch(e => {
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          this.$bvToast.toast(message, {
            variant: 'error'
          })
        })
    }
  }
}
</script>
