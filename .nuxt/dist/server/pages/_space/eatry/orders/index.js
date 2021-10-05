exports.ids = [23];
exports.modules = {

/***/ 100:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fe6ee0ce_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fe6ee0ce_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fe6ee0ce_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fe6ee0ce_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fe6ee0ce_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fe6ee0ce_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/orders/index.vue?vue&type=template&id=fe6ee0ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Orders","subtitle":"Eatries"}}),_vm._v(" "),_c('div',{staticClass:"search-container"},[_c('b-input',{staticClass:"search-btn",attrs:{"type":"text","placeholder":"Search"}}),_vm._v(" "),_c('b-button',{staticClass:"text-white",attrs:{"variant":"dark"}},[_c('i',{staticClass:"fa fa-search"})])],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\" data-v-fe6ee0ce>","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\" data-v-fe6ee0ce>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-fe6ee0ce>","</div>",[_c('el-table',{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{"data":_vm.orders,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Ordered By (Name)","min-width":"180px","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_vm._v(_vm._s(row.user.name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Ordered By (Email)","prop":"email","min-width":"180px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.user.email))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Total","prop":"quantity","min-width":"160px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.space.currency_symbol)+" "+_vm._s(row.grand_total))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Timestamp","prop":"date_of_order","min-width":"180px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(_vm.$moment(row.date_of_order).format('MMMM Do YYYY, h:mm:ss a')))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"160px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-white",attrs:{"disabled":_vm.loading,"variant":"primary"},on:{"click":function($event){return _vm.showDetails(row)}}},[_c('i',{staticClass:"fa fa-eye"}),_vm._v(" Details\n              ")])]}}])})],1)],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-fe6ee0ce>","</div>",[_c('base-pagination',{attrs:{"total":1,"per-page":2,"value":1,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-fe6ee0ce>","</div>",[_c('b-modal',{attrs:{"id":"modal-order","hide-footer":""},scopedSlots:_vm._u([{key:"modal-title",fn:function(){return [_vm._v("Order Details")]},proxy:true}])},[_vm._v(" "),_c('div',[_c('p',[_vm._v("Name: "+_vm._s(_vm.userOrder.name))]),_vm._v(" "),_c('p',[_vm._v("Email: "+_vm._s(_vm.userOrder.email))]),_vm._v(" "),_c('p',{staticClass:"text-muted"},[_vm._v("Date of Order: "+_vm._s(_vm.$moment(_vm.userOrder.date_of_order).format('MMMM Do YYYY, h:mm:ss a')))]),_vm._v(" "),_c('b-table',{attrs:{"items":_vm.userOrder.items,"striped":"","hover":""}}),_vm._v(" "),_c('p',[_vm._v("Subtotal: "+_vm._s(_vm.space.currency_symbol)+" "+_vm._s(_vm.userOrder.sub_total))]),_vm._v(" "),_c('p',[_vm._v("Tax: "+_vm._s(_vm.space.currency_symbol)+" "+_vm._s(_vm.userOrder.taxes_charges))]),_vm._v(" "),_c('h4',[_vm._v("Grand Total: "+_vm._s(_vm.space.currency_symbol)+" "+_vm._s(_vm.userOrder.grand_total))])],1)])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/eatry/orders/index.vue?vue&type=template&id=fe6ee0ce&scoped=true&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table-column.css
var table_column = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/table-column"
var table_column_ = __webpack_require__(84);
var lib_table_column_default = /*#__PURE__*/__webpack_require__.n(table_column_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table.css
var table = __webpack_require__(101);

// EXTERNAL MODULE: external "element-ui/lib/table"
var table_ = __webpack_require__(85);
var lib_table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/orders/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Components



/* harmony default export */ var ordersvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_table_default.a.name]: lib_table_default.a,
    [lib_table_column_default.a.name]: lib_table_column_default.a
  },

  async asyncData({
    error,
    $eatry,
    store
  }) {
    await $eatry.getAllOrderedEatries().then(data => {
      store.commit('eatry/setOrderedEatries', data);
    }).catch(err => {
      error({
        statusCode: err.status || 404,
        message: err.response ? JSON.stringify(err.response.data.errors) : err.message
      });
    });
  },

  data() {
    return {
      loading: false,
      userOrder: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace,
      orders: state => state.eatry.orderedEatries.data
    })
  },
  methods: {
    // TODO: Support pagination when its supported on the backend
    next() {},

    prev() {},

    showDetails(data) {
      const items = this.transformOrderedItems(data.orders);
      const order = {
        sub_total: data.sub_total,
        taxes_charges: data.taxes_charges,
        grand_total: data.grand_total,
        date_of_order: data.date_of_order,
        name: data.user.name,
        email: data.user.email,
        items
      };
      this.userOrder = order;
      this.$bvModal.show('modal-order');
    },

    transformOrderedItems(items) {
      return items.map(item => {
        return {
          item: item.eatry.name,
          number_of_plates: item.number_of_plates,
          table_number: item.table_number
        };
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/eatry/orders/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var eatry_ordersvue_type_script_lang_js_ = (ordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/eatry/orders/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  eatry_ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fe6ee0ce",
  "5c2a95ac"
  
)

/* harmony default export */ var orders = __webpack_exports__["default"] = (component.exports);

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