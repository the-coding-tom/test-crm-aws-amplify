<template>
  <div class="card">
    <el-table
      :data="plans"
      class="table-responsive align-items-center table-flush table-striped"
      header-row-class-name="thead-light"
    >
      <el-table-column 
        label="Promotion" 
        min-width="310px" 
        prop="name" 
        sortable>
        <template v-slot="{ row }">
          <b-link
            :to="{ name: 'space-promotions-id-edit', params: { id: row.id } }"
            variant="transparent"
            class="text-primary"
          >
            <h4>
              {{ row.name }}
          </h4></b-link
          >
        </template>
      </el-table-column>
      <el-table-column 
        label="State" 
        min-width="310px" 
        prop="state" 
        sortable>
        <template v-slot="{ row }">
          <span>{{ row.state }}</span>
        </template>
      </el-table-column>
      <el-table-column 
        label="Expires on" 
        prop="expires_on" 
        min-width="140px">
        <template v-slot="{ row }">
          <span>
            {{ $moment(row.expires_on).format('MMM Do YYYY, h:mm') }}
          </span>
        </template>
      </el-table-column>
      <!-- <el-table-column
        min-width="180px"
        align="center">
        <template
          v-slot="{row}"
          class="table-actions">
          <b-button
            :disabled="loading"
            :to="{name:'space-plans-id-edit', params: { id: row.id}}"
            type="submit"
            variant="transparent"
            class="text-primary"
          >
            <i class="fa fa-pen" /> Edit
          </b-button>
        </template>
      </el-table-column> -->

      <el-table-column 
        min-width="180px" 
        align="center">
        <template 
          v-slot="{ row }" 
          class="table-actions">
          <b-button
            :disabled="loading"
            type="submit"
            variant="transparent"
            class="text-danger"
            @click="removePlan(row)"
          >
            <i class="fa fa-times" /> Delete
          </b-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui'

import { mapState } from 'vuex'

export default {
  name: 'Table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  props: {
    plans: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    async removePlan(row) {
      this.loading = !this.loading

      await this.$promotion
        .deletePromotion(row.id)
        .then(res => {
          this.$bvToast.toast('Promotion removed successfully', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.$store.commit('plans/removePlan', row.id)
          this.loading = !this.loading
          location.reload()
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.message)
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
