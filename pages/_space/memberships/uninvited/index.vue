<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Members" 
          subtitle="Pending" />
        <SearchForm 
          :loading="loading" 
          @search="search" />
        <div>
          <!-- <b-button
            :to="{ name: 'space-memberships-messages' }"
            variant="transparent"
            class="text-primary"
          ><i class="fa fa-envelope" /> Send Message</b-button
          > -->
          <b-button 
            variant="primary" 
            @click="inviteAllPendingMembers"
          >Invite All</b-button
          >
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <MembersTable 
            :members="members" 
            :view-more="false" 
            show-modal>
            <template 
              slot-scope="slotProps" 
              slot="action">
              <b-row>
                <b-button
                  variant="primary"
                  class="btn-purple"
                  style="margin-top: 0px; margin-bottom: 0px"
                  @click="confirmMember(slotProps)"
                >Send Invitation</b-button
                >
                <b-button
                  variant="transparent"
                  class="ml-2 text-danger"
                  style="margin-top: 0px; margin-bottom: 0px"
                  @click="cancelMember(slotProps)"
                ><i class="fa fa-times" /> Cancel Membership</b-button
                >
              </b-row>
            </template>
          </MembersTable>
        </div>
      </div>
      <div>
        <base-pagination
          :total="meta.total"
          :per-page="meta.per_page"
          :value="meta.current_page"
          align="center"
          @next="next"
          @prev="prev"
          @input="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RouteBreadCrumb from '@/components/argon-core/Breadcrumb/RouteBreadcrumb'
import MembersTable from '~/components/shack/MembersTable.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import SearchForm from '~/components/shack/SearchForm.vue'
import { getQueryParams } from '../../../../util/url'

export default {
  layout: 'ShackDash',
  async asyncData({ $membership, $plan, error, route }) {
    const filter = `filter[status]=uninvited&include=profile,primaryPlan&page=${
      route.query.page
    }`

    return await $membership
      .getAllMemberships(filter)
      .then(({ data, links, meta }) => {
        return {
          members: data,
          links,
          meta
        }
      })
      .catch(e => {
        error({
          statusCode: e.statusCode,
          message: e.response
            ? JSON.stringify(e.response.data.errors)
            : e.messge
        })
      })
  },
  components: {
    MainTitle,
    SearchForm,
    SectionTitle,
    MembersTable,
    RouteBreadCrumb
  },
  data: () => ({
    searchTerm: '',
    loading: false
  }),
  methods: {
    next() {
      const { next } = this.links
      const params = getQueryParams(next)

      this.$router.push(params)
      location.href = location.origin + this.$route.path + params
    },
    prev() {
      const { prev } = this.links
      const params = getQueryParams(prev)

      this.$router.push(params)
      location.href = location.origin + this.$route.path + params
    },
    changePage(pageNumber) {
      const params = `?page=${pageNumber}`
      this.$router.push(params)
      location.href = location.origin + this.$route.path + params
    },
    confirmMember(e) {
      this.$membership
        .inviteMember(e.id)
        .then(res => {
          this.$bvToast.toast('Member invited successfully', {
            variant: 'success'
          })
          setTimeout(() => {
            location.reload()
          }, 5000)
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
    inviteAllPendingMembers() {
      this.$membership
        .inviteAllPendingMembers()
        .then(res => {
          this.$bvToast.toast('Members invited successfully', {
            variant: 'success'
          })
          setTimeout(() => {
            location.reload()
          }, 5000)
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
      console.log('invite all')
    },
    cancelMember(e) {
      if (!confirm('Are you sure')) return

      this.$membership
        .deleteMembership(e.id)
        .then(res => {
          this.$bvToast.toast('Member deleted successfully', {
            variant: 'success'
          })
          setTimeout(() => {
            location.reload()
          }, 5000)
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
    search(query) {
      this.loading = !this.loading
      const link = `filter[status]=uninvited&include=primaryPlan,profile&filter[search]=${query}`
      this.$membership
        .getAllMemberships(link)
        .then(({ data, links, meta }) => {
          this.members = data
          this.links = links
          //this.meta = meta

          this.loading = false
        })
        .catch(e => {
          this.loading = !this.loading
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
