<template>
  <div class="card">

    <el-table
      :data="plans"
      class="table-responsive align-items-center table-flush table-striped"
      header-row-class-name="thead-light"
    >
      <el-table-column
        label="Plan"
        min-width="310px"
        prop="name"
        sortable>
        <template v-slot="{row}">
          <h4>{{ row.name }}</h4>
        </template>
      </el-table-column>
      <el-table-column
        label="Subscription"
        prop="price_per_cycle"
        min-width="140px">
        <template v-slot="{row}">
          <span>
            {{ space.currency_symbol }} {{ row.price_per_cycle }} every
            <span
              v-if="row.cycle_duration === 12"
            >year</span>
            <span v-else>{{ row.cycle_duration }} month(s)</span>
          </span>
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
            :to="{name:'space-plans-id-edit', params: { id: row.uuid}}"
            type="submit"
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
            @click="removePlan(row)"
          >
            <i class="fa fa-times" /> Remove
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

      await this.$plan
        .removePlan(row.uuid)
        .then(res => {
          this.$bvToast.toast('Plan removed successfully', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.$store.commit('plans/removePlan', row.uuid)
          this.loading = !this.loading
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
