exports.ids = [42];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _components_shack_SearchFilter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(220);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    SearchFilter: _components_shack_SearchFilter_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  data: () => ({
    loading: false,
    data: null,
    card: null,
    cards: [],
    perPage: 10,
    items: [],
    query: '',
    currentPage: 1,
    dropdown: 30,
    days: [30, 15, 5],
    fields: ['full_name', 'plan', 'start_date', 'end_date', 'status', 'options']
  }),
  computed: {
    rows() {
      return this.items.length;
    },

    filterMembersByName: function () {
      return this.items.filter(item => item.full_name.match(new RegExp(this.query, 'i')));
    }
  },
  watch: {
    '$route.query': '$fetch'
  },

  async asyncData({
    error,
    $membership,
    route
  }) {
    if (route.query.plan) {
      return await $membership.subscribedToPlan(route.query.plan).then(data => {
        let items = _.map(data, o => {
          return {
            id: o.id,
            full_name: `${o.user.first_name} ${o.user.last_name}`,
            plan: o.plan.name,
            plan_id: o.plan.id,
            slug: o.slug,
            start_date: o.starts_at,
            end_date: o.ends_at,
            status: o.state == 'manual-active' ? 'Do not auto renew' : o.state == 'active' ? 'Auto-renewal' : 'payment declined',
            membership_id: o.user.uuid
          };
        });

        return {
          data,
          items,
          viewing_plan_susbcriptions: true,
          plan_name: route.query.name
        };
      }).catch(e => {
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        error({
          statusCode: e.statusCode,
          message
        });
      });
    }

    return await $membership.expiringSubscriptions(30).then(data => {
      let items = _.map(data, o => {
        return {
          id: o.id,
          full_name: `${o.user.first_name} ${o.user.last_name}`,
          plan: o.plan.name,
          plan_id: o.plan.id,
          slug: o.slug,
          start_date: o.starts_at,
          end_date: o.ends_at,
          status: o.state == 'manual-active' ? 'Do not auto renew' : o.state == 'active' ? 'Auto-renewal' : 'payment declined',
          membership_id: o.user.uuid
        };
      });

      return {
        data,
        items
      };
    }).catch(e => {
      const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
      error({
        statusCode: e.statusCode,
        message
      });
    });
  },

  methods: {
    handleClick(day) {
      switch (day) {
        case -1:
          this.dropdown = '(Expired Auto-Renewals) 0';
          break;

        case -2:
          this.dropdown = '(Unexpired Manual-Renewals) 0';
          break;

        case -3:
          this.dropdown = '(Payment Declined) 0';
          break;

        case -4:
          this.dropdown = '(Expired Manual-Renewals) 0';
          break;

        default:
          this.dropdown = day;
          break;
      }

      this.loading = !this.loading;
      this.$membership.expiringSubscriptions(day).then(data => {
        this.loading = !this.loading;
        this.items = _.map(data, o => {
          return {
            id: o.id,
            full_name: `${o.user.first_name} ${o.user.last_name}`,
            plan: o.plan.name,
            plan_id: o.plan.id,
            slug: o.slug,
            start_date: o.starts_at,
            end_date: o.ends_at,
            status: o.state == 'manual-active' ? 'Do not auto renew' : o.state == 'active' ? 'Auto-renewal' : o.state == 'payment-declined' ? 'payment declined' : 'expired',
            membership_id: o.user.uuid
          };
        });
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        error({
          statusCode: e.statusCode,
          message
        });
      });
    },

    showForm(e) {
      this.data = e;
      this.$bvModal.show('renew');
      this.$membership.getPaymentMethods(e.item.membership_id).then(({
        data
      }) => {
        this.cards = _.map(data, o => {
          return {
            value: o.id,
            text: `${o.card_brand} - **** ${o.last_4}`
          };
        });
      }).catch(e => {
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          variant: 'danger',
          title: 'Error'
        });
      });
    },

    beginRenew() {
      const payload = {
        plan_id: this.data.item.plan_id,
        card_nonce: this.card,
        slug: this.data.item.slug
      };
      this.renewSubscription(this.data.item.membership_id, payload);
    },

    renewSubscription(id, payload) {
      this.$membership.renewSubscription(id, payload).then(res => {
        if (res) {
          this.items.splice(this.data.index, 1);
          this.$bvToast.toast(`${res.data.first_name} ${res.data.last_name}'s subscription renewed successfully`, {
            variant: 'success',
            title: 'Success'
          });
          this.$bvModal.hide('renew');
          location.reload();
        }
      }).catch(e => {
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          variant: 'danger',
          title: 'Error'
        });
      });
    },

    search(query) {
      this.loading = !this.loading;
      this.items = this.items.filter(item => item.full_name.match(new RegExp(query, 'i')));
      console.log(this.items);
      this.loading = false; //const link = `filter[status]=invited&include=primaryPlan,profile&filter[search]=${query}`
      // this.$membership
      //   .getAllMemberships(link)
      //   .then(({ data, links, meta }) => {
      //     this.members = data
      //     this.links = links
      //     //this.meta = meta
      //     this.loading = false
      //   })
      //   .catch(e => {
      //     this.loading = !this.loading
      //     this.$bvToast.toast(
      //       e.response ? JSON.stringify(e.response.data.errors) : e.message,
      //       {
      //         title: 'Error',
      //         variant: 'danger'
      //       }
      //     )
      //   })
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchFilter.vue?vue&type=template&id=36d8f211&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.search($event)}}},[_c('base-input',{staticClass:"mb-0",attrs:{"input-group-classes":"input-group-merge sh-search","group":""}},[_c('template',{slot:"prepend"},[_c('i',{staticClass:"fa fa-search"})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],staticClass:"form-control",attrs:{"required":_vm.required,"type":"text","placeholder":"Looking for ...","aria-describedby":"button-addon2"},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-default",attrs:{"id":"button-addon2","disabled":_vm.loading,"type":"submit"}},[(_vm.loading)?_c('i',{staticClass:"fa fa-spinner fa-spin"}):_c('span',[_vm._v("\n            Search")])])])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/SearchFilter.vue?vue&type=template&id=36d8f211&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchFilter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchFiltervue_type_script_lang_js_ = ({
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    },
    searchTerm: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
  methods: {
    search() {
      this.$emit('input', this.searchTerm);
      this.$emit('search', this.searchTerm);
    }

  }
});
// CONCATENATED MODULE: ./components/shack/SearchFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_SearchFiltervue_type_script_lang_js_ = (SearchFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/SearchFilter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_SearchFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f4c275a"
  
)

