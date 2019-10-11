<template>
  <div>
    <b-form @submit.prevent="addCategory">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between py-4">
          <MainTitle title="Add New Categories" />
          <!-- <base-button type="primary">Publish Category</base-button> -->
          <!-- <b-button
            type="submit"
            variant="primary">Publish Category</b-button> -->
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">New Category </h3>
            <div class="row">
              <base-input
                v-model="name"
                class="col-md-3"
                label="Name"
                required
                placeholder="Name of Category" />
              <base-input
                v-model="color"
                class="col-md-3"
                required
                label="Color Tag"
                placeholder="#4C4D4F"/>
              <div class="form-group col-md-3">
                <label>&nbsp;</label> <br>
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
                      <td><i
                        :style="{color: category.color}"
                        class="fa fa-circle"/> {{ category.name }}</td>
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
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  data: () => ({
    loading: false
  }),
  computed: {
    ...mapState({
      categories: state => state.resources.categories.data
    }),
    ...mapFields({
      name: 'resources.addCategory.name',
      color: 'resources.addCategory.color'
    })
  },
  created() {
    this.$store.dispatch('resources/getAllCategories', { vm: this })
  },
  methods: {
    async addCategory() {
      this.loading = !this.loading
      await this.$store.dispatch('resources/createCategory', { vm: this })
      this.loading = !this.loading
    }
  }
}
</script>
<style>
</style>
