<template>
  <div>
    <div
      id="preview"
      class="mr-b-20">
      <img
        v-for="u in url"
        v-if="u"
        :key="u.id"
        :src="u" >
    </div>
    <div class="bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0">
      <button class="btn"><i class="fa fa-paperclip mr-r-10"/> {{ label }}</button>
      <input
        :name="name"
        type="file"
        accept="image/*"
        multiple
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
    },
    url: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      publicUrl: null
    }
  },
  methods: {
    async onFileChange(e) {
      const files = e.target.files

      if (!files) {
        return
      }

      this.url = []

      for (var i = 0; i < files.length; i++) {
        if (files[i].size > 500000) {
          this.$bvToast.toast('Each file size must not be greater than 500kb', {
            variant: 'warning'
          })
          return
        }

        var file = files[i]

        let mime = file.type
        this.url.push(URL.createObjectURL(file))

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
      }
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
  margin-right: 30px;
}
</style>