/* harmony default export */ var SearchFilter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/members-due/index.vue?vue&type=template&id=6d955242&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"subtitle":_vm.viewing_plan_susbcriptions ? _vm.plan_name : ((_vm.items.length) + " profiles"),"title":_vm.viewing_plan_susbcriptions
            ? 'Subscriptions'
            : 'Expiring Memberships'}}),_vm._v(" "),[_c('base-input',{staticClass:"mb-0",staticStyle:{"margin-left":"auto"},attrs:{"input-group-classes":"input-group-merge sh-search","group":""}},[_c('template',{slot:"prepend"},[_c('i',{staticClass:"fa fa-search"})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query),expression:"query"}],staticClass:"form-control",staticStyle:{"border-right":"0"},attrs:{"required":_vm.required,"type":"text","placeholder":"Looking for ...","aria-describedby":"button-addon2"},domProps:{"value":(_vm.query)},on:{"input":function($event){if($event.target.composing){ return; }_vm.query=$event.target.value}}})],2)],_vm._v(" "),_c('b-dropdown',{staticClass:"m-md-2",attrs:{"id":"dropdown-1","text":(_vm.dropdown + " days"),"right":"false"},on:{"click":_vm.handleClick}},[_vm._l((_vm.days),function(day,i){return _c('b-dropdown-item',{key:i,on:{"click":function($event){return _vm.handleClick(day)}}},[_vm._v(_vm._s(day)+" days")])}),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(1)}}},[_vm._v("Today")]),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(-1)}}},[_vm._v("Expired Auto-Renew Members")]),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(-4)}}},[_vm._v("Expired Manual-Renew Members")]),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(-2)}}},[_vm._v("Unexpired Manual Renewals")]),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(-3)}}},[_vm._v("Payment Declined")]),_vm._v(" "),_c('b-dropdown-divider')],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_c('card',[_c('b-table',{attrs:{"busy":_vm.loading,"items":_vm.filterMembersByName,"fields":_vm.fields,"show-empty":"","striped":"","hover":""},scopedSlots:_vm._u([{key:"cell(full_name)",fn:function(data){return [_c('nuxt-link',{attrs:{"to":{
              name: 'space-directory-id',
              params: { id: data.item.membership_id },
            }}},[_vm._v("\n            "+_vm._s(data.item.full_name))])]}},{key:"cell(options)",fn:function(data){return [_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent","small":""},on:{"click":function($event){return _vm.showForm(data)}}},[_c('i',{staticClass:"fas fa-undo-alt"}),_vm._v(" Renew")])]}}])})],1)],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"renew","title":"Renew Subscription","hide-footer":""}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.beginRenew($event)}}},[_c('b-form-group',{attrs:{"label":"Payment Source","description":"Card to charge for this transaction"}},[_c('b-form-select',{attrs:{"options":_vm.cards,"required":""},model:{value:(_vm.card),callback:function ($$v) {_vm.card=$$v},expression:"card"}},[_c('option',{domProps:{"value":null}},[_vm._v("Choose a payment card")])])],1),_vm._v(" "),_c('b-form-group',[_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Renew")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/members-due/index.vue?vue&type=template&id=6d955242&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/members-due/index.vue?vue&type=script&lang=js&
var members_duevue_type_script_lang_js_ = __webpack_require__(124);

// CONCATENATED MODULE: ./pages/_space/members-due/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_members_duevue_type_script_lang_js_ = (members_duevue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/members-due/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _space_members_duevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "78f1c612"
  
)

/* harmony default export */ var members_due = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=index.js.map