exports.ids = [35];
exports.modules = {

/***/ 150:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/invoice/add/_id/index.vue?vue&type=template&id=1469cfe9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{attrs:{"novalidate":""},on:{"submit":function($event){$event.preventDefault();return _vm.sendInvoice($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Add New Invoice"}}),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"disabled":_vm.$store.state.invoice.isLoading,"type":"submit"}},[_c('span',{staticClass:"fa fa-plus"}),_vm._v(" Create Invoice\n        ")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-7"},[_c('div',{staticClass:"row pd-r-40"},[_c('div',{staticClass:"col-md-12"},[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Recipients’ Details")]),_vm._v(" "),_c('div',{staticClass:"row pd-r-40"},[_c('base-input',{staticClass:"col-md-12",attrs:{"value":_vm.company.contact_name,"label":"Name","readonly":"","placeholder":"Full Name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"No. days before due","type":"number","placeholder":"0"},model:{value:(_vm.addInvoice.days_until_due),callback:function ($$v) {_vm.$set(_vm.addInvoice, "days_until_due", $$v)},expression:"addInvoice.days_until_due"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"value":_vm.company.name,"label":"Company","readonly":"","placeholder":"Awesome Co"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"value":_vm.company.billing_email,"label":"Billing Email","readonly":"","placeholder":"Awesome Co"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Address")]),_vm._v(" "),_c('textarea',{staticClass:"form-control",attrs:{"placeholder":"Add Address","rows":"4","readonly":"","max-rows":"6"},domProps:{"value":_vm.company.address}})]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Invoice Description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.addInvoice.description),expression:"addInvoice.description"}],staticClass:"form-control",attrs:{"placeholder":"Add details you want on invoice","rows":"4","max-rows":"6"},domProps:{"value":(_vm.addInvoice.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addInvoice, "description", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Invoice Footer")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.addInvoice.footer),expression:"addInvoice.footer"}],staticClass:"form-control",attrs:{"placeholder":"Add invoice footer","rows":"4","max-rows":"6"},domProps:{"value":(_vm.addInvoice.footer)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addInvoice, "footer", $event.target.value)}}})])],1)])]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Notes (only visible to Admins)")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.addInvoice.notes),expression:"addInvoice.notes"}],staticClass:"form-control",attrs:{"placeholder":"Add notes you want to keep for this invoice","rows":"4","max-rows":"6"},domProps:{"value":(_vm.addInvoice.notes)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addInvoice, "notes", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Add Invoice Item(s)")]),_vm._v(" "),_vm._l((_vm.addInvoice.items),function(item,index){return _c('div',{key:index,staticClass:"row sh-inv_item"},[_c('div',{staticClass:"col-md-7"},[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('div',{staticClass:"col-md-5 text-right"},[_c('div',{staticClass:"d-flex justify-content-between"},[_c('a',{staticClass:"text-primary",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.editInvoiceItem(item, index)}}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit\n                    ")]),_vm._v(" "),_c('a',{staticClass:"text-danger",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.removeItems(index)}}},[_c('i',{staticClass:"fa fa-trash"}),_vm._v(" Delete\n                    ")])]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.currency_symbol)+_vm._s(item.amount))]),_vm._v(" "),_c('div',{staticClass:"text-muted"},[_c('br'),_vm._v("\n                    Net Amount: "+_vm._s(_vm.currency_symbol)+_vm._s(item.amount)+"\n                  ")])])])}),_vm._v(" "),_c('modal',{attrs:{"show":_vm.modals.classic},on:{"update:show":function($event){return _vm.$set(_vm.modals, "classic", $event)}}},[_c('SectionTitle',{staticClass:"mr-tb-20",attrs:{"slot":"header","subtitle":_vm.company.name,"title":"Add New Item"},slot:"header"}),_vm._v(" "),_c('base-input',{attrs:{"label":"Description","placeholder":"Add a description about item"},model:{value:(_vm.invoiceItem.description),callback:function ($$v) {_vm.$set(_vm.invoiceItem, "description", $$v)},expression:"invoiceItem.description"}}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Amount","type":"number","placeholder":"0"},model:{value:(_vm.invoiceItem.amount),callback:function ($$v) {_vm.$set(_vm.invoiceItem, "amount", $$v)},expression:"invoiceItem.amount"}},[_c('div',{attrs:{"slot":"append"},slot:"append"},[_vm._v(_vm._s(_vm.currency))])])],1),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between mr-t-20"},[_c('h3',[_vm._v("Total Amount")]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.currency_symbol)+" "+_vm._s(_vm.invoiceItem.amount))])]),_vm._v(" "),_c('hr',{staticClass:"mb-0"}),_vm._v(" "),_c('template',{slot:"footer"},[_c('b-button',{staticClass:"ml-auto",attrs:{"type":"button"},on:{"click":_vm.addInvoiceItem}},[_vm._v("Save")])],1)],2),_vm._v(" "),_c('b-button',{staticClass:"sh-dashbtn",attrs:{"outline":"","type":"button","block":""},on:{"click":_vm.openModal}},[_vm._v("Add New Item")])],2)])])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/invoice/add/_id/index.vue?vue&type=template&id=1469cfe9&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/invoice/add/_id/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },

  async asyncData(vm) {
    const {
      id
    } = vm.route.params;

    if (!id) {
      vm.rout.go(-1);
    }

    const {
      data
    } = await vm.$company.getOneCompany(id);
    vm.store.commit('company/setCompanies', data);
  },

  data() {
    return {
      invoiceItem: {
        description: null,
        amount: null,
        itemIndex: null
      },
      addInvoice: {
        description: '',
        company_id: '',
        days_until_due: 0,
        items: [],
        footer: '',
        notes: ''
      },
      modals: {
        classic: false
      },
      text: 'For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100.'
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      company: state => state.company.companies,
      currency_symbol: state => state.space.currentSpace.currency_symbol,
      currency: state => state.space.currentSpace.currency,
      tax_rate: state => state.space.currentSpace.tax_rate
    })
  },

  created() {
    this.addInvoice.company_id = this.$route.params.id;
  },

  methods: {
    addInvoiceItem() {
      if (this.invoiceItem.itemIndex != null) {
        let data = this.addInvoice.items[this.invoiceItem.itemIndex];
        data.description = this.invoiceItem.description;
        data.amount = this.invoiceItem.amount;
        this.modals.classic = false;
        this.invoiceItem.description = null;
        this.invoiceItem.amount = null;
      } else {
        const {
          description,
          amount
        } = this.invoiceItem;
        let newObj = {
          description: description,
          amount: amount
        };
        this.addInvoice.items.push(newObj);
        this.invoiceItem.description = null;
        this.invoiceItem.amount = null;
        this.modals.classic = false;
      }
    },

    removeItems(index) {
      this.addInvoice.items.splice(index, 1);
    },

    editInvoiceItem(item, index) {
      this.invoiceItem.description = item.description;
      this.invoiceItem.amount = item.amount;
      this.invoiceItem.itemIndex = index;
      this.modals.classic = true;
    },

    openModal() {
      this.invoiceItem.description = null;
      this.invoiceItem.amount = null;
      this.invoiceItem.itemIndex = null;
      this.modals.classic = true;
    },

    sendInvoice() {
      this.$store.dispatch('invoice/createInvoice', this.addInvoice);
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/invoice/add/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/invoice/add/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  add_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b9d4a09"
  
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