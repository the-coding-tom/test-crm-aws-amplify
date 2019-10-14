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
              :disabled="!cat"
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
                      v-model="cat"
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
import BaseHeader from '@/components/argon-core/BaseHeader'

import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  async asyncData({ store, $wellness }) {
    await $wellness.getWellnessCategories().then(({ data }) => {
      store.commit('wellness/setCategories', data)
    })
  },
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  data: () => ({
    cat: null,
    name: null,
    color: null
  }),
  computed: {
    ...mapState({
      categories: state => state.wellness.categories.data,
      meta: state => state.wellness.categories.meta,
      links: state => state.wellness.categories.links
    })
  },
  methods: {
    next() {
      const { next } = this.links
      this.$wellness.getWellnessCategories(next)
    },
    prev() {
      const { prev } = this.links
      this.$wellness.getWellnessCategories(prev)
    },
    changeCategory(cat) {
      this.name = cat.name
      this.color = cat.color
    },
    updateCategory() {
      const { cat, name, color } = this

      this.$wellness
        .updateWellnessCategory(cat, {
          name,
          color
        })
        .then(res => {
          if (res.data) {
            this.$bvToast.toast('Wellness category updated successfully', {
              title: `Success`,
              variant: 'success',
              solid: true
            })
          }
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    deleteCategory() {
      if (!confirm('Are you sure?')) return

      const { cat } = this
      this.$wellness
        .deleteWellnessCategory(cat)
        .then(res => {
          location.reload()
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.message), {
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
