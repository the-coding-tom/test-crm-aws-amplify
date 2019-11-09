<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between py-4">
        <MainTitle
          title="Invoice Preview"/>
        <b-button
          type="submit"
          variant="primary"
          @click="downloadPdf">
          Download Pdf
        </b-button>
      </div>
    </base-header>

    <div 
      id="invoice-container" 
      class="container-fluid mt--6 mr-b-30">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          Invoice {{ invoice.inv_number }}
          <hr>
          <div class="row">
            <div class="col-md-7">
              <h3>{{ invoice.company.contact_name }}</h3>
              <div class="text-muted">
                {{ invoice.company.address }}
              </div>
            </div>
            <div class="col-md-5 text-right">
              <h3>{{ $store.state.space.currentSpace.name }}</h3>
              <div class="text-muted">
                {{ $store.state.space.currentSpace.address }}
              </div>
            </div>
          </div>
          <div class="row mr-t-30">
            <div class="col-md-7">
              <!-- <h3>Customer No.: 134</h3> -->
            </div>
            <div class="col-md-5 text-right">
              <!-- <a 
                  href="" 
                  class="text-primary mr-r-30">
                  <i class="fa fa-pen" /> Edit
                </a> -->
              Issue Date: {{ $moment(invoice.created_at).format('ll') }} <br>
              Pay By: {{ $moment(invoice.created_at).add(invoice.day_until_due, 'd').format('ll') }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-7">
              <div class="sh_prev_bf">
                <div class="col-md-12">
                  <h3 class="mr-b-20"><b>Invoice Item(s)</b></h3>
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
                      <div class="text-muted"/>
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
            </div>
            <div class="col-md-5 text-right">
              <h3>
                Total Amount: {{ currency_symbol }} {{ invoice.total_amount }}
              </h3>
              <p class="text-muted">
                Tax: {{ invoice.tax_rate }}
              </p>
              <h3 class="bdr-b inline-block">
                PAYABLE AMOUNT: {{ currency_symbol }} {{ invoice.total_amount }}
              </h3>
            </div>
          </div>
        </card>
      </div>
      <a 
        :href="`/${$store.state.space.currentSpace.subdomain}/invoice`"
        class="mr-b-30"><i class="fa fa-angle-left mr-r-10" /> Back
      </a>
    </div>
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
    },
    downloadPdf() {
      const printContents = document.getElementById('invoice-container')
        .innerHTML
      const originalContents = document.body.innerHTML
      document.body.innerHTML = printContents
      window.print()
      document.body.innerHTML = originalContents
    }
  }
}
</script>
<style lang="scss">
.sh-inv_item {
  margin-bottom: 10px;
  + .sh-inv_item {
    padding-top: 15px;
    border-top: 1px solid #dddddd;
  }
}
</style>
