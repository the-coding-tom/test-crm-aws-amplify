<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Check-in"
          subtitle="Settings"/>
        <b-button
          v-b-modal.modal-1
          id="add-setting-modal"
          variant="primary">New Setting</b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <b-card no-body>
            <b-table
              :items="data"
              :fields="fields"
              striped
              hover
              show-empty>
              <template v-slot:cell(type)="data">
                <span>{{ getLabel(data) }}</span>
              </template>
              <template v-slot:cell(action)="data">
                <b-button
                  variant="primary"
                  size="sm"
                  @click="editSetting(data)">Edit</b-button>
                <b-button
                  variant="transparent"
                  class="text-danger"
                  size="sm"
                  @click="deleteSetting(data)"><i class="ti ti-trash"/> Remove</b-button>
              </template>

            </b-table>
          </b-card>
        </div>
      </div>
      <b-button
        variant="transparent"
        class="mb-2 text-primary"
        @click="$router.go(-1)"><i class="fas fa-chevron-left"/> Back</b-button>
    </div>
    <b-modal
      id="modal-1"
      :static="true"
      title="Settings"
      hide-footer>
      <b-form @submit.prevent="saveSetting">
        <b-form-group label="Membership Type">
          <b-form-select
            :options="options"
            v-model="setting.type"
            :required="true">
            <template v-slot:first>
              <option
                value=""
                disabled>-- Choose a membership --</option>
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group
          label="Number of Guests"
          description="This is the number of guests the membership type can bring to the space as a general guest">
          <b-form-input
            v-model="setting.option"
            :required="true"
            placeholder="1"
            type="number"/>
        </b-form-group>
        <b-button
          :disabled="loading"
          class="float-right"
          type="submit"
          variant="primary">Save</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import { mapState } from 'vuex'
import { displayError } from '../../../util/errors'

export default {
  layout: 'ShackDash',
  async asyncData({ $checkin, store }) {
    const subdomain = store.state.space.currentSpace.subdomain

    return await $checkin
      .settings(`${subdomain}/checkin-settings`)
      .then(res => {
        return {
          data: res.data
        }
      })
  },
  components: {
    MainTitle
  },
  data: () => ({
    loading: false,
    fields: [
      {
        key: 'type',
        label: 'Membership Type'
      },
      {
        key: 'option',
        label: 'Number of Guests'
      },
      {
        key: 'action',
        label: ''
      }
    ],
    setting: {
      option: '1',
      type: ''
    }
  }),
  computed: {
    ...mapState({
      options: state => state.memberships.prefix_type,
      currentSpace: state => state.space.currentSpace
    })
  },
  methods: {
    getLabel(data) {
      let label = ''

      _.each(this.options, (o, i) => {
        if (o.value === data.value) {
          label = o.text
        }
      })

      return label
    },
    showErrors(e) {
      this.loading = !this.loading
      displayError(e)

      this.$bvToast.toast('Something went wrong at our end', {
        variant: 'danger',
        title: 'Error'
      })
    },
    editSetting(data) {
      this.setting = data.item

      this.$bvModal.show('modal-1')
    },
    saveSetting() {
      this.loading = !this.loading

      const { subdomain } = this.currentSpace

      this.$checkin
        .saveSetting(subdomain, this.setting)
        .then(res => {
          location.reload()

          this.$bvToast.toast('Setting saved successfully', {
            variant: 'success',
            title: 'Success'
          })
        })
        .catch(e => {})
    },
    deleteSetting(data) {
      const { subdomain } = this.currentSpace

      if (!confirm('Are you sure?')) return

      this.$checkin
        .deleteSetting(subdomain, data.item.id)
        .then(res => {
          this.$bvToast.toast('Setting deleted successfully', {
            variant: 'success',
            title: 'Success'
          })

          location.reload()
        })
        .catch(e => {
          this.showErrors(e)
        })
    }
  }
}
</script>

<style>
</style>
