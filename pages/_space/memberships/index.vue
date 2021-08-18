<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Members" 
          subtitle="Invited" />
        <SearchForm 
          :loading="loading" 
          @search="search" />
        <div>
          <b-button
            variant="transparent"
            class="text-primary"
            @click="exportData"
          ><i class="fa fa-file-export" /> Export</b-button
          >
          <!-- <b-button
            :to="{ name: 'space-memberships-messages'}"
            variant="transparent"
            class="text-primary"><i class="fa fa-envelope"/> Send Message</b-button> -->
          <b-button 
            :to="{ name: 'space-memberships-add' }" 
            variant="primary"
          >Add Member</b-button
          >
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <MembersTable :members="members" />
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
import { getQueryParams } from '../../../util/url'

export default {
  name: 'InvitedMembers',
  layout: 'ShackDash',
  async asyncData({ $membership, $plan, error, route }) {
    const filter = `filter[status]=invited&include=profile,primaryPlan&page=${
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
    exportData() {
      this.$membership.export().then(res => {
        console.log(res)
        let blob = new Blob([res], { type: 'text/csv' })
        // window.location.href = URL.createObjectURL(blob)

        const a = document.createElement('a')
        const url = URL.createObjectURL(blob)

        // Put the link somewhere in the body
        document.body.appendChild(a)
        a.innerHTML = 'download me'
        a.href = url
        // Set our custom filename
        a.download = 'memberships.csv'
        // Automatically click the link
        a.click()
      })
    },
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
    search(query) {
      this.loading = !this.loading
      const link = `filter[status]=invited&include=primaryPlan,profile&filter[search]=${query}`
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
