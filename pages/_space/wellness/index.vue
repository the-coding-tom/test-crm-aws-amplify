<template>
  <div>
    <base-header
      class="pb-6"
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Wellness"
          subtitle="All" />
        <nuxt-link
          :to="{ name: 'space-wellness-add'}"
          class="btn btn-primary"
        >Add Wellness</nuxt-link>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row equal">
        <div
          v-for="session in sessions"
          :key="session.id"
          class="col-md-4">
          <card class="sh-book-res">
            <div class="m-n25 img-wrap">
              <img
                :src="session.banner_url"
                class="img-fluid"
                alt="banner_url" >
              <badge>{{ session.wellness_category.name }}</badge>
            </div>

            <div class="mr-t-50">
              <div class="d-flex justify-content-between mr-b-20">
                <h3>{{ session.name }}</h3>
                <h3
                  class="text-muted"
                >{{ session.price_per_session }} {{ space.currency }} / session</h3>
              </div>
              <p class="text-muted">{{ session.description }}</p>
            </div>

            <div class="mt-2">
              <p>Location: {{ session.location }}</p>
              <p>Start Date: {{ $moment(session.start_date).format('MMM Do YYYY H:mm:ss') }}</p>
              <p>End Date: {{ $moment(session.end_date).format('MMM Do YYYY H:mm:ss') }}</p>
            </div>

            <slots :data="session" />

            <div slot="footer">
              <div class="d-flex justify-content-between">
                <nuxt-link :to="{ name: 'space-wellness-id', params: { id: session.id }}">
                  <i class="ti-pencil" /> Edit Resource
                </nuxt-link>
                <a
                  class="text-danger"
                  @click="deleteWellness(session.id)">
                  <i class="ti-trash" /> Delete Resource
                </a>
              </div>
            </div>
          </card>
        </div>
      </div>
      <card v-if="sessions.length == 0">
        <p>No sessions available</p>
      </card>
    </div>
    <div>
      <base-pagination
        :total="meta.total"
        :per-page="meta.per_page"
        :value="meta.current_page"
        align="center"
        @next="next"
        @prev="prev"/>
    </div>

  </div>
</template>

<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import Slots from '~/components/wellness/slots'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle,
    Slots
  },
  async asyncData({ store, $wellness, error }) {
    await $wellness.getAllWellnessSessions().then(({ data }) => {
      console.log(data)
      store.commit('wellness/setSessions', data)
    })
  },
  data: () => ({}),
  computed: {
    ...mapState({
      sessions: state => state.wellness.sessions.data,
      meta: state => state.wellness.sessions.meta,
      links: state => state.wellness.sessions.links,
      space: state => state.space.currentSpace
    })
  },
  methods: {
    next() {
      const { next } = this.links
      this.$wellness.getAllWellnessSessions(next)
    },
    prev() {
      const { prev } = this.links
      this.$wellness.getAllWellnessSessions(prev)
    },
    deleteWellness(id) {
      if (!confirm('Are you sure?')) return

      this.$wellness
        .deleteWellnessSession(id)
        .then(res => {
          location.reload()
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.errors), {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>

<style lang="scss">
.sh-book-res {
  .card-footer {
    border: unset;
    padding-top: 0;
  }
  .img-wrap {
    height: 210px;
    overflow: hidden;
  }
  .badge {
    position: relative;
    bottom: 40px;
    left: 23px;
    border-radius: 15px;
    text-transform: unset;
    background: rgba(76, 77, 79, 0.7) !important;
    padding: 6px 15px;
    font-weight: normal;
    font-size: 12px;
  }
  p {
    margin-bottom: 0px;
  }
  a {
    text-decoration: unset;
  }
  img {
    object-fit: cover;
    vertical-align: middle;
    height: 100%;
    width: 100%;
  }
}
</style>
