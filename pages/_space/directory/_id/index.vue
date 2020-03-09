<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="row py-4">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <MainTitle
              title="Directory"
              subtitle="Profile" />
            <div class="d-flex align-items-center">
              <b-form-checkbox
                v-model="checkin.status"
                switch
                value="checkin"
                unchecked-value="checkout"
                size="lg"
                variant="success"
                @change="checkinToggle"
              >
                <span
                  v-if="checkin.status == 'checkin'"
                  class="text-success">Checked in</span>
                <span
                  v-else
                  class="text-muted">Checked Out</span>
              </b-form-checkbox>
            </div>
          </div>
        </div>
        <div class="col-md-6 mr-l-child-10 text-right">

          <b-button
            :to="{name: 'space-memberships-id', params: {id: data.id}}"
            variant="transparent"
            class="text-primary"
          >
            <i class="fas fa-edit"/> Edit Membership
          </b-button>
          <b-button
            variant="transparent"
            class="text-primary"
            @click="drawer = true"
          >
            <i
              class="fa fa-sticky-note"
            /> View Notes
          </b-button>
          <b-button
            variant="transparent"
            class="text-danger"
            @click="deleteMember">
            <i class="fa fa-trash" /> Delete Member
          </b-button>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <ProfileHead
              :status="data.prefix_type"
              :img="data.user_profile ? data.user_profile.picture : null"
              :name="data.user_profile ? data.user_profile.full_name : `${data.first_name} ${data.last_name}`"
              :company="data.user_profile ? data.user_profile.company : null"
              :address="data.user_profile ? data.user_profile.addresses : null"
              :date="data.user_profile ? data.user_profile.date_of_birth : null"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <i class="fa fa-envelope" /> {{ data.email }}
                </div>
                <div class="col-md-6">
                  <i class="fa fa-phone" /> {{ data.user_profile && data.user_profile.phone }}
                </div>

              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <i class="fa fa-venus-mars" /> {{ data.user_profile && data.user_profile.gender }}
                </div>
                <div class="col-md-6">
                  <i class="fa fa-globe" /> {{ data.user_profile && data.user_profile.nationality }}
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <i class="fa fa-user" /> {{ data.user_profile && data.user_profile.ethnicity }}
                </div>
                <!-- <div class="col-md-6">
                  <i class="fa fa-globe" /> {{ data.user_profile && data.user_profile.nationality }}
                </div> -->
              </div>
              <div class="mt-4">
                <div class="text-muted">
                  Profile
                </div>
                <p>
                  {{ data.user_profile && data.user_profile.bio }}
                </p>
                <div v-if="data.user_profile">
                  <div class="text-muted">
                    Cities
                  </div>
                  <badge
                    v-for="(city, i) in data.user_profile.cities"

                    :key="`${city}-${i}`"
                    class="mr-1">{{ city }}</badge>
                  <div class="text-muted">
                    Interests
                  </div>
                  <badge
                    v-for="(interest, i) in data.user_profile.interests"

                    :key="`${interest}-${i}`"
                    class="mr-1">{{ interest }}</badge>
                  <div class="text-muted mt-2">Offers</div>
                  <badge
                    v-for="(offer, i) in data.user_profile.offers"
                    :key="`${offer}-${i}`"
                    class="mr-1">{{ offer }}</badge>
                  <div class="text-muted mt-2">Skills</div>
                  <badge
                    v-for="(skill, i) in data.user_profile.skills"
                    :key="`${skill}-${i}`"
                    class="mr-1">{{ skill }}</badge>
                </div>


              </div>
              <div class="mt-4">
                <p><i class="ti-id-badge" /> {{ data && data.membership_id }}</p>
                <p><i class="ti-twitter-alt" /> {{ data.user_profile && data.user_profile.twitter }}</p>
                <p><i class="ti-linkedin" /> {{ data.user_profile && data.user_profile.linkedin }}</p>
                <p><i class="ti-world" /> {{ data.user_profile && data.user_profile.website }}</p>
              </div>
              <div class="sh-dls">
                <span> Joined on:</span> {{ $moment(data.member_since).format('MMMM DD, YYYY') }}
              </div>

              <div class="sh-dls">
                <span>Renewal due by:</span> {{ getSubscription }}
              </div>
              <div class="sh-dls">
                <span>Last Checkin Timestamp:</span> {{ data.last_checkin[0] && $moment(data.last_checkin[0].checkin_timestamp).format('MMMM DD, YYYY HH:mm:ss') }}
              </div>

              <hr
                class="w-25 bg-dark3 text-default"
                align="left" >

              <span v-html="getExtras(data.extras)"/>

              <div class="sh-dls">
                <span> Paid by:</span> <nuxt-link :to="{name: 'space-memberships-id', params: {id: data.paid_by}}">{{ data.payee_name }}</nuxt-link>
              </div>
              <div class="sh-dls">
                <span> Paying for:</span> <span
                  v-for="paid in paid_for"
                  :key="paid.id"><nuxt-link
                    v-if="paid_for.length > 0"
                    :to="{name: 'space-memberships-id', params: {id: paid.id}}">{{ paid.first_name }} {{ paid.last_name }}</nuxt-link>, </span>
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-6">
          <card header-classes="bg-transparent">
            <div
              slot="header"
              class="d-flex justify-content-between">
              <div class="txt-upper">
                Card Details
              </div>
              <template>
                <b-button
                  variant="transparent"
                  class="text-primary"
                  @click="toggleModal('add-card')">
                  <i class="fa fa-credit-card" /> Add New Card
                </b-button>
              </template>
            </div>
            <template v-if="cards.length == 0">
              <div class="text-center">
                <div class="text-muted">
                  No card added for member
                </div>
              </div>
            </template>
            <template v-else>
              <div class="m-n25">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr
                      v-for="(card, i) in cards"
                      :key="card.id"
                    >
                      <td>
                        {{ card.card_brand }}
                      </td>
                      <td>
                        {{ $moment(card.exp_month, "M").format('MMM') }} {{ card.exp_year }}
                      </td>
                      <td>
                        <b-button
                          :disabled="loading"
                          size="
                          sm"
                          variant="transparent"
                          class="text-danger"
                          @click="removeMemberSource(i)"><i class="fa fa-trash"/></b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </card>
          <card>
            <div
              slot="header"
              class="d-flex justify-content-between">
              <div class="txt-upper">
                MEMBERSHIP PLAN
              </div>
              <b-button
                variant="transparent"
                class="text-primary"
                @click="toggleModal('add-plan')">
                <i class="fa fa-plus" /> Add New Plan
              </b-button>
            </div>
            <div class="m-n25">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr
                    v-for="subscription in data.subscriptions"
                    v-if="!subscription.canceled_at"
                    :key="subscription.id">
                    <td>{{ getSubName(subscription)['name'] }}</td>
                    <td>Until {{ getSubDetails(subscription) }}</td>
                    <td>
                      <b-button
                        id="popover-1-top"
                        size="sm"
                        variant="transparent"
                        class="text-primary"
                        @click="makePlanPrimary(subscription)">
                        <i class="fas fa-user-shield"/>
                      </b-button>
                      <b-popover
                        placement="top"
                        target="popover-1-top"
                        content="Make plan primary"
                        triggers="hover focus"
                      />
                      <b-button
                        size="sm"
                        variant="transparent"
                        class="text-primary"
                        @click="changePlan(subscription)"><i class="fa fa-exchange-alt"/></b-button>
                      <b-button
                        size="sm"
                        variant="transparent"
                        class="text-danger"
                        @click="cancelPlan(subscription)"><i class="fa fa-trash"/></b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>

          <card>
            <div
              slot="header"
              class="d-flex justify-content-between">
              <div class="txt-upper">
                Events
              </div>
            </div>
            <template>
              <div class="m-n25">
                <div class="overflow-auto">
                  <b-table
                    id="my-table"
                    :items="events"
                    :per-page="perPage"
                    :current-page="currentPage"
                    striped
                    hover
                    show-empty
                    thead-class="hidden_header"
                  />
                </div>
              </div>
              <div
                slot="footer"
                class="">
                <b-pagination
                  :per-page="perPage"
                  v-model="currentPage"
                  :total-rows="rows"
                  aria-controls="my-table"
                />
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <b-modal
      id="change-plan"
      title="Change Current Plan"
      hide-footer><ChangePlan :plan_id="plan_id" /></b-modal>
    <b-modal
      id="add-plan"
      title="Add New Plan"
      hide-footer><AddPlan :cards="cards" /></b-modal>
    <b-modal
      id="add-card"
      title="Add New Card"
      hide-footer><AddCard
        :toggle-loading="toggleLoading"
        :loading="loading"
        @addCard="addCard" /></b-modal>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      title="Notes">
      <MembershipNotes :membership_id="data.id" />
    </el-drawer>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import ProfileHead from '~/components/shack/ProfileHead.vue'
