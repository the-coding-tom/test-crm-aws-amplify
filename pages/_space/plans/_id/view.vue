<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Plans" 
          subtitle="View Plan" />
        <b-button 
          :to="{name:'space-plans-id-edit', params:{id}}" 
          squared 
          variant="primary">
          <i class="fa fa-pen" /> Edit Plan
        </b-button>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <b-container>
            <b-row>
              <b-col md="6">
                <h4 class="mr-b-20">{{ plan.name }}</h4>
              </b-col>
              <b-col md="3">
                <h2 class="mr-b-20 text-gray">
                  <span>
                    {{ space.currency_symbol }} {{ plan.price_per_cycle }} /
                    <span
                      v-if="plan.cycle_duration === 12"
                    >year</span>
                    <span v-else>{{ plan.cycle_duration }} month(s)</span>
                  </span>
                </h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="9">
                <p>{{ plan.description }}</p>
              </b-col>
            </b-row>
          </b-container>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle
  },
  async asyncData({ store, $plan, params, error }) {
    const { id } = params

    await $plan
      .getPlan(id)
      .then(({ data: { data } }) => {
        store.commit('plans/setOnePlan', data)
      })
      .catch(({ response }) => {
        error({
          statusCode: response.status,
          message: JSON.stringify(response.data.errors)
        })
      })

    return {
      id
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace,
      plan: state => state.plans.currentPlan
    })
  }
}
</script>

<style lang="css" scoped>
.line {
  padding-bottom: 8px;
  border-bottom: 2px solid #eeeeee;
}
</style>
