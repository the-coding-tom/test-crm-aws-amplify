<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between py-4">
        <MainTitle
          title="Resources"/>
        <nuxt-link
          :to="{ name: 'space-resources-add'}"
          class="btn btn-primary"
        >Add Resource</nuxt-link>
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--6">
      <div class="row equal">
        <div
          v-for="rooms in allRooms"
          :key="rooms.id"
          class="col-md-4">
          <card class="sh-book-res">
            <div class="m-n25 img-wrap">
              <img
                :src="rooms.photo"
                class="img-fluid"
                alt="">
              <badge>{{ rooms.category.name }}</badge>
            </div>

            <div class="mr-t-50">
              <div class="d-flex justify-content-between mr-b-20">
                <h3>{{ rooms.name }}</h3>
                <h3 class="text-muted">{{ rooms.price_per_hour }} USD/hr</h3>
              </div>
              <p class="text-muted">{{ rooms.description }}</p>
            </div>

            <div class="mr-t-30">
              <p><u>Resource Availability</u></p>
              <p
                v-for="(available, i) in rooms.room_availability"
                :key="i">
                {{ `${daylookup[available.weekdays[0]]} - ${daylookup[available.weekdays[1]] || ''}` }}
                {{ $moment(available.from, "HH:mm").format("hh:mm A") }} -
                {{ $moment(available.to, "HH:mm").format("hh:mm A") }}</p>
            </div>

            <div slot="footer">
              <div class="d-flex justify-content-between">
                <nuxt-link :to="{ name: 'space-resources-id', params: { id: rooms.id }}">
                  <i class="ti-pencil" /> Edit Resource
                </nuxt-link>
                <a
                  class="text-danger"
                  @click="deleteRoom(rooms.id)"><i class="ti-trash"/> Delete Resource</a>
              </div>
            </div>
          </card>
        </div>
      </div>
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
import { mapState } from 'vuex'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'

export default {
  layout: 'ShackDash',
  components: {
    SectionTitle,
    MainTitle
  },
  async asyncData({ store }) {
    await store.dispatch('resources/getAllRooms')
  },
  data() {
    return {
      daylookup: {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursaday',
        5: 'Friday',
        6: 'Saturday'
      }
    }
  },
  computed: {
    ...mapState({
      allRooms: state => state.resources.rooms.data,
      meta: state => state.resources.rooms.meta,
      links: state => state.resources.rooms.links
    })
  },
  methods: {
    deleteRoom(room_id) {
      if (!confirm('Are you sure?')) return

      this.$store.dispatch('resources/deleteRoom', {
        vm: this,
        payload: room_id
      })
    },
    next() {
      const { next } = this.links
      this.$store.dispatch('resources/getAllRooms', { vm: this, payload: next })
    },
    prev() {
      const { prev } = this.links
      this.$store.dispatch('resources/getAllRooms', { vm: this, payload: prev })
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
