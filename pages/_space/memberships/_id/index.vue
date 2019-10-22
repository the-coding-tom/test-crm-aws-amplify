<template>
  <div>
    <b-form @submit.prevent="updateMembership">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            :subtitle="`${data.first_name} ${data.last_name}`"
            title="Membership"/>
        </div>
      </base-header>



      <div class="container-fluid mt--6">

        <div class="row">
          <div class="col-md-6">
            <card>
              <div class="row">
                <base-input
                  v-model="data.first_name"
                  type="text"
                  class="col-md-6"
                  label="First Name"
                  placeholder="First Name"/>
                <base-input
                  v-model="data.last_name"
                  class="col-md-6"
                  label="Last Name"
                  placeholder="Last Name"
                  type="text"/>
                <base-input
                  v-model="data.membership_id"
                  class="col-md-6"
                  label="Membership #"
                  placeholder="00000000"/>
                <base-input
                  v-model="data.linkedin_url"
                  class="col-md-6"
                  label="Linkedin"
                  placeholder="https://linkedin.com/in/someone"/>
                <b-form-group
                  label="Source of Invitation"
                  class="col-md-6">
                  <b-form-select
                    v-model="data.extras[0].type"
                    :options="options"
                  />
                </b-form-group>
                <b-form-group
                  label="Comments"
                  class="col-md-6">

                  <b-form-textarea
                    v-model="data.extras[0].comment"
                    label="Comments"
                    placeholder="Comments"/>
                </b-form-group>

                <b-form-group class="col-md-6">
                  <b-form-checkbox
                    v-model="data.fouding_member"
                    :value="true"
                    :unchecked-value="false">Founding Member</b-form-checkbox>
                </b-form-group>

                <div class="col-md-12">
                  <b-button
                    :disabled="loading"
                    type="submit"
                    variant="primary"
                    block
                  >Save</b-button>
                </div>
              </div>
            </card>
          </div>

          <!-- <div class="col-md-6">
            <div class="sh-alert d-flex align-items-center">
              <i class="ion-android-bulb fs20"/>
              <span>By clicking the "Save" button below, the member's profile will be updated and the member will receive a notification email about the changes.</span>
            </div>
          </div> -->
        </div>

      </div>
    </b-form>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'

export default {
  name: 'DirectoryEdit',
  layout: 'ShackDash',
  components: {
    MainTitle,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, params, $membership, error, $moment }) {
    try {
      return await $membership.getAMembership(params.id).then(({ data }) => {
        data.extras = JSON.parse(data.extras)
        return {
          data
        }
      })
    } catch (e) {
      error({
        statusCode: e.statusCode,
        message: e.response ? e.response.data.message : e.message
      })
    }
  },
  data() {
    return {
      loading: false,
      options: [
        { text: 'Reference', value: 'reference' },
        { text: 'Others', value: 'others' }
      ]
    }
  },
  methods: {
    updateMembership() {
      const { id } = this.$route.params
      const { data } = this

      this.loading = !this.loading

      this.$membership
        .updateMembership(id, data)
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast('Membership updated succesfully', {
            title: 'Success',
            variant: 'success'
          })
          this.$router.go(-1)
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response ? e.response.data.message : e.message
          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    }
  }
}
</script>
