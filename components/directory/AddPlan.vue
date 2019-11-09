<template>
  <div>
    <b-form @submit.prevent="addPlan">
      <b-row>

        <b-form-group
          class="col-md-12"
          label="Plan"
          description="">
          <el-select
            v-model="plan.plan_id"
            :remote-method="getPlans"
            :loading="loading"
            filterable
            remote
            reserve-keyword
            placeholder="Choose New Plan">
            <el-option
              v-for="plan in plans"
              :key="plan.id"
              :label="plan.name"
              :value="plan.id"
            />
          </el-select>
        </b-form-group>
        <b-form-group
          class="col-md-12"
          label="Payment Source"
          description="">
          <el-select
            v-model="plan.card_nonce"
            reserve-keyword
            placeholder="Choose Card">
            <el-option
              v-for="card in cards"
              :key="card.id"
              :label="`${card.card_brand} ~ **** ${card.last_4}`"
              :value="card.id"
            />
          </el-select>
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group
          class="col-md-6"
          label="Trial">
          <b-form-checkbox
            id="checkbox-1"
            v-model="plan.trial"
            :value="true"
            :unchecked-value="false"
            name="checkbox-1"
          >
            Yes
          </b-form-checkbox>
        </b-form-group>
        <b-form-group
          v-if="plan.trial"
          class="col-md-6"
          label="Trial Days">
          <b-form-input
            v-model="plan.trial_days"
            type="number"
            required/>
        </b-form-group>
      </b-row>
      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary">Add Plan</b-button>
    </b-form>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  name: 'AddPlan',
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
  mounted() {
    this.loading = !this.loading
    this.plan.end_time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
    this.$plan
      .getAllPlan()
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
