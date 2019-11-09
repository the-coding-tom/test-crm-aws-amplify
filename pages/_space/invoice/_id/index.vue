<template>
  <div>
    <b-form 
      novalidate 
      @submit.prevent="sendInvoice">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Add New Invoice" />
          <!-- <button 
            :disabled="$store.state.invoice.isLoading" 
            type="submit"
            class="btn btn-primary">
            <span class="fa fa-envelope" /> Send Invoice
          </button> -->
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <div class="row">
              <div class="col-md-7">
                <div class="row pd-r-40">
                  <div class="col-md-12">
                    <h3 class="mr-b-20">Recipients’ Details</h3>
                    <div class="row pd-r-40">
                      <base-input
                        :value="invoice.company.contact_name"
                        class="col-md-12"
                        label="Name"
                        readonly
                        placeholder="Full Name"
                      />
                      <base-input
                        :value="invoice.day_until_due"
                        class="col-md-12"
                        label="No. days before due"
                        type="number"
                        readonly
                        placeholder="0"
                      />
                      <base-input
                        :value="invoice.company.name"
                        class="col-md-12"
                        label="Company"
                        readonly
                        placeholder="Awesome Co"
                      />
                      <base-input
                        :value="invoice.company.billing_email"
                        class="col-md-12"
                        label="Billing Email"
                        readonly
                        placeholder="Awesome Co"
                      />
                      <div class="form-group col-md-12">
                        <label>Address</label>
                        <textarea
                          :value="invoice.company.address"
                          placeholder="Add Address"
                          rows="4"
                          readonly
                          max-rows="6"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group col-md-12">
                        <label>Invoice Description</label>
                        <textarea
                          :value="invoice.description"
                          placeholder="Add details you want on invoice"
                          rows="4"
                          readonly
                          max-rows="6"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group col-md-12">
                        <label>Invoice Footer</label>
                        <textarea
                          :value="invoice.footer"
                          placeholder="Add invoice footer"
                          rows="4"
                          readonly
                          max-rows="6"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <hr >

                <div class="form-group">
                  <label>Notes (only visible to Admins)</label>
                  <textarea
                    :value="invoice.notes"
                    placeholder="Add notes you want to keep for this invoice"
                    rows="4"
                    readonly
                    max-rows="6"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-5">
                <h3 class="mr-b-20">Add Invoice Item(s)</h3>
                <div 
                  v-for="(item) in invoice.invoice_items" 
                  :key="item.id" 
                  class="row sh-inv_item">
                  <div class="col-md-7">{{ item.description }}</div>
                  <div class="col-md-5 text-right">
                    <div class="d-flex justify-content-between">
                      <a 
                        v-if="!invoice.finalize"
                        href="javascript:void(0)"
                        class="text-primary"
                        @click="editInvoiceItem(item, index)"
                      >
                        <i class="fa fa-pen" /> Edit
                      </a>
                      <a 
                        v-if="!invoice.finalize"
                        href="javascript:void(0)" 
                        class="text-danger" 
                        @click="deleteInvoiceItem(item.id)">
                        <i class="fa fa-trash" /> Delete
                      </a>
                    </div>
                    <div>{{ currency_symbol }}{{ item.amount }}</div>
                    <div class="text-muted">
                      <!-- <br >{{ tax_rate }}% Tax : {{ currency_symbol }} {{(tax_rate % 100) * item.amount}} -->
                      <br >
                      Net Amount: {{ currency_symbol }}{{ item.amount }}
                    </div>
                  </div>
                </div>
                <modal :show.sync="modals.classic">
                  <SectionTitle
                    slot="header"
                    :subtitle="invoice.company.name"
                    title="Add New Item"
                    class="mr-tb-20"
                  />
                  <base-input
                    v-model="invoiceItem.description"
                    label="Description"
                    placeholder="Add a description about item"
                  />
                  <div class="row">
                    <base-input
                      v-model="invoiceItem.amount"
                      class="col-md-12"
                      label="Amount"
                      type="number"
                      placeholder="0"
                    >
                      <div slot="append">{{ currency }}</div>
                    </base-input>
                  </div>
                  <div class="d-flex justify-content-between mr-t-20">
                    <h3>Total Amount</h3>
                    <h3>{{ currency_symbol }} {{ invoiceItem.amount }}</h3>
                  </div>

                  <hr class="mb-0" >
                  <template slot="footer">
                    <b-button 
                      type="button" 
                      class="ml-auto" 
                      @click="updateInvoiceItem">Save</b-button>
                  </template>
                </modal>

                <b-button
                  v-if="!invoice.finalize"
                  outline
                  type="button"
                  class="sh-dashbtn"
                  block
                  @click="openModal"
                >Add New Item</b-button>
              </div>
            </div>
          </card>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    SectionTitle,
    MainTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData(vm) {
    const { id } = vm.route.params

    await vm.store.dispatch('invoice/getOneInvoice', id)
  },
  data() {
    return {
      invoiceItem: {
        description: null,
        amount: null,
        itemIndex: null,
        item_id: null
      },
      addInvoice: {
        description: null,
        company_id: null,
        days_until_due: 0,
        items: [],
        footer: null,
        notes: null
      },
      modals: {
        classic: false
      },
      text:
        'For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100.'
    }
  },
  computed: {
    ...mapState({
      invoice: state => state.invoice.oneInvoice.data,
      currency_symbol: state => state.space.currentSpace.currency_symbol,
      currency: state => state.space.currentSpace.currency,
      tax_rate: state => state.space.currentSpace.tax_rate
    })
  },

  methods: {
    addInvoiceItem() {
      if (this.invoiceItem.itemIndex != null) {
        let data = this.addInvoice.items[this.invoiceItem.itemIndex]
        data.description = this.invoiceItem.description
        data.amount = this.invoiceItem.amount
        this.modals.classic = false
        this.invoiceItem.description = null
        this.invoiceItem.amount = null
      } else {
        const { description, amount } = this.invoiceItem
        let newObj = {
          description: description,
          amount: amount
        }
        this.addInvoice.items.push(newObj)
        this.invoiceItem.description = null
        this.invoiceItem.amount = null
        this.modals.classic = false
      }
    },
    removeItems(index) {
      this.addInvoice.items.splice(index, 1)
    },
    editInvoiceItem(item, index) {
      this.invoiceItem.description = item.description
      this.invoiceItem.amount = item.amount
      this.invoiceItem.item_id = item.id
      this.modals.classic = true
    },
    openModal() {
      this.invoiceItem.description = null
      this.invoiceItem.amount = null
      this.invoiceItem.itemIndex = null
      this.invoiceItem.item_id = null
      this.modals.classic = true
    },
    sendInvoice() {
      this.$store.dispatch('invoice/createInvoice', this.addInvoice)
    },
    updateInvoiceItem() {
      let newInvArr = {
        items: []
      }
      newInvArr.items.push(this.invoiceItem)
      if (!this.invoiceItem.item_id) {
        this.$store.dispatch('invoice/addItemToInvoice', newInvArr)
        this.modals.classic = false
      } else {
        this.$store.dispatch('invoice/updateInvoiceItem', this.invoiceItem)
        this.modals.classic = false
      }
    },
    deleteInvoiceItem(id) {
      let data = {
        item_id: id
      }
      if (!confirm('Are you sure?')) return
      this.$store.dispatch('invoice/deleteInvoiceItem', data)
    }
  }
}
</script>
<style lang="scss">
.sh-inv_item {
  margin-bottom: 30px;
  + .sh-inv_item {
    padding-top: 30px;
    border-top: 1px solid #dddddd;
  }
}
</style>
