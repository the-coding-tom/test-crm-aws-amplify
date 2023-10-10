exports.ids = [45];
exports.modules = {

/***/ 140:
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
/* harmony import */ var _components_shack_MembershipPlans_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(177);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_8__);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'ShackDash',
  components: {
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    MembershipPlans: _components_shack_MembershipPlans_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    SectionTitle: _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    [element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a
  },

  async asyncData({
    $plan,
    error
  }) {
    return await $plan.getAllPlans().then(({
      data,
      links,
      meta
    }) => {
      return {
        plans: data,
        links,
        meta
      };
    }).catch(e => {
      error({
        statusCode: e.statusCode,
        message: e.response ? JSON.stringify(e.response.data.errors) : e.message
      });
    });
  },

  data() {
    return {
      data: [],
      cards: [],
      admins: [],
      loading: false,
      searching: false,
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
      membership: {
        first_name: '',
        last_name: '',
        linkedin_url: '',
        membership_id: '',
        email: '',
        extras: [{
          type: 'referral',
          comment: ''
        }],
        founding_member: false,
        trial: false,
        paid_for: false,
        trial_days: '0',
        prefix_type: '0',
        prefix_locality: 'A',
        paid_by: null,
        assigned_admin: null,
        trial_ends_at: null
      }
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapState"])({
      space: state => state.space.currentSpace
    })
  },

  mounted() {
    this.membership.start_time = this.$moment().format('YYYY-MM-DD');
    this.membership.end_time = this.$moment().add(1, 'year').format('YYYY-MM-DD');
  },

  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$axios.$get(next).then(({
        data,
        links,
        meta
      }) => {
        this.plans = data;
        this.links = links;
        this.meta = meta;
      }).catch(e => {
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    prev() {
      const {
        prev
      } = this.links;
      this.$axios.$get(prev).then(({
        data,
        links,
        meta
      }) => {
        this.plans = data;
        this.links = links;
        this.meta = meta;
      }).catch(e => {
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    toggleLoading() {
      this.loading = !this.loading;
    },

    addNewMembership() {
      this.loading = !this.loading;
      const {
        membership
      } = this;
      membership.email = membership.email.toLowerCase();
      this.$membership.addMembership(membership).then(res => {
        this.$bvToast.toast('Membership created successfully. Proceed to invite member', {
          title: 'Membership Creation',
          variant: 'success'
        });
        this.$router.push({
          name: 'space-memberships-uninvited'
        });
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
      const link = `filter[search]=${query}`;
      this.searching = !this.searching;

      const _self = this;

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({
          data
        }) => {
          _self.searching = !_self.searching;
          _self.data = data;
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
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MembershipPlans.vue?vue&type=template&id=519f515d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sh-accordion",attrs:{"role":"tablist"}},_vm._l((_vm.plans),function(plan){return _vm._ssrNode("<div class=\"sh-accordion-item\">","</div>",[_c('a',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}},{name:"b-toggle",rawName:"v-b-toggle",value:('accordion-' + plan.id),expression:"'accordion-' + plan.id"}],staticClass:"d-flex justify-content-between",attrs:{"block":"","href":"javascript:void(0)"}},[_vm._ssrNode("<div class=\"sh-acc-title\">"+_vm._ssrEscape("\n        "+_vm._s(plan.name)+" ("+_vm._s(_vm._f("currency")(plan.price,_vm.space.currency_symbol))+" "+_vm._s(_vm.getCycleDuration(plan.invoice_period))+") ")+"<i class=\"fa fa-angle-down\"></i></div> "),_c('b-form-radio',{attrs:{"value":plan.id,"name":"plan"},on:{"change":_vm.changePlan},model:{value:(_vm.selectedPlan),callback:function ($$v) {_vm.selectedPlan=$$v},expression:"selectedPlan"}},[_vm._v("Select this plan")])],2),_vm._ssrNode(" "),_c('b-collapse',{attrs:{"id":'accordion-' + plan.id,"visible":"","accordion":"my-accordion","role":"tabpanel"}},[_vm._v("\n      "+_vm._s(plan.description)+"\n    ")])],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/MembershipPlans.vue?vue&type=template&id=519f515d&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MembershipPlans.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MembershipPlansvue_type_script_lang_js_ = ({
  props: {
    plans: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    selectedPlan: '',
    accordion: ''
  }),
  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace
    })
  },

  mounted() {
    this.selectedPlan = this.plans[0].id;
    this.$emit('input', this.selectedPlan);
    this.accordion = this.selectedPlan;
  },

  methods: {
    getCycleDuration(cycle) {
      if (cycle >= 12) {
        return '/yr';
      }

      return '/m';
    },

    changeAccordion(accordion) {
      this.accordion = accordion;
    },

    changePlan(e) {
      this.$emit('input', e);
    }

  }
});
// CONCATENATED MODULE: ./components/shack/MembershipPlans.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_MembershipPlansvue_type_script_lang_js_ = (MembershipPlansvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/MembershipPlans.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_MembershipPlansvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c75d3f1e"
  
)

