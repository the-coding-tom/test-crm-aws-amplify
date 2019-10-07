<template>
  <div 
    :class="{ 'timeline-inverted': inverted }" 
    class="timeline-block">
    <slot name="badge">
      <span 
        :class="`badge-${badgeType}`" 
        class="timeline-step">
        <i :class="badgeIcon"/>
      </span>
    </slot>
    <div class="timeline-content">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TimeLineItem',
  props: {
    inverted: Boolean,
    title: String,
    badgeType: {
      type: String,
      default: 'success'
    },
    badgeIcon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
</style>
