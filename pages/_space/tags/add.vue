<template>
  <div>
    <b-form @submit.prevent="addTag">
      <base-header
        class="pb-6"
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Setup Tag" />
          <b-button
            :disabled="loading"
            class="btn btn-primary text-white"
            type="submit">Add Tag</b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card class="col-md-6">
            <h3 class="mr-b-20">Add New Tag</h3>
            <div class="row pd-r-20">
              <base-input
                v-model="name"
                class="col-md-6"
                label="Name of Tag"
                placeholder="ux"
                required
              />
              <base-input
                v-model="type"
                class="col-md-6"
                label="Tag Type"
                required
                placeholder="profile_interests"
              />
            </div>
          </card>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle
  },
  data() {
    return {
      name: '',
      type: '',
      loading: false
    }
  },
  methods: {
    addTag() {
      const { name, type } = this

      this.loading = !this.loading

      this.$tag
        .addTag({ name, type })
        .then(({ data }) => {
          this.$bvToast.toast(`Tag ~${name}~ added successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.loading = !this.loading
          this.$router.push({
            name: 'space-tags'
          })
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

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
