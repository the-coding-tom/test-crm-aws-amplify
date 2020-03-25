<template>
  <div>
    <b-form @submit.prevent="updateAdmin">
      <base-header
        class="pb-6"
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Adminstrators"
            subtitle="Update Admin" />
          <b-button
            :disabled="loading"
            class="btn btn-primary text-white"
            type="submit"
          >Update Adminstrator</b-button>
        </div>
      </base-header>



      <div class="container-fluid mt--6">

        <div class="row">
          <div class="col-md-6">
            <card>
              <div class="d-flex align-items-center mr-b-20">
                <img
                  :src="url ? url : '/img/placeholder.jpg'"
                  class="mr-r-20 rounded-circle avatar-xl">
                <div>
                  <div class="upload-btn-wrapper">
                    <button class="btn btn-outline-primary sh-btn-outline"> UPLOAD PHOTO </button>
                    <input
                      type="file"
                      @change="onFileChange">
                  </div>
                </div>
              </div>
              <div class="row">

                <base-input
                  v-model="first_name"
                  class="col-md-6"
                  label="First Name"
                  placeholder="First Name"/>
                <base-input
                  v-model="last_name"
                  :required="false"
                  class="col-md-6"
                  label="Last Name"
                  placeholder="Last Name"/>
                <base-input
                  v-model="password"
                  type="password"
                  class="col-md-6"
                  label="Password"
                  placeholder="********"/>

              </div>
            </card>
          </div>
        </div>

      </div>
    </b-form>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import UploadButton from '~/components/shack/UploadButton.vue'
import axios from 'axios'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    UploadButton
  },
  async asyncData({ $admin, error, params }) {
    const { id } = params

    return await $admin
      .getAnAdmin(id)
      .then(({ data }) => {
        return {
          id,
          first_name: data.profile && data.profile.first_name,
          last_name: data.profile && data.profile.last_name,
          url: data.profile && data.profile.picture
        }
      })
      .catch(err => {
        error({
          statusCode: err.status || 404,
          message: err
        })
      })
  },
  data() {
    return {
      url: null,
      loading: false,
      first_name: '',
      last_name: '',
      picture: '',
      email: '',
      password: '',
      service: 'images'
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
      this.picture = upload.public_url

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
    },
    updateAdmin() {
      const { id, first_name, last_name, picture } = this

      this.loading = !this.loading

      this.$admin
        .updateAnAdmin(id, { first_name, last_name, picture })
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast(`Profile updated successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.$router.push({
            name: 'space-admins'
          })
        })
        .catch(e => {
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
          this.loading = !this.loading
        })
    }
  }
}
</script>
