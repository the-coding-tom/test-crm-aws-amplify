<template>
  <div>
    <client-only>
      <editor
        v-model="text"
        :options="editorOptions"
        mode="wysiwyg"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editorOptions: {
        usageStatistics: false,
        hideModeSwitch: true
      },
      text: this.value
    }
  },
  watch: {
    text() {
      this.$emit('input', this.text)
    }
  }
}
</script>

<style>
</style>
