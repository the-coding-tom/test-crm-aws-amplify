<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Community Directory" 
          subtitle="342 Profiles"/>
      </div>
    </base-header>



    <div class="container-fluid mt--6">

      <div class="row">
        <div class="col-md-6">
          <card>
            <div class="d-flex align-items-center mr-b-20">
              <img 
                :src="img ? img : '/img/placeholder.jpg'" 
                class="mr-r-20 rounded-circle avatar-xl">
              <div>
                <p class="mr-b-5"><strong>Choose file: </strong> no file attached</p>
                <div class="upload-btn-wrapper">
                  <button class="btn btn-outline-primary sh-btn-outline"> UPLOAD PHOTO </button>
                  <input 
                    :name="name" 
                    type="file" >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label>About You:</label>
                <textarea 
                  placeholder="Enter something..." 
                  rows="4" 
                  max-rows="6" 
                  class="form-control"/>
              </div>

              <div class="form-group col-md-12">
                <label>Tags:</label>
                <el-select 
                  v-model="value1" 
                  multiple 
                  placeholder="Add tags about you separated by comma(â€˜)">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </div>

              <base-input 
                class="col-md-6" 
                label="Location" 
                placeholder="San Francisco, USA"/>
              <base-input 
                class="col-md-6" 
                label="Company" 
                placeholder="Awesome Co"/>
              <base-input 
                class="col-md-6" 
                label="Birthday" 
                placeholder="dd/mm/yyyy" 
                type="date"/>
              <base-input 
                class="col-md-6" 
                label="Website" 
                placeholder="www.your-website.com"/>
              <base-input 
                class="col-md-6" 
                label="Email" 
                type="email" 
                placeholder="you@somemail.com"/>
              <base-input 
                class="col-md-6" 
                label="Phone" 
                placeholder="+1 800 4000 200"/>
              <base-input 
                class="col-md-6" 
                label="LinkedIn" 
                placeholder="https://linkedin.com/username"/>
              <base-input 
                class="col-md-6" 
                label="Twitter" 
                placeholder="@username"/>

              <div class="col-md-12">
                <b-button 
                  variant="primary" 
                  block 
                  @click.stop.prevent="submit()">Save and Notify Member</b-button>
              </div>
            </div>
          </card>
        </div>

        <div class="col-md-6">
          <div class="sh-alert d-flex align-items-center">
            <i class="ion-android-bulb fs20"/>
            <span>By clicking the "Save" button below, the memberâ€™s profile will be updated and the member will receive a notification email about the changes.</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import ThumbCard from '~/components/shack/ThumbCard.vue'
import SearchForm from '~/components/shack/SearchForm.vue'
import ProfileHead from '~/components/shack/ProfileHead.vue'
import UploadButton from '~/components/shack/UploadButton.vue'
import { Select, Option } from 'element-ui'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    ProfileHead,
    SearchForm,
    ThumbCard,
    UploadButton,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      value1: []
    }
  },
  methods: {
    submit() {
      this.$router.push('/ui/directory/profile')
    }
  }
}
</script>
