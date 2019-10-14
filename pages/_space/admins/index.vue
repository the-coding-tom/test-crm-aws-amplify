<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Adminstrators" 
          subtitle="Current Admins" />
        <b-button
          :to="{name:'space-admins-add'}"
          squared
          variant="primary"
          class="text-white"
        >Add Adminstrator</b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <div class="card">
          <el-table
            :data="admins"
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
              label="Email" 
              prop="email" 
              min-width="140px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.email }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              min-width="180px" 
              align="center">
              <template 
                v-slot="{row}" 
                class="table-actions">
                <b-button
                  :to="{name:'space-admins-id-edit', params: {id: row.id}}"
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
                  @click="removeAdmin(row.id)"
                >
                  <i class="fa fa-times" /> Remove
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
  async asyncData({ store, $admin, error }) {
    await $admin
      .getAllAdmins()
      .then(data => {
        store.commit('admin/setAdmins', data)
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
      loading: false
    }
  },
  computed: {
    ...mapState({
      admins: state => state.admin.admins.data,
      meta: state => state.admin.admins.meta,
      links: state => state.admin.admins.links
    })
  },
  methods: {
    next() {
      const { next } = this.links

      $admin
        .getAllAdmins(next)
        .then(data => {
          store.commit('admin/setAdmins', data)
        })
        .catch(err => {
          this.$bvToast.toast(err, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    prev() {
      const { prev } = this.links

      $admin
        .getAllAdmins(prev)
        .then(data => {
          store.commit('admin/setAdmins', data)
        })
        .catch(err => {
          this.$bvToast.toast(err, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    removeAdmin(adminId) {
      this.loading = !this.loading

      this.$admin
        .deleteAnAdmin(adminId)
        .then(res => {
          this.$store.commit('admin/removeAdmin', adminId)

          this.$bvToast.toast('Admin removed successfully', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
        })
        .catch(err => {
          this.$bvToast.toast(err, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>
