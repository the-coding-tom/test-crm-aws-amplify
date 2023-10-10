exports.ids = [44];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayError; });
const displayError = function (e, vm = null) {
  if (e.response) {
    processError(e.response.data.message, vm);

    if (e.response.data.errors) {
      _.each(e.response.data.errors, (o, i) => {
        return _.each(o, (v, k) => processError(v, vm));
      });
    }

    return;
  }

  processError(e.message, vm);
};

const processError = function (message, vm) {
  console.log('------------------------------------');
  console.log(message);
  console.log('------------------------------------');
  vm && vm.$bvToast.toast(message, {
    title: 'Error',
    variant: 'danger'
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94);
/* harmony import */ var _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);






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




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'DirectoryEdit',
  layout: 'ShackDash',
  components: {
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    SectionTitle: _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    [element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a
  },

  async asyncData({
    store,
    params,
    $membership,
    error,
    $moment
  }) {
    try {
      let paid_by = null;
      let members = [];
      return await $membership.getAMembership(params.id).then(async ({
        data
      }) => {
        data.trial_days = data.primary_plan[0].pivot.trial_days;

        if (data.paid_by) {
          const result = await $membership.getAMembership(data.paid_by);
          members.push(result.data);
          paid_by = data.paid_by;
        } // Bug Fix: Missing subscription info for invited member who hasn't subscribed yet cos account is pending.


        return {
          data,
          members,
          paid_by
        };
      });
    } catch (e) {
      error({
        statusCode: e.statusCode,
        message: e.response ? e.response.data.message : e.message
      });
    }
  },

  data() {
    return {
      loading: false,
      selectedAdmin: null,
      admins: [],
      options: [{
        text: 'Referral',
        value: 'referral'
      }, {
        text: 'Application',
        value: 'application'
      }, {
        text: 'Past Events',
        value: 'past_events'
      }, {
        text: 'Invite Card',
        value: 'invite_card'
      }],
      paid_by: null,
      prefix_type: [{
        text: 'Founding Member',
        value: '0'
      }, {
        text: 'Fast Track',
        value: '1'
      }, {
        text: 'Early Invite',
        value: '2'
      }, {
        text: 'General Member',
        value: '3'
      }],
      prefix_locality: [{
        text: 'Bay Area',
        value: 'A'
      }, {
        text: 'US outside of the Bay',
        value: 'B'
      }, {
        text: 'EMEA',
        value: 'C'
      }, {
        text: 'APAC',
        value: 'D'
      }],
      searching: false,
      cards: []
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])({
      space: state => state.space.currentSpace
    }),

    assignedAdmin() {
      if (this.data.assigned_admin) {
        return `Current: ${this.data.assigned_admin.name}`;
      }
    }

  },
  methods: {
    updateMembership() {
      const {
        id
      } = this.$route.params;
      this.loading = !this.loading;
      this.data.membership_id = this.data.membership_number;

      if (this.data.user_profile) {
        this.data.user_profile.first_name = this.data.first_name;
        this.data.user_profile.last_name = this.data.last_name;
        this.data.user_profile.full_name = `${this.data.first_name} ${this.data.last_name}`;
      }

      this.data.paid_by = this.paid_by;
      this.data.trial_days = '0'; // Fixed bug using this line

      if (this.data.assigned_admin) {
        this.data.assigned_admin = this.selectedAdmin || this.data.assigned_admin.uuid;
      } else {
        this.data.assigned_admin = this.selectedAdmin || this.data.assigned_admin.uuid;
      }

      console.log(this.data.assignedAdmin);
      this.$membership.updateMembership(id, this.data).then(res => {//this.loading = !this.loading
        // this.$bvToast.toast('Membership updated succesfully', {
        //   title: 'Success',
        //   variant: 'success'
        // })
        //this.$router.go(-1)
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
      this.$membership.updateProfile({
        user_id: this.data.user_id,
        ...this.data.user_profile
      }).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Membership updated succesfully', {
          title: 'Success',
          variant: 'success'
        });
        this.$router.go(-1);
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    searchMembers(query) {
      const link = `filter[search]=${query}&filter[status]=accepted`;
      this.searching = !this.searching;

      const _self = this;

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({
          data
        }) => {
          _self.searching = !_self.searching;
          _self.members = data;
        });
      }, 350)();
    },

    searchAdmins(query) {
      const link = `/${this.space.subdomain}/admins?filter[name]=${query}`;
      this.$admin.getAllAdmins(link).then(res => {
        this.admins = res.data;
      }).catch(escape => {
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        error({
          statusCode: err.status || 404,
          message
        });
      });
    },

    getCards(e) {
      this.$membership.getPaymentMethods(e).then(res => {
        // this.cards = res.data
        _.each(res.data, o => {
          this.cards.push({
            text: `${o.card_brand} - **** ${o.last_4}`,
            value: o.id
          });
        });
      }).catch(e => {
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          variant: 'danger',
          title: 'Error'
        });
      });
    },

    cancelMembership() {
      if (!confirm('Are you sure?')) return;
      this.loading = !this.loading;
      const {
        id
      } = this.$route.params;
      this.$membership.deleteMembership(id).then(({
        data
      }) => {
        this.$bvToast.toast('Member deleted successfully', {
          title: 'Success',
          variant: 'success'
        });
        this.$router.go(-1);
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    onboardBrivo() {
      this.loading = !this.loading;
      const {
        id
      } = this.$route.params;
      this.$membership.onboardBrivo(id).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Brivo onboarding successfully', {
          title: 'Success',
          variant: 'success'
        });
      }).catch(e => {
        Object(_util_errors__WEBPACK_IMPORTED_MODULE_8__[/* displayError */ "a"])(e, this);
      });
    },

    copyToClipBoard() {
      let testingCodeToCopy = document.querySelector('#testing-code');
      testingCodeToCopy.setAttribute('type', 'text'); // 不是 hidden 才能複製

      testingCodeToCopy.select();

      try {
        var successful = document.execCommand('copy');

        if (successful) {
          this.$bvToast.toast('Invitation link copied', {
            title: 'Copied',
            variant: 'success'
          });
        }
      } catch (err) {
        alert('Oops, unable to copy');
      }
      /* unselect the range */


      testingCodeToCopy.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/_id/index.vue?vue&type=template&id=412a90e5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateMembership($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"subtitle":((_vm.data.first_name) + " " + (_vm.data.last_name)),"title":"Membership"}}),_vm._v(" "),_c('div',[_c('input',{attrs:{"id":"testing-code","type":"hidden"},domProps:{"value":'https://member.shack15.com/?invitation=' + _vm.data.invitation_code}}),_vm._v(" "),_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent"},on:{"click":_vm.copyToClipBoard}},[_c('i',{staticClass:"fas fa-copy"}),_vm._v(" Copy Invitation Link\n          ")]),_vm._v(" "),_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent"},on:{"click":_vm.onboardBrivo}},[_c('i',{staticClass:"fas fa-user-lock"}),_vm._v(" Brivo Onboard\n          ")]),_vm._v(" "),_c('b-button',{staticClass:"text-danger",attrs:{"variant":"transparent"},on:{"click":_vm.cancelMembership}},[_c('i',{staticClass:"fa fa-trash"}),_vm._v(" Cancel Membership")])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('card',[_c('div',{staticClass:"row"},[_c('base-input',{staticClass:"col-md-6",attrs:{"id":"email","type":"text","label":"Email","placeholder":"Email"},model:{value:(_vm.data.email),callback:function ($$v) {_vm.$set(_vm.data, "email", $$v)},expression:"data.email"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"firstName","type":"text","label":"First Name","placeholder":"First Name"},model:{value:(_vm.data.first_name),callback:function ($$v) {_vm.$set(_vm.data, "first_name", $$v)},expression:"data.first_name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"lastName","label":"Last Name","placeholder":"Last Name","type":"text"},model:{value:(_vm.data.last_name),callback:function ($$v) {_vm.$set(_vm.data, "last_name", $$v)},expression:"data.last_name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"membershipNumber","label":"Membership #","placeholder":"0000000"},model:{value:(_vm.data.membership_number),callback:function ($$v) {_vm.$set(_vm.data, "membership_number", $$v)},expression:"data.membership_number"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"linkedinURL","required":false,"label":"Linkedin","placeholder":"https://linkedin.com/in/someone"},model:{value:(_vm.data.linkedin_url),callback:function ($$v) {_vm.$set(_vm.data, "linkedin_url", $$v)},expression:"data.linkedin_url"}}),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Source of Invitation"}},[_c('b-form-select',{attrs:{"id":"invitationSource","options":_vm.options},model:{value:(_vm.data.extras[0].type),callback:function ($$v) {_vm.$set(_vm.data.extras[0], "type", $$v)},expression:"data.extras[0].type"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Comments"}},[_c('b-form-textarea',{attrs:{"id":"comment","label":"Comments","placeholder":"Comments"},model:{value:(_vm.data.extras[0].comment),callback:function ($$v) {_vm.$set(_vm.data.extras[0], "comment", $$v)},expression:"data.extras[0].comment"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Membership Type"}},[_c('b-form-select',{attrs:{"id":"memberType","options":_vm.prefix_type},model:{value:(_vm.data.prefix_type),callback:function ($$v) {_vm.$set(_vm.data, "prefix_type", $$v)},expression:"data.prefix_type"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Region"}},[_c('b-form-select',{attrs:{"id":"region","options":_vm.prefix_locality},model:{value:(_vm.data.prefix_locality),callback:function ($$v) {_vm.$set(_vm.data, "prefix_locality", $$v)},expression:"data.prefix_locality"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"description":_vm.assignedAdmin,"label":"Assigned Admin"}},[_c('el-select',{attrs:{"remote-method":_vm.searchAdmins,"loading":_vm.searching,"filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose an admin"},model:{value:(_vm.selectedAdmin),callback:function ($$v) {_vm.selectedAdmin=$$v},expression:"selectedAdmin"}},_vm._l((_vm.admins),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.name,"value":option.id}})}),1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Date Joined"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD","value-type":"format","confirm":"","type":"date","placeholder":"Start Date"},model:{value:(_vm.data.trial_ends_at),callback:function ($$v) {_vm.$set(_vm.data, "trial_ends_at", $$v)},expression:"data.trial_ends_at"}})],1)],1),_vm._v(" "),(_vm.data.subscriptions && _vm.data.subscriptions.length > 0)?_c('div',{staticStyle:{"width":"100%","display":"flex"}},[_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Subscription Start Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD","value-type":"format","confirm":"","type":"date","placeholder":"Start Date"},model:{value:(_vm.data.subscriptions[0].starts_at),callback:function ($$v) {_vm.$set(_vm.data.subscriptions[0], "starts_at", $$v)},expression:"data.subscriptions[0].starts_at"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Subscription Expiry Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD","value-type":"format","confirm":"","type":"date","placeholder":"Start Date"},model:{value:(_vm.data.subscriptions[0].ends_at),callback:function ($$v) {_vm.$set(_vm.data.subscriptions[0], "ends_at", $$v)},expression:"data.subscriptions[0].ends_at"}})],1)],1)],1):_vm._e(),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Paid for"}},[_c('b-form-checkbox',{attrs:{"value":true,"unchecked-value":false},model:{value:(_vm.data.paid_for),callback:function ($$v) {_vm.$set(_vm.data, "paid_for", $$v)},expression:"data.paid_for"}},[_vm._v("Yes")])],1),_vm._v(" "),(_vm.data.paid_for)?_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Paid by"}},[_c('el-select',{attrs:{"remote-method":_vm.searchMembers,"loading":_vm.searching,"filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose a member"},on:{"change":_vm.getCards},model:{value:(_vm.paid_by),callback:function ($$v) {_vm.paid_by=$$v},expression:"paid_by"}},_vm._l((_vm.members),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.first_name + ' ' + option.last_name,"value":option.id}})}),1)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('b-button',{attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary","block":""}},[_vm._v("Save")])],1)],1)])],1)])])],1),_vm._ssrNode(" "),_c('b-button',{staticClass:"text-primary ml-2 mb-2",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"fas fa-chevron-left"}),_vm._v(" Back")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/memberships/_id/index.vue?vue&type=template&id=412a90e5&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/_id/index.vue?vue&type=script&lang=js&
var _idvue_type_script_lang_js_ = __webpack_require__(165);

// CONCATENATED MODULE: ./pages/_space/memberships/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var memberships_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/memberships/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  memberships_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a21d1bf"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MainTitle.vue?vue&type=template&id=eb42120a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{staticClass:"page-title"},[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.title))+"</span> <b"+(_vm._ssrStyle(null,null, { display: (_vm.subtitle) ? '' : 'none' }))+">•</b>"+_vm._ssrEscape(" "+_vm._s(_vm.subtitle)))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/MainTitle.vue?vue&type=template&id=eb42120a&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MainTitle.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var MainTitlevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/shack/MainTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_MainTitlevue_type_script_lang_js_ = (MainTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/MainTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_MainTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2927529c"
  
)

/* harmony default export */ var MainTitle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SectionTitle.vue?vue&type=template&id=b54cd52a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{staticClass:"page-title"},[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.title))+"</span> <b"+(_vm._ssrStyle(null,null, { display: (_vm.subtitle) ? '' : 'none' }))+">•</b>"+_vm._ssrEscape(" "+_vm._s(_vm.subtitle)))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/SectionTitle.vue?vue&type=template&id=b54cd52a&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SectionTitle.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var SectionTitlevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/shack/SectionTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_SectionTitlevue_type_script_lang_js_ = (SectionTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_SectionTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d20bd3f4"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=index.js.map