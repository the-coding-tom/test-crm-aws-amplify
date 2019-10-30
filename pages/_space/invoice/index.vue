<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Invoices" />
        <SearchForm 
          :loading="loadingSearch" 
          @search="getInvoiceResult" />
        <div class="mr-l-child-20">
          <!-- <a href="#"><i class="fa fa-download" /> Download CSV</a> -->
          <!-- <a href="#"><i class="fa fa-download" /> Download PDF</a> -->
          <a
            href="javascript:void(0)"
            class="btn btn-primary"
            @click="modals.classic = true"
          >
            New Invoice
          </a>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6 inv-table">
      <div class="row">
        <!-- <div class="col-md-4">
          <card>
            <div class="d-flex justify-content-between align-items-center">
              <base-dropdown>
                <base-button
                  slot="title-container"
                  type="secondary"
                  class="dropdown-toggle"
                >
                  Nov 2018
                </base-button>
                <a 
                  :href="$route.path" 
                  class="dropdown-item">Dec 2018</a>
                <a 
                  :href="$route.path" 
                  class="dropdown-item">Nov 2018</a>
                <a 
                  :href="$route.path" 
                  class="dropdown-item">Oct 2018</a>
              </base-dropdown>
              <div class="text-muted">
                UNPAID INVOICES
              </div>
            </div>
          </card>
        </div> -->
        <div class="col-md-8">
          <card>
            <div class="d-flex justify-content-around">
              <badge type="primary">
                unpaid & pending <i class="fa fa-eye" />
              </badge>
              <badge type="danger">paid <i class="fa fa-eye" /></badge>
              <badge type="success">sent <i class="fa fa-eye" />
              </badge>
              <badge type="warning">
                written off <i class="fa fa-eye" />
              </badge>
              <badge type="alternative">
                not sent <i class="fa fa-eye" />
              </badge>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <InvoiceTable />
        </div>
      </div>
      <modal :show.sync="modals.classic">
        <b-form @submit.prevent="createInvoice">

          <SectionTitle
            slot="header"
            title="Create New Invoice"
            class="mr-t-40"
          />
          <p>Select the Member this invoice is being issued to:</p>

          <el-select
            v-model="company_id"
            :remote-method="searchCompany"
            :loading="searching"
            required
            filterable
            remote
            reserve-keyword
            placeholder="Choose a company">
            <el-option
              v-for="option in companies"
              :key="option.uuid"
              :label="option.name"
              :value="option.uuid"/>
          </el-select>

          <div class="clear-fix" />

          <button
            type="submit" 
            class="btn btn-primary mr-t-40 pd-lr-40">Create Invoice</button>
        </b-form>
      </modal>
    </div>
  </div>
</template>
<script>
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Table,
  TableColumn
} from 'element-ui'
import projects from '~/components/tables/projects'
import users from '~/components/tables/users'
import InvoiceTable from '~/components/shack/InvoiceTable.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SearchForm from '~/components/shack/SearchForm.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    SectionTitle,
    SearchForm,
    InvoiceTable,
    [Select.name]: Select,
    [Option.name]: Option,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  async asyncData({ store }) {
    await store.dispatch('invoice/getAllInvoices')
  },
  data() {
    return {
      projects,
      users,
      modals: {
        classic: false
      },
      companies: [],
      searching: false,
      company_id: null,
      loadingSearch: false
    }
  },
  computed: {
    ...mapState({
      invoices: state => state.invoice.rooms.invoices,
      meta: state => state.resources.rooms.meta,
      links: state => state.resources.rooms.links
    })
  },
  async created() {
    const { data } = await this.$company.getCompanies()
    this.companies = data
  },
  methods: {
    searchCompany(query) {
      this.searching = !this.searching

      const _self = this

      _.debounce(() => {
        _self.$company.getCompanyByName(query).then(({ data }) => {
          _self.searching = !_self.searching
          _self.data = data
        })
      }, 350)()
    },
    createInvoice() {
      let data = {
        company_id: this.company_id,
        space: this.$store.state.space.currentSpace.subdomain
      }
      this.$store.commit('invoice/initiateInvoice', data)
    },
    async getInvoiceResult(e) {
      this.loadingSearch = true

      try {
        const { data } = await this.$invoice.searchInvoice(e)
        let emptyIn = []
        data.data.map(item => {
          let invObj = {
            company: item.company.name,
            date: this.$moment(item.created_at).format('LL'),
            contact_person: item.company.contact_name,
            id: item.id,
            invoice_number: item.inv_number,
            paid: item.paid,
            finalize: item.finalize,
            sent: item.sent,
            amount: item.total_amount,
            void: item.void,
            invProps: item
          }
          emptyIn.push(invObj)
        })
        this.$store.commit('invoice/setTableInvoices', emptyIn)
        this.loadingSearch = false
      } catch (error) {
        this.loadingSearch = false
        this.$bvToast.toast(
          `${
            error.response
              ? JSON.stringify(error.response.data.errors)
              : error.message
          }`,
          helper.notify.error
        )
      }
    }
  }
}
</script>
<style lang="scss">
.inv-table {
  .badge {
    text-transform: unset;
    font-size: 12px;
    color: #4c4d4f;
    font-weight: normal;
    border-radius: 15px;
    padding: 5px 12px;
    i.fa.fa-eye {
      margin-left: 5px;
    }
  }
  td {
    vertical-align: top !important;
  }
  .badge + .badge {
    margin-left: 5px;
  }
  .inv-links {
    margin-top: 5px;
    a {
      color: #4a90e2;
      font-family: 'BrownPro';
    }
  }
}
.btn.dropdown-toggle {
  padding: 0;
  box-shadow: unset;
  background: unset;
  border: unset;
  &.dropdown-toggle {
    background: unset;
  }
  ::after {
    margin-left: 5px;
  }
  .dropdown-menu {
    margin-top: 10px;
  }
}
</style>
