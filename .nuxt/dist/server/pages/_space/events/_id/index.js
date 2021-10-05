exports.ids = [27];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertMarkdownToHtml; });
const convertMarkdownToHtml = text => {
  var showdown = __webpack_require__(86);

  var converter = new showdown.Converter();
  const eventDescription = text.replace(/([ ]*\n)/g, `<br/>\n`);
  const finalDescription = eventDescription.replace(/(<br\/>\n<br\/>\n<br\/>)/g, `<br/><br/>`);
  return converter.makeHtml(finalDescription);
};

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b5af1bfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b5af1bfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b5af1bfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b5af1bfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b5af1bfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b5af1bfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/_id/index.vue?vue&type=template&id=b5af1bfe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Preview Event"}}),_vm._v(" "),_c('b-button',{attrs:{"to":{ name: 'space-events-id-edit', params: { id: _vm.event.id } },"variant":"primary"}},[_c('i',{staticClass:"ti-pencil"}),_vm._v(" Edit Event\n      ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\" data-v-b5af1bfe>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-b5af1bfe>","</div>",[_vm._ssrNode("<div class=\"col-md-4\" data-v-b5af1bfe>","</div>",[_c('card',{staticClass:"sh-eventpv"},[_c('div',{staticClass:"m-n25 img-wrap"},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.event.banner_url,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"pv-content"},[_c('h3',[_vm._v(_vm._s(_vm.event.name))]),_vm._v(" "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.event.description)}}),_vm._v(" "),_c('badge',{attrs:{"type":"info"}},[_vm._v(_vm._s(_vm.event.event_category.name))])],1),_vm._v(" "),_c('div',{staticClass:"pv-footer"},[_c('p',[_vm._v("\n              Price:\n              "+_vm._s(_vm._f("currency")(_vm.event.price,_vm.currentSpace.currency_symbol))+" /\n              "),_c('span',{staticClass:"text-muted"},[_vm._v("ticket")])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),(_vm.event.room)?_c('div',[_c('p',[_vm._v(_vm._s(_vm.event.room.name))])]):_c('div',[_c('p',[_vm._v(_vm._s(_vm.event.external_location))])])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mr-b-30\" data-v-b5af1bfe>","</div>",[_c('b-button',{staticClass:"text-primary",attrs:{"to":{ name: 'space-events' },"variant":"transparent"}},[_c('i',{staticClass:"fa fa-angle-left mr-r-10"}),_vm._v(" Back\n          ")])],1)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/events/_id/index.vue?vue&type=template&id=b5af1bfe&scoped=true&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: ./util/convertMarkdownToHtml.js
var convertMarkdownToHtml = __webpack_require__(106);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainTitle: MainTitle["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */]
  },

  async asyncData({
    store,
    error,
    params,
    $event
  }) {
    const {
      id
    } = params;
    return await $event.getEvent(id).then(({
      data
    }) => {
      return {
        event: data
      };
    }).catch(e => {
      error({
        statusCode: e.statusCode,
        message: e.response ? JSON.stringify(e.response.data.errors) : e.message
      });
    });
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace.subdomain,
      currentSpace: state => state.space.currentSpace // event: state => state.events.currentEvent

    }),

    time() {
      const {
        start_time,
        end_time
      } = this.event;
      return `${this.$moment(start_time).format('MMMM DD YYYY')}, ${this.$moment(start_time).format('HH:mm')} - ${this.$moment(end_time).format('HH:mm')} `;
    }

  },

  mounted() {
    this.event.description = Object(convertMarkdownToHtml["a" /* convertMarkdownToHtml */])(this.event.description);
  }

});
// CONCATENATED MODULE: ./pages/_space/events/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var events_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/events/_id/index.vue



function injectStyles (context) {
  
  var style1 = __webpack_require__(209)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  events_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b5af1bfe",
  "9f3cc34a"
  
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

/***/ })

};;
//# sourceMappingURL=index.js.map