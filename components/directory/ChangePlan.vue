<template>
  <div>
    <b-form @submit.prevent="changePlan">
      <b-row>
        <b-form-group 
          class="col-md-12" 
          label="New Plan" 
          description="">
          <el-select
            v-model="new_plan_id"
            :remote-method="getPlans"
            :loading="loading"
            filterable
            remote
            reserve-keyword
            placeholder="Choose New Plan"
          >
            <el-option
              v-for="plan in plans"
              :key="plan.id"
              :label="plan.name"
              :value="plan.id"
            />
          </el-select>
        </b-form-group>
        <b-form-group 
          class="col-md-6" 
          label="Change instantly">
          <b-form-checkbox
            v-model="change.changeInstantly"
            :value="true"
            :unchecked-value="false"
          >Yes</b-form-checkbox
          >
        </b-form-group>
        <b-form-group
          v-if="!change.changeInstantly"
          id="selectPlan"
          class="col-md-12"
          label="Change on"
          description=""
        >
          <el-input
            v-model="change.dueDate"
            :remote-method="getPlans"
            :loading="loading"
            type="date"
            filterable
            remote
            reserve-keyword
            required
            placeholder="Due Date"
          />
        </b-form-group>
      </b-row>

      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary"
      >Update Plan</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  name: 'ChangePlan',
  components: {
    [Select.name]: Select,
    [Option.name]: Option
  },
  props: {
    plan_id: Number,
    membership_id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    new_plan_id: '',
    change: {
      dueDate: null,
      changeInstantly: true
    }
  }),
  mounted() {
    this.loading = !this.loading
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
    changePlan() {
      this.loading = !this.loading

      let id

      if (this.membership_id) {
        id = this.membership_id
      } else {
        id = this.$route.params.id
      }

      const { new_plan_id, plan_id, change } = this
      const moment = require('moment')

      this.$membership
        .changePlan(id, {
          subscription_id: plan_id,
          new_plan_id,
          due_date: change.dueDate || moment(),
          scheduled: !this.change.changeInstantly,
          new_plan_name: ''
        })
        .then(({ data }) => {
          this.onPlanChangedSuccessfully()
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    },
    onPlanChangedSuccessfully() {
      this.$bvToast.toast('Plan changed successfully', {
        title: 'Success',
        variant: 'success'
      })
      location.reload()
    }
  }
}
</script>

<style>
</style>
