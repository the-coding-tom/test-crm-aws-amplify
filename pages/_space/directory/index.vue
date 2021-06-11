<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          :subtitle="`${meta.total} Profiles`"
          title="Community Directory"
        />

        <!-- <el-select
          v-model="filter"
          placeholder="Filter by..."
          @change="filterBy"
        >
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.text"
            :value="option.value"
          />
        </el-select> -->

        <SearchForm 
          :loading="loading" 
          @search="searchMember" />
        <div>
          <b-button
            variant="transparent"
            class="text-primary"
            @click="toggleModal('add-credit')"
          >
            <i class="fas fa-plus" /> Credit
          </b-button>
          <b-button
            variant="transparent"
            class="text-primary"
            @click="toggleModal('add-free-months')"
          >
            <i class="fas fa-plus" /> Free Months
          </b-button>
        </div>
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
        <div class="col" />
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
    <b-modal
      id="add-credit"
      :static="true"
      title="Add Credit For All Members"
      hide-footer
    ><AddCreditAll 
      :data="data"
    /></b-modal>
    <b-modal
      id="add-free-months"
      :static="true"
      title="Add Free Months For All Members"
      hide-footer
    ><AddFreeMonths 
      :data="data"
    /></b-modal>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import ThumbCard from '~/components/shack/ThumbCard.vue'
import SearchForm from '~/components/shack/SearchForm.vue'
import AddCreditAll from '~/components/directory/AddCreditAll'
import AddFreeMonths from '~/components/directory/AddFreeMonths'
import { Select, Option } from 'element-ui'
import { getQueryParams } from '../../../util/url'

export default {
  name: 'Directory',
  layout: 'ShackDash',
  async asyncData({ store, $membership, route }) {
    const link = `filter[status]=accepted&include=profile,primaryPlan&page=${
      route.query.page
    }`
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
    AddCreditAll,
    AddFreeMonths,
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
    toggleModal(type) {
      this.$bvModal.show(type)
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
    searchMember(query) {
      this.loading = !this.loading
      const link = `filter[status]=accepted&include=profile&filter[search]=${query}&filter[prefix_type]=${
        this.filter
      }`

      this.$membership
        .getAllMemberships(link)
        .then(({ data, meta, links }) => {
          this.data = data
          // this.meta = meta
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
