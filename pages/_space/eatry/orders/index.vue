<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Orders" 
          subtitle="Eatries" />

        <div class="search-container">
          <b-input 
            type="text" 
            class="search-btn" 
            placeholder="Search" />
          <b-button 
            variant="dark" 
            class="text-white">
            <i class="fa fa-search" />
          </b-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <div class="card">
          <el-table
            :data="orders"
            class="table-responsive align-items-center table-flush table-striped"
            header-row-class-name="thead-light"
          >
            <el-table-column 
              label="Ordered By (Name)" 
              min-width="180px" 
              prop="name" 
              sortable>
              <template v-slot="{row}">
                <h4>{{ row.user.name }}</h4>
              </template>
            </el-table-column>
            <el-table-column 
              label="Ordered By (Email)" 
              prop="email" 
              min-width="180px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.user.email }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Total" 
              prop="quantity" 
              min-width="160px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ row.space.currency_symbol }} {{ row.grand_total }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Timestamp" 
              prop="date_of_order" 
              min-width="180px" 
              sortable>
              <template v-slot="{row}">
                <span>{{ $moment(row.date_of_order).format('MMMM Do YYYY, h:mm:ss a') }}</span>
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
                  variant="primary"
                  class="text-white"
                  @click="showDetails(row)"
                >
                  <i class="fa fa-eye" /> Details
                </b-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div>
      <base-pagination
        :total="1"
        :per-page="2"
        :value="1"
        align="center"
        @next="next"
        @prev="prev"
      />
    </div>

    <div>
      <b-modal 
        id="modal-order" 
        hide-footer>
        <template v-slot:modal-title>Order Details</template>
        <div>
          <p>Name: {{ userOrder.name }}</p>
          <p>Email: {{ userOrder.email }}</p>
          <p
            class="text-muted"
          >Date of Order: {{ $moment(userOrder.date_of_order).format('MMMM Do YYYY, h:mm:ss a') }}</p>
          <b-table 
            :items="userOrder.items" 
            striped 
            hover />
          <p>Subtotal: {{ space.currency_symbol }} {{ userOrder.sub_total }}</p>
          <p>Tax: {{ space.currency_symbol }} {{ userOrder.taxes_charges }}</p>
          <h4>Grand Total: {{ space.currency_symbol }} {{ userOrder.grand_total }}</h4>
        </div>
      </b-modal>
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
  async asyncData({ error, $eatry, store }) {
    await $eatry
      .getAllOrderedEatries()
      .then(data => {
        store.commit('eatry/setOrderedEatries', data)
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
      loading: false,
      userOrder: {}
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace,
      orders: state => state.eatry.orderedEatries.data
    })
  },
  methods: {
    // TODO: Support pagination when its supported on the backend
    next() {},
    prev() {},
    showDetails(data) {
      const items = this.transformOrderedItems(data.orders)

      const order = {
        sub_total: data.sub_total,
        taxes_charges: data.taxes_charges,
        grand_total: data.grand_total,
        date_of_order: data.date_of_order,
        name: data.user.name,
        email: data.user.email,
        items
      }

      this.userOrder = order
      this.$bvModal.show('modal-order')
    },
    transformOrderedItems(items) {
      return items.map(item => {
        return {
          item: item.eatry.name,
          number_of_plates: item.number_of_plates,
          table_number: item.table_number
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.search-container {
  display: flex;
}
</style>