import MembershipNotes from '~/components/shack/MembershipNotes.vue'
import ChangePlan from '~/components/directory/ChangePlan'
import AddPlan from '~/components/directory/AddPlan'
import AddCard from '~/components/directory/AddCard'
import { mapState } from 'vuex'
import { Drawer } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'DirectoryProfile',
  layout: 'ShackDash',
  components: {
    MainTitle,
    ProfileHead,
    ChangePlan,
    AddPlan,
    AddCard,
    [Drawer.name]: Drawer,
    MembershipNotes
  },
  async asyncData({ store, params, $membership, error, $moment }) {
    try {
      const cards = await $membership
        .getPaymentMethods(params.id)
        .then(({ data }) => {
          return data
        })

      const subscriptions = await $membership
        .getSubscriptions(params.id)
        .then(({ data }) => {
          return data
        })

      const paid_for = await $membership.getPaidFor(params.id).then(res => {
        return res.data
      })

      return await $membership.getAMembership(params.id).then(({ data }) => {
        const events = _.map(data.events_attended, o => {
          return {
            name: o.event.name,
            ticket: o.number_of_tickets + ' tickets',
            price:
              store.state.space.currentSpace.currency_symbol + o.total_amount,
            start: $moment(o.event.start_time).format('MMM DD, YY')
          }
        })
        return {
          checkin: data.checkin.length > 0 ? data.checkin[0] : {},
          data,
          cards,
          events,
          subscriptions,
          paid_for
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
      plan_id: '',
      loading: false,
      checked: false,
      cards: [],
      currentPage: 1,
      perPage: 5,
      drawer: false,
      direction: 'rtl'
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    }),
    getSubscription() {
      let renewal = null
      _.each(this.data.plans, v => {
        _.each(this.data.subscriptions, o => {
          if (o.plan_id == v.id && o.canceled_at == null) {
            renewal = o.ends_at ? o.ends_at : o.trial_ends_at
          }
        })
      })
      return this.$moment(renewal).format('MMMM DD, YYYY')
    },
    rows() {
      return this.data.events_attended.length
    }
  },
  methods: {
    toggleModal(type) {
      this.$bvModal.show(type)
    },
    getSubName(subscription) {
      let name, price
      _.each(this.data.plans, function(o) {
        if (o.id == subscription.plan_id) {
          name = o.name
          price = o.price
        }
      })

      return { name, price }
    },
    checkinToggle(e) {
      if (e == 'checkin') {
        this.$checkin
          .checkin({
            type: 'member',
            membership_id: this.data.id
          })
          .then(({ data }) => {
            this.$bvToast.toast('Member checked in successfully', {
              title: 'Success',
              variant: 'success'
            })

            this.checkin = data
          })
          .catch(e => {
            this.$bvToast.toast('Member checkin failed', {
              title: 'Error',
              variant: 'danger'
            })
          })
      } else {
        this.$checkin
          .checkout(this.checkin.id)
          .then(({ data }) => {
            this.$bvToast.toast('Member checked out successfully', {
              title: 'Success',
              variant: 'success'
            })
            location.reload()
          })
          .catch(e => {
            this.$bvToast.toast('Member check out failed', {
              title: 'Error',
              variant: 'danger'
            })
          })
      }
    },
    getExtras(extras) {
      let html = ''
      _.each(extras, (o, i) => {
        html += `<div class="sh-dls"><span>${_.upperFirst(o.type)}:</span> ${
          o.comment ? o.comment : ''
        }</div>`
      })

      return html
    },
    toggleLoading() {
      this.loading = !this.loading
    },
    removeMemberSource(i) {
      this.loading = !this.loading

      this.$membership
        .deletePaymentMethod(this.$route.params.id, {
          card_nonce: this.cards[i].id
        })
        .then(res => {
          this.cards.splice(i, 1)

          this.toggleLoading()

          this.$bvToast.toast('Card source removed successfully', {
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(e => {
          const message = e.response ? e.response.data.message : e.message
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(',', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    getSubDetails(subscription) {
      const ends_at = subscription.ends_at
        ? subscription.ends_at
        : subscription.trial_ends_at

      return this.$moment(ends_at).format('DD MMM, YYYY')
    },
    addCard(paymentMethod) {
      this.$membership
        .addPaymentMethod(this.$route.params.id, { card_nonce: paymentMethod })
        .then(({ data }) => {
          this.$bvToast.toast('Card added successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
    },
    deleteMember() {
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

          const message = e.response ? e.response.data.message : e.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    changePlan(subscription) {
      let plan = null

      const _self = this

      _.each(this.data.plans, function(o) {
        if (o.id == subscription.plan_id) {
          _self.plan_id = subscription.id
        }
      })
      this.toggleModal('change-plan')
    },
    cancelPlan(subscription) {
      if (!confirm('Are you sure?')) return

      this.loading = !this.loading

      this.$membership
        .cancelSubscription(this.$route.params.id, {
          plan_id: subscription.plan_id,
          slug: subscription.slug,
          immediate: true
        })
        .then(res => {
          this.$bvToast.toast('Plan canceled succesfully', {
            title: 'Success',
            variant: 'success'
          })

          location.reload()
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
    makePlanPrimary(subscription) {
      this.loading = !this.loading

      this.$membership
        .makePlanPrimary(this.$route.params.id, {
          plan_id: subscription.plan_id
        })
        .then(res => {
          this.loading = !this.loading

          this.$bvToast.toast('Plan made primary', {
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(e => {
          this.loading = !this.loading

          displayError(e, this)
        })
    }
  }
}
</script>

<style lang="scss">
.sh-dls {
  span {
    color: #8898aa;
  }
}
.custom-switch.b-custom-control-lg .custom-control-label {
  font-size: 15px;
  vertical-align: middle;
  &::before {
    top: 1px;
  }
  &::after {
    top: 3px;
  }
}
.custom-control-input:checked ~ .custom-control-label::before,
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  background: #2dce89;
  border-color: #2dce89;
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #dee2e6;
}
.sh-pagination {
  .btn {
    margin-top: -3px;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  a {
    border-radius: 0.25rem;
    margin-right: 5px;
    text-decoration: unset;
    &:first-child,
    &:last-child,
    &:hover {
      text-decoration: underline;
    }
  }
}
.hidden_header {
  display: none;
}
</style>
