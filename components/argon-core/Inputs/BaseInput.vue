<template>
  <div class="form-group">
    <slot name="label">
      <label
        v-if="label"
        :class="labelClasses">
        {{ label }}
      </label>
    </slot>
    <div
      :class="[
        {'input-group': hasIcon},
        {'focused': focused},
        {'input-group-alternative': alternative},
        {'has-label': label || $slots.label},
        inputGroupClasses
    ]">
      <div
        v-if="prependIcon || $slots.prepend"
        class="input-group-prepend">
        <span class="input-group-text">
          <slot name="prepend">
            <i :class="prependIcon"/>
          </slot>
        </span>
      </div>
      <slot v-bind="slotData">
        <input
          :value="value"
          :type="type"
          v-bind="$attrs"
          :valid="!error"
          :required="required"
          :class="[{'is-valid': valid === true}, {'is-invalid': error}, inputClasses]"
          class="form-control"
          v-on="listeners">
      </slot>
      <div
        v-if="appendIcon || $slots.append"
        class="input-group-append">
        <span class="input-group-text">
          <slot name="append">
            <i :class="appendIcon"/>
          </slot>
        </span>
      </div>
      <slot name="infoBlock"/>
      <slot name="error">
        <div
          v-if="error"
          class="invalid-feedback"
          style="display: block;">
          {{ error }}
        </div>
      </slot>
      <slot name="success">
        <div
          v-if="!error && valid"
          class="valid-feedback">
          {{ successMessage }}
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    required: {
      type: Boolean,
      description: 'Whether input is required (adds an asterix *)',
      default: true
    },
    group: {
      type: Boolean,
      description:
        'Whether input is an input group (manual override in special cases)',
      default: null
    },
    valid: {
      type: Boolean,
      description: 'Whether is valid',
      default: undefined
    },
    alternative: {
      type: Boolean,
      description: 'Whether input is of alternative layout',
      default: false
    },
    label: {
      type: String,
      description: 'Input label (text before input)',
      default: null
    },
    error: {
      type: String,
      description: 'Input error (below input)',
      default: null
    },
    successMessage: {
      type: String,
      description: 'Input success message',
      default: 'Looks good!'
    },
    labelClasses: {
      type: String,
      description: 'Input label css classes',
      default: 'form-control-label'
    },
    inputClasses: {
      type: String,
      description: 'Input css classes',
      default: null
    },
    inputGroupClasses: {
      type: String,
      description: 'Input group css classes',
      default: null
    },
    value: {
      type: [String, Number],
      description: 'Input value',
      default: null
    },
    type: {
      type: String,
      description: 'Input type',
      default: 'text'
    },
    appendIcon: {
      type: String,
      description: 'Append icon (right)',
      default: null
    },
    prependIcon: {
      type: String,
      description: 'Prepend icon (left)',
      default: null
    }
  },
  data() {
    return {
      focused: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur
      }
    },
    slotData() {
      return {
        focused: this.focused,
        error: this.error,
        ...this.listeners
      }
    },
    hasIcon() {
      const { append, prepend } = this.$slots
      return (
        append !== undefined ||
        prepend !== undefined ||
        this.appendIcon !== undefined ||
        this.prependIcon !== undefined ||
        this.group
      )
    }
  },
  methods: {
    updateValue(evt) {
      let value = evt.target.value
      this.$emit('input', value)
    },
    onFocus(evt) {
      this.focused = true
      this.$emit('focus', evt)
    },
    onBlur(evt) {
      this.focused = false
      this.$emit('blur', evt)
    }
  }
}
</script>
<style>
</style>
