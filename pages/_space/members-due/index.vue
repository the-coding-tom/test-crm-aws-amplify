<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          :subtitle="
            viewing_plan_susbcriptions
              ? plan_name
              : dropdown > 0
                ? `${dropdown} days left (${items.length})`
                : `Expired (${items.length})`
          "
          :title="
            viewing_plan_susbcriptions
              ? 'Subscriptions'
              : 'Expiring Memberships'
          "
        />
        <!-- <SearchFilter
          :loading="loading"
          :search-term="query"
          @search="search"
        /> -->

        <template>
          <base-input
            input-group-classes="input-group-merge sh-search"
            group
            class="mb-0"
            style="margin-left: auto"
          >
            <template slot="prepend"><i class="fa fa-search" /></template>
            <input
              v-model="query"
              :required="required"
              style="border-right: 0"
              type="text"
              class="form-control"
              placeholder="Looking for ..."
              aria-describedby="button-addon2"
            >
          </base-input>
        </template>

        <b-dropdown
          id="dropdown-1"
          :text="`${dropdown} days`"
          right="false"
          class="m-md-2"
          @click="handleClick"
        >
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
          <b-dropdown-item 
            @click="handleClick(-3)"
          >Payment Declined</b-dropdown-item
          >
          <b-dropdown-divider />
        </b-dropdown>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <card>
        <b-table
          :busy="loading"
          :items="filterMembersByName"
          :fields="fields"
          show-empty
          striped
          hover
        >
          <template v-slot:cell(full_name)="data">
            <nuxt-link
              :to="{
                name: 'space-directory-id',
                params: { id: data.item.membership_id },
              }"
            >
              {{ data.item.full_name }}</nuxt-link
              >
          </template>
          <template v-slot:cell(options)="data">
            <b-button
              variant="transparent"
              class="text-primary"
              small
              @click="showForm(data)"
            ><i class="fas fa-undo-alt" /> Renew</b-button
            >
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
  </div>
</template>

<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SearchFilter from '~/components/shack/SearchFilter.vue'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    SearchFilter
  },
  data: () => ({
    loading: false,
    data: null,
    card: null,
    cards: [],
    perPage: 10,
    items: [],
    query: '',
    currentPage: 1,
    dropdown: 30,
    days: [30, 15, 5],
    fields: ['full_name', 'plan', 'start_date', 'end_date', 'status', 'options']
  }),
  computed: {
    rows() {
      return this.items.length
    },
    filterMembersByName: function() {
      return this.items.filter(item =>
        item.full_name.match(new RegExp(this.query, 'i'))
      )
    }
  },
  watch: {
    '$route.query': '$fetch'
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
              status:
                o.state == 'manual-active'
                  ? 'Do not auto renew'
                  : o.state == 'active'
                    ? 'Auto-renewal'
                    : 'payment declined',
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
            status:
              o.state == 'manual-active'
                ? 'Do not auto renew'
                : o.state == 'active'
                  ? 'Auto-renewal'
                  : 'payment declined',
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
              status:
                o.state == 'manual-active'
                  ? 'Do not auto renew'
                  : o.state == 'active'
                    ? 'Auto-renewal'
                    : 'payment declined',
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
    search(query) {
      this.loading = !this.loading

      this.items = this.items.filter(item =>
        item.full_name.match(new RegExp(query, 'i'))
      )
      console.log(this.items)

      this.loading = false

      //const link = `filter[status]=invited&include=primaryPlan,profile&filter[search]=${query}`
      // this.$membership
      //   .getAllMemberships(link)
      //   .then(({ data, links, meta }) => {
      //     this.members = data
      //     this.links = links
      //     //this.meta = meta

      //     this.loading = false
      //   })
      //   .catch(e => {
      //     this.loading = !this.loading
      //     this.$bvToast.toast(
      //       e.response ? JSON.stringify(e.response.data.errors) : e.message,
      //       {
      //         title: 'Error',
      //         variant: 'danger'
      //       }
      //     )
      //   })
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
