<template>
  <client-only>
    <vue-editor 
      ref="editor" 
      v-model="text" 
      @change="onEditorChange" />
  </client-only>
</template>
<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },
  props: {
    value: String
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onEditorChange(e) {
      console.log(e)
      let html = this.$refs.editor.invoke('getHtml')
      let desc = this.$refs.editor.invoke('getValue')
      let markdown = this.$refs.editor.invoke('getMarkdown')
      this.text = markdown
    }
  }
}
</script>
