<template>
  <div class="sh-p-header">
    <span class="label label-default sh-label">
      <template v-if="status">
        <i class="fa fa-star" /> Founding Member
      </template>
      <template v-else>
        <i class="fa fa-unlock" /> Member
      </template>
    </span>
    <div class="d-flex align-items-center pd-20 mr-5 mr-tb-20">
      <img
        :src="img ? img : '/img/placeholder.jpg'"
        class="mr-r-20 rounded-circle avatar-xxl" >
      <div>
        <h1>{{ name }}</h1>
        <h3 class="mr-b-10">{{ company }}</h3>
        <i class="ti-location-pin" />
        {{ getCities(address) }}
        <br >
        <i class="ti-calendar" />
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    status: {
      type: Boolean,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    company: {
      type: String,
      default: null
    },
    address: {
      type: Array,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    extras: {
      type: String,
      default: () => []
    }
  },
  methods: {
    getCities(address) {
      return _.join(
        _.map(address, o => {
          return _.upperFirst(o)
        }),
        ', '
      )
    }
  }
}
</script>

<style scoped>
.sh-p-header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #ed8100;
}
.sh-p-header * {
  color: #fff;
}
.sh-p-header h1 {
  font-size: 20px;
  font-weight: bold;
}
</style>
