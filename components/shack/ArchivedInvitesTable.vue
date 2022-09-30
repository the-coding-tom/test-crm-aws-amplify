<template>
  <div class="card">
    <el-table
      :data="members"
      class="table table-hover table-striped"
      header-row-class-name="thead-light"
    >
      <el-table-column 
        label="Name" 
        prop="name" 
        sortable>
        <template v-slot="{ row }">
          <div class="sh-vflex">
            <!-- <div>
              <img
                :src="
                  row.user_profile && row.user_profile.picture
                    ? row.user_profile.picture
                    : img
                "
                alt="Image placeholder"
                class="mr-r-20 rounded-circle"
                height="40px"
                width="40px"
              />
            </div> -->
            <b-link
            ><b-link>{{ row.first_name }} {{ row.last_name }}</b-link>
            </b-link>
          </div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Email" 
        prop="amount" 
        sortable>
        <template v-slot="{ row }">
          <div class="float-left">
            {{ row.email }}
          </div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Deleted on" 
        prop="method" 
        sortable>
        <template v-slot="{ row }">
          <span>{{ row.created_at }}</span>
        </template>
      </el-table-column>

      <el-table-column 
        v-if="showModal" 
        label="Status" 
        prop="status">
        <template v-slot="{ row }">
          <slot 
            v-bind="row" 
            name="action" />
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
