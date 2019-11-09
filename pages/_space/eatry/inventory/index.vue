<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Inventory" 
          subtitle="Eatry" />

        <b-button
          :to="{name:'space-eatry-inventory-add'}"
          squared
          variant="primary"
          class="text-white"
        >Add Inventory</b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <div class="card">
          <el-table
            :data="eatries"
            class="table-responsive align-items-center table-flush table-striped"
            header-row-class-name="thead-light"
          >
            <el-table-column 
              label="Name" 
              min-width="140px" 
              prop="name" 
              sortable>
              <template v-slot="{row}">
                <h4>{{ row.name }}</h4>
              </template>
            </el-table-column>
            <el-table-column 
              label="Category" 
              min-width="140px" 
              prop="eatry_category" 
              sortable>
              <template v-slot="{row}">
                <h4>{{ row.eatry_category.name }}</h4>
              </template>
            </el-table-column>
            <el-table-column 
              label="Price" 
              prop="price" 
              min-width="120px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ space.currency_symbol }} {{ row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Capacity" 
              prop="capacity" 
              min-width="120px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.capacity }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Can Order ?" 
              prop="can_order" 
              min-width="120px">
              <template v-slot="{row}">
                <div v-if="row.can_order">
                  <b-button variant="success">Yes</b-button>
                </div>
                <div v-else>
                  <b-button variant="danger">No</b-button>
                </div>
              </template>
            </el-table-column>
            <el-table-column 
              label="View" 
              min-width="100px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :disabled="loading"
                  :to="{name:'space-eatry-inventory-id', params:{id: row.id}}"
                  variant="primary"
                  class="text-white"
                >
                  <i class="fa fa-eye" />
                </b-button>
              </template>
            </el-table-column>
            <el-table-column 
              min-width="150px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :disabled="loading"
                  :to="{name:'space-eatry-inventory-id-edit', params:{id: row.id}}"
                  variant="transparent"
                  class="text-primary"
                >
                  <i class="fa fa-pen" /> Edit
                </b-button>
              </template>
            </el-table-column>
            <el-table-column 
              min-width="160px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :disabled="loading"
                  variant="transparent"
                  class="text-danger"
                  @click="removeEatry(row.id)"
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

    <b-button 
      class="text-primary mb-2" 
      variant="transparent" 
      @click="$router.go(-1)">
      <i class="ti-angle-left" /> Back
    </b-button>
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
  async asyncData({ $eatry, store, error }) {
    await $eatry
      .getAllEatries()
      .then(data => {
        store.commit('eatry/setEatries', data)
      })
      .catch(err => {
        error({
          statusCode: err.status || 404,
          message: err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message
        })
      })
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace,
      eatries: state => state.eatry.eatries.data,
      meta: state => state.eatry.eatries.meta,
      links: state => state.eatry.eatries.links
    })
  },
  methods: {
    next() {
      const { next } = this.links

      this.$eatry
        .getAllEatries(next)
        .then(({ data }) => {
          this.$store.commit('eatry/setEatries', data)
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
        .getAllEatries(prev)
        .then(({ data }) => {
          this.$store.commit('eatry/setEatries', data)
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
    removeEatry(eatryId) {
      this.loading = !this.loading

      this.$eatry
        .deleteOneEatry(eatryId)
        .then(data => {
          this.$store.commit('eatry/removeOneEatry', eatryId)

          this.$bvToast.toast('Eatry successfully deleted', {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.loading = !this.loading
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
