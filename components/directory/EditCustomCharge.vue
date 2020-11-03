<template>
  <div>
    <b-form @submit.prevent="addCredit">
      <b-row>

        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label="Charge Details"
          description="">
          <el-input
            v-model="data.amount"
            :remote-method="getPlans"
            :loading="loading"
            type="number"
            filterable
            remote
            reserve-keyword
            required
            placeholder="amount $"/>
        </b-form-group>
        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label=""
          description="">
          <el-input
            v-model="data.description"
            :remote-method="getPlans"
            :loading="loading"
            type="text"
            filterable
            remote
            reserve-keyword
            required
            placeholder="Description"/>
        </b-form-group>
        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label=""
          description="">
          <client-only>
            <date-picker
              id="time"
              v-model="data.due_date"
              width="100%"
              input-class="form-control"
              lang="en"
              format="YYYY-MM-DD"
              value-type="format"
              confirm
              type="date"
              placeholder="Start Date"
            />
          </client-only>
        </b-form-group>
      </b-row>
      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  name: 'AddFreeMonths',
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
    freeMonths: {
      numberOfMonths: null
    }
  }),
  mounted() {},
  methods: {
    addCredit() {
      this.loading = !this.loading
      // add other charge details to this.data.currentCharge before sending
      this.data.spaceId = this.data.space_id
      this.data.chargeId = this.data.id
      this.$membership
        .editCustomCharge(this.data)
        .then(res => {
          this.$bvToast.toast('Charge updated successfully', {
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
