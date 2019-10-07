<template>
  <div class="wrapper">
    <notifications/>
    <side-bar>
      <template
        slot-scope="props"
        slot="links">
        <sidebar-item :link="{ name: 'Dashboard', icon: 'ni ni-archive-2', path: '/ui/dashboard'}" />
        <sidebar-item
          :link="{ name: 'Bookings', icon: 'ni ni-shop' }"
        >
          <sidebar-item
            :link="{ name: 'Resources', path: '/ui/bookings/resources' }"
          />
          <sidebar-item
            :link="{ name: 'Alternative', path: '/alternative' }"
          />
        </sidebar-item>
        <sidebar-item :link="{ name: 'Analyze', icon: 'ni ni-shop',}">
          <sidebar-item :link="{ name: 'Analyze', path: '/analyze' }" />
          <sidebar-item :link="{ name: 'Alternative', path: '/alternative' }" />
        </sidebar-item>
        <sidebar-item :link="{ name: 'Setup', icon: 'ni ni-shop', }">
          <sidebar-item :link="{ name: 'Setup', path: '/setup' }" />
          <sidebar-item :link="{ name: 'Alternative', path: '/alternative' }" />
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.name === 'alternative' ? 'light': 'default'"/>
      <div @click="$sidebar.displaySidebar(false)">
        <nuxt/>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"/>
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

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent
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
