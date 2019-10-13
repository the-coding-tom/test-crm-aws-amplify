<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle
          title="Members"
          subtitle="Recently Active"/>
        <b-button
          variant="primary"
          @click.stop.prevent="submit()"><i class="fa fa-paper-plane"/> Send Email</b-button>
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
                        v-model="selects"
                        multiple
                        filterable
                        placeholder="Add Member(s)">
                        <el-option
                          v-for="option in selectOptions"
                          :key="option.label"
                          :label="option.label"
                          :value="option.value"/>
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
                        type="text"
                        class="fg-1 form-control"
                        placeholder="Add Subject for Email Here">
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      class="form-control p-0 mt-2"
                      rows="10"
                      placeholder="Email"/>
                  </td>
                </tr>
                <tr>
                  <td class="pd-0">
                    <UploadButton
                      name="Hello"
                      label="Upload File" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b-form-checkbox>
                      Send a copy of this Email to all SHACK15 Admins
                    </b-form-checkbox>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </card>
      </div>

      <a href="/ui/members"><i class="fa fa-angle-left mr-r-10"/> Back</a>
    </div>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import UploadButton from '~/components/shack/UploadButton.vue'
import { Select, Option } from 'element-ui'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    UploadButton,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      selectOptions: [
        {
          label: 'Phelicia Drake ',
          value: 'info1@example.com'
        },
        {
          label: 'Samuel Ekubona',
          value: 'info2@example.com'
        },
        {
          label: 'Goku Justin',
          value: 'info3@example.com'
        },
        {
          label: 'Kofi Pampaso',
          value: 'info4@example.com'
        },
        {
          label: 'Tulasi Boni',
          value: 'info5@example.com'
        },
        {
          label: 'Michael Smith',
          value: 'info6@example.com'
        }
      ],
      selects: [],
      dates: {
        simple: new Date(),
        range: '2019-04-19 to 2019-04-24'
      },
      inputs: {
        tags: ['BUCHAREST', 'IASI', 'TIMISOARA'],
        fileSingle: [],
        fileMultiple: []
      },
      switches: {
        off: false,
        primary: true,
        default: true,
        danger: true,
        warning: true,
        success: true,
        info: true
      },
      sliders: {
        simple: 50,
        range: [200, 400]
      }
    }
  },
  methods: {
    submit() {
      this.$router.push('/ui/members/messagesent')
    }
  }
}
</script>
