exports.ids = [36];
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchForm.vue?vue&type=template&id=feea539e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.search($event)}}},[_c('base-input',{staticClass:"mb-0",attrs:{"input-group-classes":"input-group-merge sh-search","group":""}},[_c('template',{slot:"prepend"},[_c('i',{staticClass:"fa fa-search"})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],staticClass:"form-control",attrs:{"required":_vm.required,"type":"text","placeholder":"Looking for ...","aria-describedby":"button-addon2"},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-default",attrs:{"id":"button-addon2","disabled":_vm.loading,"type":"submit"}},[(_vm.loading)?_c('i',{staticClass:"fa fa-spinner fa-spin"}):_c('span',[_vm._v("\n            Search")])])])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/SearchForm.vue?vue&type=template&id=feea539e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchFormvue_type_script_lang_js_ = ({
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    searchTerm: ''
  }),
  methods: {
    search() {
      this.$emit('input', this.searchTerm);
      this.$emit('search', this.searchTerm);
    }

  }
});
// CONCATENATED MODULE: ./components/shack/SearchForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_SearchFormvue_type_script_lang_js_ = (SearchFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/SearchForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_SearchFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6ddf3cf7"
  
)

/* harmony default export */ var SearchForm = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(101);
/* harmony import */ var element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var element_ui_lib_theme_chalk_dropdown_menu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(179);
/* harmony import */ var element_ui_lib_theme_chalk_dropdown_menu_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_dropdown_menu_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var element_ui_lib_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88);
/* harmony import */ var element_ui_lib_dropdown_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var element_ui_lib_theme_chalk_dropdown_item_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(180);
/* harmony import */ var element_ui_lib_theme_chalk_dropdown_item_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_dropdown_item_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var element_ui_lib_dropdown_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89);
/* harmony import */ var element_ui_lib_dropdown_item__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_dropdown_item__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var element_ui_lib_theme_chalk_dropdown_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(181);
/* harmony import */ var element_ui_lib_theme_chalk_dropdown_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_dropdown_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var element_ui_lib_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90);
/* harmony import */ var element_ui_lib_dropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_dropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96);
/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_option__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_tables_projects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(188);
/* harmony import */ var _components_tables_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(189);
/* harmony import */ var _components_shack_InvoiceTable_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(215);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94);
/* harmony import */ var _components_shack_SearchForm_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(105);
/* harmony import */ var _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95);
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_22__);





















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"],
    SectionTitle: _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"],
    SearchForm: _components_shack_SearchForm_vue__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"],
    InvoiceTable: _components_shack_InvoiceTable_vue__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],
    [element_ui_lib_select__WEBPACK_IMPORTED_MODULE_14___default.a.name]: element_ui_lib_select__WEBPACK_IMPORTED_MODULE_14___default.a,
    [element_ui_lib_option__WEBPACK_IMPORTED_MODULE_12___default.a.name]: element_ui_lib_option__WEBPACK_IMPORTED_MODULE_12___default.a,
    [element_ui_lib_dropdown__WEBPACK_IMPORTED_MODULE_10___default.a.name]: element_ui_lib_dropdown__WEBPACK_IMPORTED_MODULE_10___default.a,
    [element_ui_lib_dropdown_item__WEBPACK_IMPORTED_MODULE_8___default.a.name]: element_ui_lib_dropdown_item__WEBPACK_IMPORTED_MODULE_8___default.a,
    [element_ui_lib_dropdown_menu__WEBPACK_IMPORTED_MODULE_6___default.a.name]: element_ui_lib_dropdown_menu__WEBPACK_IMPORTED_MODULE_6___default.a,
    [element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default.a
  },

  async asyncData({
    store
  }) {
    await store.dispatch('invoice/getAllInvoices');
  },

  data() {
    return {
      projects: _components_tables_projects__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],
      users: _components_tables_users__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],
      modals: {
        classic: false
      },
      companies: [],
      searching: false,
      company_id: null,
      loadingSearch: false,
      invMonth: null
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_22__["mapState"])({
      invoices: state => state.invoice.rooms.invoices,
      meta: state => state.resources.rooms.meta,
      links: state => state.resources.rooms.links
    })
  },

  async created() {
    const {
      data
    } = await this.$company.getCompanies();
    this.companies = data;
  },

  methods: {
    searchCompany(query) {
      this.searching = !this.searching;

      const _self = this;

      _.debounce(() => {
        _self.$company.getCompanyByName(query).then(({
          data
        }) => {
          _self.searching = !_self.searching;
          _self.data = data;
        });
      }, 350)();
    },

    createInvoice() {
      let data = {
        company_id: this.company_id,
        space: this.$store.state.space.currentSpace.subdomain
      };
      this.$store.commit('invoice/initiateInvoice', data);
    },

    async getInvoiceResult(e) {
      this.loadingSearch = true;

      try {
        const {
          data
        } = await this.$invoice.searchInvoice(e);
        let emptyIn = [];
        data.data.map(item => {
          let invObj = {
            company: item.company.name,
            date: this.$moment(item.created_at).format('LL'),
            contact_person: item.company.contact_name,
            id: item.id,
            invoice_number: item.inv_number,
            paid: item.paid,
            finalize: item.finalize,
            sent: item.sent,
            amount: item.total_amount,
            void: item.void,
            invProps: item
          };
          emptyIn.push(invObj);
        });
        this.$store.commit('invoice/setTableInvoices', emptyIn);
        this.loadingSearch = false;
      } catch (error) {
        this.loadingSearch = false;
        this.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].notify.error);
      }
    },

    filterInv(e) {
      this.$store.dispatch('invoice/filterInvoice', e);
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/react.jpg',
  title: 'React Material Dashboard',
  budget: '$4400 USD',
  status: 'on schedule',
  statusType: 'info',
  completion: 90
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}]);

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  id: 1,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 2,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '08/09/2018',
  product: 'Argon Design System',
  active: false
}, {
  id: 3,
  name: 'Samantha Ivy',
  image: 'img/theme/team-3.jpg',
  createdAt: '30/08/2018',
  product: 'Black Dashboard',
  active: false
}, {
  id: 4,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 5,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '30/09/2018',
  product: 'Vue Argon Dashboard',
  active: true
}]);

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/InvoiceTable.vue?vue&type=template&id=fb5f64ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('el-table',{staticClass:"table table-hover table-striped",attrs:{"data":_vm.invoice,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"No.","prop":"inv_id","width":"155","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('a',{attrs:{"href":("/" + _vm.space + "/invoice/preview/" + (row.id))}},[_vm._v(_vm._s(row.invoice_number))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Date","prop":"inv_date","width":"200","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('div',{staticClass:"float-left"},[_vm._v("\n          "+_vm._s(row.date)+"\n        ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Name  /  Company","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('div',{staticClass:"d-flex justify-content-between"},[_c('div',[_vm._v("\n            "+_vm._s(row.contact_person)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"text-muted"},[_vm._v("\n            "+_vm._s(row.company)+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between inv-links"},[(!row.finalize)?_c('a',{on:{"click":function($event){return _vm.openUpdateBox(row.invProps)}}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit")]):_vm._e(),_vm._v(" "),(!row.sent)?_c('a',{on:{"click":function($event){return _vm.sendInv(row.invProps.id)}}},[_c('i',{staticClass:"fa fa-envelope"}),_vm._v(" Send")]):_vm._e(),_vm._v(" "),(row.sent)?_c('a',{on:{"click":function($event){return _vm.sendInv(row.invProps.id)}}},[_c('i',{staticClass:"fa fa-envelope"}),_vm._v(" Resend")]):_vm._e(),_vm._v(" "),(!row.written_off)?_c('a',{on:{"click":function($event){return _vm.writeOff(row.invProps.id)}}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Writeoff")]):_vm._e(),_vm._v(" "),(!row.finalize)?_c('a',{on:{"click":function($event){return _vm.finalizeInv(row.invProps)}}},[_c('i',{staticClass:"fa fa-check"}),_vm._v(" finalize")]):_vm._e()])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Amount","align":"right","width":"350","prop":"status"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_vm._v("\n        "+_vm._s(_vm.currency_symbol)+_vm._s(row.amount)+"\n        "),_c('div',{},[(row.void)?_c('badge',{attrs:{"type":"primary"}},[_vm._v("\n            void\n          ")]):_vm._e(),_vm._v(" "),(row.paid)?_c('badge',{attrs:{"type":"danger"}},[_vm._v("\n            paid\n          ")]):_vm._e(),_vm._v(" "),(row.sent)?_c('badge',{attrs:{"type":"success"}},[_vm._v("\n            sent\n          ")]):_vm._e(),_vm._v(" "),(!row.paid)?_c('badge',{attrs:{"type":"primary"}},[_vm._v("\n            unpaid & pending\n          ")]):_vm._e(),_vm._v(" "),(row.written_off)?_c('badge',{attrs:{"type":"warning"}},[_vm._v("\n            written off\n          ")]):_vm._e(),_vm._v(" "),(!row.sent)?_c('badge',{attrs:{"type":"alternative"}},[_vm._v("\n            not sent\n          ")]):_vm._e()],1)]}}])})],1),_vm._ssrNode(" <br> "),_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}}),_vm._ssrNode(" "),_c('modal',{attrs:{"show":_vm.modals.classic},on:{"update:show":function($event){return _vm.$set(_vm.modals, "classic", $event)}}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateInvoice($event)}}},[_c('SectionTitle',{staticClass:"mr-t-40",attrs:{"slot":"header","title":"Create New Invoice"},slot:"header"}),_vm._v(" "),_c('h4',[_vm._v("Updating Invoice: "+_vm._s(_vm.addInvoice.inv_number))]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Invoice Description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.addInvoice.description),expression:"addInvoice.description"}],staticClass:"form-control",attrs:{"placeholder":"Add details you want on invoice","rows":"4","max-rows":"6"},domProps:{"value":(_vm.addInvoice.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addInvoice, "description", $event.target.value)}}})]),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"No. days before due","type":"number","placeholder":"0"},model:{value:(_vm.addInvoice.days_until_due),callback:function ($$v) {_vm.$set(_vm.addInvoice, "days_until_due", $$v)},expression:"addInvoice.days_until_due"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Invoice Footer")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.addInvoice.footer),expression:"addInvoice.footer"}],staticClass:"form-control",attrs:{"placeholder":"Add invoice footer","rows":"4","max-rows":"6"},domProps:{"value":(_vm.addInvoice.footer)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addInvoice, "footer", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Notes")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.addInvoice.notes),expression:"addInvoice.notes"}],staticClass:"form-control",attrs:{"placeholder":"Add invoice footer","rows":"4","max-rows":"6"},domProps:{"value":(_vm.addInvoice.notes)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addInvoice, "notes", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"clear-fix"}),_vm._v(" "),_c('button',{staticClass:"btn btn-primary mr-t-40 pd-lr-40",attrs:{"type":"submit"}},[_vm._v("Update Invoice")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/InvoiceTable.vue?vue&type=template&id=fb5f64ee&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/dropdown-menu.css
var dropdown_menu = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/dropdown-menu"
var dropdown_menu_ = __webpack_require__(88);
var lib_dropdown_menu_default = /*#__PURE__*/__webpack_require__.n(dropdown_menu_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/dropdown-item.css
var dropdown_item = __webpack_require__(180);

// EXTERNAL MODULE: external "element-ui/lib/dropdown-item"
var dropdown_item_ = __webpack_require__(89);
var lib_dropdown_item_default = /*#__PURE__*/__webpack_require__.n(dropdown_item_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/dropdown.css
var dropdown = __webpack_require__(181);

// EXTERNAL MODULE: external "element-ui/lib/dropdown"
var dropdown_ = __webpack_require__(90);
var lib_dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table-column.css
var table_column = __webpack_require__(100);

// EXTERNAL MODULE: external "element-ui/lib/table-column"
var table_column_ = __webpack_require__(84);
var lib_table_column_default = /*#__PURE__*/__webpack_require__.n(table_column_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table.css
var table = __webpack_require__(101);

// EXTERNAL MODULE: external "element-ui/lib/table"
var table_ = __webpack_require__(85);
var lib_table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/InvoiceTable.vue?vue&type=script&lang=js&















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var InvoiceTablevue_type_script_lang_js_ = ({
  components: {
    [lib_table_default.a.name]: lib_table_default.a,
    [lib_table_column_default.a.name]: lib_table_column_default.a,
    [lib_dropdown_default.a.name]: lib_dropdown_default.a,
    [lib_dropdown_item_default.a.name]: lib_dropdown_item_default.a,
    [lib_dropdown_menu_default.a.name]: lib_dropdown_menu_default.a,
    SectionTitle: SectionTitle["a" /* default */] // UnconfirmedModal

  },
  props: {
    itemLimit: {
      type: Number,
      default: 1
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showByIndex: null,
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      addInvoice: {
        description: '',
        company_id: '',
        days_until_due: 0,
        items: [],
        footer: '',
        notes: '',
        id: null,
        inv_number: null
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      invoice: state => state.invoice.invoiceTable,
      currency_symbol: state => state.space.currentSpace.currency_symbol,
      meta: state => state.invoice.invoices.meta,
      links: state => state.invoice.invoices.links,
      space: state => state.space.currentSpace.subdomain
    })
  },
  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$invoice.getAllInvoice(next);
    },

    prev() {
      const {
        prev
      } = this.links;
      this.$invoice.getAllInvoice(prev);
    },

    openUpdateBox(item) {
      this.addInvoice.id = item.id;
      this.addInvoice.description = item.description;
      this.addInvoice.footer = item.footer;
      this.addInvoice.notes = item.notes;
      this.addInvoice.inv_number = item.inv_number;
      this.addInvoice.days_until_due = item.day_until_due;
      this.modals.classic = true;
    },

    updateInvoice() {
      this.$store.dispatch('invoice/updateInvoice', this.addInvoice);
      this.modals.classic = false;
    },

    finalizeInv(item) {
      const data = {
        description: item.description,
        company_id: item.company.uuid,
        notes: item.notes,
        days_until_due: item.days_until_due,
        footer: item.footer,
        items: item.invoice_items,
        id: item.id
      };
      if (!confirm('Are you sure?')) return;
      this.$store.dispatch('invoice/finalizeInv', data);
    },

    writeOff(id) {
      if (!confirm('Are you sure?')) return;
      this.$store.dispatch('invoice/writeOffInv', id);
    },

    sendInv(id) {
      if (!confirm('Are you sure want to send this invoice?')) return;
      this.$store.dispatch('invoice/sendInv', id);
    }

  }
});
// CONCATENATED MODULE: ./components/shack/InvoiceTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_InvoiceTablevue_type_script_lang_js_ = (InvoiceTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/InvoiceTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_InvoiceTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0817a868"
  
)

/* harmony default export */ var InvoiceTable = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/invoice/index.vue?vue&type=template&id=54a748bc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Invoices"}}),_vm._v(" "),_c('SearchForm',{attrs:{"loading":_vm.loadingSearch},on:{"search":_vm.getInvoiceResult}}),_vm._v(" "),_c('div',{staticClass:"mr-l-child-20"},[_c('a',{staticClass:"btn btn-primary",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.modals.classic = true}}},[_vm._v("\n          New Invoice\n        ")])])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6 inv-table\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-4\">","</div>",[_c('card',[_c('b-row',{staticClass:"d-flex align-items-center"},[_c('b-col',{attrs:{"md":"8"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"month","icon":false,"width":"100%","lang":"en","input-class":"form-control","format":"YYYY-MM","value-type":"format","confirm":"","label":"select month","type":"month"},on:{"change":_vm.filterInv},model:{value:(_vm.invMonth),callback:function ($$v) {_vm.invMonth=$$v},expression:"invMonth"}},[_c('template',{slot:"calendar-icon"},[_c('i')])],2)],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"4"}},[_c('h3',{staticClass:"text-muted"},[_vm._v("UNPAID")])])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-8\">","</div>",[_c('card',[_c('div',{staticClass:"d-flex justify-content-around py-2"},[_c('badge',{attrs:{"type":"primary"}},[_vm._v("\n              unpaid & pending "),_c('i',{staticClass:"fa fa-eye"})]),_vm._v(" "),_c('badge',{attrs:{"type":"danger"}},[_vm._v("paid "),_c('i',{staticClass:"fa fa-eye"})]),_vm._v(" "),_c('badge',{attrs:{"type":"success"}},[_vm._v("sent "),_c('i',{staticClass:"fa fa-eye"})]),_vm._v(" "),_c('badge',{attrs:{"type":"warning"}},[_vm._v("\n              written off "),_c('i',{staticClass:"fa fa-eye"})]),_vm._v(" "),_c('badge',{attrs:{"type":"alternative"}},[_vm._v("\n              not sent "),_c('i',{staticClass:"fa fa-eye"})])],1)])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col\">","</div>",[_c('InvoiceTable')],1)]),_vm._ssrNode(" "),_c('modal',{attrs:{"show":_vm.modals.classic},on:{"update:show":function($event){return _vm.$set(_vm.modals, "classic", $event)}}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.createInvoice($event)}}},[_c('SectionTitle',{staticClass:"mr-t-40",attrs:{"slot":"header","title":"Create New Invoice"},slot:"header"}),_vm._v(" "),_c('p',[_vm._v("Select the Member this invoice is being issued to:")]),_vm._v(" "),_c('el-select',{attrs:{"remote-method":_vm.searchCompany,"loading":_vm.searching,"required":"","filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose a company"},model:{value:(_vm.company_id),callback:function ($$v) {_vm.company_id=$$v},expression:"company_id"}},_vm._l((_vm.companies),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.name,"value":option.id}})}),1),_vm._v(" "),_c('div',{staticClass:"clear-fix"}),_vm._v(" "),_c('button',{staticClass:"btn btn-primary mr-t-40 pd-lr-40",attrs:{"type":"submit"}},[_vm._v("Create Invoice")])],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/invoice/index.vue?vue&type=template&id=54a748bc&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/invoice/index.vue?vue&type=script&lang=js&
var invoicevue_type_script_lang_js_ = __webpack_require__(122);

// CONCATENATED MODULE: ./pages/_space/invoice/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_invoicevue_type_script_lang_js_ = (invoicevue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/invoice/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _space_invoicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "793fe70c"
  
)

/* harmony default export */ var invoice = __webpack_exports__["default"] = (component.exports);

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
  "1090309e"
  
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