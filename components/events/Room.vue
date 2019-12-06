<template>
  <div class="form-group col-md-12">
    <b-form-group label="Rooms Available">
      <b-form-radio
        v-for="room in rooms"
        :value="room.id"
        :key="room.id"
        v-model="selectedRoom"
        name="room"
      >{{ room.name }}</b-form-radio>
    </b-form-group>
    <div>
      <base-pagination
        :value="meta.current_page"
        :total="meta.total"
        :per-page="15"
        size="sm"
        @next="next"
        @prev="prev"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { displayError } from '../../util/errors'
export default {
  name: 'EventRooms',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      meta: {},
      links: {},
      selectedRoom: this.value
    }
  },
  computed: {
    ...mapState({
      rooms: state => state.events.rooms
    })
  },
  watch: {
    selectedRoom() {
      this.$emit('input', this.selectedRoom)
    }
  },
  created() {
    this.$event
      .getRooms()
      .then(({ data }) => {
        this.meta = data.meta
        this.links = data.links

        this.$store.commit('events/setRooms', data)
      })
      .catch(e => {
        this.$bvToast.toast('Failed to retrieve rooms', {
          variant: 'danger'
        })
        displayError(e)
      })
  },
  methods: {
    next() {
      const { next } = this.links
      this.getRooms(next)
    },
    prev() {
      const { prev } = this.links
      this.getRooms(prev)
    },
    getRooms(link) {
      this.$resource
        .getAllRooms(link)
        .then(({ data }) => {
          this.meta = data.meta
          this.links = data.links
          this.$store.commit('events/setRooms', data)
        })
        .catch(e => {
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          this.$bvToast.toast(message, {
            variant: 'error',
            title: 'Error'
          })
        })
    }
  }
}
</script>

<style>
</style>
