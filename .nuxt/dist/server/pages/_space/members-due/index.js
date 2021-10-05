exports.ids = [42];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  data: () => ({
    loading: false,
    data: null,
    card: null,
    cards: [],
    perPage: 10,
    items: [],
    currentPage: 1,
    dropdown: 30,
    days: [30, 15, 5],
    fields: ['full_name', 'plan', 'start_date', 'end_date', 'renewal', 'options']
  }),
  computed: {
    rows() {
      return this.items.length;
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
            renewal: o.state == 'manual-active' ? 'Do not auto renew' : 'auto renew',
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
          renewal: o.state == 'manual-active' ? 'Do not auto renew' : 'auto renew',
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
      this.dropdown = day;
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
            renewal: o.state == 'manual-active' ? 'Do not auto renew' : 'auto renew',
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
        }
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

/***/ 125:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/members-due/index.vue?vue&type=template&id=c5f0d074&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"subtitle":_vm.viewing_plan_susbcriptions
            ? _vm.plan_name
            : _vm.dropdown > 0
              ? (_vm.dropdown + " days left")
              : 'Expired',"title":_vm.viewing_plan_susbcriptions
            ? 'Subscriptions'
            : 'Expiring Memberships'}}),_vm._v(" "),_c('b-dropdown',{staticClass:"m-md-2",attrs:{"id":"dropdown-1","text":(_vm.dropdown + " days")},on:{"click":_vm.handleClick}},[_vm._l((_vm.days),function(day,i){return _c('b-dropdown-item',{key:i,on:{"click":function($event){return _vm.handleClick(day)}}},[_vm._v(_vm._s(day)+" days")])}),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(1)}}},[_vm._v("Today")]),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(-1)}}},[_vm._v("Expired")]),_vm._v(" "),_c('b-dropdown-item',{on:{"click":function($event){return _vm.handleClick(-2)}}},[_vm._v("Do Not Renew")]),_vm._v(" "),_c('b-dropdown-divider')],2)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_c('card',[_c('b-table',{attrs:{"busy":_vm.loading,"items":_vm.items,"fields":_vm.fields,"show-empty":"","striped":"","hover":""},scopedSlots:_vm._u([{key:"cell(options)",fn:function(data){return [_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent","small":""},on:{"click":function($event){return _vm.showForm(data)}}},[_c('i',{staticClass:"fas fa-undo-alt"}),_vm._v(" Renew")])]}}])}),_vm._v(" "),_c('b-pagination',{staticClass:"text-center",attrs:{"total-rows":_vm.rows,"per-page":_vm.perPage,"align":"center","aria-controls":"my-table"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1)],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"renew","title":"Renew Subscription","hide-footer":""}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.beginRenew($event)}}},[_c('b-form-group',{attrs:{"label":"Payment Source","description":"Card to charge for this transaction"}},[_c('b-form-select',{attrs:{"options":_vm.cards,"required":""},model:{value:(_vm.card),callback:function ($$v) {_vm.card=$$v},expression:"card"}},[_c('option',{domProps:{"value":null}},[_vm._v("Choose a payment card")])])],1),_vm._v(" "),_c('b-form-group',[_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Renew")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/members-due/index.vue?vue&type=template&id=c5f0d074&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/members-due/index.vue?vue&type=script&lang=js&
var members_duevue_type_script_lang_js_ = __webpack_require__(124);

// CONCATENATED MODULE: ./pages/_space/members-due/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_members_duevue_type_script_lang_js_ = (members_duevue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/members-due/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
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
  "7cb4555f"
  
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
  "bd5e01f8"
  
)

/* harmony default export */ var MainTitle = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map