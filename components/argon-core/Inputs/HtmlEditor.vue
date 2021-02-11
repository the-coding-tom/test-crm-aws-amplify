<template>
  <div>
    <client-only>
      <!-- <editor
        v-model="text"
        :options="editorOptions"
        :initial-value="text"
        initial-edit-type="wysiwyg"
        preview-style="none"
      /> -->
      <editor
        ref="toastuiEditor"
        :initial-value="editorText"
        v-model="text"
        :options="editorOptions"
        initial-edit-type="wysiwyg"
        preview-style="tab"
        @change="onEditorChange"
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
    },
    editorText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editorOptions: {
        useDefaultHTMLSanitizer: false,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
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
          //'table',
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
  },
  methods: {
    onEditorChange() {
      let html = this.$refs.toastuiEditor.invoke('getHtml')
      let desc = this.$refs.toastuiEditor.invoke('getValue')
      let markdown = this.$refs.toastuiEditor.invoke('getMarkdown')
      this.text = markdown
    }
  }
}
</script>

<style>
</style>
