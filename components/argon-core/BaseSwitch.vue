<template>
  <label
    :class="switchClass"
    class="custom-toggle">
    <input
      v-model="model"
      type="checkbox">
    <span
      :data-label-off="offText"
      :data-label-on="onText"
      class="custom-toggle-slider rounded-circle"/>
  </label>
</template>
<script>
export default {
  name: 'BaseSwitch',
  props: {
    value: {
      type: [Array, Boolean],
      default: null
    },
    type: {
      type: String,
      default: null
    },
    onText: {
      type: String,
      default: 'Yes'
    },
    offText: {
      type: String,
      default: 'No'
    }
  },
  computed: {
    switchClass() {
      let baseClass = 'custom-toggle-'
      if (this.type) {
        return baseClass + this.type
      }
      return ''
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    triggerToggle() {
      this.model = !this.model
    }
  }
}
</script>
<style>
</style>
