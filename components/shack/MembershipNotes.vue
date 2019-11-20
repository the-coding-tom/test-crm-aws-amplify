<template>
  <div>
    <div class="add-note mr-lr-20 mr-b-20">
      <b-form @submit.prevent="addNote">
        <textarea
          v-model="body"
          placeholder="Notes on member goes here"
          rows="3"
          max-rows="6"
          description="description"
          class="form-control dashed"
          required
        />
        <b-form-checkbox
          v-model="sticky_note"
          :value="true"
          :unchecked-value="false"
          class="mt-2">Sticky Note</b-form-checkbox>
        <b-button
          type="submit"
          variant="outline-default"
          block
          class="mr-t-20 dashed"
        >Add New Note</b-button>
      </b-form>
    </div>

    <div
      v-for="(note, i) in notes"
      :key="note.id"
      class="note-card pd-20">
      <div class="d-flex justify-content-between">
        <h3><i
          v-show="note.sticky_note"
          class="ti-pin-alt mr-r-10" /></h3>
        <b-dropdown
          no-caret
          class="drop-0">
          <template v-slot:button-content>
            <i class="fa fa-ellipsis-v" />
          </template>
          <b-button
            variant="transparent"
            class="dropdown-item"
            @click="updateNote(note)"
          >
            <i class="ti-pin-alt" /> <span v-if="!note.sticky_note">Pin this</span> <span v-else>Unpin this</span>
          </b-button>
          <b-button
            variant="transparent"
            class="dropdown-item text-danger"
            size="sm"
            @click="deleteNote(i)"><i class="ti ti-trash"/> Delete Post</b-button>
        </b-dropdown>
      </div>
      <p>{{ note.body }}</p>
      <p class="text-muted m-0">{{ note.user.name }}  •  {{ $moment(note.updated_at).format('MMM DD, YYYY HH:mm:ss') }}</p>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import HtmlEditor from '@/components/argon-core/Inputs/HtmlEditor'
import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    HtmlEditor
  },
  props: {
    membership_id: {
      type: String,
      default: ''
    }
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
  mounted() {
    this.getNotes()
  },
  methods: {
    getNotes() {
      this.$membership
        .getAllNotes(this.$route.params.id)
        .then(({ data }) => {
          this.notes = _.sortBy(_.sortBy(data, ['updated_by']), [
            function(o) {
              return o.sticky_note !== true
            }
          ])
        })
        .catch(e => {
          console.log(e.response.data.message)
        })
    },
    addNote() {
      const { body, sticky_note } = this
      const { id } = this.$route.params

      this.loading = !this.loading

      this.$membership
        .addNote(id, { body, sticky_note })
        .then(({ data }) => {
          this.body = ''
          this.loading = !this.loading
          this.$bvToast.toast('Note added successfully', {
            title: 'Success',
            variant: 'success'
          })

          this.notes.push(data)

          this.notes = _.sortBy(_.sortBy(this.notes, ['updated_by']), [
            function(o) {
              return o.sticky_note !== true
            }
          ])
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
    },
    updateNote(note) {
      this.loading = !this.loading
      this.sticky_note = !note.sticky_note

      const { sticky_note } = this

      this.$membership
        .updateNote(this.membership_id, note.id, {
          sticky_note
        })
        .then(res => {
          this.loading = !this.loading

          this.getNotes()

          this.$bvToast.toast('Note added successfully', {
            title: 'Success',
            variant: 'success'
          })
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
.note-card {
  border-bottom: 1px solid #f4f4f4;
}
.note-card:nth-child(even) {
  background: #fcfcfc;
}
.note-card h3 {
  font-weight: bold;
  margin-bottom: 15px;
}
.drop-0 button {
  padding: 0;
}
.drop-0 .dropdown-menu.show {
  left: -15px !important;
  top: 10px !important;
}
.el-drawer.ltr,
.el-drawer.rtl,
.el-drawer__container {
  overflow: scroll;
}
.btn-outline-default {
  background: #ececec;
}
</style>
