<template>
  <fade-transition>
    <div
      v-if="visible"
      :class="[
        `alert-${type}`,
        { 'alert-dismissible': dismissible }
      ]"
      class="alert"
      role="alert"
    >
      <slot v-if="!dismissible"/>
      <template v-else>

        <template v-if="icon || $slots.icon">
          <slot name="icon">
            <span 
              class="alert-icon" 
              data-notify="icon">
              <i :class="icon"/>
            </span>
          </slot>
        </template>

        <span class="alert-text"> <slot/> </span>

        <slot name="dismiss-icon">
          <button 
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="dismissAlert">
            <span aria-hidden="true">×</span>
          </button>
        </slot>
      </template>
    </div>
  </fade-transition>
</template>
<script>
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'BaseAlert',
  components: {
    FadeTransition
  },
  props: {
    type: {
      type: String,
      default: 'default',
      description: 'Alert type'
    },
    dismissible: {
      type: Boolean,
      default: false,
      description: 'Whether alert is dismissible (closeable)'
    },
    icon: {
      type: String,
      default: '',
      description: 'Alert icon to display'
    }
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    dismissAlert() {
      this.visible = false
    }
  }
}
</script>
