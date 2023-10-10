exports.ids = [78];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/AuthNavbar.vue?vue&type=template&id=0864c021&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-nav',{staticClass:"navbar-top border-bottom navbar-expand",class:{'navbar-dark': _vm.type === 'default'},attrs:{"container-classes":"container-fluid"}},[_c('div',{staticClass:"align-items-center mr-md-auto"},[_c('img',{attrs:{"src":"img/logo2.png","alt":"Shack 15 Logo","height":"20px"}})]),_vm._v(" "),_c('ul',{staticClass:"navbar-nav align-items-center ml-auto ml-md-0"},[_c('base-dropdown',{staticClass:"nav-item",attrs:{"menu-on-right":"","tag":"li","title-tag":"a","title-classes":"nav-link pr-0"}},[_c('a',{staticClass:"nav-link pr-0",attrs:{"slot":"title-container","href":"#"},on:{"click":function($event){$event.preventDefault();}},slot:"title-container"},[_c('div',{staticClass:"media align-items-center"},[_c('span',{staticClass:"avatar avatar-sm rounded-circle"},[_c('img',{attrs:{"alt":"Image placeholder","src":"/img/placeholder.jpg"}})]),_vm._v(" "),_c('div',{staticClass:"media-body ml-2 d-none d-lg-block"},[_c('span',{staticClass:"mb-0 text-sm"},[_vm._v(_vm._s(_vm.user.name))])])])]),_vm._v(" "),[_c('div',{staticClass:"dropdown-header noti-title"},[_c('h6',{staticClass:"text-overflow m-0"},[_vm._v("Welcome!")])]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){return _vm.logout()}}},[_c('i',{staticClass:"ni ni-user-run"}),_vm._v(" "),_c('span',[_vm._v("Logout")])])]],2)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/AuthNavbar.vue?vue&type=template&id=0864c021&

// EXTERNAL MODULE: external "vue2-transitions"
var external_vue2_transitions_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/argon-core/Navbar/BaseNav.vue + 4 modules
var BaseNav = __webpack_require__(7);

// EXTERNAL MODULE: ./components/argon-core/Modal.vue + 4 modules
var Modal = __webpack_require__(8);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/AuthNavbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var AuthNavbarvue_type_script_lang_js_ = ({
  components: {
    CollapseTransition: external_vue2_transitions_["CollapseTransition"],
    BaseNav: BaseNav["a" /* default */],
    Modal: Modal["a" /* default */]
  },
  props: {
    type: {
      type: String,
      default: 'default',
      // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },

  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },

  computed: {
    routeName() {
      const {
        name
      } = this.$route;
      return this.capitalizeFirstLetter(name);
    },

    ...Object(external_vuex_["mapState"])({
      user: state => state.auth.user
    })
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },

    closeDropDown() {
      this.activeNotifications = false;
    },

    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },

    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },

    async logout() {
      try {
        await this.$auth.logout('local');
      } catch (error) {
        this.error = 'Log out failed';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/shack/AuthNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_AuthNavbarvue_type_script_lang_js_ = (AuthNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/AuthNavbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_AuthNavbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e920bab"
  
)

/* harmony default export */ var AuthNavbar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/reset-password.vue?vue&type=template&id=32748060&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-center align-items-center flex-column h-100"},[_vm._ssrNode("<div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3 my-auto\">","</div>",[_vm._ssrNode("<form class=\"mr-b-30\">","</form>",[_vm._ssrNode("<img src=\"/img/logo2.png\" alt=\"Shack 15 Logo\" height=\"20px\" class=\"mr-b-20\"> <h1 class=\"mr-b-10\">Reset Password</h1> <div class=\"mr-b-20 text-danger\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</div> "),_c('base-input',{attrs:{"placeholder":"New Password","type":"password","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_vm._ssrNode(" "),_c('base-input',{attrs:{"placeholder":"Confirm Password","type":"password","required":""},model:{value:(_vm.confirmPassword),callback:function ($$v) {_vm.confirmPassword=$$v},expression:"confirmPassword"}}),_vm._ssrNode(" "),_c('b-button',{attrs:{"block":"","type":"submit","variant":"outline-dark"}},[_vm._v("RESET PASSWORD")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-muted\">","</div>",[_vm._ssrNode("\n      Remembered your password?\n      "),_c('nuxt-link',{staticClass:"text-dark",attrs:{"to":{name: 'auth-login'}}},[_c('u',[_vm._v("Login Here")])])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/reset-password.vue?vue&type=template&id=32748060&

// EXTERNAL MODULE: ./components/shack/AuthNavbar.vue + 4 modules
var AuthNavbar = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/reset-password.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var reset_passwordvue_type_script_lang_js_ = ({
  layout: 'ShackAuth',
  auth: 'guest',
  components: {
    AuthNavbar: AuthNavbar["a" /* default */]
  },

  asyncData({
    route
  }) {
    return {
      token: route.query.q
    };
  },

  data: () => ({
    password: '',
    confirmPassword: '',
    error: ''
  }),
  methods: {
    resetPassword() {
      const {
        password,
        confirmPassword,
        token
      } = this;

      if (password !== confirmPassword) {
        this.error = 'Correct password mismatch';
        return;
      }

      this.$authLocal.resetPassword(token, password).then(({
        data
      }) => {
        if (data) {
          // this.msg =
          //   'Password reset link sent to your email if it exists in our database'
          this.$bvToast.toast(`Login to continue if admin else continue your experience your mobile`, {
            title: 'Password Reset Successful',
            autoHideDelay: 5000,
            variant: 'success',
            solid: true
          });
          return;
        }

        this.error = 'We are unable to reset your password at this time.';
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/reset-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_reset_passwordvue_type_script_lang_js_ = (reset_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/auth/reset-password.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_reset_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "10b32614"
  
)

/* harmony default export */ var reset_password = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reset-password.js.map