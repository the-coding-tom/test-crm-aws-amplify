<template>
  <div>
    <div 
      id="preview" 
      class="mr-b-20">
      <img 
        v-if="url" 
        :src="url" >
    </div>
    <div class="bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0">
      <button class="btn"><i class="fa fa-paperclip mr-r-10"/> {{ label }}</button>
      <input 
        :name="name" 
        type="file" 
        @change="onFileChange" >
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'label'],
  data() {
    return {
      url: null
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
    }
  }
}
</script>
<style>
#preview {
}

#preview img {
  max-width: 200px;
}
</style>
