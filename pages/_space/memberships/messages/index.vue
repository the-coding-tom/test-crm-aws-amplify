<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Messages"
          subtitle="All"/>
        <b-button
          :to="{name: 'space-memberships-messages-create'}"
          variant="primary"
        ><i class="fa fa-paper-plane"/> New Email</b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6 mr-b-30">
      <div class="card-deck flex-column flex-xl-row">
        <div class="card">
          <b-table
            :fields="fields"
            :items="data"
            striped
            hover
            show-empty
            @row-clicked="rowClicked">
            <template v-slot:cell(emails)="row">
              {{ getEmail(row.value) }}
            </template>
          </b-table>
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

      <b-link
        @click="$router.go(-1)"><i class="fa fa-angle-left mr-r-10"/> Back</b-link>
    </div>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import UploadButton from '~/components/shack/UploadButton.vue'
import { Select, Option } from 'element-ui'

export default {
  name: 'SendMessages',
  layout: 'ShackDash',
  components: {
    MainTitle,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, $email, params }) {
    return await $email.getAllEmails().then(({ data, meta, links }) => {
      return {
        data,
        meta,
        links
      }
    })
  },
  data: () => ({
    fields: [
      {
        key: 'emails',
        sortable: false
      },
      { key: 'subject', sortable: true },
      { key: 'created_at', sortable: true }
    ]
  }),
  methods: {
    getEmail(value) {
      const emails = JSON.parse(value)

      return `${emails[0]} +${emails.length - 1}`
    },
    rowClicked(e) {
      this.$router.push({
        name: 'space-memberships-messages-id',
        params: { id: e.id }
      })
    },
    next() {
      const { next } = this.links
      this.$email.getAllEmails(next)
    },
    prev() {
      const { prev } = this.links
      this.$$email.getAllEmails(prev)
    },
    submit() {
      this.$router.push('/ui/members/messagesent')
    }
  }
}
</script>
