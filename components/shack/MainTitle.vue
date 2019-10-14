<template>
  <h1 class="page-title"><span>{{ title }}</span> <b v-show="subtitle">•</b> {{ subtitle }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  }
}
</script>
