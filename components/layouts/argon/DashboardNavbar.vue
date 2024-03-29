<template>
  <base-nav
    :class="{'navbar-dark': type === 'default'}"
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand"
  >
    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div
          :class="{active: $sidebar.showSidebar, 'sidenav-toggler-dark': type === 'default', 'sidenav-toggler-light': type === 'light'}"
          class="pr-3 sidenav-toggler"
          @click="toggleSidebar">
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"/>
            <i class="sidenav-toggler-line"/>
            <i class="sidenav-toggler-line"/>
          </div>
        </div>
      </li>
      <li class="nav-item d-sm-none">
        <a
          class="nav-link"
          href="#"
          data-action="search-show"
          data-target="#navbar-search-main">
          <i class="ni ni-zoom-split-in"/>
        </a>
      </li>
    </ul>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        title-classes="nav-link pr-0">
        <a
          slot="title-container"
          href="#"
          class="nav-link pr-0"
          @click.prevent>
          <div class="media align-items-center">
            <span class="avatar avatar-sm rounded-circle">
              <img
                :src="picture ? picture : `/img/placeholder.jpg`"
                alt="Image placeholder">
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm">{{ user.name }}</span>
            </div>
          </div>
        </a>

        <template>

          <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </div>
          <nuxt-link
            :to="{name: 'space-settings'}"
            class="dropdown-item">
            <i class="ni ni-settings-gear-65"/>
            <span>Settings</span>
          </nuxt-link>
          <div class="dropdown-divider"/>
          <a
            class="dropdown-item"
            @click="logOut">
            <i class="ni ni-user-run"/>
            <span>Logout</span>
          </a>

        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'
import BaseNav from '@/components/argon-core/Navbar/BaseNav.vue'
import Modal from '@/components/argon-core/Modal.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description:
        'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
      picture: null
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route
      return this.capitalizeFirstLetter(name)
    },
    ...mapState({
      user: state => state.auth.user
    })
  },
  mounted() {
    this.$axios.$get('/user/profile').then(res => {
      this.picture = res.data.picture
    })
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown() {
      this.activeNotifications = false
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false)
    },
    logOut() {
      this.$auth.logout('local')
    }
  }
}
</script>
