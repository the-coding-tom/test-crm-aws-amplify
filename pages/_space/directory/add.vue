<template>
  <div>
    <b-form @submit.prevent="addNewMembership">
      <base-header 
        class="pb-6" 
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle 
            title="Members" 
            subtitle="Recently Active" />
          <b-button 
            :disabled="loading" 
            type="submit" 
            variant="primary"
          >Add Member</b-button
          >
        </div>
      </base-header>
      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <div class="mr-30">
              <div class="row">
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-5">
                      <h3 class="mb-4">Personal Details</h3>
                      <b-form-group label="First Name">
                        <b-form-input
                          id="firstName"
                          v-model="membership.first_name"
                          placeholder="First Name"
                          required
                        />
                      </b-form-group>

                      <b-form-group label="Last Name">
                        <b-form-input
                          id="lastName"
                          v-model="membership.last_name"
                          placeholder="Last Name"
                          required
                        />
                      </b-form-group>

                      <b-form-group label="Email">
                        <b-form-input
                          id="email"
                          v-model="membership.email"
                          type="email"
                          autocomplete="Email"
                          placeholder="you@somemail.com"
                          required
                        />
                      </b-form-group>

                      <base-input
                        id="linkedinURL"
                        v-model="membership.linkedin_url"
                        :required="false"
                        type="url"
                        label="Linkedin"
                        placeholder="https://linkedin.com/in/someone"
                      />

                      <b-form-group label="Source of Invitation">
                        <b-form-select
                          id="invitationSource"
                          :options="options"
                          v-model="membership.extras[0].type"
                        />
                      </b-form-group>

                      <b-form-group label="Comments">
                        <b-form-textarea
                          id="comments"
                          v-model="membership.extras[0].comment"
                          placeholder="Comments to save on this member"
                        />
                      </b-form-group>
                    </div>
                    <div class="col-md-1" />
                    <div class="col-md-5">
                      <h3 class="mb-4">Membership Details</h3>

                      <b-form-group label="Membership Type">
                        <b-form-select
                          id="memberType"
                          v-model="membership.prefix_type"
                          :options="prefix_type"
                        />
                      </b-form-group>

                      <b-form-group label="Region">
                        <b-form-select
                          id="region"
                          v-model="membership.prefix_locality"
                          :options="prefix_locality"
                        />
                      </b-form-group>

                      <b-form-group label="Assigned Admin">
                        <el-select
                          id="chooseAdmin"
                          v-model="membership.assigned_admin"
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

                      <b-form-group label="Start Date">
                        <client-only>
                          <date-picker
                            id="startDate"
                            v-model="membership.trial_ends_at"
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

                      <!-- <b-form-group label="On Trial">
                        <b-form-checkbox
                          id="isOnTrial"
                          v-model="membership.trial"
                          :value="true"
                          :unchecked-value="false"
                        >Yes</b-form-checkbox
                        >
                      </b-form-group> -->

                      <b-form-group
                        v-if="membership.trial"
                        label="Trial Days"
                        description="Number of days before member is charged"
                      >
                        <b-form-input
                          id="trialDays"
                          v-model="membership.trial_days"
                          min="0"
                          type="number"
                          required
                        />
                      </b-form-group>

                      <b-form-group label="Paid for">
                        <b-form-checkbox
                          id="isPaidFor"
                          v-model="membership.paid_for"
                          :value="true"
                          :unchecked-value="false"
                        >Yes</b-form-checkbox
                        >
                      </b-form-group>

                      <b-form-group 
                        v-if="membership.paid_for" 
                        label="Paid by">
                        <el-select
                          v-model="membership.paid_by"
                          :remote-method="searchMembers"
                          :loading="searching"
                          filterable
                          remote
                          reserve-keyword
                          placeholder="Choose a member"
                        >
                          <el-option
                            v-for="option in data"
                            :key="option.id"
                            :label="option.first_name + ' ' + option.last_name"
                            :value="option.id"
                          />
                        </el-select>
                      </b-form-group>
                    </div>
                    <div class="col-md-1" />
                  </div>
                </div>

                <div class="col-md-5">
                  <h3 class="mb-4">Pick Membership Plan</h3>
                  <MembershipPlans
                    id="plan"
                    :plans="plans"
                    v-model="membership.plan_id"
                  />
                  <div class="mr-t-20">
                    <base-pagination
                      :total="meta.total"
                      :per-page="meta.per_page"
                      :value="meta.current_page"
                      align="center"
                      @next="next"
                      @prev="prev"
                    />
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import MembershipPlans from '~/components/shack/MembershipPlans.vue'
import { Select, Option } from 'element-ui'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    MembershipPlans,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ $plan, error }) {
    return await $plan
      .getAllPlans()
      .then(({ data, links, meta }) => {
        return {
          plans: data,
          links,
          meta
        }
      })
      .catch(e => {
        error({
          statusCode: e.statusCode,
          message: e.response
            ? JSON.stringify(e.response.data.errors)
            : e.message
        })
      })
  },
  data() {
    return {
      data: [],
      cards: [],
      admins: [],
      loading: false,
      searching: false,
      options: [
        { text: 'Referral', value: 'referral' },
        { text: 'Application', value: 'application' },
        { text: 'Past Events', value: 'past_events' },
        { text: 'Invite Card', value: 'invite_card' }
      ],
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
      membership: {
        first_name: '',
        last_name: '',
        linkedin_url: '',
        membership_id: '',
        email: '',
        extras: [{ type: 'referral', comment: '' }],
        founding_member: false,
        trial: false,
        paid_for: false,
        trial_days: '0',
        prefix_type: '0',
        prefix_locality: 'A',
        paid_by: null,
        assigned_admin: null,
        trial_ends_at: null
      }
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  mounted() {
    this.membership.start_time = this.$moment().format('YYYY-MM-DD')
    this.membership.end_time = this.$moment()
      .add(1, 'year')
      .format('YYYY-MM-DD')
  },
  methods: {
    next() {
      const { next } = this.links
      this.$axios
        .$get(next)
        .then(({ data, links, meta }) => {
          this.plans = data
          this.links = links
          this.meta = meta
        })
        .catch(e => {
          this.$bvToast.toast(
            e.response ? JSON.stringify(e.response.data.errors) : e.message,
            {
              title: 'Error',
              variant: 'danger'
            }
          )
        })
    },
    prev() {
      const { prev } = this.links
      this.$axios
        .$get(prev)
        .then(({ data, links, meta }) => {
          this.plans = data
          this.links = links
          this.meta = meta
        })
        .catch(e => {
          this.$bvToast.toast(
            e.response ? JSON.stringify(e.response.data.errors) : e.message,
            {
              title: 'Error',
              variant: 'danger'
            }
          )
        })
    },
    toggleLoading() {
      this.loading = !this.loading
    },
    addNewMembership() {
      this.loading = !this.loading

      const { membership } = this
      membership.added_directly_into_directory = true
      membership.email = membership.email.toLowerCase()

      this.$membership
        .addMembership(membership)
        .then(res => {
          this.$bvToast.toast(
            'Membership created successfully. Proceed to invite member',
            {
              title: 'Membership Creation',
              variant: 'success'
            }
          )

          this.$router.push({ name: 'space-memberships-uninvited' })
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
    searchMembers(query) {
      const link = `filter[search]=${query}`

      this.searching = !this.searching

      const _self = this

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({ data }) => {
          _self.searching = !_self.searching
          _self.data = data
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
    }
  }
}
</script>
