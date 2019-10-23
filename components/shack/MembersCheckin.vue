<template>
  <div class="card">

    <el-table
      :data="checkins"
      class="table table-hover table-striped table-responsive"
      header-row-class-name="thead-light">

      <el-table-column
        label="Name  /  Company"
        prop="name"
        sortable>
        <template v-slot="{row}">
          <div class="sh-vflex">
            <div v-if="row.membership"><nuxt-link :to="{name: 'space-directory-id', params: {id: row.membership}}" >
              {{ row.first_name + " "+ row.last_name }}</nuxt-link> <br> {{ row.company }}
            </div>
            <div v-else>
              {{ row.first_name + " "+ row.last_name }} <br> {{ row.company }}
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="Type"
        prop="type"
        sortable />

      <el-table-column
        label="For"
        prop="member_id"
        sortable>
        <template v-slot="{row}">
          <div
            v-if="!row.membership"
            class="float-left">{{ `${row.member.first_name} ${row.member.last_name}` }}</div>
        </template>
      </el-table-column>

      <el-table-column
        label="Timestamp: Check-in / Check-out"
        min-width="100px"
        prop="method"
        sortable>
        <template v-slot="{row}">
          <span>{{ row.checkin_timestamp }} / {{ row.checkout_timestamp }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Check"
        prop="status"
        sortable>
        <template v-slot="{row}">
          <b-button
            v-if="row.status == 'checkin'"
            :disabled="loading"
            variant="orange"
            @click="checkout(row)">Check-Out</b-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui'

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    itemLimit: {
      type: Number,
      default: 9
    },
    showModal: {
      type: Boolean,
      default: false
    },
    checkins: {
      type: Array,
      default: () => []
    },
    toggleLoading: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      modals: {
        classic: false,
        notice: false,
        form: false
      }
    }
  },
  methods: {
    checkout(d) {
      this.toggleLoading()

      this.$checkin
        .checkout(d.id)
        .then(({ data }) => {
          const message =
            d.type == 'guest'
              ? 'Guest checked out successfully'
              : 'Member checked out successfully'
          const i = _.findIndex(this.checkins, d)
          this.checkins[i] = data
          this.toggleLoading()
          this.$bvToast.toast(message, {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.toggleLoading()
          this.$bvToast.toast('Checkout failed. Try again', {
            title: 'Error',
            variant: 'danger'
          })
        })
    }
  }
}
</script>
