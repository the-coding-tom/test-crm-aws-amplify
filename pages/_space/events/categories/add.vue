<template>
  <div>
    <b-form @submit.prevent="addCategory">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between py-4">
          <MainTitle title="Add New Categories" />
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">New Category</h3>
            <div class="row">
              <base-input
                v-model="name"
                class="col-md-3"
                label="Name"
                required
                placeholder="Name of Category"
              />
              <base-input
                v-model="color"
                class="col-md-3"
                required
                label="Color Tag"
                placeholder="#4C4D4F"
              />
              <div class="form-group col-md-3">
                <label>&nbsp;</label>
                <br >
                <b-button
                  :disabled="loading"
                  type="submit"
                  outline
                  class="sh-dashbtn"
                >Add This Category</b-button>
              </div>
            </div>

            <div class="mr-tb-80">
              <div class="m-n25">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr 
                      v-for="(category, i) in categories" 
                      :key="i">
                      <td>
                        <i 
                          :style="{color: category.color}" 
                          class="fa fa-circle" />
                        {{ category.name }}
                      </td>
                      <td>{{ category.color }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  async asyncData({ store, $event }) {
    await $event.getEventCategories().then(({ data }) => {
      store.commit('events/setCategories', data)
    })
  },
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  data: () => ({
    name: null,
    color: null,
    loading: false
  }),
  computed: {
    ...mapState({
      categories: state => state.events.categories
    })
  },
  methods: {
    addCategory() {
      const { name, color } = this

      this.$event
        .addCategory({ name, color })
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast(`Category added successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.loading = !this.loading
          this.$store.commit('events/addCategory', { name, color })
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>
<style>
</style>
