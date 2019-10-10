<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Preview Event" />
        <a 
          :href="`/${space}/events/${id}/edit`" 
          class="btn btn-primary">
          <i class="ti-pencil" /> Edit Event
        </a>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-md-4">
          <card class="sh-eventpv">
            <div class="m-n25 img-wrap">
              <img 
                :src="event.banner_url" 
                class="img-fluid" 
                alt >
            </div>
            <div class="pv-content">
              <h3>{{ event.name }}</h3>
              <p class="text-muted">{{ event.description }}</p>
              <badge type="info">{{ event.event_category.name }}</badge>
            </div>
            <div class="pv-footer">
              <p>
                Price: $ {{ event.price }} /
                <span class="text-muted">ticket</span>
              </p>
              <p>{{ event.start_time }}</p>
              <div v-if="event.room">
                <p>{{ event.room.name }}</p>
              </div>
            </div>
          </card>
          <div class="mr-b-30">
            <a href="/ui/events">
              <i class="fa fa-angle-left mr-r-10" /> Back
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  async asyncData({ store, error, params, $event }) {
    const { id } = params
    await $event
      .getEvent(id)
      .then(({ data }) => {
        store.commit('events/setEvent', data)
      })
      .catch(({ response }) => {
        error({ statusCode: 404, message: 'Not Found. Try Again' })
      })

    return {
      id
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace.subdomain,
      event: state => state.events.currentEvent
    })
  },
  mounted() {
    if (this.event) {
      this.event.start_time = this.$moment(this.event.start_time).format(
        'YYYY-MM-DD HH:mm:ss'
      )
    }
  }
}
</script>
<style>
</style>
<style lang="scss" scoped>
.sh-eventpv {
  .img-wrap {
    height: 180px;
    overflow: hidden;
  }
  .badge {
    text-transform: unset;
    font-size: 13px;
    font-weight: normal;
    padding: 6px 19px 4px;
    border-radius: 15px;
  }
  .pv-content {
    margin-top: 50px;
  }
  .pv-footer {
    margin-top: 30px;
    p {
      margin-bottom: 5px;
    }
  }
  h3 {
    margin-bottom: 20px;
  }
  img {
    object-fit: cover;
    vertical-align: middle;
    height: 100%;
    width: 100%;
  }
}
</style>
