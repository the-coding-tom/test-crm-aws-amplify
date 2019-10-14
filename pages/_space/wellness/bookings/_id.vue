<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Wellness Attendees" />
        <b-button
          :to="{name: 'space-wellness-id', params: {id: $route.params.id}}"
          variant="primary"><i class="ti-pencil"/> Edit Wellness</b-button>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <card>
            <div>
              <div class="m-n25">
                <table class="table table-hover table-striped sh-border-head">
                  <thead>
                    <tr>
                      <th>Attendee Name</th>
                      <th>Start Time</th>
                      <th>Created at</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(booking, i) in bookings.data"
                      :key="booking.id">
                      <td>{{ booking.user.full_name }}</td>
                      <td>{{ booking.start_timestamp }}</td>
                      <td>{{ booking.created_at }}</td>
                      <td><b-button
                        class="text-danger"
                        variant="transparent"
                        @click="removeBooking(i)"><i class="fa fa-times"/> Remove</b-button></td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <base-pagination
                    :total="bookings.meta.total"
                    :per-page="bookings.meta.per_page"
                    :value="bookings.meta.current_page"
                    align="center"
                    @next="next"
                    @prev="prev"/>
                </div>
              </div>
            </div>
          </card>

          <div class="mr-b-30">
            <b-button
              variant="transparent"
              class="text-primary"
              @click="$router.go(-1)"><i class="fa fa-angle-left mr-r-10"/> Back</b-button>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'

import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'

export default {
  layout: 'ShackDash',
  async asyncData({ $wellness, error, route }) {
    return await $wellness
      .getAllBookings(route.params.id)
      .then(({ data }) => {
        return {
          bookings: data
        }
      })
      .catch(e => {
        error({
          statusCode: e.statusCode,
          message: e.response ? JSON.stringify(e.response.message) : e.message
        })
      })
  },
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  methods: {
    removeBooking(i) {
      if (!confirm('Are you sure?')) return

      const { id, wellness } = this.bookings.data[i]

      this.$wellness
        .cancelABooking(wellness.id, id)
        .then(res => {
          this.bookings.data.splice(i, 1)
        })
        .catch(({ response }) => {
          this.$bvToast.toast(JSON.stringify(response.data.message), {
            variant: 'danger'
          })
        })
    },
    next() {
      const { next } = this.bookings.meta
      this.$wellness.getAllBookings(next)
    },
    prev() {
      const { prev } = this.bookings.meta
      this.$wellness.getAllBookings(prev)
    }
  }
}
</script>
<style>
h3 {
}
</style>
<style lang="scss" scoped>
</style>
