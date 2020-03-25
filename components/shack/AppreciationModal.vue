<template>
  <div>
    <b-modal
      id="appreciation"
      title="Send Appreciation Email to Attendees"
      hide-footer
    >
      <b-form @submit.prevent="sendAppreciation" >
        <b-form-group description="Images will be attached to the email sent out to attendees">
          <MultiUploadButton
            v-model="images"
            service="event"
            label="Upload Images (<500KB)"
          />
        </b-form-group>
        <b-button type="submit">Send</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import MultiUploadButton from '@/components/shack/MultiUploadButton.vue'
import { displayError } from '@/util/errors'

export default {
  name: 'AppreciationModal',
  components: {
    MultiUploadButton
  },
  data: () => ({
    images: []
  }),
  methods: {
    sendAppreciation() {
      if (this.images.length < 2) {
        this.$bvToast.toast('At least two images are required', {
          title: 'Error',
          variant: 'danger',
          solid: true
        })
      }

      this.$event
        .sendAppreciation(this.$route.params.id, { images: this.images })
        .then(res => {
          this.$bvToast.toast('Email sent successfully', {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.$bvModal.hide('appreciation')
        })
        .catch(e => {
          displayError(e, this)
        })
    }
  }
}
</script>

<style>
</style>
