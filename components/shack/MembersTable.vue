<template>
  <div class="card">

    <el-table
      :data="members"
      class="table table-hover table-striped"
      header-row-class-name="thead-light">
      <el-table-column
        label="Name  /  Company"
        prop="name"
        sortable>
        <template v-slot="{row}">
          <div class="sh-vflex">
            <div>
              <img
                :src="row.user_profile && row.user_profile.picture ? row.user_profile.picture : img"
                alt="Image placeholder"
                class="mr-r-20 rounded-circle"
                width="40px">
            </div>
            <b-link v-if="viewMore"><b-link
              :to="{name: 'space-directory-id', params: {id: row.id}}"
            >{{ row.first_name }} {{ row.last_name }}</b-link> <br> <span style="color: grey;">{{ row.user_profile ? row.user_profile.company : null }}</span></b-link>
            <b-link v-else><b-link

            >{{ row.first_name }} {{ row.last_name }}</b-link> <br> <span style="color: grey;">{{ row.user_profile ? row.user_profile.company : null }}</span></b-link>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="Plan  /  Price"
        prop="amount"
        sortable>
        <template v-slot="{row}">
          <div
            v-if="row.primary_plan.length > 0"
            class="float-left">{{ row.primary_plan.length > 0 && row.primary_plan[0].name }}</div> <div class="float-right text-muted">{{ space.currency_symbol }} {{ row.primary_plan[0] && row.primary_plan[0].price_per_cycle }}</div>
        </template>
      </el-table-column>

      <el-table-column
        label="Payment Method"
        prop="method"
        sortable>
        <template v-slot="{row}">
          Credit Card ({{ upperFirst(row.card_brand) }} - {{ row.card_last_four }})
        </template>
      </el-table-column>

      <el-table-column
        v-if="showModal"
        label="Status"
        prop="status">
        <template v-slot="{row}">
          <slot
            v-bind="row"
            name="action" />
        </template>
      </el-table-column>
      <el-table-column
        v-else
        label="Status"
        prop="status"
        sortable>
        <template v-slot="{row}">
          {{ checkStatus(row) }}
          <b-button
            v-if="checkStatus(row) !== 'Connected'"
            :disabled="loading"
            variant="transparent"
            class="text-primary"
            @click="resendInvitation(row)"
          >
            <i class="fa fa-paper-plane"/> Re-send Invitation
          </b-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui'
import { mapState } from 'vuex'

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  props: {
    members: {
      type: Array,
      default: null
    },
    itemLimit: {
      type: Number,
      default: 9
    },
    showModal: {
      type: Boolean,
      default: false
    },
    viewMore: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loading: false,
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      img: '/img/placeholder.jpg'
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    upperFirst(detail) {
      return _.upperFirst(detail)
    },
    checkStatus(member) {
      if (member.member_since) {
        return 'Connected'
      }
      return 'Not Connected'
    },
    toggleLoading() {
      this.loading = !this.loading
    },
    resendInvitation(member) {
      this.toggleLoading()
      const { id, email } = member
      this.$membership
        .inviteMember(id)
        .then(res => {
          this.toggleLoading()
          this.$bvToast.toast('Membership invitation sent to ' + email, {
            variant: 'success'
          })
        })
        .catch(e => {
          this.toggleLoading()
          this.$bvToast.toast(
            e.response ? JSON.stringify(e.response.data.errors) : e.message,
            {
              title: 'Error',
              variant: 'danger'
            }
          )
        })
    }
  }
}
</script>
