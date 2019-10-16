<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Corporate" 
          subtitle="All" />
        <b-button
          :to="{name:'space-corporates-add'}"
          squared
          variant="primary"
          class="text-white"
        >Add New Corporate</b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <div class="card">
          <el-table
            :data="companies"
            class="table-responsive align-items-center table-flush table-striped"
            header-row-class-name="thead-light"
          >
            <el-table-column 
              label="Name" 
              min-width="310px" 
              prop="name" 
              sortable>
              <template v-slot="{row}">
                <h4>{{ row.name }}</h4>
              </template>
            </el-table-column>
            <el-table-column 
              label="Contact Name" 
              prop="contact_name" 
              min-width="180px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.contact_name }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Contact Email" 
              prop="contat_email" 
              min-width="180px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.contat_email }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Address" 
              prop="address" 
              min-width="140px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.address }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="City" 
              prop="city" 
              min-width="140px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.city }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="State" 
              prop="state" 
              min-width="140px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.state }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Zip Code" 
              prop="zipcode" 
              min-width="140px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.zipcode }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Country" 
              prop="country" 
              min-width="140px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.country }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Billing Email" 
              prop="billing_email" 
              min-width="180px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.billing_email }}</span>
              </template>
            </el-table-column>

            <el-table-column 
              min-width="180px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :disabled="loading"
                  :to="{name:'space-corporates-id-edit', params: { id: row.uuid}}"
                  variant="transparent"
                  class="text-primary"
                >
                  <i class="fa fa-pen" /> Edit
                </b-button>
              </template>
            </el-table-column>

            <el-table-column 
              min-width="180px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :disabled="loading"
                  type="submit"
                  variant="transparent"
                  class="text-danger"
                  @click="removeCompany(row.uuid)"
                >
                  <i class="fa fa-times" /> Remove
                </b-button>
              </template>
            </el-table-column>
          </el-table>
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
    </div>
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
  async asyncData({ store, $company, error }) {
    await $company
      .getCompanies()
      .then(data => {
        store.commit('company/setCompanies', data)
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
      companies: state => state.company.companies.data,
      meta: state => state.company.companies.meta,
      links: state => state.company.companies.links
    })
  },
  methods: {
    next() {
      const { next } = this.links
      this.$company
        .getcompanies(next)
        .then(({ data }) => {
          store.commit('company/setCompanies', data)
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

      this.$company
        .getcompanies(prev)
        .then(({ data }) => {
          store.commit('company/setCompanies', data)
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
    removeCompany(companyId) {
      if (!confirm('Are you sure ? ')) return
      this.loading = !this.loading

      this.$company
        .removeOneCompany(companyId)
        .then(res => {
          this.$store.commit('company/removeOneCompany', companyId)
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
          this.loading = !this.loading
        })
    }
  }
}
</script>
