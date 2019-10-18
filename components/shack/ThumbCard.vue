<template>
  <div class="col-md-3 sh-thumb">
    <card>
      <span class="label label-default">
        <template v-if="status">
          <i class="fa fa-star" /> Founding Member
        </template>
        <template v-else>
          <i class="fa fa-unlock" /> Member
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
      type: Boolean,
      default: false
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
  }
}
</script>
