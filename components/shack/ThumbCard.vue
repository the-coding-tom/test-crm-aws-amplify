<template>
  <div class="col-md-3 sh-thumb">
    <card>
      <span
        v-if="paused === 'paused' && resume_at == null"
        style="position: absolute; top: 10px; right: 10px"
      ><b-badge 
        pill 
        variant="danger">{{ 'Paused Membership' }}</b-badge>
      </span>
      <span
        v-else-if="paused_at != null && paused != 'paused'"
        style="position: absolute; top: 10px; right: 10px"
      ><b-badge 
        pill 
        variant="danger"
      >{{ 'Auto-pause on: '
      }}<span style="color: black">{{
        $moment(paused_at).format('MMM Do YYYY')
      }}</span></b-badge
      >
      </span>
      <span
        v-else-if="resume_at != null && paused == 'paused'"
        style="position: absolute; top: 10px; right: 10px"
      ><b-badge 
        pill 
        variant="primary"
      >{{ 'Auto-resume on: '
      }}<span style="color: black">{{
        $moment(resume_at).format('MMM Do YYYY')
      }}</span></b-badge
      >
      </span>
      <template v-else>
        <span
          v-if="$moment('2022-04-15 00:00:00').isSame(referral)"
          class="label label-default"
        >
          <template> <i class="fa fa-star" /> Returning Member </template>
        </span>
        <span 
          v-else 
          class="label label-default">
          <template> Invited Member </template>
        </span>
      </template>
      <div 
        class="d-flex mr-tb-10" 
        style="margin-top: 16px">
        <img
          :src="img ? img : '/img/placeholder.jpg'"
          class="mr-r-10 rounded-circle avatar"
        >
        <div>
          <h3>
            <nuxt-link
              :to="{ name: 'space-directory-id', params: { id: link } }"
            >{{ name }}</nuxt-link
            >
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
    },
    referral: {
      type: String,
      default: null
    },
    paused: {
      type: String,
      default: null
    },
    paused_at: {
      type: String,
      default: null
    },
    resume_at: {
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

<style scoped>
.referral-container {
  margin-top: 20px;
}
.referral-text {
  display: table-cell;
  vertical-align: middle;
}
</style>