/* harmony default export */ var MembershipPlans = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/add.vue?vue&type=template&id=09779806&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addNewMembership($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Members","subtitle":"Recently Active"}}),_vm._v(" "),_c('b-button',{attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Add Member")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('div',{staticClass:"mr-30"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-7"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5"},[_c('h3',{staticClass:"mb-4"},[_vm._v("Personal Details")]),_vm._v(" "),_c('b-form-group',{attrs:{"label":"First Name"}},[_c('b-form-input',{attrs:{"id":"firstName","placeholder":"First Name","required":""},model:{value:(_vm.membership.first_name),callback:function ($$v) {_vm.$set(_vm.membership, "first_name", $$v)},expression:"membership.first_name"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Last Name"}},[_c('b-form-input',{attrs:{"id":"lastName","placeholder":"Last Name","required":""},model:{value:(_vm.membership.last_name),callback:function ($$v) {_vm.$set(_vm.membership, "last_name", $$v)},expression:"membership.last_name"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Email"}},[_c('b-form-input',{attrs:{"id":"email","type":"email","autocomplete":"Email","placeholder":"you@somemail.com","required":""},model:{value:(_vm.membership.email),callback:function ($$v) {_vm.$set(_vm.membership, "email", $$v)},expression:"membership.email"}})],1),_vm._v(" "),_c('base-input',{attrs:{"id":"linkedinURL","required":false,"type":"url","label":"Linkedin","placeholder":"https://linkedin.com/in/someone"},model:{value:(_vm.membership.linkedin_url),callback:function ($$v) {_vm.$set(_vm.membership, "linkedin_url", $$v)},expression:"membership.linkedin_url"}}),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Source of Invitation"}},[_c('b-form-select',{attrs:{"id":"invitationSource","options":_vm.options},model:{value:(_vm.membership.extras[0].type),callback:function ($$v) {_vm.$set(_vm.membership.extras[0], "type", $$v)},expression:"membership.extras[0].type"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Comments"}},[_c('b-form-textarea',{attrs:{"id":"comments","placeholder":"Comments to save on this member"},model:{value:(_vm.membership.extras[0].comment),callback:function ($$v) {_vm.$set(_vm.membership.extras[0], "comment", $$v)},expression:"membership.extras[0].comment"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-1"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('h3',{staticClass:"mb-4"},[_vm._v("Membership Details")]),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Membership Type"}},[_c('b-form-select',{attrs:{"id":"memberType","options":_vm.prefix_type},model:{value:(_vm.membership.prefix_type),callback:function ($$v) {_vm.$set(_vm.membership, "prefix_type", $$v)},expression:"membership.prefix_type"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Region"}},[_c('b-form-select',{attrs:{"id":"region","options":_vm.prefix_locality},model:{value:(_vm.membership.prefix_locality),callback:function ($$v) {_vm.$set(_vm.membership, "prefix_locality", $$v)},expression:"membership.prefix_locality"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Assigned Admin"}},[_c('el-select',{attrs:{"id":"chooseAdmin","remote-method":_vm.searchAdmins,"loading":_vm.searching,"filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose an admin"},model:{value:(_vm.membership.assigned_admin),callback:function ($$v) {_vm.$set(_vm.membership, "assigned_admin", $$v)},expression:"membership.assigned_admin"}},_vm._l((_vm.admins),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.name,"value":option.id}})}),1)],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Start Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"startDate","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD","value-type":"format","confirm":"","type":"date","placeholder":"Start Date"},model:{value:(_vm.membership.trial_ends_at),callback:function ($$v) {_vm.$set(_vm.membership, "trial_ends_at", $$v)},expression:"membership.trial_ends_at"}})],1)],1),_vm._v(" "),(_vm.membership.trial)?_c('b-form-group',{attrs:{"label":"Trial Days","description":"Number of days before member is charged"}},[_c('b-form-input',{attrs:{"id":"trialDays","min":"0","type":"number","required":""},model:{value:(_vm.membership.trial_days),callback:function ($$v) {_vm.$set(_vm.membership, "trial_days", $$v)},expression:"membership.trial_days"}})],1):_vm._e(),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Paid for"}},[_c('b-form-checkbox',{attrs:{"id":"isPaidFor","value":true,"unchecked-value":false},model:{value:(_vm.membership.paid_for),callback:function ($$v) {_vm.$set(_vm.membership, "paid_for", $$v)},expression:"membership.paid_for"}},[_vm._v("Yes")])],1),_vm._v(" "),(_vm.membership.paid_for)?_c('b-form-group',{attrs:{"label":"Paid by"}},[_c('el-select',{attrs:{"remote-method":_vm.searchMembers,"loading":_vm.searching,"filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose a member"},model:{value:(_vm.membership.paid_by),callback:function ($$v) {_vm.$set(_vm.membership, "paid_by", $$v)},expression:"membership.paid_by"}},_vm._l((_vm.data),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.first_name + ' ' + option.last_name,"value":option.id}})}),1)],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-md-1"})])]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('h3',{staticClass:"mb-4"},[_vm._v("Pick Membership Plan")]),_vm._v(" "),_c('MembershipPlans',{attrs:{"id":"plan","plans":_vm.plans},model:{value:(_vm.membership.plan_id),callback:function ($$v) {_vm.$set(_vm.membership, "plan_id", $$v)},expression:"membership.plan_id"}}),_vm._v(" "),_c('div',{staticClass:"mr-t-20"},[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1)],1)])])])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/memberships/add.vue?vue&type=template&id=09779806&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/add.vue?vue&type=script&lang=js&
var addvue_type_script_lang_js_ = __webpack_require__(140);

// CONCATENATED MODULE: ./pages/_space/memberships/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var memberships_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/memberships/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  memberships_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "115cb8ba"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=add.js.map