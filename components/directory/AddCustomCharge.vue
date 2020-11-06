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
            v-model="charge.amount"
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
            v-model="charge.description"
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
          class="col-md-6"
          label="Charge instantly">
          <b-form-checkbox
            v-model="charge.chargeInstantly"
            :value="true"
            :unchecked-value="false">Yes</b-form-checkbox>
        </b-form-group>
        <b-form-group
          v-if="!charge.chargeInstantly"
          id="selectPlan"
          class="col-md-12"
          label="Charge on"
          description="">
          <el-input
            v-model="charge.dueDate"
            :remote-method="getPlans"
            :loading="loading"
            type="date"
            filterable
            remote
            reserve-keyword
            required
            placeholder="Due Date"/>
        </b-form-group>
      </b-row>
      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  name: 'AddCustomCharge',
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
    charge: {
      description: null,
      amount: null,
      dueDate: null,
      chargeInstantly: true
    }
  }),
  mounted() {},
  methods: {
    addCredit() {
      this.loading = !this.loading
      // add other charge details to this.data.currentCharge before sending
      this.charge.space_id = this.data.space_id
      this.charge.user_id = this.data.user_id
      this.$membership
        .addCustomCharge(this.charge)
        .then(res => {
          this.$bvToast.toast('Custom charge billed to member successfully', {
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
