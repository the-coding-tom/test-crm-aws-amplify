<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Wellness Bookings"
        />
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <client-only>
            <full-calendar
              :events="sessions"
              :right="null"
              :views="views"
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
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  data: () => ({
    sessions: []
  }),
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    dateChange({ startDate, endData }) {
      const date = this.$moment(startDate).format('YYYY-MM-DD')
      const dayOfWeek = this.$moment(startDate).day()
      let sessions = []

      this.$wellness
        .getWellnessByDate(date)
        .then(({ data }) => {
          _.map(data.data, o => {
            console.log(data.data)
            return _.each(o.slots, v => {
              if (v.day == dayOfWeek) {
                sessions.push({
                  title: o.name,
                  start: this.$moment(`${date} ${v.start}:00`).format(
                    'YYYY-MM-DD HH:mm:ss'
                  ),
                  end: this.$moment(`${date} ${v.start}:00`)
                    .add(v.duration, 'minutes')
                    .format('YYYY-MM-DD HH:mm:ss'),
                  backgroundColor: o.wellness_category.color,
                  extendedProps: o
                })
              }
            })
          })

          this.sessions = sessions
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            variant: 'dange'
          })
        })
    },
    eventClick(event) {
      this.$router.push({
        name: 'space-wellness-bookings-id',
        params: {
          id: event.extendedProps.id
        }
      })
    }
  }
}
</script>
