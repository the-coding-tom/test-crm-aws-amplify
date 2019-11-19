<template>
  <div class="col-md-3 sh-thumb">
    <card>
      <span class="label label-default">
        <template>
          <i
            v-show="getMembershipType"
            class="fa fa-star" /> {{ getMembershipType }}
        </template>
      </span>
      <div class="d-flex mr-tb-10">
        <img
          :src="img ? img : '/img/placeholder.jpg'"
          class="mr-r-10 rounded-circle avatar" >
        <div>
          <h3>
            <nuxt-link :to="{name:'space-directory-id', params: {id: link}}">{{ name }}</nuxt-link>
          </h3>
          {{ company }}
        </div>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    company: {
      type: String,
      default: null
    },
    status: {
      type: Object,
      default: () => {}
    },
    thumbCol: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    }
  },
  data: () => ({
    prefix_type: [
      {
        text: 'Founding Member',
        value: '0'
      }
    ]
  }),
  computed: {
    getMembershipType() {
      let type = null
      _.each(this.prefix_type, o => {
        if (o.value == this.status.prefix_type) {
          type = o.text
        }
      })

      return type
    }
  }
}
</script>
