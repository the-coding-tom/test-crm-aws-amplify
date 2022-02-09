<template>
  <card>
    <div
      slot="header"
      class="d-flex align-items-center justify-content-between"
    >
      <div class="txt-upper">Membership Plan History</div>
      <div style="width: 200px">
        <no-ssr>
          <!-- <date-picker
            id="time"
            v-model="date"
            width="100%"
            input-class="form-control"
            lang="en"
            format="YYYY-MM-DD"
            value-type="format"
            confirm
            range
            type="date"
            placeholder="Start Date"
            @change="getSubscriptionData"
          /> -->
        </no-ssr>
      </div>
    </div>
    <div class="m-n25 overflow-auto">
      <b-table
        :items="data"
        :fields="fields"
        show-empty
        striped
        responsive="sm"
        hover
      >
        <!-- A custom formatted column -->
        <template #cell(plan_name)="data">
          <b class="text-primary">{{
            data.item.subscription_name
              .replaceAll('-', ' ')
              .replaceAll(/[0-9]/g, ' ')
          }}</b>
        </template>

        <!-- A custom formatted column -->
        <template #cell(start_date)="data">
          <span>{{ data.item.subscription_start_date }}</span>
        </template>

        <!-- A custom formatted column -->
        <template #cell(end_date)="data">
          <span>{{ data.item.subscription_end_date }}</span>
        </template>
      </b-table>
    </div>
    <div 
      slot="footer" 
      class="">
      <base-pagination
        :total="meta.total"
        :per-page="meta.per_page"
        :value="meta.current_page"
        align="center"
        @next="next"
        @prev="prev"
      />
    </div>
  </card>
</template>

<script>
import { displayError } from '~/util/errors.js'
import axios from 'axios'

export default {
  data: () => ({
    date: [],
    data: [],
    fields: ['plan_name', 'start_date', 'end_date'],
    meta: {},
    links: {}
  }),
  mounted() {
    this.date = [
      this.$moment()
        .subtract(30, 'days')
        .format('YYYY-MM-DD'),
      this.$moment()
        .add(1, 'days')
        .format('YYYY-MM-DD')
    ]

    this.getSubscriptionData()
  },
  methods: {
    getSubscriptionData() {
      const filter = `${
        this.$route.params.id
      }/subscription/history?filter[scheduled_subscription]=false&sort=-id`
      this.$membership
        .getSubscriptionHistory(filter)
        .then(res => {
          this.data = res.data
          this.meta = {
            total: res.total,
            per_page: res.per_page,
            current_page: res.current_page
          }
          this.links = {
            next: res.next_page_url,
            prev: res.prev_page_url
          }
        })
        .catch(e => {
          displayError(e, this)
        })
    },
    processRequest(link) {
      this.$axios
        .$get(link)
        .then(res => {
          this.data = res.data
          this.meta = res.meta
          this.links = res.links
        })
        .catch(e => {
          displayError(e, this)
        })
    },
    next() {
      const filter = `&filter[by_member]=${
        this.$route.params.id
      }&filter[created_at]=${this.date[0]},${this.date[1]}`

      const link = this.links.next + filter

      this.processRequest(link)
    },
    prev() {
      const filter = `&filter[by_member]=${
        this.$route.params.id
      }&filter[created_at]=${this.date[0]},${this.date[1]}`

      const link = this.links.prev + filter

      this.processRequest(link)
    }
  }
}
</script>

<style>
</style>
