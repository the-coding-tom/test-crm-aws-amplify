<template>
  <div 
    role="tablist" 
    class="sh-accordion">
    <div 
      v-for="plan in plans" 
      :key="plan.uuid"
      class="sh-accordion-item">
      <a
        v-b-toggle.accordion-1
        block
        href="javascript:void(0)"
        class="d-flex justify-content-between"
      >
        <div class="sh-acc-title">
          {{ plan.name }} ({{ space.currency_symbol }} {{ plan.price_per_cycle }} {{ getCycleDuration(plan.cycle_duration) }}) <i class="fa fa-angle-down" />
        </div>
        <b-form-radio 
          v-model="selectedPlan"
          :value="plan.uuid"
          name="plan">Select this plan</b-form-radio>
      </a>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        {{ plan.description }}
      </b-collapse>
    </div>
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
