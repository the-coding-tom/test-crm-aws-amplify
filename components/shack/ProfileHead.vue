<template>
  <div class="sh-p-header">
    <span 
      v-show="getMembershipType" 
      class="label label-default sh-label">
      <template>
        <i 
          v-show="getMembershipType == 'Founding Member'" 
          class="fa fa-star" />
        {{ getMembershipType }}
      </template>
    </span>
    <div class="d-flex align-items-center pd-20 mr-5 mr-tb-20">
      <div
        id="profile-upload-icon-container"
        style="position: relative"
        class="rounded-circle avatar-xxl"
      >
        <img
          :src="img ? img : '/img/placeholder.jpg'"
          class="mr-r-20 rounded-circle avatar-xxl"
        >

        <div
          v-if="isLoading"
          class="default-profile-loading rounded-circle avatar-xxl"
        >
          <img 
            style="width: auto; height: 30px" 
            src="/img/loading.gif" >
        </div>

        <div
          v-if="!isLoading"
          class="default-profile-upload-state rounded-circle avatar-xxl"
        >
          <UploadButton
            v-model="profilePic"
            service="event"
            label="Upload Event Image (<500KB & size 1125x582)"
            @input="imageUploaded"
            @onLoad="onUploadStarted"
          />
        </div>
      </div>
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
import UploadButton from '@/components/shack/ProfilePhotoUploadButton.vue'

export default {
  components: {
    UploadButton
  },
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
    userProfile: {
      type: Object,
      default: null
    },
    userId: {
      type: Number,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    extras: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    loading: false,
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
    },
    isLoading() {
      return this.loading
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
    },
    imageUploaded(url) {
      this.loading = true
      this.userProfile.picture = url
      this.$membership
        .updateProfile({
          user_id: this.userId,
          ...this.userProfile
        })
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast('Photo updated succesfully', {
            title: 'Success',
            variant: 'success'
          })
          //this.$router.go(-1)
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    },
    onUploadStarted(loading) {
      this.loading = loading
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

.default-profile-upload-state {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.default-profile-loading {
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.default-profile-upload-state:hover {
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
  text-align: center;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
