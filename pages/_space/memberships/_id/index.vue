<template>
  <div>
    <b-form @submit.prevent="updateMembership">
      <base-header 
        class="pb-6" 
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            :subtitle="`${data.first_name} ${data.last_name}`"
            title="Membership"
          />

          <div>
            <input
              id="testing-code"
              :value="
                'https://member.shack15.com/?invitation=' + data.invitation_code
              "
              type="hidden"
            >
            <b-button
              variant="transparent"
              class="text-primary"
              @click="copyToClipBoard"
            >
              <i class="fas fa-copy" /> Copy Invitation Link
            </b-button>
            <b-button
              variant="transparent"
              class="text-primary"
              @click="onboardBrivo"
            >
              <i class="fas fa-user-lock" /> Brivo Onboard
            </b-button>

            <b-button
              variant="transparent"
              class="text-danger"
              @click="cancelMembership"
            ><i class="fa fa-trash" /> Cancel Membership</b-button
            >
          </div>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col-md-6">
            <card>
              <div class="row">
                <base-input
                  id="email"
                  v-model="data.email"
                  type="text"
                  class="col-md-6"
                  label="Email"
                  placeholder="Email"
                />
                <base-input
                  id="firstName"
                  v-model="data.first_name"
                  type="text"
                  class="col-md-6"
                  label="First Name"
                  placeholder="First Name"
                />
                <base-input
                  id="lastName"
                  v-model="data.last_name"
                  class="col-md-6"
                  label="Last Name"
                  placeholder="Last Name"
                  type="text"
                />
                <base-input
                  id="membershipNumber"
                  v-model="data.membership_number"
                  class="col-md-6"
                  label="Membership #"
                  placeholder="0000000"
                />
                <base-input
                  id="linkedinURL"
                  v-model="data.linkedin_url"
                  :required="false"
                  class="col-md-6"
                  label="Linkedin"
                  placeholder="https://linkedin.com/in/someone"
                />
                <b-form-group 
                  label="Source of Invitation" 
                  class="col-md-6">
                  <b-form-select
                    id="invitationSource"
                    v-model="data.extras[0].type"
                    :options="options"
                  />
                </b-form-group>
                <b-form-group 
                  label="Comments" 
                  class="col-md-6">
                  <b-form-textarea
                    id="comment"
                    v-model="data.extras[0].comment"
                    label="Comments"
                    placeholder="Comments"
                  />
                </b-form-group>

                <b-form-group 
                  class="col-md-6" 
                  label="Membership Type">
                  <b-form-select
                    id="memberType"
                    v-model="data.prefix_type"
                    :options="prefix_type"
                  />
                </b-form-group>

                <b-form-group 
                  class="col-md-6" 
                  label="Region">
                  <b-form-select
                    id="region"
                    v-model="data.prefix_locality"
                    :options="prefix_locality"
                  />
                </b-form-group>

                <b-form-group
                  :description="assignedAdmin"
                  class="col-md-6"
                  label="Assigned Admin"
                >
                  <el-select
                    v-model="selectedAdmin"
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
                      :value="option.id"
                    />
                  </el-select>
                </b-form-group>

                <b-form-group 
                  class="col-md-6" 
                  label="Date Joined">
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

                <!-- <b-form-group
                  class="col-md-6"
                  label="Trial Days"
                  description="Number of days before member is charged"
                >
                  <b-form-input
                    v-model="data.trial_days"
                    min="0"
                    type="number"
                    required
                  />
                </b-form-group> -->
                <div
                  v-if="data.subscriptions && data.subscriptions.length > 0"
                  style="width: 100%; display: flex"
                >
                  <b-form-group
                    class="col-md-6"
                    label="Subscription Start Date"
                  >
                    <client-only>
                      <date-picker
                        id="time"
                        v-model="data.subscriptions[0].starts_at"
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
                    label="Subscription Expiry Date"
                  >
                    <client-only>
                      <date-picker
                        id="time"
                        v-model="data.subscriptions[0].ends_at"
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
                </div>
                <b-form-group 
                  class="col-md-6" 
                  label="Paid for">
                  <b-form-checkbox
                    v-model="data.paid_for"
                    :value="true"
                    :unchecked-value="false"
                  >Yes</b-form-checkbox
                  >
                </b-form-group>
                <b-form-group
                  v-if="data.paid_for"
                  class="col-md-6"
                  label="Paid by"
                >
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
                      :value="option.id"
                    />
                  </el-select>
                </b-form-group>

                <div class="col-md-12">
                  <b-button
                    :disabled="loading"
                    type="submit"
                    variant="primary"
                    block
                  >Save</b-button
                  >
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
      @click="$router.go(-1)"
    ><i class="fas fa-chevron-left" /> Back</b-button
    >
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'
import { mapState } from 'vuex'
import { displayError } from '../../../../util/errors'

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
      let paid_by = null
      let members = []

      return await $membership
        .getAMembership(params.id)
        .then(async ({ data }) => {
          data.trial_days = data.primary_plan[0].pivot.trial_days

          if (data.paid_by) {
            const result = await $membership.getAMembership(data.paid_by)

            members.push(result.data)
            paid_by = data.paid_by
          }

          // Bug Fix: Missing subscription info for invited member who hasn't subscribed yet cos account is pending.

          return {
            data,
            members,
            paid_by
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
      selectedAdmin: null,
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
    }),
    assignedAdmin() {
      if (this.data.assigned_admin) {
        return `Current: ${this.data.assigned_admin.name}`
      }
    }
  },
  methods: {
    updateMembership() {
      const { id } = this.$route.params
      this.loading = !this.loading
      this.data.membership_id = this.data.membership_number
      if (this.data.user_profile) {
        this.data.user_profile.first_name = this.data.first_name
        this.data.user_profile.last_name = this.data.last_name
        this.data.user_profile.full_name = `${this.data.first_name} ${
          this.data.last_name
        }`
      }

      this.data.paid_by = this.paid_by

      // Fixed bug using this line
      if (this.data.assigned_admin) {
        this.data.assigned_admin =
          this.selectedAdmin ?? this.data.assigned_admin.uuid
      } else {
        this.data.assigned_admin =
          this.selectedAdmin ?? this.data.assigned_admin.uuid
      }

      console.log(this.data.assignedAdmin)

      this.$membership
        .updateMembership(id, this.data)
        .then(res => {
          //this.loading = !this.loading
          // this.$bvToast.toast('Membership updated succesfully', {
          //   title: 'Success',
          //   variant: 'success'
          // })
          //this.$router.go(-1)
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

      this.$membership
        .updateProfile({
          user_id: this.data.user_id,
          ...this.data.user_profile
        })
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
      const link = `/${this.space.subdomain}/admins?filter[name]=${query}`

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
    },
    onboardBrivo() {
      this.loading = !this.loading
      const { id } = this.$route.params

      this.$membership
        .onboardBrivo(id)
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast('Brivo onboarding successfully', {
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(e => {
          displayError(e, this)
        })
    },
    copyToClipBoard() {
      let testingCodeToCopy = document.querySelector('#testing-code')
      testingCodeToCopy.setAttribute('type', 'text') // 不是 hidden 才能複製
      testingCodeToCopy.select()

      try {
        var successful = document.execCommand('copy')
        if (successful) {
          this.$bvToast.toast('Invitation link copied', {
            title: 'Copied',
            variant: 'success'
          })
        }
      } catch (err) {
        alert('Oops, unable to copy')
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    }
  }
}
</script>
