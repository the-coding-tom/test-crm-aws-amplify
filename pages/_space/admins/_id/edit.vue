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
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card class="col-md-12">
            <h3 class="mr-b-20">Update Admin's Details</h3>
            <b-row>
              <base-input
                v-model="name"
                class="col-md-6"
                label="Name"
                placeholder="Admin's Name"
                required
              />
            </b-row>
            <b-row>
              <base-input
                v-model="email"
                class="col-md-6"
                label="Email"
                required
                placeholder="user@shack15.com"
              />
            </b-row>
            <b-row>
              <base-input
                v-model="password"
                class="col-md-6"
                label="Password"
                type="password"
                required
                placeholder="********"
                autocomplete="off"
              />
            </b-row>
            <b-button
              :disabled="loading"
              class="btn btn-primary text-white"
              type="submit"
            >Update Adminstrator</b-button>
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
  async asyncData({ $admin, error, params }) {
    const { id } = params

    return await $admin
      .getAnAdmin(id)
      .then(({ data }) => {
        return {
          id,
          name: data.name,
          email: data.email
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
      password: '',
      loading: false
    }
  },
  methods: {
    updateAdmin() {
      const { id, name, email, password } = this

      this.loading = !this.loading

      this.$admin
        .updateAnAdmin(id, { name, email, password })
        .then(({ data }) => {
          this.$bvToast.toast(`Admin updated successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          setTimeout(() => {
            this.loading = !this.loading
            this.$router.push({
              name: 'space-admins'
            })
          }, 3000)
        })
        .catch(err => {
          this.$bvToast.toast(err, {
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
