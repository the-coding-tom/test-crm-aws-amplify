<template>
  <div class="sh-p-header">
    <span
      v-show="getMembershipType"
      class="label label-default sh-label"
      style="margin-right: 140px"
    >
      <template>
        <i 
          v-show="getMembershipType == 'Founding Member'" 
          class="fa fa-star" />
        {{ getMembershipType }}
      </template>
    </span>
    <span class="label label-default sh-label">
      <template v-if="$moment('2021-07-21 14:28:12').isSame(referral)">
        <i class="fa fa-user" />
        returning member /></template
        >
      <template v-else>
        <i class="fa fa-user" />
        Invited member
      </template>
    </span>
    <div class="d-flex align-items-center pd-20 mr-5 mr-tb-20">
      <img
        :src="img ? img : '/img/placeholder.jpg'"
        class="mr-r-20 rounded-circle avatar-xxl"
      >
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
      type: String,
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
      type: Array,
      default: () => []
    },
    referral: {
      type: String,
      default: null
    }
  },
  data: () => ({
    prefix_type: [
      {
        text: 'Founding Member',
        value: '0'
      },
      {
        text: 'Fast Track',
        value: '1'
      },
      {
        text: 'Early Invite',
        value: '2'
      },
      {
        text: 'General Member',
        value: '3'
      }
    ]
  }),
  computed: {
    getMembershipType() {
      let type = null
      _.each(this.prefix_type, o => {
        if (o.value == this.status) {
          type = o.text
        }
      })

      return type
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
