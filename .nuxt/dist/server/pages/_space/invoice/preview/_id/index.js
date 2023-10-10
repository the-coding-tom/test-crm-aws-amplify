exports.ids = [37];
exports.modules = {

/***/ 152:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/invoice/preview/_id/index.vue?vue&type=template&id=8761be8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between py-4"},[_c('MainTitle',{attrs:{"title":"Invoice Preview"}}),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"primary"},on:{"click":_vm.downloadPdf}},[_vm._v("\n        Download Pdf\n      ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"invoice-container\" class=\"container-fluid mt--6 mr-b-30\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_c('card',[_vm._v("\n        Invoice "+_vm._s(_vm.invoice.inv_number)+"\n        "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-7"},[_c('h3',[_vm._v(_vm._s(_vm.invoice.company.contact_name))]),_vm._v(" "),_c('div',{staticClass:"text-muted"},[_vm._v("\n              "+_vm._s(_vm.invoice.company.address)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"col-md-5 text-right"},[_c('h3',[_vm._v(_vm._s(_vm.$store.state.space.currentSpace.name))]),_vm._v(" "),_c('div',{staticClass:"text-muted"},[_vm._v("\n              "+_vm._s(_vm.$store.state.space.currentSpace.address)+"\n            ")])])]),_vm._v(" "),_c('div',{staticClass:"row mr-t-30"},[_c('div',{staticClass:"col-md-7"}),_vm._v(" "),_c('div',{staticClass:"col-md-5 text-right"},[_vm._v("\n            Issue Date: "+_vm._s(_vm.$moment(_vm.invoice.created_at).format('ll'))+" "),_c('br'),_vm._v("\n            Pay By: "+_vm._s(_vm.$moment(_vm.invoice.created_at).add(_vm.invoice.day_until_due, 'd').format('ll'))+"\n          ")])]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-7"},[_c('div',{staticClass:"sh_prev_bf"},[_c('div',{staticClass:"col-md-12"},[_c('h3',{staticClass:"mr-b-20"},[_c('b',[_vm._v("Invoice Item(s)")])]),_vm._v(" "),_vm._l((_vm.invoice.invoice_items),function(item){return _c('div',{key:item.id,staticClass:"row sh-inv_item"},[_c('div',{staticClass:"col-md-7"},[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('div',{staticClass:"col-md-5 text-right"},[_c('div',{staticClass:"d-flex justify-content-between"},[(!_vm.invoice.finalize)?_c('a',{staticClass:"text-primary",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.editInvoiceItem(item, _vm.index)}}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit\n                      ")]):_vm._e(),_vm._v(" "),(!_vm.invoice.finalize)?_c('a',{staticClass:"text-danger",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.deleteInvoiceItem(item.id)}}},[_c('i',{staticClass:"fa fa-trash"}),_vm._v(" Delete\n                      ")]):_vm._e()]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.currency_symbol)+_vm._s(item.amount))]),_vm._v(" "),_c('div',{staticClass:"text-muted"})])])}),_vm._v(" "),_c('modal',{attrs:{"show":_vm.modals.classic},on:{"update:show":function($event){return _vm.$set(_vm.modals, "classic", $event)}}},[_c('SectionTitle',{staticClass:"mr-tb-20",attrs:{"slot":"header","subtitle":_vm.invoice.company.name,"title":"Add New Item"},slot:"header"}),_vm._v(" "),_c('base-input',{attrs:{"label":"Description","placeholder":"Add a description about item"},model:{value:(_vm.invoiceItem.description),callback:function ($$v) {_vm.$set(_vm.invoiceItem, "description", $$v)},expression:"invoiceItem.description"}}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Amount","type":"number","placeholder":"0"},model:{value:(_vm.invoiceItem.amount),callback:function ($$v) {_vm.$set(_vm.invoiceItem, "amount", $$v)},expression:"invoiceItem.amount"}},[_c('div',{attrs:{"slot":"append"},slot:"append"},[_vm._v(_vm._s(_vm.currency))])])],1),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between mr-t-20"},[_c('h3',[_vm._v("Total Amount")]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.currency_symbol)+" "+_vm._s(_vm.invoiceItem.amount))])]),_vm._v(" "),_c('hr',{staticClass:"mb-0"}),_vm._v(" "),_c('template',{slot:"footer"},[_c('b-button',{staticClass:"ml-auto",attrs:{"type":"button"},on:{"click":_vm.updateInvoiceItem}},[_vm._v("Save")])],1)],2),_vm._v(" "),(!_vm.invoice.finalize)?_c('b-button',{staticClass:"sh-dashbtn",attrs:{"outline":"","type":"button","block":""},on:{"click":_vm.openModal}},[_vm._v("Add New Item")]):_vm._e()],2)])]),_vm._v(" "),_c('div',{staticClass:"col-md-5 text-right"},[_c('h3',[_vm._v("\n              Total Amount: "+_vm._s(_vm.currency_symbol)+" "+_vm._s(_vm.invoice.total_amount)+"\n            ")]),_vm._v(" "),_c('p',{staticClass:"text-muted"},[_vm._v("\n              Tax: "+_vm._s(_vm.invoice.tax_rate)+"\n            ")]),_vm._v(" "),_c('h3',{staticClass:"bdr-b inline-block"},[_vm._v("\n              PAYABLE AMOUNT: "+_vm._s(_vm.currency_symbol)+" "+_vm._s(_vm.invoice.total_amount)+"\n            ")])])])])],1),_vm._ssrNode(" <a"+(_vm._ssrAttr("href",("/" + (_vm.$store.state.space.currentSpace.subdomain) + "/invoice")))+" class=\"mr-b-30\"><i class=\"fa fa-angle-left mr-r-10\"></i> Back\n    </a>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/invoice/preview/_id/index.vue?vue&type=template&id=8761be8c&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(21);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/invoice/preview/_id/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    await vm.store.dispatch('invoice/getOneInvoice', id);
  },

  data() {
    return {
      invoiceItem: {
        description: null,
        amount: null,
        itemIndex: null,
        item_id: null
      },
      addInvoice: {
        description: null,
        company_id: null,
        days_until_due: 0,
        items: [],
        footer: null,
        notes: null
      },
      modals: {
        classic: false
      },
      text: 'For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100.'
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      invoice: state => state.invoice.oneInvoice.data,
      currency_symbol: state => state.space.currentSpace.currency_symbol,
      currency: state => state.space.currentSpace.currency,
      tax_rate: state => state.space.currentSpace.tax_rate
    })
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
      this.invoiceItem.item_id = item.id;
      this.modals.classic = true;
    },

    openModal() {
      this.invoiceItem.description = null;
      this.invoiceItem.amount = null;
      this.invoiceItem.itemIndex = null;
      this.invoiceItem.item_id = null;
      this.modals.classic = true;
    },

    sendInvoice() {
      this.$store.dispatch('invoice/createInvoice', this.addInvoice);
    },

    updateInvoiceItem() {
      let newInvArr = {
        items: []
      };
      newInvArr.items.push(this.invoiceItem);

      if (!this.invoiceItem.item_id) {
        this.$store.dispatch('invoice/addItemToInvoice', newInvArr);
        this.modals.classic = false;
      } else {
        this.$store.dispatch('invoice/updateInvoiceItem', this.invoiceItem);
        this.modals.classic = false;
      }
    },

    deleteInvoiceItem(id) {
      let data = {
        item_id: id
      };
      if (!confirm('Are you sure?')) return;
      this.$store.dispatch('invoice/deleteInvoiceItem', data);
    },

    downloadPdf() {
      const printContents = document.getElementById('invoice-container').innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/invoice/preview/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var preview_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/invoice/preview/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  preview_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "14923388"
  
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