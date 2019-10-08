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
        accept="image/*"
        @change="onFileChange" >
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    service: {
      type: String,
      default: 'images'
    }
  },
  data() {
    return {
      url: null,
      publicUrl: null
    }
  },
  methods: {
    async onFileChange(e) {
      const file = e.target.files[0]

      if (!file) {
        return
      }

      if (file.size > 500000) {
        this.$bvToast.toast('File size must not be greater than 500kb', {
          variant: 'warning'
        })
        return
      }

      let mime = file.type

      this.url = URL.createObjectURL(file)

      let upload = await this.getSignedUrl(mime)
      this.publicUrl = upload.public_url

      this.$bvToast.toast('Uploading image. Please wait...')

      //upload image here
      let uploadUrl = await this.uploadUrl(upload.signed_url, file, mime)
        .then(res => {
          this.$emit('input', this.publicUrl)

          this.$bvToast.toast('Image uploaded successfully', {
            variant: 'success',
            solid: true
          })
        })
        .catch(e => {
          this.$bvToast.toast(e.message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    getSignedUrl(mime) {
      const { service } = this

      return this.$images
        .getSignedUrl(service, mime)
        .then(({ data }) => {
          return data.data
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    uploadUrl(url, file, mime) {
      return axios
        .put(url, file, {
          headers: {
            'Content-Type': mime
          }
        })
        .then(res => {
          return res
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data), {
            variant: 'danger',
            solid: true
          })
        })
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
