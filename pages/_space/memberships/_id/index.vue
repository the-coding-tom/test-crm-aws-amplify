<template>
  <div>
    <b-form @submit.prevent="updateMembership">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            :subtitle="`${data.first_name} ${data.last_name}`"
            title="Membership"/>

          <b-button
            variant="transparent"
            class="text-danger"
            @click="cancelMembership"><i class="fa fa-trash"/> Cancel Membership</b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">

        <div class="row">
          <div class="col-md-6">
            <card>
              <div class="row">
                <base-input
                  v-model="data.first_name"
                  type="text"
                  class="col-md-6"
                  label="First Name"
                  placeholder="First Name"/>
                <base-input
                  v-model="data.last_name"
                  class="col-md-6"
                  label="Last Name"
                  placeholder="Last Name"
                  type="text"/>
                <base-input
                  v-model="data.membership_number"
                  class="col-md-6"
                  label="Membership #"
                  placeholder="0000000"/>
                <base-input
                  v-model="data.linkedin_url"
                  :required="false"
                  class="col-md-6"
                  label="Linkedin"
                  placeholder="https://linkedin.com/in/someone" />
                <b-form-group
                  label="Source of Invitation"
                  class="col-md-6">
                  <b-form-select
                    v-model="data.extras[0].type"
                    :options="options"
                  />
                </b-form-group>
                <b-form-group
                  label="Comments"
                  class="col-md-6">

                  <b-form-textarea
                    v-model="data.extras[0].comment"
                    label="Comments"
                    placeholder="Comments"/>
                </b-form-group>

                <b-form-group
                  class="col-md-6"
                  label="Membership Type">
                  <b-form-select
                    v-model="data.prefix_type"
                    :options="prefix_type" />
                </b-form-group>

                <b-form-group
                  class="col-md-6"
                  label="Region">
                  <b-form-select
                    v-model="data.prefix_locality"
                    :options="prefix_locality" />
                </b-form-group>

                <b-form-group
                  class="col-md-6"
                  label="Assigned Admin">
                  <el-select
                    v-model="data.assigned_admin"
                    :remote-method="searchAdmins"
                    :loading="searching"
                    filterable
                    remote
                    reserve-keyword
                    placeholder="Choose an admin"
                  >
                    <el-option
                      v-for="option in admins"
                      :key="option.id"
                      :label="option.name"
                      :value="option.id"/>
                  </el-select>
                </b-form-group>

                <b-form-group
                  class="col-md-6"
                  label="Start Date">
                  <client-only>
                    <date-picker
                      id="time"
                      v-model="data.trial_ends_at"
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

                <b-form-group
                  class="col-md-6"
                  label="Trial Days"
                  description="Number of days before member is charged">
                  <b-form-input
                    v-model="data.trial_days"
                    min="0"
                    type="number"
                    required/>
                </b-form-group>

                <b-form-group
                  class="col-md-6"
                  label="Paid for">
                  <b-form-checkbox
                    v-model="data.paid_for"
                    :value="true"
                    :unchecked-value="false">Yes</b-form-checkbox>
                </b-form-group>

                <b-form-group
                  v-if="data.paid_for"
                  class="col-md-6"
                  label="Paid by">
                  <el-select
                    v-model="paid_by"
                    :remote-method="searchMembers"
                    :loading="searching"
                    filterable
                    remote
                    reserve-keyword
                    placeholder="Choose a member"
                    @change="getCards"
                  >
                    <el-option
                      v-for="option in members"
                      :key="option.id"
                      :label="option.first_name + ' ' + option.last_name"
                      :value="option.id"/>
                  </el-select>
                </b-form-group>

                <div class="col-md-12">
                  <b-button
                    :disabled="loading"
                    type="submit"
                    variant="primary"
                    block
                  >Save</b-button>
                </div>
              </div>
            </card>
          </div>
        </div>

      </div>
    </b-form>
    <b-button
      variant="transparent"
      class="text-primary ml-2 mb-2"
      @click="$router.go(-1)"><i class="fas fa-chevron-left"/> Back</b-button>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'
import { mapState } from 'vuex'

export default {
  name: 'DirectoryEdit',
  layout: 'ShackDash',
  components: {
    MainTitle,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, params, $membership, error, $moment }) {
    try {
      return await $membership.getAMembership(params.id).then(({ data }) => {
        data.trial_days = data.primary_plan[0].pivot.trial_days
        return {
          data
        }
      })
    } catch (e) {
      error({
        statusCode: e.statusCode,
        message: e.response ? e.response.data.message : e.message
      })
    }
  },
  data() {
    return {
      loading: false,
      admins: [],
      options: [
        { text: 'Referral', value: 'referral' },
        { text: 'Application', value: 'application' }
      ],
      paid_by: null,
      prefix_type: [
        {
          text: 'Founding Member',
          value: '0'
        },
        {
          text: 'Fast Track',
          value: '1'
        },
        {
          text: 'Early Invite',
          value: '2'
        },
        {
          text: 'General Member',
          value: '3'
        }
      ],
      prefix_locality: [
        {
          text: 'Bay Area',
          value: 'A'
        },
        {
          text: 'US outside of the Bay',
          value: 'B'
        },
        {
          text: 'EMEA',
          value: 'C'
        },
        {
          text: 'APAC',
          value: 'D'
        }
      ],
      searching: false,
      cards: []
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    updateMembership() {
      const { id } = this.$route.params
      this.loading = !this.loading

      this.data.membership_id = this.data.membership_number
      this.data.paid_by = this.paid_by

      this.$membership
        .updateMembership(id, this.data)
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast('Membership updated succesfully', {
            title: 'Success',
            variant: 'success'
          })
          this.$router.go(-1)
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
    searchMembers(query) {
      const link = `filter[search]=${query}&filter[status]=accepted`

      this.searching = !this.searching

      const _self = this

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({ data }) => {
          _self.searching = !_self.searching
          _self.members = data
        })
      }, 350)()
    },
    searchAdmins(query) {
      const link = `${process.env.base_url}/${
        this.space.subdomain
      }/admins?filter[name]=${query}`

      this.$admin
        .getAllAdmins(link)
        .then(res => {
          this.admins = res.data
        })
        .catch(escape => {
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          error({
            statusCode: err.status || 404,
            message
          })
        })
    },
    getCards(e) {
      this.$membership
        .getPaymentMethods(e)
        .then(res => {
          // this.cards = res.data
          _.each(res.data, o => {
            this.cards.push({
              text: `${o.card_brand} - **** ${o.last_4}`,
              value: o.id
            })
          })
        })
        .catch(e => {
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          this.$bvToast.toast(message, {
            variant: 'danger',
            title: 'Error'
          })
        })
    },
    cancelMembership() {
      if (!confirm('Are you sure?')) return

      this.loading = !this.loading
      const { id } = this.$route.params
      this.$membership
        .deleteMembership(id)
        .then(({ data }) => {
          this.$bvToast.toast('Member deleted successfully', {
            title: 'Success',
            variant: 'success'
          })

          this.$router.go(-1)
        })
        .catch(e => {
          this.loading = !this.loading

          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    }
  }
}
</script>
