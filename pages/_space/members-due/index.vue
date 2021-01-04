<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          subtitle="Expiring Memberships" 
          title="Members Due" />
        <b-dropdown
          id="dropdown-1"
          :text="`${dropdown} days`"
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

export default {
  layout: 'ShackDash',
  async asyncData({ error, $membership }) {
    return await $membership
      .expiringSubscriptions(30)
      .then(data => {
        let items = _.map(data, o => {
          if (o.user != null) {
            console.log(o.user)
            return {
              id: o.id,
              full_name: `${o.user.first_name} ${o.user.last_name}`,
              plan: o.plan.name,
              plan_id: o.plan.id,
              slug: o.slug,
              start_date: o.starts_at,
              end_date: o.ends_at,
              membership_id: o.user.uuid
            }
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
  components: {
    MainTitle
  },
  data: () => ({
    loading: false,
    data: null,
    card: null,
    cards: [],
    perPage: 10,
    currentPage: 1,
    dropdown: 30,
    days: [30, 15, 5],
    fields: ['full_name', 'plan', 'start_date', 'end_date', 'options']
  }),
  computed: {
    rows() {
      return this.items.length
    }
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
        .then(function(res) {
          if (res) {
            this.items.splice(e.index, 1)
            this.$bvToast.toast(
              `${res.data.first_name} ${
                res.data.last_name
              }'s subscription renewed successfully`,
              {
                variant: 'success',
                title: 'Success'
              }
            )
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
