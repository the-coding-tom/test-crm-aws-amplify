<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Wellness"/>
        <nuxt-link
          :to="{'name': 'space-wellness-add'}"
          class="btn btn-primary">Add Session</nuxt-link>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <client-only>
            <full-calendar :events="getEvents()" />
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
  async asyncData({ store, $wellness, error }) {
    await $wellness.getAllWellnessSessions().then(({ data }) => {
      store.commit('wellness/setSessions', data)
    })
  },
  computed: {
    ...mapState({
      sessions: state => state.wellness.sessions.data,
      space: state => state.space.currentSpace
    })
  },
  methods: {
    getEvents() {
      const { sessions } = this
      const { $moment } = this

      return _.map(sessions, o => {
        return {
          title: o.name,
          start: $moment(o.start_date).format('YYYY-MM-DD'),
          end: $moment(o.end_date).format('YYYY-MM-DD'),
          backgroundColor: `${o.wellness_category.color}1A`,
          textColor: o.wellness_category.color,
          borderColor: o.wellness_category.color
        }
      })
    }
  }
}
</script>

<style lang="css">
.fc-title {
  color:grey !important;
}
</style>
