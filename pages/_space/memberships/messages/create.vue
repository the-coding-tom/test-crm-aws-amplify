<template>
  <div>
    <b-form @submit.prevent="sendEmail">
      <base-header
        class="pb-6"
        type="">
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle
            title="Messages"
            subtitle="New"/>
          <b-button
            :disabled="loading"
            type="submit"
            variant="primary"
          ><i class="fa fa-paper-plane"/> Send Email</b-button>
        </div>
      </base-header>
      <div class="container-fluid mt--6 mr-b-30">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <div class="m-n25 sh-message-box">
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <base-input>
                        <span class="mr-r-10">To</span>
                        <el-select
                          v-model="emails"
                          :remote-method="searchMembers"
                          :loading="searching"
                          required
                          multiple
                          filterable
                          remote
                          reserve-keyword
                          placeholder="Add Member(s)">
                          <el-option
                            v-for="option in data"
                            :key="option.id"
                            :label="option.first_name + ' ' + option.last_name"
                            :value="option.email"/>
                        </el-select>
                      </base-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-inline">
                        <!-- <base-input label="Name" placeholder="Full Name"/> -->
                        <label
                          for=""
                          class="mr-r-10">Subject</label>
                        <input
                          v-model="subject"
                          type="text"
                          class="fg-1 form-control"
                          placeholder="Add Subject for Email Here"
                          required>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <html-editor v-model="content" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>

        <b-link
          @click="$router.go(-1)"><i class="fa fa-angle-left mr-r-10"/> Back</b-link>
      </div>
    </b-form>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import { Select, Option } from 'element-ui'
import HtmlEditor from '@/components/argon-core/Inputs/HtmlEditor'

export default {
  name: 'CreateMessage',
  layout: 'ShackDash',
  components: {
    MainTitle,
    SectionTitle,
    HtmlEditor,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ $membership }) {
    const link = `include=profile`
    return await $membership.getAllMemberships(link).then(({ data }) => {
      return {
        data
      }
    })
  },
  data() {
    return {
      emails: [],
      subject: '',
      content: '',
      loading: false
    }
  },
  methods: {
    validate() {
      if (this.emails.length == 0) {
        this.$bvToast.toast('Receipient email missing', {
          variant: 'warning'
        })
        return true
      }

      if (this.content.length < 50) {
        this.$bvToast.toast(
          'Email Content is required and must be more than 50 characters',
          {
            variant: 'warning'
          }
        )

        return true
      }
    },
    searchMembers(query) {
      const link = `filter[search]=${query}`

      const _self = this

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({ data }) => {
          _self.data = data
        })
      }, 350)()
    },
    sendEmail() {
      if (this.validate()) {
        return
      }

      this.loading = !this.loading
      const { emails, subject, content } = this
      this.$email
        .createEmail({ emails, subject, content })
        .then(({ data }) => {
          this.$bvToast.toast('Email sent successfully', {
            title: 'Success',
            variant: 'success'
          })

          this.$router.push({
            name: 'space-memberships-message-id',
            params: { id: data.id }
          })
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response ? e.response.data.message : e.message
          this.$bvToast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    }
  }
}
</script>
