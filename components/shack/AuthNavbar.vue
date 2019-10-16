<template>
  <base-nav
    :class="{'navbar-dark': type === 'default'}"
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand"
  >
    <!-- Navbar links -->
    <div class="align-items-center mr-md-auto">
      <img
        src="img/logo2.png"
        alt="Shack 15 Logo"
        height="20px" >
    </div>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        title-classes="nav-link pr-0"
      >
        <a
          slot="title-container"
          href="#"
          class="nav-link pr-0"
          @click.prevent>
          <div class="media align-items-center">
            <span class="avatar avatar-sm rounded-circle">
              <img
                alt="Image placeholder"
                src="img/theme/team-4.jpg" >
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
          <!-- <nuxt-link
            to="/profile/"
            class="dropdown-item">
            <i class="ni ni-single-02"/>
            <span>My profile</span>
          </nuxt-link>
          <a
            href="#!"
            class="dropdown-item">
            <i class="ni ni-settings-gear-65"/>
            <span>Settings</span>
          </a>
          <a
            href="#!"
            class="dropdown-item">
            <i class="ni ni-calendar-grid-58"/>
            <span>Activity</span>
          </a>
          <a
            href="#!"
            class="dropdown-item">
            <i class="ni ni-support-16"/>
            <span>Support</span>
          </a>
          <div class="dropdown-divider"/> -->
          <a
            class="dropdown-item"
            @click="logout()">
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
      searchQuery: ''
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

    async logout() {
      try {
        await this.$auth.logout('local')
      } catch (error) {
        this.error = 'Log out failed'
      }
    }
  }
}
</script>
