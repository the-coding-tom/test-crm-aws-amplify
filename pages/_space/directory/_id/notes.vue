<template>
  <div>
    <b-form @submit.prevent="addNote">
      <base-header
        class="pb-6"
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Directory"
            subtitle="Notes" />
          <b-button
            :disabled="loading"
            type="submit"
            variant="primary">Add Note</b-button>
        </div>
      </base-header>
      <b-container class="col-md-12">

        <b-row>

          <b-col cols="6">
            <b-card title="New Note">
              <html-editor
                v-model="body"
                placeholder="Content" />
              <b-form-checkbox
                v-model="sticky_note"
                :value="true"
                :unchecked-value="false"
                class="mt-2">Sticky Note</b-form-checkbox>
            </b-card>
          </b-col>
          <b-col
            cols="6"
          >
            <b-card
              title="Administrator Notes"
            >
              <div
                style="max-height: 500px; overflow-y:auto; margin: 0 -25px;">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr
                      v-for="(note, i) in notes"
                      :key="note.id"><td>
                        <div class="d-flex justify-content-between">
                          <div>
                            <span>{{ $moment(note.updated_at).format('MMM DD, YYYY HH:mm:ss') }}</span>
                            <span>~ {{ note.user.name }}</span>
                          </div>
                          <div v-if="note.user.id == user">
                            <b-button
                              variant="transparent"
                              class="text-danger"
                              size="sm"
                              @click="deleteNote(i)"><i class="fa fa-trash"/></b-button>
                          </div>
                        </div>
                        <span v-html="note.body"/>
                    </td></tr>
                  </tbody>
                </table>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
    <b-button
      variant="transparent"
      class="text-primary"
      @click="$router.go(-1)"><i class="fa fa-chevron-left"/> Back</b-button>
  </div>
</template>

<script>
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import HtmlEditor from '@/components/argon-core/Inputs/HtmlEditor'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  async asyncData({ $membership, params }) {
    return await $membership
      .getAllNotes(params.id)
      .then(({ data }) => {
        return {
          notes: data
        }
      })
      .catch(e => {
        console.log(e.response.data.message)
      })
  },
  components: {
    BaseHeader,
    MainTitle,
    HtmlEditor
  },
  data: () => ({
    loading: false,
    body: '',
    sticky_note: false,
    notes: []
  }),
  computed: {
    ...mapState({
      user: state => state.auth.user.id
    })
  },
  methods: {
    addNote() {
      const { body, sticky_note } = this
      const { id } = this.$route.params

      this.loading = !this.loading

      this.$membership
        .addNote(id, { body, sticky_note })
        .then(({ data }) => {
          this.loading = !this.loading
          this.$bvToast.toast('Note added successfully', {
            title: 'Success',
            variant: 'success'
          })

          this.notes.push(data)
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response ? e.response.data.message : e.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    deleteNote(i) {
      if (!confirm('Are you sure?')) return

      this.loading = !this.loading

      const { id } = this.$route.params
      const noteId = this.notes[i].id

      this.$membership
        .deleteNote(id, noteId)
        .then(res => {
          this.loading = !this.loading

          this.$bvToast.toast('Note added successfully', {
            title: 'Success',
            variant: 'success'
          })

          this.notes.splice(i, 1)
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response ? e.response.data.message : e.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    }
  }
}
</script>

<style>
</style>
