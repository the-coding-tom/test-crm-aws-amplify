<template>
  <div
    role="tablist"
    class="sh-accordion">
    <b-form-group/>
    <b-form-radio-group
      v-model="selectedPlan"
      stacked
      @change="changePlan">
      <b-form-radio
        v-for="plan in plans"
        :key="plan.uuid"
        :value="plan.uuid">
        <div class="sh-accordion-item">
          <b-link
            class="d-flex justify-content-between"
          >
            <div
              class="sh-acc-title"
              @click="changeAccordion(plan.uuid)">{{ plan.name }} ({{ space.currency_symbol }} {{ plan.price_per_cycle }} {{ getCycleDuration(plan.cycle_duration) }}) <i class="fa fa-angle-down"/></div>
          </b-link>
          <b-collapse
            :id="plan.uuid"
            :visible="plan.uuid == accordion"
            accordion="my-accordion"
            role="tabpanel">
            {{ plan.description }}
          </b-collapse>
        </div>

      </b-form-radio>
    </b-form-radio-group>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    plans: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    selectedPlan: '',
    accordion: ''
  }),
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  mounted() {
    this.selectedPlan = this.plans[0].uuid
    this.$emit('input', this.selectedPlan)
    this.accordion = this.selectedPlan
  },
  methods: {
    getCycleDuration(cycle) {
      if (cycle >= 12) {
        return '/yr'
      }

      return '/m'
    },
    changeAccordion(accordion) {
      this.accordion = accordion
    },
    changePlan(e) {
      this.$emit('input', e)
    }
  }
}
</script>
