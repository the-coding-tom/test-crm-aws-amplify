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
                <h2
                  class="mr-b-20 text-gray"
                >{{ plan.price_per_cycle }} USD / {{ plan.cycle_duration }} month(s)</h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="9">
                <p>{{ plan.description }}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="9">
                <h3 class="line">Plan Settings</h3>
                <b-row>
                  <b-col 
                    class="py-2" 
                    md="4">
                    <h3 class="text-gray">Basic Price</h3>
                    <span>$35.00 / month</span>
                  </b-col>
                  <b-col 
                    class="py-2" 
                    md="4">
                    <h3 class="text-gray">Cancellation Notice</h3>
                    <span>$35.00 / month</span>
                  </b-col>
                  <b-col 
                    class="py-2" 
                    md="4">
                    <h3 class="text-gray">Minimum Commitment</h3>
                    <span>$35.00 / month</span>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row md="9">
              <b-col md="9">
                <h3 class="line">Private Signup Link</h3>
                <p>
                  To let someone sign up for this plan send them the
                  <a href>link below</a>
                </p>
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
      space: state => state.space.currentSpace.subdomain,
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
