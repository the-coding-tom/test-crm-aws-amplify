<template>
  <div>
    <base-header
      class="pb-6"
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Tags"
          subtitle="All" />
        <b-button
          :to="{name:'space-tags-add'}"
          squared
          variant="primary"
          class="text-white">Add Tag</b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <div class="card">
          <el-table
            :data="tags"
            class="table-responsive align-items-center table-flush table-striped"
            header-row-class-name="thead-light"
          >
            <el-table-column
              label="Tag"
              min-width="310px"
              prop="name"
              sortable>
              <template v-slot="{row}">
                <h4>{{ row.name }}</h4>
              </template>
            </el-table-column>
            <el-table-column
              label="Type"
              prop="type"
              min-width="140px">
              <template v-slot="{row}">
                <span>{{ row.type }}</span>
              </template>
            </el-table-column>
            <el-table-column
              min-width="180px"
              align="center">
              <template
                v-slot="{row}"
                class="table-actions">
                <b-button
                  :disabled="loading"
                  variant="transparent"
                  class="text-primary"
                  @click="showEditModal(row)"
                >
                  <i class="fa fa-pen" /> Edit
                </b-button>
              </template>
            </el-table-column>

            <el-table-column
              min-width="180px"
              align="center">
              <template
                v-slot="{row}"
                class="table-actions">
                <b-button
                  :disabled="loading"
                  type="submit"
                  variant="transparent"
                  class="text-danger"
                  @click="removeTag(row)"
                >
                  <i class="fa fa-times" /> Remove
                </b-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div>
      <base-pagination
        :total="meta.total"
        :per-page="meta.per_page"
        :value="meta.current_page"
        align="center"
        @next="next"
        @prev="prev"
      />
    </div>

    <div>
      <b-modal
        id="edit-modal"
        hide-footer>
        <template v-slot:modal-title>Edit Tag</template>

        <b-form @submit.prevent>
          <div class="row">
            <base-input
              v-model="name"
              class="col-md-12"
              label="Name of Tag"
              placeholder="cities, ui, ux"
              required
            />
            <base-input
              v-model="type"
              class="col-md-12"
              label="Tag Type"
              disabled
              required
              placeholder="profile_interest"
            />
          </div>
          <b-button
            :disabled="loading"
            squared
            variant="primary"
            class="text-white float-right"
            @click="editTag"
          >
            Update
          </b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import { Table, TableColumn } from 'element-ui'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  async asyncData({ store, $tag, error }) {
    await $tag
      .getAllTags()
      .then(({ data }) => {
        store.commit('tags/setTags', data)
      })
      .catch(err => {
        const message = err.response
          ? JSON.stringify(err.response.data.errors)
          : err.message

        error({
          statusCode: err.status,
          message
        })
      })
  },
  data() {
    return {
      loading: false,
      name: '',
      type: ''
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tags.tags.data,
      meta: state => state.tags.tags.meta,
      space: state => state.space.currentSpace
    })
  },
  methods: {
    next() {
      const { current_page, last_page } = this.meta
      const nextPage = last_page === current_page ? 1 : current_page + 1

      this.$tag
        .getAllTags(nextPage)
        .then(({ data }) => {
          this.$store.commit('tags/setTags', data)
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    prev() {
      const { current_page } = this.meta
      const prevPage = current_page === 1 ? 1 : current_page - 1

      this.$tag
        .getAllTags(prevPage)
        .then(({ data }) => {
          this.$store.commit('tags/setTags', data)
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        })
    },
    async removeTag(row) {
      const tagType = row.type
      const payload = {
        data: {
          name: row.name
        }
      }
      this.loading = !this.loading
      await this.$tag
        .removeTag(tagType, payload)
        .then(res => {
          this.$bvToast.toast('Tag removed successfully', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
          this.$store.commit('tags/removeTag', row)
          this.loading = !this.loading
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
          this.loading = !this.loading
        })
    },
    showEditModal(data) {
      this.$bvModal.show('edit-modal')
      this.name = data.name
      this.type = data.type
      this.old_tag = data.name
    },
    async editTag() {
      const { name, type, old_tag } = this

      const payload = {
        old_tag,
        new_tag: name
      }

      this.loading = !this.loading

      this.$tag
        .updateTag(type, payload)
        .then(({ data: { data } }) => {
          this.$bvToast.toast(`Tag ~${name}~ updated successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          this.$store.commit('tags/updateTag', { data, old_tag })
          this.loading = !this.loading
          this.$bvModal.hide('edit-modal')
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
          this.loading = !this.loading
        })
    }
  }
}
</script>
