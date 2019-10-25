<template>
  <div class="col-md-3 sh-widget">
    <div class="card">
      <nuxt-link :to="{name:destinationLink}">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h2>{{ value }}</h2>
            <img :src="img" />
          </div>
          <p class="card-text">{{ text }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    destinationLink: {
      type: String,
      default: 'space'
    }
  }
}
</script>
