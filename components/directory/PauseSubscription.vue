<template>
  <div>
    <b-form @submit.prevent="changePlan">
      <b-row>
        <b-form-group class="col-md-6">
          <b-form-checkbox
            v-model="change.changeInstantly"
            :value="true"
            :unchecked-value="false"
          >Pause now and unpause later.</b-form-checkbox
          >
        </b-form-group>
        <b-form-group
          v-if="!change.changeInstantly"
          id="selectPlan"
          class="col-md-12"
          label="Pause on"
          description=""
        >
          <el-input
            v-model="change.subscriptionPauseDate"
            type="date"
            filterable
            remote
            reserve-keyword
            required
            placeholder="Pause Date"
          />
        </b-form-group>
        <b-form-group 
          v-if="!change.changeInstantly" 
          class="col-md-12">
          <b-form-checkbox
            v-model="change.manuallyUnpause"
            :value="true"
            :unchecked-value="false"
          >Manually resume later.</b-form-checkbox
          >
        </b-form-group>
        <b-form-group
          v-if="!change.changeInstantly && !change.manuallyUnpause"
          class="col-md-12"
          label="Resume on"
          description="Don't set the resume date if you intend to manually unpause."
        >
          <el-input
            v-model="change.subscriptionResumeDate"
            type="date"
            filterable
            remote
            reserve-keyword
            required
            placeholder="Resume Date"
          />
        </b-form-group>
      </b-row>

      <b-button
        :disabled="loading"
        class="float-right"
        type="submit"
        variant="primary"
      >Save Update</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  name: 'PauseSubscription',
  components: {
    [Select.name]: Select,
    [Option.name]: Option
  },
  props: {
    data: Object,
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
      subscriptionPauseDate: null,
      subscriptionResumeDate: null,
      changeInstantly: true,
      manuallyUnpause: true
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
      //
      this.$membership
        .changeSubscriptionRenewalState(this.$route.params.id, {
          id: this.data.id,
          spaceId: this.data.space_id,
          subscriptionState: 'paused',
          subscriptionResumeDate: this.change.manuallyUnpause
            ? null
            : this.change.subscriptionResumeDate,
          subscriptionPauseDate: this.change.changeInstantly
            ? null
            : this.change.subscriptionPauseDate
        })
        .then(({ data }) => {
          this.$bvToast.toast('Pause was successful', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.loading = !this.loading
          this.$bvToast.toast('Pause  failed', {
            title: 'Error',
            variant: 'danger'
          })
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
