<template>
  <div>
    <b-form @submit.prevent="updateCategory">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between py-4">
          <MainTitle
            title="Resource Categories" />
          <div>
            <b-button
              :disabled="this.$store.state.resources.activateButton"
              variant="transparent"
              class="text-danger mr-r-20"
              @click="deleteCategory"><i class="fa fa-times"/> Remove Category</b-button>
            <b-button
              type="submit"
              style="color: white"
              class="btn btn-primary"
            >Update Category</b-button>
          </div>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">Update Category</h3>
            <div class="row">
              <base-input
                v-model="name"
                class="col-md-4"
                label="Name"
                name="name"
                required
                placeholder="Category Name" />

              <base-input
                v-model="color"
                class="col-md-3"
                required
                label="Color Tag"
                placeholder="#4C4D4F"/>
            </div>
            <div class="row mr-t-40">
              <b-form-radio-group class="col-md-6">
                <div class="row">
                  <div
                    v-for="category in categories"
                    :key="category.id"
                    class="col-md-6">
                    <b-form-radio
                      :value="category.id"
                      @change="changeCategory(category)">{{ category.name }}</b-form-radio>
                  </div>
                </div>
              </b-form-radio-group>
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
  async asyncData({ store }) {
    await store.dispatch('resources/getAllCategories')
  },
  computed: {
    ...mapState({
      categories: state => state.resources.categories.data
    }),
    ...mapFields({
      name: 'resources.addCategory.name',
      color: 'resources.addCategory.color'
    })
  },
  methods: {
    updateCategory() {
      this.$store.dispatch('resources/updateCategory')
    },
    deleteCategory() {
      if (!confirm('Are you sure?')) return
      this.$store.dispatch('resources/deleteCategory')
    },
    changeCategory(category) {
      this.$store.commit('resources/updateCategory', category)
    }
  }
}
</script>
<style>
</style>
