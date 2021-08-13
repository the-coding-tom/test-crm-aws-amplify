<template>
  <div>
    <b-form @submit.prevent="addCredit">
      <b-row>
        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label="Enter the amount"
          description=""
        >
          <el-input
            v-model="credit.amount"
            :loading="loading"
            type="number"
            filterable
            remote
            reserve-keyword
            placeholder="$0.00"
            required
          />
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label="Expiration date"
          description=""
        >
          <el-input
            v-model="credit.expirationDate"
            :loading="loading"
            type="date"
            filterable
            required
            remote
            reserve-keyword
          />
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label="Purpose"
          description=""
        >
          <b-form-radio
            v-model="credit.purpose"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="room-booking"
          >Room Booking</b-form-radio
          >
          <b-form-radio
            v-model="credit.purpose"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="event-booking"
          >Event Tickets</b-form-radio
          >
          <b-form-radio
            v-model="credit.purpose"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="food-ordering"
          >Food & Drinks</b-form-radio
          >
        </b-form-group>
      </b-row>
      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary"
      >Add Credit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  name: 'AddCredit',
  components: {
    [Select.name]: Select,
    [Option.name]: Option
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    credit: {
      amount: null,
      description: null,
      membership_id: null,
      purpose: 'room-booking',
      expirationDate: null
    }
  }),
  mounted() {},
  methods: {
    addCredit() {
      this.loading = !this.loading

      this.credit.description = 'Credit bonus for member'
      this.credit.membership_id = this.data.id
      this.$membership
        .addCredit(this.credit)
        .then(res => {
          this.$bvToast.toast('Credit assigned to member successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response
            ? `${e.response.data.message} ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    }
  }
}
</script>

<style>
</style>
