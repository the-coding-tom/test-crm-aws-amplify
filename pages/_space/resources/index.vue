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
              <badge>San Francisco</badge>
            </div>

            <div class="mr-t-50">
              <div class="d-flex justify-content-between mr-b-20">
                <h3>{{ rooms.name }}</h3>
                <h3 class="text-muted">{{ rooms.price_per_hour }} USD/hr</h3>
              </div>
              <p class="text-muted">{{ rooms.description }}</p>
            </div>

            <div class="mr-t-30">
              <p>24 hrs cancellation notice</p>
              <p>Available from: Mondays - Fridays, 8:00AM - 5:00PM</p>
            </div>

            <div slot="footer">
              <div class="d-flex justify-content-between">
                <nuxt-link :to="{ name: 'space-resources-id', params: { id: rooms.id }}">
                  <i class="ti-pencil" /> Edit Resource
                </nuxt-link>
                <button  
                  class="text-danger"
                  @click="deleteRoom(rooms.id)"><i class="ti-trash"/> Delete Resource</button>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapState } from 'vuex'
import TopWidget from '~/components/shack/TopWidget.vue'
import Activity from '~/components/shack/Activity.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import EmptyActivity from '~/components/shack/EmptyActivity.vue'
import FeedTable from '~/components/shack/FeedTable.vue'
import Booking from '~/components/shack/Booking.vue'

export default {
  layout: 'ShackDash',
  components: {
    Activity,
    TopWidget,
    Booking,
    FeedTable,
    EmptyActivity,
    SectionTitle,
    MainTitle
  },
  computed: {
    ...mapState({
      allRooms: state => state.resources.rooms.data
    })
  },
  created() {
    this.$store.dispatch('resources/getAllRooms', { vm: this })
  },
  methods: {
    deleteRoom(room_id) {
      this.$store.dispatch('resources/deleteRoom', {
        vm: this,
        payload: room_id
      })
    }
  }
}
</script>
<style>
</style>
