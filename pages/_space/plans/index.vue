<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Plans" 
          subtitle="View All Plans" />
        <b-button
          :to="{name:'space-plans-add'}"
          squared
          variant="primary"
          class="text-white"
        >Add New Plan</b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <Table :plans="plans" />
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
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import Table from '@/components/shack/StripedTable'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    Table
  },
  async asyncData({ store, $plan, error }) {
    await $plan
      .getAllPlan()
      .then(({ data }) => {
        store.commit('plans/setPlans', data)
      })
      .catch(err => {
        error({
          statusCode: err.statusCode,
          message: err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message
        })
      })
  },
  computed: {
    ...mapState({
      plans: state => state.plans.plans.data,
      meta: state => state.plans.plans.meta,
      links: state => state.plans.plans.links
    })
  },
  methods: {
    next() {
      const { next } = this.links
      this.$plan
        .getAllPlan(next)
        .then(({ data }) => {
          store.commit('plans/setPlans', data)
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    prev() {
      const { prev } = this.links
      this.$plan
        .getAllPlan(prev)
        .then(({ data }) => {
          store.commit('plans/setPlans', data)
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>
