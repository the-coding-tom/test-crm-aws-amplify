<template>
  <card>
    <div
      slot="header"
      class="d-flex align-items-center justify-content-between">
      <div class="txt-upper">
        CheckIn
      </div>
      <div style="width: 200px">
        <no-ssr>
          <date-picker
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
            @change="getCheckInData"
          />
        </no-ssr>
      </div>
    </div>
    <div class="m-n25">
      <b-table
        :items="data"
        :fields="fields"
        show-empty
        striped
        responsive="sm"
        hover/>
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
    fields: [
      'full_name',
      'type',
      'company',
      'checkin_timestamp',
      'checkout_timestamp'
    ],
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

    this.getCheckInData()
  },
  methods: {
    getCheckInData() {
      const filter = `?filter[by_member]=${
        this.$route.params.id
      }&filter[created_at]=${this.date[0]},${this.date[1]}`
      this.$checkin
        .checkins(filter)
        .then(res => {
          this.data = res.data
          this.meta = res.meta
          this.links = res.links
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
