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
            placeholder="Choose New Plan">
            <el-option
              v-for="plan in plans"
              :key="plan.uuid"
              :label="plan.name"
              :value="plan.uuid"
            />
          </el-select>
        </b-form-group>
      </b-row>
      
      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary">Update Plan</b-button>
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
    plan_id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    new_plan_id: ''
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

      const { id } = this.$route.params
      const { new_plan_id, plan_id } = this

      this.$membership
        .changePlan(id, { plan_id, new_plan_id })
        .then(({ data }) => {
          this.$bvToast.toast('Plan changed successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response ? e.response.data.message : e.message

          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    }
  }
}
</script>

<style>
</style>
