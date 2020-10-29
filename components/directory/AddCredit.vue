<template>
  <div>
    <b-form @submit.prevent="">
      <b-row>

        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label="Enter the amount"
          description="">
          <el-input
            v-model="plan.plan_id"
            :remote-method="getPlans"
            :loading="loading"
            filterable
            remote
            reserve-keyword
            placeholder="$0.00"/>
        </b-form-group>
        
      </b-row>
      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary">Add Credit</b-button>
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
    cards: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    plan: {
      plan_id: '',
      trial: false,
      trial_days: '0',
      card_nonce: ''
    }
  }),
  mounted() {},
  methods: {
    getPlans(q) {
      this.loading = !this.loading
      const link = `${this.$route.params.space}/plans?filter[name]=${q}`
      this.$plan
        .getAllPlan(link)
        .then(({ data }) => {
          this.loading = !this.loading
          this.plans = data.data
        })
        .catch(e => {
          this.loading = !this.loading
          this.$bvToast.toast('Failed to retrieve plans. Try again', {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    addPlan() {
      this.loading = !this.loading

      const { id } = this.$route.params
      const { plan } = this

      this.$membership
        .addPlan(id, plan)
        .then(res => {
          this.$bvToast.toast('Plan assigned to member successfully', {
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
