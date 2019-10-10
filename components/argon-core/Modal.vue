<template>
  <SlideYUpTransition :duration="animationDuration">
    <div
      v-show="show"
      :class="[{'show d-block': show}, {'d-none': !show}, {'modal-mini': type === 'mini'}]"
      :aria-hidden="!show"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      @click.self="closeModal">

      <div
        :class="[{'modal-notice': type === 'notice', [`modal-${size}`]: size}, modalClasses]"
        class="modal-dialog modal-dialog-centered">
        <div
          :class="[gradient ? `bg-gradient-${gradient}` : '',modalContentClasses]"
          class="modal-content">

          <div
            v-if="$slots.header"
            :class="[headerClasses]"
            class="modal-header">
            <slot name="header"/>
            <slot name="close-button">
              <button
                v-if="showClose"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="closeModal">
                <span :aria-hidden="!show">×</span>
              </button>
            </slot>
          </div>

          <div
            :class="bodyClasses"
            class="modal-body">
            <slot/>
          </div>

          <div
            v-if="$slots.footer"
            :class="footerClasses"
            class="modal-footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>

    </div>
  </SlideYUpTransition>
</template>
<script>
import { SlideYUpTransition } from 'vue2-transitions'

export default {
  name: 'Modal',
  components: {
    SlideYUpTransition
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: '',
      validator(value) {
        let acceptedValues = ['', 'notice', 'mini']
        return acceptedValues.indexOf(value) !== -1
      },
      description: 'Modal type (notice|mini|"") '
    },
    modalClasses: {
      type: [Object, String],
      description: 'Modal dialog css classes',
      default: null
    },
    size: {
      type: String,
      description: 'Modal size',
      validator(value) {
        let acceptedValues = ['', 'sm', 'lg']
        return acceptedValues.indexOf(value) !== -1
      },
      default: null
    },
    modalContentClasses: {
      type: [Object, String],
      description: 'Modal dialog content css classes',
      default: null
    },
    gradient: {
      type: String,
      description: 'Modal gradient type (danger, primary etc)',
      default: null
    },
    headerClasses: {
      type: [Object, String],
      description: 'Modal Header css classes',
      default: null
    },
    bodyClasses: {
      type: [Object, String],
      description: 'Modal Body css classes',
      default: null
    },
    footerClasses: {
      type: [Object, String],
      description: 'Modal Footer css classes',
      default: null
    },
    animationDuration: {
      type: Number,
      default: 500,
      description: 'Modal transition duration'
    }
  },
  watch: {
    show(val) {
      let documentClasses = document.body.classList
      if (val) {
        documentClasses.add('modal-open')
      } else {
        documentClasses.remove('modal-open')
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false)
      this.$emit('close')
    }
  }
}
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
