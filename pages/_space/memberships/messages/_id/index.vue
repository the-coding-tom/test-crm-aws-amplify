<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Message"
          subtitle="Preview"/>
      </div>
    </base-header>
    <div class="container-fluid mt--6 mr-b-30">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <h2 class="mr-b-20">{{ data.subject }}</h2>
          <p class="send-to">Sent To: <a
            v-for="(email, i) in data.emails"
            :key="i"
            href="#">{{ email }} </a> </p>
          <span v-html="data.content"/>
        </card>
      </div>

      <b-link
        @click="$router.go(-1)"><i class="fa fa-angle-left mr-r-10"/> Back</b-link>
    </div>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'

export default {
  name: 'PreviewEmail',
  layout: 'ShackDash',
  async asyncData({ params, $email }) {
    return await $email.getSingleEmail(params.id).then(({ data }) => {
      data.emails = JSON.parse(data.emails)
      return { data }
    })
  },
  components: {
    MainTitle,
    SectionTitle
  },
  methods: {
    submit() {
      this.$router.push('/ui/members/sendmessage')
    }
  }
}
</script>
