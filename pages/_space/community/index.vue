<template>
  <div>
    <TopAlert 
      v-if="postMessage.show" 
      :type=" postMessage.type">
      <i :class="postMessage.icon" /> {{ postMessage.text }}
    </TopAlert>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle title="Community" />
      </div>
    </base-header>
    <b-form @submit.prevent="postFeed">

      <div class="container-fluid mt--6 sh_community-post">
        <div class="row">
          <div class="col-md-5">
            <card>
              <div class="d-flex mr-b-10">
                <img
                  alt="Image placeholder"
                  class="avatar rounded-circle"
                  src="img/theme/team-4.jpg"
                >
                <textarea
                  v-model="feed_text"
                  class="form-control no-border resize-none"
                  placeholder="Share updates with SHACK15 community"
                  rows="6"
                  aria-label="Comment textarea"
                />
              </div>
              <div 
                v-if="addFeed.attachment_url"
                class="d-flex sh_modal-resource justify-content-between align-items-center bdr-b pd-b-10 mr-b-10"
              >
                <div class="d-flex align-items-center">
                  <img 
                    :src="addFeed.attachment_url" 
                    class="avatar mr-r-10" 
                    alt="">
                  <div>
                    <strong v-if="addFeed.attachment_text">{{ addFeed.attachment_text }}</strong> <br >
                    <span 
                      v-if="addFeed.start_time" 
                      class="text-muted">{{ $moment(addFeed.start_time).format('MMM Do YY, h:mm') }} - {{ $moment(addFeed.end_time).format('MMM Do YY, h:mm') }} | {{ addFeed.category }}</span>
                  </div>
                </div>
                <a 
                  href="javascript:void(0)" 
                  class="align-self-start"
                  @click="removeAttach"><i class="fa fa-times"/></a>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <AttachButton />
                <button 
                  :disabled="isLoading"
                  type="submit"
                  class="btn btn-default">SHARE
              </button></div>
            </card>

            <a
              href="javascript:void(0)"
              class="text-muted mr-b-30 block"
              @click="modals.classic = true">
              <i class="fa fa-question-circle" /> What can I attach to a post?
            </a>
            <modal :show.sync="modals.classic">
              <h3 
                slot="header" 
                class="mr-tb-20">
                <i class="fa fa-question-circle" /> What can I attach to a post?
              </h3>
              <p>
                This space is where members find answers, recommendations or
                meetups by submitting a request to the SHACK15 Community.
              </p>
              <h3 class="u-line mr-b-10">
                WHAT TO ATTACH
              </h3>
              <ul class="pd-l-10">
                <li>Events which have been created</li>
                <li>Image on events happening within space</li>
                <li>Featured wellness sessions for the day</li>
              </ul>
            </modal>

            <card 
              v-for="feed in feeds" 
              :key="feed.id">
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <img 
                    v-if="feed.user"
                    :src="feed.user.picture"
                    alt="Image placeholder"
                    class="avatar rounded-circle"
                  >
                  <div class="mr-l-10">
                    <div v-if="feed.user">{{ feed.user.full_name }}</div>
                    <div class="text-muted">
                      Posted {{ $moment(feed.created_at).startOf('day').fromNow() }}
                    </div>
                  </div>
                </div>
                <b-dropdown 
                  no-caret 
                  class="sh_postdd">
                  <template v-slot:button-content>
                    <i class="ti-pin-alt" />Pinned Post
                    <i class="fa fa-ellipsis-v" />
                  </template>
                  <a 
                    class="dropdown-item" 
                    href="#">
                    <i class="ti-pin-alt" /> Pin this
                  </a>
                  <button
                    type="button"
                    class="dropdown-item text-danger" 
                    @click="deleteFeed(feed.id)">
                    <i class="ti-trash" /> Delete Post
                  </button>
                </b-dropdown>
              </div>

              <div class="mr-t-20 sh_postcontent">
                {{ feed.feed_text }}
              </div>

              <!-- <AttachButton class="mr-t-20 mr-b-10 bdr-b" /> -->

              <div 
                v-if="feed.attachments.length > 0" 
                class="d-flex align-items-center">
                <div v-if="feed.attachments[0].type == 'wellness'">
                  <img 
                    :src="feed.attachments[0].wellness.banner_url" 
                    class="avatar mr-r-10" 
                    alt="">
                  <div>
                    <strong>{{ feed.attachments[0].wellness.name }}</strong> <br >
                    <span class="text-muted">{{ $moment(feed.attachments[0].wellness.start_date).format('MMM Do YY, h:mm') }} - {{ $moment(feed.attachments[0].wellness.end_date).format('MMM Do YY, h:mm') }}| {{ feed.attachments[0].wellness.wellness_category.name }}</span>
                  </div>
                </div>
                <div v-if="feed.attachments[0].type == 'event'">
                  <img 
                    :src="feed.attachments[0].event.banner_url" 
                    class="avatar mr-r-10" 
                    alt="">
                  <div>
                    <strong>{{ feed.attachments[0].event.name }}</strong> <br >
                    <span class="text-muted">{{ $moment(feed.attachments[0].event.start_time).format('MMM Do YY, h:mm') }} - {{ $moment(feed.attachments[0].event.end_time).format('MMM Do YY, h:mm') }}| {{ feed.attachments[0].event.event_category.name }}</span>
                  </div>
                </div>
                <div v-if="feed.attachments[0].type == 'image'">
                  <img 
                    :src="feed.attachments[0].attachment_url" 
                    class="avatar mr-r-10" 
                    alt="">
                </div>

              </div>
            </card>
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '~/components/shack/MainTitle.vue'
import AttachButton from '~/components/shack/AttachButton.vue'
import TopAlert from '~/components/shack/TopAlert.vue'

import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    AttachButton,
    MainTitle,
    TopAlert
  },
  async asyncData({ store }) {
    await store.dispatch('community/getAllFeeds')
  },
  data() {
    return {
      modals: {
        classic: false
      }
    }
  },
  computed: {
    ...mapState({
      feeds: state => state.community.feeds.data,
      addFeed: state => state.community.addFeed,
      isLoading: state => state.community.isLoading,
      postMessage: state => state.community.postMessage
    }),
    ...mapFields({
      feed_text: 'community.addFeed.feed_text'
    })
  },
  methods: {
    postFeed() {
      this.$store.commit('community/setIsLoading')
      this.$store.dispatch('community/createFeed')
    },
    deleteFeed(id) {
      if (!confirm('Are you sure?')) return
      this.$store.dispatch('community/deleteFeed', id)
    },
    removeAttach() {
      this.$store.commit('community/resetAttachment')
    }
  }
}
</script>
<style lang="scss">
.sh_community-post {
  textarea,
  textarea:focus {
    box-shadow: unset;
  }
  .sh_postdd {
    .btn {
      background: unset;
    }
    .btn,
    .btn-secondary:not(:disabled):not(.disabled):active {
      background: unset;
    }
  }
  .dropdown-menu {
    min-width: 10rem;
  }
}
.sh_postcontent {
  span {
    border: 1px solid #dddddd;
    padding: 3px;
    padding-bottom: 0px;
  }
}
</style>
