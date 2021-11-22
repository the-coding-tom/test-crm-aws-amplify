<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          :subtitle="
            viewing_plan_susbcriptions ? plan_name : 'Expiring Memberships'
          "
          :title="viewing_plan_susbcriptions ? 'Plans' : 'Expiring Memberships'"
        />
        <b-dropdown
          id="dropdown-1"
          :text="`${dropdown} days`"
          class="m-md-2"
          @click="handleClick"
        >
          <b-dropdown-item @click="handleClick(-2)">All</b-dropdown-item>
          <b-dropdown-item
            v-for="(day, i) in days"
            :key="i"
            @click="handleClick(day)"
          >{{ day }} days</b-dropdown-item
          >
          <b-dropdown-item @click="handleClick(1)">Today</b-dropdown-item>
          <b-dropdown-item @click="handleClick(-1)">Expired</b-dropdown-item>
          <b-dropdown-item 
            @click="handleClick(-2)"
          >Do Not Renew</b-dropdown-item
          >
          <b-dropdown-divider />
        </b-dropdown>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <card>
        <b-table
          :busy="loading"
          :items="items"
          :fields="fields"
          show-empty
          striped
          hover
        >
          <template v-slot:cell(_)="row">
            <nuxt-link
              :to="{
                name: 'space-directory-id',
                params: { id: row.item.membership_id },
              }"
              style="color: red"
            >
              <b-form-checkbox 
                :value="true" 
                :unchecked-value="false"
            /></nuxt-link>
          </template>
          <template v-slot:cell(full_name)="row">
            <nuxt-link
              :to="{
                name: 'space-directory-id',
                params: { id: row.item.membership_id },
              }"
            >
              {{ row.item.full_name }}</nuxt-link
              >
          </template>
          <template v-slot:cell(__)="data">
            <b-button
              variant="transparent"
              class="text-primary"
              small
              @click="showForm(data)"
            ><i class="fas fa-undo-alt" /> Renew</b-button
            >
            <b-button
              class="btn btn-primary"
              style="color: white"
              @click="upgradeForMember(data)"
            >
              Upgrade
            </b-button>
          </template>
        </b-table>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          align="center"
          class="text-center"
          aria-controls="my-table"
        />
      </card>
    </div>
    <b-modal 
      id="renew" 
      title="Renew Subscription" 
      hide-footer>
      <b-form @submit.prevent="beginRenew">
        <b-form-group
          label="Payment Source"
          description="Card to charge for this transaction"
        >
          <b-form-select 
            :options="cards" 
            v-model="card" 
            required>
            <option :value="null">Choose a payment card</option>
          </b-form-select>
        </b-form-group>
        <b-form-group>
          <b-button 
            type="submit" 
            variant="primary">Renew</b-button>
        </b-form-group>
      </b-form>
    </b-modal>

    <b-modal
      id="change-plan"
      title="Change Current Plan"
      hide-footer
      @hidden="onChangePlanModalClosed"
    >
      <ChangePlan 
        :plan_id="plan_id" 
        :membership_id="membership_id" />
    </b-modal>
  </div>
</template>

<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import ChangePlan from '~/components/directory/ChangePlan'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    ChangePlan
  },
  data: () => ({
    loading: false,
    data: null,
    card: null,
    cards: [],
    perPage: 10,
    items: [],
    currentPage: 1,
    dropdown: 'All',
    days: [30, 15, 5],
    plan_id: null,
    membership_id: null,
    id: null,
    fields: [
      '_',
      'full_name',
      'plan',
      'start_date',
      'end_date',
      'renewal',
      '__'
    ]
  }),
  computed: {
    rows() {
      return this.items.length
    }
  },
  watch: {
    $route(route, oldRoute) {
      if (!route.query.membership_id && oldRoute.query.membership_id) {
        this.plan_id = null
      }
    }
  },
  async asyncData({ error, $membership, route }) {
    if (route.query.plan) {
      return await $membership
        .subscribedToPlan(route.query.plan)
        .then(data => {
          let items = _.map(data, o => {
            return {
              id: o.id,
              full_name: `${o.user.first_name} ${o.user.last_name}`,
              plan: o.plan.name,
              plan_id: o.plan.id,
              slug: o.slug,
              start_date: o.starts_at,
              end_date: o.ends_at,
              renewal:
                o.state == 'manual-active' ? 'Do not auto renew' : 'auto renew',
              membership_id: o.user.uuid
            }
          })
          return {
            data,
            items,
            viewing_plan_susbcriptions: true,
            plan_name: route.query.name
          }
        })
        .catch(e => {
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          error({ statusCode: e.statusCode, message })
        })
    }
    return await $membership
      .expiringSubscriptions(30)
      .then(data => {
        let items = _.map(data, o => {
          return {
            id: o.id,
            full_name: `${o.user.first_name} ${o.user.last_name}`,
            plan: o.plan.name,
            plan_id: o.plan.id,
            slug: o.slug,
            start_date: o.starts_at,
            end_date: o.ends_at,
            renewal:
              o.state == 'manual-active' ? 'Do not auto renew' : 'auto renew',
            membership_id: o.user.uuid
          }
        })
        return {
          data,
          items
        }
      })
      .catch(e => {
        const message = e.response
          ? `${e.response.data.message} ~ ${JSON.stringify(
              e.response.data.errors
            )}`
          : e.message
        error({ statusCode: e.statusCode, message })
      })
  },
  methods: {
    handleClick(day) {
      this.dropdown = day

      this.loading = !this.loading

      this.$membership
        .expiringSubscriptions(day)
        .then(data => {
          this.loading = !this.loading

          this.items = _.map(data, o => {
            return {
              id: o.id,
              full_name: `${o.user.first_name} ${o.user.last_name}`,
              plan: o.plan.name,
              plan_id: o.plan.id,
              slug: o.slug,
              start_date: o.starts_at,
              end_date: o.ends_at,
              renewal:
                o.state == 'manual-active' ? 'Do not auto renew' : 'auto renew',
              membership_id: o.user.uuid
            }
          })
        })
        .catch(e => {
          this.loading = !this.loading

          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          error({ statusCode: e.statusCode, message })
        })
    },
    showForm(e) {
      this.data = e
      this.$bvModal.show('renew')

      this.$membership
        .getPaymentMethods(e.item.membership_id)
        .then(({ data }) => {
          this.cards = _.map(data, o => {
            return {
              value: o.id,
              text: `${o.card_brand} - **** ${o.last_4}`
            }
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
    beginRenew() {
      const payload = {
        plan_id: this.data.item.plan_id,
        card_nonce: this.card,
        slug: this.data.item.slug
      }

      this.renewSubscription(this.data.item.membership_id, payload)
    },
    renewSubscription(id, payload) {
      this.$membership
        .renewSubscription(id, payload)
        .then(res => {
          if (res) {
            this.items.splice(this.data.index, 1)
            this.$bvToast.toast(
              `${res.data.first_name} ${
                res.data.last_name
              }'s subscription renewed successfully`,
              {
                variant: 'success',
                title: 'Success'
              }
            )
            this.$bvModal.hide('renew')
          }
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
    upgradeForMember(data) {
      const query = { ...this.$route.query }
      const { membership_id, id } = data.item

      this.plan_id = id
      this.membership_id = membership_id
      this.$bvModal.show('change-plan')
    },
    onChangePlanModalClosed() {
      const query = { ...this.$route.query }
      delete query.membership_id

      this.$router.push({
        query
      })
      this.plan_id = null
    }
  }
}
</script>

<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
