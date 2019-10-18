<template>
  <div>
    <b-form @submit.prevent="addCategory">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Setup Category" />
          <b-button 
            :disabled="loading" 
            class="btn btn-primary text-white" 
            type="submit">
            <i class="fa fa-save" /> Add Category
          </b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card class="col-md-6">
            <h3 class="mb-4 ml--2">Add New Category</h3>
            <div class="row">
              <div>
                <div class="row pd-r-20">
                  <base-input
                    v-model="name"
                    class="col-md-12"
                    label="Name"
                    placeholder="Fruit drink"
                    required
                  />
                  <b-form-group 
                    label="Description" 
                    class="col-md-12">
                    <b-form-textarea
                      v-model="description"
                      class="col-md-12"
                      placeholder="Drink for everyone"
                      rows="3"
                    />
                  </b-form-group>
                </div>
              </div>
            </div>
          </card>
        </div>
        <b-button 
          class="text-primary mb-2" 
          variant="transparent" 
          @click="$router.go(-1)">
          <i class="ti-angle-left" /> Back
        </b-button>
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
      loading: false,
      name: '',
      description: ''
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    addCategory() {
      const { name, description } = this

      this.loading = !this.loading

      this.$eatry
        .addOneCategory({ name, description })
        .then(({ data }) => {
          this.loading = !this.loading

          this.$bvToast.toast(`${name} add successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          setTimeout(() => {
            this.$router.push({ name: 'space-eatry-categories' })
          }, 3000)
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
