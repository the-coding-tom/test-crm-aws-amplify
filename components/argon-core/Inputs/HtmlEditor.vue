<template>
  <div>
    <client-only>
      <editor
        v-model="text"
        :options="editorOptions"
        initial-edit-type="wysiwyg"
        preview-style="tab"
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
        hideModeSwitch: true,
        toolbarItems: [
          'heading',
          'bold',
          // 'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock'
        ]
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
