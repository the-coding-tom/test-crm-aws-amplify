<template>
  <div>
    <b-form @submit.prevent="addNewMembership">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Members"
            subtitle="Recently Active"/>
          <b-button
            :disabled="loading"
            type="submit"
            variant="primary"
          >Add Member</b-button>
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
                          v-model="membership.first_name"
                          placeholder="First Name"
                          required/>
                      </b-form-group>

                      <b-form-group label="Last Name">
                        <b-form-input
                          v-model="membership.last_name"
                          placeholder="Last Name"
                          required/>
                      </b-form-group>

                      <b-form-group label="Email">
                        <b-form-input
                          v-model="membership.email"
                          type="email"
                          autocomplete="Email"
                          placeholder="you@somemail.com"
                          required />
                      </b-form-group>

                      <base-input
                        v-model="membership.linkedin_url"
                        type="url"
                        label="Linkedin"
                        placeholder="https://linkedin.com/in/someone"/>

                      <b-form-group label="Source of Invitation">

                        <b-form-select
                          :options="options"
                          v-model="membership.extras[0].type"/>
                      </b-form-group>

                      <b-form-group label="Comments">
                        <b-form-textarea
                          v-model="membership.extras[0].comment"
                          placeholder="Comments to save on this member"/>
                      </b-form-group>

                      <b-form-group>
                        <b-form-checkbox
                          v-model="membership.founding_member"
                          :value="true"
                          :unchecked-value="false">Founding Member</b-form-checkbox>
                      </b-form-group>
                    </div>
                    <div class="col-md-1"/>
                    <div class="col-md-5">
                      <h3 class="mb-4">Membership Details</h3>

                      <b-form-group label="Start Date">
                        <client-only>
                          <date-picker
                            id="time"
                            v-model="membership.start_time"
                            width="100%"
                            input-class="form-control"
                            lang="en"
                            format="YYYY-MM-DD"
                            value-type="format"
                            confirm
                            type="date"
                            placeholder="Start Date"/>
                        </client-only>
                      </b-form-group>

                      <b-form-group label="End Date">
                        <client-only>
                          <date-picker
                            id="time"
                            v-model="membership.end_time"
                            width="100%"
                            input-class="form-control"
                            lang="en"
                            format="YYYY-MM-DD"
                            value-type="format"
                            confirm
                            type="date"
                            placeholder="End Date"/>
                        </client-only>
                      </b-form-group>

                      <b-form-group label="On Trial">
                        <b-form-checkbox
                          v-model="membership.trial"
                          :value="true"
                          :unchecked-value="false">Yes</b-form-checkbox>
                      </b-form-group>

                      <b-form-group
                        v-if="membership.trial"
                        label="Trial Days"
                        description="Number of days before member is charged">
                        <b-form-input
                          v-model="membership.trial_days"
                          :min="membership.trial && 1"
                          type="number"
                          required/>
                      </b-form-group>

                      <b-form-group label="Assign Admin to Member">
                        <el-select
                          v-model="membership.assigned_admin"
                          :remote-method="searchAdminsByName"
                          :loading="searching"
                          filterable
                          remote
                          reserve-keyword
                          placeholder="Choose an admin">
                          <el-option
                            v-for="admin in admins"
                            :key="admin.id"
                            :label="admin.name"
                            :value="admin.id"/>
                        </el-select>
                      </b-form-group>

                    </div>
                    <div class="col-md-1"/>
                  </div>
                </div>

                <div class="col-md-5">
                  <h3 class="mb-4">Pick Membership Plan</h3>
                  <MembershipPlans
                    :plans="plans"
                    v-model="membership.plan_id" />
                  <div>
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
  async asyncData({ $plan, error, store: { commit }, $admin }) {
    try {
      await $admin.getAllAdmins().then(({ data }) => {
        commit('admin/setAdmins', data)
      })

      return await $plan.getAllPlans().then(({ data, links, meta }) => {
        return {
          plans: data,
          links,
          meta
        }
      })
    } catch (e) {
      error({
        statusCode: e.statusCode,
        message: e.response ? JSON.stringify(e.response.data.errors) : e.message
      })
    }
  },
  data() {
    return {
      loading: false,
      searching: false,
      options: [
        { text: 'Reference', value: 'reference' },
        { text: 'Others', value: 'others' }
      ],
      membership: {
        first_name: '',
        last_name: '',
        assigned_admin: null,
        linkedin_url: '',
        email: '',
        extras: [{ type: 'reference', comment: '' }],
        founding_member: false,
        start_time: '',
        trial: false,
        trial_days: '0'
      }
    }
  },
  computed: {
    ...mapState({
      admins: state => state.admin.admins
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

          this.$bvToast.toast(
            `${
              e.response ? JSON.stringify(e.response.data.errors) : e.message
            }`,
            {
              title: 'Error',
              variant: 'danger'
            }
          )
        })
    },
    async searchAdminsByName(query) {
      try {
        this.searching = !this.searching
        const _self = this
        _.debounce(async () => {
          if (query) {
            const link = `/${
              _self.$route.params.space
            }/admins?filter[name]=${query}`

            await _self.$admin.getAllAdmins(link).then(({ data }) => {
              _self.$store.commit('admin/setAdmins', data)
            })
          } else {
            await _self.$admin.getAllAdmins().then(({ data }) => {
              _self.$store.commit('admin/setAdmins', data)
            })
          }

          _self.searching = !_self.searching
        }, 350)()
      } catch (error) {
        this.searching = !this.searching
        this.$bvToast.toast(
          error.response ? error.response.data.message : e.message,
          {
            title: 'Error',
            variant: 'danger'
          }
        )
      }
    }
  }
}
</script>
