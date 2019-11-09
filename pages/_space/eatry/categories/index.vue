<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Eatry" 
          subtitle="Category" />

        <div>
          <b-button
            :disabled="loading"
            :to="{name:'space-eatry-categories-add'}"
            variant="primary"
            class="text-white"
          >Add Category</b-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <div class="card">
          <el-table
            :data="categories"
            class="table-responsive align-items-center table-flush table-striped"
            header-row-class-name="thead-light"
          >
            <el-table-column 
              label="Name" 
              min-width="100px" 
              prop="name" 
              sortable>
              <template v-slot="{row}">
                <h4>{{ row.name }}</h4>
              </template>
            </el-table-column>
            <el-table-column 
              label="Description" 
              prop="type" 
              min-width="150px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.description }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              min-width="100px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :disabled="loading"
                  variant="transparent"
                  class="text-primary"
                  @click="showModal(row)"
                >
                  <i class="fa fa-pen" /> Edit
                </b-button>
              </template>
            </el-table-column>
            <el-table-column 
              min-width="100px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :disabled="loading"
                  variant="transparent"
                  class="text-danger"
                  @click="removeCategory(row.id)"
                >
                  <i class="fa fa-trash" /> Remove
                </b-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div>
      <base-pagination
        :total="meta.total"
        :per-page="meta.per_page"
        :value="meta.current_page"
        align="center"
        @next="next"
        @prev="prev"
      />
    </div>

    <!-- Edit Eatry Modal -->
    <div>
      <b-modal 
        id="modal-edit-eatry-category" 
        hide-footer>
        <template v-slot:modal-title>Eatry Category</template>
        <b-form @submit.prevent="editCategory">
          <div>
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
            <b-row>
              <b-col md="12">
                <b-button 
                  :disabled="loading" 
                  variant="primary" 
                  type="submit">
                  <i class="fa fa-save" />
                  Update Category
                </b-button>

                <b-button
                  :disabled="loading"
                  variant="transparent"
                  class="text-danger"
                  @click="closeModal('modal-edit-eatry-category')"
                >x Cancel</b-button>
              </b-col>
            </b-row>
          </div>
        </b-form>
      </b-modal>
    </div>
    <!-- Edit Eatry Modal Ends-->
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import { Table, TableColumn } from 'element-ui'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  async asyncData({ error, $eatry, store }) {
    await $eatry
      .getAllEatryCategories()
      .then(data => {
        store.commit('eatry/setCategories', data)
      })
      .catch(err => {
        error({
          statusCode: error.status || 404,
          message: err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message
        })
      })
  },
  data() {
    return {
      loading: false,
      name: '',
      description: '',
      currentCategory: ''
    }
  },
  computed: {
    ...mapState({
      categories: state => state.eatry.categories.data,
      meta: state => state.eatry.categories.meta,
      links: state => state.eatry.categories.links
    })
  },
  methods: {
    next() {
      const { next } = this.links

      this.$eatry
        .getAllEatryCategories(next)
        .then(({ data }) => {
          this.$store.commit('eatry/setCategories', data)
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
        })
    },
    prev() {
      const { prev } = this.links

      this.$eatry
        .getAllEatryCategories(prev)
        .then(({ data }) => {
          this.$store.commit('eatry/setCategories', data)
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
        })
    },
    showModal(data) {
      this.$bvModal.show('modal-edit-eatry-category')

      this.name = data.name
      this.description = data.description
      this.currentCategory = data.id
    },
    closeModal() {
      this.$bvModal.hide('modal-edit-eatry-category')
    },
    removeCategory(id) {
      this.loading = !this.loading

      this.$eatry
        .removeOneCategory(id)
        .then(res => {
          this.loading = !this.loading
          this.$store.commit('eatry/removeOneCategory', id)
          this.$bvToast.toast('Category successfully removed', {
            title: 'Success',
            variant: 'success',
            solid: true
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
    },
    editCategory() {
      const { name, description, currentCategory } = this

      this.loading = !this.loading

      this.$eatry
        .updateOneCategory(currentCategory, { name, description })
        .then(({ data }) => {
          this.loading = !this.loading
          this.$store.commit('eatry/updateOneCategory', data)
          this.closeModal()

          this.$bvToast.toast('Category successfully updated', {
            title: 'Success',
            variant: 'success',
            solid: true
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
