<template>
  <div 
    role="tablist" 
    class="sh-accordion">
    <div class="sh-accordion-item">
      <a 
        v-b-toggle.accordion-1 
        block 
        href="javascript:void(0)" 
        class="d-flex justify-content-between">
        <div class="sh-acc-title">Trial Membership ($0.00/yr) <i class="fa fa-angle-down"/></div>
        <b-form-radio name="plan">Select this plan</b-form-radio>
      </a>
      <b-collapse 
        id="accordion-1" 
        visible 
        accordion="my-accordion" 
        role="tabpanel">
        {{ text }}
      </b-collapse>
    </div>
		
    <div class="sh-accordion-item">
      <a 
        v-b-toggle.accordion-2 
        block 
        href="javascript:void(0)" 
        class="d-flex justify-content-between">
        <div class="sh-acc-title">The Startupper ($15.00/yr) <i class="fa fa-angle-down"/></div>
        <b-form-radio name="plan">Select this plan</b-form-radio>
      </a>
      <b-collapse 
        id="accordion-2" 
        accordion="my-accordion" 
        role="tabpanel">
        {{ text }}
      </b-collapse>
    </div>
		
    <div class="sh-accordion-item">
      <a 
        v-b-toggle.accordion-3 
        block 
        href="javascript:void(0)" 
        class="d-flex justify-content-between">
        <div class="sh-acc-title">The Marketeer ($25.00/yr) <i class="fa fa-angle-down"/></div>
        <b-form-radio name="plan">Select this plan</b-form-radio>
      </a>
      <b-collapse 
        id="accordion-3" 
        accordion="my-accordion" 
        role="tabpanel">
        {{ text }}
      </b-collapse>
    </div>
		
    <div class="sh-accordion-item">
      <a 
        v-b-toggle.accordion-4 
        block 
        href="javascript:void(0)" 
        class="d-flex justify-content-between">
        <div class="sh-acc-title">The Entrepreneur ($35.00/yr) <i class="fa fa-angle-down"/></div>
        <b-form-radio name="plan">Select this plan</b-form-radio>
      </a>
      <b-collapse 
        id="accordion-4" 
        accordion="my-accordion" 
        role="tabpanel">
        {{ text }}
      </b-collapse>
    </div>
		
    <div class="sh-accordion-item">
      <a 
        v-b-toggle.accordion-5 
        block 
        href="javascript:void(0)" 
        class="d-flex justify-content-between">
        <div class="sh-acc-title">The Executive ($50.00/yr) <i class="fa fa-angle-down"/></div>
        <b-form-radio name="plan">Select this plan</b-form-radio>
      </a>
      <b-collapse 
        id="accordion-5" 
        accordion="my-accordion" 
        role="tabpanel">
        {{ text }}
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        'For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100.'
    }
  }
}
</script>
