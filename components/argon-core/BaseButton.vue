<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : ''"
    :disabled="disabled || loading"
    :class="[
      { 'rounded-circle': round },
      { 'btn-block': block },
      { 'btn-wd': wide },
      { 'btn-icon btn-fab': icon },
      { [`btn-${type}`]: type && !outline },
      { [`btn-${size}`]: size },
      { [`btn-outline-${type}`]: outline && type },
      { 'btn-link': link },
      { disabled: disabled && tag !== 'button' }
    ]"
    class="btn"
    @click="handleClick"
  >
    <slot name="loading">
      <i
        v-if="loading"
        class="fas fa-spinner fa-spin"/>
    </slot>
    <slot/>
  </component>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      description: 'Button html tag'
    },
    round: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Boolean,
      default: true
    },
    block: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: true
    },
    wide: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default',
      description: 'Button type (primary|secondary|danger etc)',
      default: null
    },
    nativeType: {
      type: String,
      default: 'button',
      description: 'Button native type (e.g button, input etc)',
      default: null
    },
    size: {
      type: String,
      default: '',
      description: 'Button size (sm|lg)'
    },
    outline: {
      type: Boolean,
      description: 'Whether button is outlined (only border has color)',
      default: false
    },
    link: {
      type: Boolean,
      description: 'Whether button is a link (no borders or background)',
      default: false
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /deep/ i {
    padding: 0 3px;
  }
}
</style>
