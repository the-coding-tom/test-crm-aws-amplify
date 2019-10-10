<template>
  <div class="wrapper">
    <notifications />
    <side-bar>
      <template 
        slot-scope="props" 
        slot="links">
        <sidebar-item :link="{ name: 'Dashboard', icon: 'ni ni-archive-2', path: `/${subdomain}`}" />
        <sidebar-item :link="{ name: 'Bookings', icon: 'ni ni-shop' }">
          <sidebar-item :link="{ name: 'Calendar', path: `/${subdomain}/calendar` }" />
          <sidebar-item :link="{ name: 'Resources', path: `/${subdomain}/resources` }" />
        </sidebar-item>
        <sidebar-item :link="{ name: 'Wellness', icon: 'ni ni-shop'}">
          <sidebar-item :link="{ name: 'Bookings', icon: 'fa fa-calendar', path: `/${subdomain}/wellness/bookings`}" />
          <sidebar-item :link="{name: 'Sessions', path: `/${subdomain}/wellness`}" />
          <sidebar-item :link="{name: 'Categories'}">
            <sidebar-item
              :link="{name: 'All Categories', path: `/${subdomain}/wellness/categories`}"
            />
            <sidebar-item
              :link="{name: 'Add Categories', path: `/${subdomain}/wellness/categories/add`}"
            />
          </sidebar-item>
        </sidebar-item>
        <sidebar-item :link="{ name: 'Analyze', icon: 'ni ni-shop',}">
          <sidebar-item :link="{ name: 'Analyze', path: '/analyze' }" />
          <sidebar-item :link="{ name: 'Alternative', path: '/alternative' }" />
        </sidebar-item>
        <sidebar-item :link="{ name: 'Events', icon: 'ni ni-shop'}">
          <sidebar-item :link="{name: 'All', path: `/${subdomain}/events`}" />
          <sidebar-item :link="{name: 'Add New Event', path: `/${subdomain}/events/add`}" />
          <sidebar-item :link="{name: 'Categories'}">
            <sidebar-item
              :link="{name: 'All Categories', path: `/${subdomain}/events/categories`}"
            />
            <sidebar-item
              :link="{name: 'Add Categories', path: `/${subdomain}/events/categories/add`}"
            />
          </sidebar-item>
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.name === 'alternative' ? 'light': 'default'" />
      <div @click="$sidebar.displaySidebar(false)">
        <nuxt />
      </div>
      <content-footer v-if="!$route.meta.hideFooter" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`)
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className)
    }, 100)
  }
}

import DashboardNavbar from '~/components/layouts/argon/DashboardNavbar.vue'
import ContentFooter from '~/components/layouts/argon/ContentFooter.vue'
import DashboardContent from '~/components/layouts/argon/Content.vue'
import { mapState } from 'vuex'

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent
  },
  computed: {
    ...mapState({
      subdomain: state => state.space.currentSpace.subdomain
    })
  },
  mounted() {
    this.initScrollbar()
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith('Win')
      if (isWindows) {
        initScrollbar('scrollbar-inner')
      }
    }
  }
}
</script>
<style lang="scss">
</style>
