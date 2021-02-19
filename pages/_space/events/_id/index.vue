<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Preview Event" />
        <b-button
          :to="{ name: 'space-events-id-edit', params: { id: event.id } }"
          variant="primary"
        >
          <i class="ti-pencil" /> Edit Event
        </b-button>
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
              <span v-html="event.description" />
              <badge type="info">{{ event.event_category.name }}</badge>
            </div>
            <div class="pv-footer">
              <p>
                Price:
                {{ event.price | currency(currentSpace.currency_symbol) }} /
                <span class="text-muted">ticket</span>
              </p>
              <p>{{ time }}</p>
              <div v-if="event.room">
                <p>{{ event.room.name }}</p>
              </div>
              <div v-else>
                <p>{{ event.external_location }}</p>
              </div>
            </div>
          </card>
          <div class="mr-b-30">
            <b-button
              :to="{ name: 'space-events' }"
              variant="transparent"
              class="text-primary"
            >
              <i class="fa fa-angle-left mr-r-10" /> Back
            </b-button>
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
    return await $event
      .getEvent(id)
      .then(({ data }) => {
        return {
          event: data
        }
      })
      .catch(e => {
        error({
          statusCode: e.statusCode,
          message: e.response
            ? JSON.stringify(e.response.data.errors)
            : e.message
        })
      })
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace.subdomain,
      currentSpace: state => state.space.currentSpace
      // event: state => state.events.currentEvent
    }),
    time() {
      const { start_time, end_time } = this.event
      return `${this.$moment(start_time).format(
        'MMMM DD YYYY'
      )}, ${this.$moment(start_time).format('HH:mm')} - ${this.$moment(
        end_time
      ).format('HH:mm')} `
    }
  },
  mounted() {
    var showdown = require('showdown')
    var converter = new showdown.Converter()
    var html = converter.makeHtml(this.event.description)

    this.event.description = html
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
