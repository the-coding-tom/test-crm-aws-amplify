<template>
  <h3 class="page-title"><span>{{ title }}</span> <b v-show="subtitle">•</b> {{ subtitle }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    }
  }
}
</script>
