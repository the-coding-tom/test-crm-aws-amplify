<template>
  <div class="card">
    <el-table
      :data="invoice"
      class="table table-hover table-striped"
      header-row-class-name="thead-light"
    >
      <el-table-column 
        label="No." 
        prop="inv_id" 
        width="130" 
        sortable>
        <template v-slot="{ row }">
          <a :href="`/${space}/invoice/${row.id}`">{{ row.invoice_number }}</a>
        </template>
      </el-table-column>

      <el-table-column 
        label="Date" 
        prop="inv_date" 
        width="200" 
        sortable>
        <template v-slot="{ row }">
          <div class="float-left">
            {{ row.date }}
          </div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Name  /  Company" 
        prop="name" 
        sortable>
        <template v-slot="{ row }">
          <div class="d-flex justify-content-between">
            <div>
              {{ row.contact_person }}
            </div>
            <div class="text-muted">
              {{ row.company }}
            </div>
          </div>
          <div
            class="d-flex justify-content-between inv-links"
          >
            <a 
              v-if="!row.finalize" 
              @click="openUpdateBox(row.invProps)"><i class="fa fa-pen" /> Edit</a>
            <!-- <a 
              v-if="!row.send" 
              href="#"><i class="fa fa-envelope" /> Send</a> -->
            <a 
              v-if="!row.finalize" 
              @click="finalizeInv(row.invProps)"><i class="fa fa-check" /> finalize</a>
              <!-- <a href="#"><i class="fa fa-download" /> PDF</a> -->
          </div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Amount" 
        align="right" 
        width="300" 
        prop="status">
        <template v-slot="{ row }">
          {{ currency_symbol }}{{ row.amount }}
          <div class="">
            <badge 
              v-if="row.void" 
              type="primary">
              void
            </badge>
            <badge 
              v-if="row.paid" 
              type="danger">
              paid
            </badge>
            <badge 
              v-if="row.sent" 
              type="success">
              sent
            </badge>
            <!--
            <badge type="warning">
              written off
            </badge>
            <badge type="alternative">
              not sent
            </badge>
            -->
          </div>
        </template>
      </el-table-column>
    </el-table>

    <base-pagination
      :total="meta.total"
      :per-page="meta.per_page"
      :value="meta.current_page"
      align="center"
      @next="next"
      @prev="prev"/>
    <modal :show.sync="modals.classic">
      <b-form @submit.prevent="updateInvoice">
        <SectionTitle
          slot="header"
          title="Create New Invoice"
          class="mr-t-40"
        />
        <h4>Updating Invoice: {{ addInvoice.inv_number }}</h4>
        <div class="form-group col-md-12">
          <label>Invoice Description</label>
          <textarea
            v-model="addInvoice.description"
            placeholder="Add details you want on invoice"
            rows="4"
            max-rows="6"
            class="form-control"
          />
        </div>
        <base-input
          v-model="addInvoice.days_until_due"
          class="col-md-12"
          label="No. days before due"
          type="number"
          placeholder="0"
        />
        <div class="form-group col-md-12">
          <label>Invoice Footer</label>
          <textarea
            v-model="addInvoice.footer"
            placeholder="Add invoice footer"
            rows="4"
            max-rows="6"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <label>Notes</label>
          <textarea
            v-model="addInvoice.notes"
            placeholder="Add invoice footer"
            rows="4"
            max-rows="6"
            class="form-control"
          />
        </div>
        <div class="clear-fix" />

        <button
          type="submit" 
          class="btn btn-primary mr-t-40 pd-lr-40">Update Invoice</button>
      </b-form>
    </modal>
  </div>
</template>
<script>
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'element-ui'
// import UnconfirmedModal from "~/components/shack/UnconfirmedModal"
import { mapState } from 'vuex'

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu
    // UnconfirmedModal
  },
  props: {
    itemLimit: {
      type: Number,
      default: 1
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showByIndex: null,
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      addInvoice: {
        description: '',
        company_id: '',
        days_until_due: 0,
        items: [],
        footer: '',
        notes: '',
        id: null,
        inv_number: null
      }
    }
  },
  computed: {
    ...mapState({
      invoice: state => state.invoice.invoiceTable,
      currency_symbol: state => state.space.currentSpace.currency_symbol,
      meta: state => state.invoice.invoices.meta,
      links: state => state.invoice.invoices.links,
      space: state => state.space.currentSpace.subdomain
    })
  },
  methods: {
    next() {
      const { next } = this.links
      this.$invoice.getAllInvoice(next)
    },
    prev() {
      const { prev } = this.links
      this.$invoice.getAllInvoice(prev)
    },
    openUpdateBox(item) {
      this.addInvoice.id = item.id
      this.addInvoice.description = item.description
      this.addInvoice.footer = item.footer
      this.addInvoice.notes = item.notes
      this.addInvoice.inv_number = item.inv_number
      this.addInvoice.days_until_due = item.day_until_due
      this.modals.classic = true
    },
    updateInvoice() {
      this.$store.dispatch('invoice/updateInvoice', this.addInvoice)
      this.modals.classic = false
    },
    finalizeInv(item) {
      const data = {
        description: item.description,
        company_id: item.company.uuid,
        notes: item.notes,
        days_until_due: item.days_until_due,
        footer: item.footer,
        items: item.invoice_items,
        id: item.id
      }
      if (!confirm('Are you sure?')) return
      this.$store.dispatch('invoice/finalizeInv', data)
    }
  }
}
</script>
