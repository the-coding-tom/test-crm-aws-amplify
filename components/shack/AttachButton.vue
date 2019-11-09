<template>
  <div class="sh_community-res">
    <a
      href="javascript:void(0)"
      class="text-muted block"
      @click="modals.resource = true"
    >
      <i class="fa fa-paperclip mr-r-10" /> Add Attachment
    </a>

    <modal 
      :show.sync="modals.resource"
      size="lg">
      <h3 
        slot="header" 
        class="mr-tb-20 u-line">
        ATTACH RESOURCE
      </h3>
      <div class="col-md-12">
        <span class="mr-r-20">Select attachment from</span>
        <el-select 
          v-model="selectOption"
          class="select-danger"
          placeholder="pick resource ..." 
          @change="changeSelect($event)">
          <el-option
            value="event"
            label="event"
            class="select-danger"
          />
          <el-option
            value="wellness"
            label="wellness"
            class="select-danger"
          />
          <el-option
            value="image"
            label="image"
            class="select-danger"
          />
        </el-select>
      </div>
      <div class="col-md-12">
        <template v-if="selectOption == 'event'">
          <div class="mr-t-30 bdr pd-10">
            <SearchForm 
              :loading="loadingSearch" 
              @search="getEventResult"
            />
            <h4>{{ noResult }}</h4>

          </div>
          <div class="mr-t-30 bdr pd-10">
            <div
              v-for="event in events"
              :key="event.id"
              class="d-flex sh_modal-resource justify-content-between align-items-center bdr-b pd-b-10 mr-b-10"
            >
              <div class="d-flex align-items-center">
                <img
                  :src="event.banner_url"
                  class="avatar mr-r-10"
                  alt=""
                >
                <div class="">
                  <strong>{{ event.name }}</strong> <br >
                  {{ $moment(event.start_time).format('MMM Do YY, h:mm') }} - {{ $moment(event.end_time).format('MMM Do YY, h:mm') }} | {{ event.event_category.name }}
                </div>
              </div>
              <div>
                <b-form-radio 
                  :value="event.id"
                  name="event"
                  @change="getAttachment(event, 'event')" />
              </div>
            </div>
          </div>
        </template>
        <template v-if="selectOption == 'wellness'">
          <div class="mr-t-30 bdr pd-10">
            <SearchForm 
              :loading="loadingSearch" 
              @search="getWellnessResult" 
            />
            <h4>{{ noResult }}</h4>
          </div>
          <div class="mr-t-30 bdr pd-10">
            <div
              v-for="well in sessions"
              :key="well.id"
              class="d-flex sh_modal-resource justify-content-between align-items-center bdr-b pd-b-10 mr-b-10"
            >
              <div class="d-flex align-items-center">
                <img
                  :src="well.banner_url"
                  class="avatar mr-r-10"
                  alt=""
                >
                <div class="">
                  <strong>{{ well.name }}</strong> <br >
                  {{ $moment(well.start_date).format('MMM Do YY, h:mm') }} - {{ $moment(well.end_date).format('MMM Do YY, h:mm') }} | {{ well.wellness_category.name }}
                </div>
              </div>
                
              <div>
                <b-form-radio 
                  :value="well.id"
                  name="wellness"
                  @change="getAttachment(well, 'wellness')" />
              </div>
            </div>
          </div>
        </template>
        <template v-if="selectOption=='image'">
          <UploadButton
            v-model="banner_url"
            service="community"
            label="Upload File (<500KB & size 1125x582)"
          />
        </template>
      </div>  
      <div 
        class="row" 
      >
        <div class="col-md-12 text-right">
          <button 
            type="button"
            class="btn btn-default" 
            @click="addAttach">Add to Post</button>
        </div>
      </div>    
    </modal>
  </div>
</template>
<script>
import { Select, Option } from 'element-ui'
import { mapState } from 'vuex'

import UploadButton from '~/components/shack/UploadButton.vue'
import SearchForm from '~/components/shack/SearchForm.vue'

import helper from './../../util/helper'

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    UploadButton,
    SearchForm
  },
  data() {
    return {
      selectOption: 'image',
      url: null,
      banner_url: null,
      modals: {
        resource: false
      },
      attachmentSelect: {
        type: 'image',
        attachInfo: null
      },
      loadingSearch: false,
      noResult: null
    }
  },
  computed: {
    ...mapState({
      sessions: state => state.wellness.sessions.data,
      events: state => state.events.events
    })
  },
  methods: {
    changeSelect(e) {
      this.noResult = null
      if (e == 'event') {
        this.getEvents()
      }
      if (e == 'wellness') {
        this.getWellness()
      }
      if (e == 'image') {
        this.attachmentSelect.type = 'image'
      }
    },
    async getWellness() {
      try {
        const { data } = await this.$wellness.getAllWellnessSessions()
        this.$store.commit('wellness/setSessions', data)
      } catch (error) {
        this.$bvToast.toast(
          `${
            error.response
              ? JSON.stringify(error.response.data.errors)
              : error.message
          }`,
          helper.notify.error
        )
      }
    },
    async getEvents() {
      try {
        const { data } = await this.$event.getEvents()
        this.$store.commit('events/setEvents', data)
      } catch (error) {
        this.$bvToast.toast(
          `${
            error.response
              ? JSON.stringify(error.response.data.errors)
              : error.message
          }`,
          helper.notify.error
        )
      }
    },
    async getEventResult(e) {
      this.loadingSearch = true
      try {
        const { data } = await this.$event.getEventsByName(e)
        if (data.data.length == 0) {
          this.noResult = 'We could not find your search parameter'
        } else {
          this.noResult = null
        }
        this.loadingSearch = false

        this.$store.commit('events/setEvents', data.data)
      } catch (error) {
        this.loadingSearch = false
        this.$bvToast.toast(
          `${
            error.response
              ? JSON.stringify(error.response.data.errors)
              : error.message
          }`,
          helper.notify.error
        )
      }
    },
    async getWellnessResult(e) {
      this.loadingSearch = true

      try {
        const { data } = await this.$wellness.getWellnessByName(e)
        if (data.data.length == 0) {
          this.noResult = 'We could not find your search parameter'
        } else {
          this.noResult = null
        }
        this.loadingSearch = false
        this.$store.commit('wellness/setSessions', data)
      } catch (error) {
        this.loadingSearch = false

        this.$bvToast.toast(
          `${
            error.response
              ? JSON.stringify(error.response.data.errors)
              : error.message
          }`,
          helper.notify.error
        )
      }
    },
    getAttachment(data, type) {
      this.attachmentSelect.type = type
      this.attachmentSelect.attachInfo = data
    },
    addAttach() {
      if (this.attachmentSelect.type == 'image') {
        const imageData = {
          type: this.attachmentSelect.type,
          banner_url: this.banner_url
        }
        this.$store.commit('community/setAttachment', imageData)
        this.modals.resource = false
      } else {
        this.$store.commit('community/setAttachment', this.attachmentSelect)
        this.modals.resource = false
      }
    }
  }
}
</script>
<style lang="scss">
.sh_modal-resource {
  &:last-child {
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}
</style>
