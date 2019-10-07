// Polyfills for js features used in the Dashboard but not supported in some browsers (mainly IE)
import '@/polyfills'
// Notifications plugin. Used on Notifications page
import Notifications from '~/components/argon-core/NotificationPlugin'
// Validation plugin used to validate forms
import * as VeeValidate from 'vee-validate'
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from '~/components/argon-core/SidebarPlugin'
import Vue from 'vue'
// element ui language configuration
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import './globalDirectives'
import './globalComponents'
locale.use(lang)

Vue.use(SideBar)
Vue.use(Notifications)
Vue.use(VeeValidate, {
  fieldsBagName: 'veeFields',
  classes: true,
  validity: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
