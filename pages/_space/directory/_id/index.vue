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
                v-model="checked"
                switch
                size="lg"
                variant="success"
              >
                <span
                  v-if="checked"
                  class="text-success">Check in</span>
                <span
                  v-else
                  class="text-muted">Check Out</span>
              </b-form-checkbox>
            </div>
          </div>
        </div>
        <div class="col-md-6 mr-l-child-10 text-right">

          <b-button
            variant="transparent"
            class="text-primary">
            <i class="fa fa-sticky-note" /> View Notes
          </b-button>
          <b-button
            variant="transparent"
            class="text-primary">
            <i class="fa fa-pen" /> Edit Profile
          </b-button>
          <b-button
            variant="transparent"
            class="text-danger">
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
              :status="false"
              :img="data.user_profile.picture"
              :name="data.user_profile.full_name"
              :company="data.user_profile.company"
              :extras="data.user_profile.extras"
              :address="data.user_profile.cities"
              date="August 18"
            />
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <i class="fa fa-envelope" /> {{ data.email }}
                </div>
                <div class="col">
                  <i class="fa fa-phone" /> {{ data.user_profile.phone }}
                </div>
              </div>
              <div class="mt-4">
                <div class="text-muted">
                  Profile
                </div>
                <p>
                  {{ data.user_profile.bio }}
                </p>
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
              <div class="mt-4">
                <p><i class="ti-twitter-alt" /> {{ data.user_profile.twitter }}</p>
                <p><i class="ti-linkedin" /> {{ data.user_profile.linkedin }}</p>
                <p><i class="ti-world" /> {{ data.user_profile.website }}</p>
              </div>
              <div class="sh-dls">
                <span> Joined on:</span> {{ $moment(data.member_since).format('MMMM DD, YYYY') }}
              </div>
              <div class="sh-dls">
                <span>Renewal due by:</span> {{ getSubscription }}
              </div>

              <hr
                class="w-25 bg-dark3 text-default"
                align="left" >

              <span v-html="getExtras(data.extras)"/>

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
                <a
                  href="#"
                  class="text-primary">
                  <i class="fa fa-credit-card" /> Add New Card
                </a>
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
                        <h3>{{ card.billing_details.name }}</h3>
                      </td>
                      <td>
                        <span> <i
                          :class="`fab fa-cc-${card.card.brand}`" /> **** {{ card.card.last4 }} </span>
                      </td>
                      <td>
                        {{ $moment(card.card.exp_month, "M").format('MMM') }} {{ card.card.exp_year }}
                      </td>
                      <td class="float-right">
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
              <a
                href="#"
                class="text-primary">
                <i class="fa fa-plus" /> Add New Plan
              </a>
            </div>
            <div class="m-n25">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr
                    v-for="subscription in data.subscriptions"
                    :key="subscription.id">
                    <td>{{ getSubDetails(subscription)['name'] }}</td>
                    <td>{{ getSubDetails(subscription)['price'] }}</td>
                    <td> {{ getSubDetails(subscription)['ends_at'] }}</td>
                    <td class="float-right">
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
            <template v-if="bookingsempty">
              <div class="text-center">
                <div class="text-muted">
                  No Events Booked by Member
                </div>
                <a href="#">Add New Booking</a>
              </div>
            </template>
            <template v-else>
              <div class="m-n25">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>San Francisco Startup Socials</td>
                      <td class="d-flex justify-content-between">
                        <span>1 ticket</span>
                        <span>$52.00</span>
                      </td>
                      <td>
                        Today - 4pm,
                      </td>
                      <td>
                        <el-tooltip
                          content="Open Lounge"
                          placement="bottom">
                          <i class="fa fa-info-circle" />
                        </el-tooltip>
                      </td>
                    </tr>
                    <tr
                      v-for="n in 4"
                      :key="n">
                      <td>Creating Successful B2B Bus...</td>
                      <td class="d-flex justify-content-between">
                        <span>3 tickets</span>
                        <span>$15.00</span>
                      </td>
                      <td>
                        Tues - 11am,
                      </td>
                      <td>
                        <el-tooltip
                          content="Conference Room"
                          placement="bottom"
                        >
                          <i class="fa fa-info-circle" />
                        </el-tooltip>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                slot="footer"
                class="">
                <div>
                  <base-pagination
                    :page-count="10"
                    size="sm"/>
                </div>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import ProfileHead from '~/components/shack/ProfileHead.vue'
import { mapState } from 'vuex'

export default {
  name: 'DirectoryProfile',
  layout: 'ShackDash',
  components: {
    MainTitle,
    ProfileHead
  },
  async asyncData({ store, params, $membership, error }) {
    try {
      const cards = await $membership
        .getPaymentMethods(params.id)
        .then(({ data }) => {
          return data
        })

      return await $membership.getAMembership(params.id).then(({ data }) => {
        return {
          data,
          cards
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
      checked: false,
      cards: []
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    }),
    getSubscription() {
      let renewal = null
      _.each(this.data.primary_plan, v => {
        _.each(this.data.subscriptions, o => {
          if (o.stripe_plan == v.stripe_id) {
            renewal = o.ends_at ? o.ends_at : o.trial_ends_at
          }
        })
      })
      return this.$moment(renewal).format('MMMM DD, YYYY')
    }
  },
  methods: {
    getExtras(extras) {
      let html = ''
      _.each(extras, (o, i) => {
        html += `<div class="sh-dls"><span>${_.upperFirst(o.type)}:</span> ${
          o.comment
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
          card_id: this.cards[i].id
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
      let name, price, ends_at

      const _self = this

      _.each(this.data.plans, o => {
        if (o.stripe_id == subscription.stripe_plan) {
          name = o.name
          price =
            _self.space.currency_symbol + _self.formatPrice(o.price_per_cycle)
          ends_at = subscription.ends_at
            ? this.$moment(subscription.ends_at).format('DD MMM, YYYY')
            : this.$moment(subscription.trial_ends_at).format('DD MMM, YYYY')
        }
      })

      return { name, price, ends_at }
    },
    changePlan(subscription) {},
    cancelPlan(subscription) {}
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
</style>
