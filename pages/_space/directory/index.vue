<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          :subtitle="`${meta.total} Profiles`"
          title="Community Directory"/>

        <el-select
          v-model="filter"
          placeholder="Filter by..."
          @change="filterBy">
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.text"
            :value="option.value"/>
        </el-select>


        <SearchForm
          :loading="loading"
          @search="searchMember" />
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row equal">
        <ThumbCard
          v-for="member in data"
          :key="member.id"
          :status="member"
          :name="member.user_profile.full_name"
          :company="member.user_profile.company"
          :img="member.user_profile.picture"
          :link="member.id"
        />

      </div>

      <div class="row">
        <div class="col"/>
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
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import ThumbCard from '~/components/shack/ThumbCard.vue'
import SearchForm from '~/components/shack/SearchForm.vue'
import { Select, Option } from 'element-ui'

export default {
  name: 'Directory',
  layout: 'ShackDash',
  async asyncData({ store, $membership }) {
    const link = 'filter[status]=accepted&include=profile,primaryPlan'
    return await $membership
      .getAllMemberships(link)
      .then(({ data, meta, links }) => {
        return {
          data,
          meta,
          links
        }
      })
  },
  components: {
    MainTitle,
    SearchForm,
    ThumbCard,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data: () => ({
    loading: false,
    filter: '',
    options: [
      {
        text: 'All',
        value: ''
      },
      {
        text: 'Founding Member',
        value: '0'
      },
      {
        text: 'Fast Track',
        value: '1'
      },
      {
        text: 'Early Invite',
        value: '2'
      },
      {
        text: 'General Member',
        value: '3'
      }
    ]
  }),
  methods: {
    next() {
      const { next } = this.links
      this.$membership.getAllMemberships(
        `${next}&filter[status]=accepted&include=profile,primaryPlan&filter[prefix_type]=${
          this.filter
        }`
      )
    },
    prev() {
      const { prev } = this.links
      this.$membership.getAllMemberships(
        `${prev}&filter[status]=accepted&include=profile,primaryPlan&filter[prefix_type]=${
          this.filter
        }`
      )
    },
    searchMember(query) {
      this.loading = !this.loading
      const link = `filter[status]=accepted&include=profile&filter[search]=${query}&filter[prefix_type]=${
        this.filter
      }`

      this.$membership
        .getAllMemberships(link)
        .then(({ data, meta, links }) => {
          this.data = data
          this.meta = meta
          this.links = links

          this.loading = !this.loading
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
    filterBy() {
      this.loading = !this.loading
      const link = `filter[status]=accepted&include=profile,primaryPlan&filter[prefix_type]=${
        this.filter
      }`
      this.$membership
        .getAllMemberships(link)
        .then(res => {
          this.loading = !this.loading

          this.data = res.data
          this.links = res.links
          this.meta = this.meta
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response ? e.response.data.message : e.message
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    }
  }
}
</script>
