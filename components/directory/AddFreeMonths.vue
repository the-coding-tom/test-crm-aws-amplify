<template>
  <div>
    <b-form @submit.prevent="addCredit">
      <b-row>

        <b-form-group
          id="selectPlan"
          class="col-md-12"
          label="Enter number of months"
          description="">
          <el-input
            v-model="freeMonths.numberOfMonths"
            :remote-method="getPlans"
            :loading="loading"
            type="number"
            filterable
            remote
            reserve-keyword
            placeholder="number of months"/>
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

      this.$membership
        .addFreeMonths(this.freeMonths)
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
