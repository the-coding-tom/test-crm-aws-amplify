<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Members"
          subtitle="Invited"/>
        <SearchForm
          v-model="searchTerm"
          :loading="loading"
          @search="search"
        />
        <div>
          <b-button
            :to="{ name: 'space-memberships-messages'}"
            variant="transparent"
            class="text-primary"><i class="fa fa-envelope"/> Send Message</b-button>
          <b-button
            :to="{name: 'space-memberships-add'}"
            variant="primary"
          >Add Member</b-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <MembersTable
            :members="members" />
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

export default {
  name: 'InvitedMembers',
  layout: 'ShackDash',
  async asyncData({ $membership, $plan, error }) {
    const filter = 'filter[status]=invited&include=profile,primaryPlan'

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

      let link = `${next}&filter[status]=invited&include=profile,primaryPlan&filter[search]=${
        this.searchTerm
      }`

      this.$membership
        .getMemberships(link)
        .then(({ data, links, meta }) => {
          this.members = data
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

      let link = `${prev}&filter[status]=invited&include=profile,primaryPlan&filter[search]=${
        this.searchTerm
      }`

      this.$membership
        .getMemberships(link)
        .then(({ data, links, meta }) => {
          this.members = data
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
    search() {
      this.loading = !this.loading
      const link = `filter[status]=invited&include=primaryPlan,profile&filter[search]=${
        this.searchTerm
      }`
      this.$membership
        .getAllMemberships(link)
        .then(({ data, links, meta }) => {
          this.members = data
          this.links = links
          this.meta = meta

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
