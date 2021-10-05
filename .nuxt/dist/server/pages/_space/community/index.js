exports.ids = [9];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/UploadButton.vue?vue&type=template&id=04e589d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"preview\" class=\"mr-b-20\">"+((_vm.url)?("<img"+(_vm._ssrAttr("src",_vm.url))+">"):"<!---->")+"</div> <div class=\"bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0\"><button class=\"btn\"><i class=\"fa fa-paperclip mr-r-10\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.label))+"</button> <input"+(_vm._ssrAttr("name",_vm.name))+" type=\"file\" accept=\"image/*\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/UploadButton.vue?vue&type=template&id=04e589d2&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/UploadButton.vue?vue&type=script&lang=js&
var UploadButtonvue_type_script_lang_js_ = __webpack_require__(98);

// CONCATENATED MODULE: ./components/shack/UploadButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_UploadButtonvue_type_script_lang_js_ = (UploadButtonvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/UploadButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_UploadButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1d0a7a84"
  
)

/* harmony default export */ var UploadButton = __webpack_exports__["a"] = (component.exports);

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

/***/ 115:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/community/index.vue?vue&type=template&id=f5ea0ada&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.postMessage.show)?_c('TopAlert',{attrs:{"type":_vm.postMessage.type}},[_c('i',{class:_vm.postMessage.icon}),_vm._v(" "+_vm._s(_vm.postMessage.text)+"\n  ")]):_vm._e(),_vm._ssrNode(" "),_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Community"}})],1)]),_vm._ssrNode(" "),_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.postFeed($event)}}},[_c('div',{staticClass:"container-fluid mt--6 sh_community-post"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-5"},[_c('card',[_c('div',{staticClass:"d-flex mr-b-10"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.feed_text),expression:"feed_text"}],staticClass:"form-control no-border resize-none",attrs:{"placeholder":"Share updates with SHACK15 community","rows":"6","aria-label":"Comment textarea"},domProps:{"value":(_vm.feed_text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.feed_text=$event.target.value}}})]),_vm._v(" "),(_vm.addFeed.attachment_url)?_c('div',{staticClass:"d-flex sh_modal-resource justify-content-between align-items-center bdr-b pd-b-10 mr-b-10"},[_c('div',{staticClass:"d-flex align-items-center"},[_c('img',{staticClass:"avatar mr-r-10",attrs:{"src":_vm.addFeed.attachment_url,"alt":""}}),_vm._v(" "),_c('div',[(_vm.addFeed.attachment_text)?_c('strong',[_vm._v(_vm._s(_vm.addFeed.attachment_text))]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.addFeed.start_time)?_c('span',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$moment(_vm.addFeed.start_time).format('MMM Do YY, h:mm'))+" - "+_vm._s(_vm.$moment(_vm.addFeed.end_time).format('MMM Do YY, h:mm'))+" | "+_vm._s(_vm.addFeed.category))]):_vm._e()])]),_vm._v(" "),_c('a',{staticClass:"align-self-start",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.removeAttach}},[_c('i',{staticClass:"fa fa-times"})])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between align-items-center"},[_c('AttachButton'),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"disabled":_vm.isLoading,"type":"submit"}},[_vm._v("SHARE\n            ")])],1)]),_vm._v(" "),_c('a',{staticClass:"text-muted mr-b-30 block",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){_vm.modals.classic = true}}},[_c('i',{staticClass:"fa fa-question-circle"}),_vm._v(" What can I attach to a post?\n          ")]),_vm._v(" "),_c('modal',{attrs:{"show":_vm.modals.classic},on:{"update:show":function($event){return _vm.$set(_vm.modals, "classic", $event)}}},[_c('h3',{staticClass:"mr-tb-20",attrs:{"slot":"header"},slot:"header"},[_c('i',{staticClass:"fa fa-question-circle"}),_vm._v(" What can I attach to a post?\n            ")]),_vm._v(" "),_c('p',[_vm._v("\n              This space is where members find answers, recommendations or\n              meetups by submitting a request to the SHACK15 Community.\n            ")]),_vm._v(" "),_c('h3',{staticClass:"u-line mr-b-10"},[_vm._v("\n              WHAT TO ATTACH\n            ")]),_vm._v(" "),_c('ul',{staticClass:"pd-l-10"},[_c('li',[_vm._v("Events which have been created")]),_vm._v(" "),_c('li',[_vm._v("Image on events happening within space")]),_vm._v(" "),_c('li',[_vm._v("Featured wellness sessions for the day")])])]),_vm._v(" "),_vm._l((_vm.feeds),function(feed){return _c('card',{key:feed.id},[_c('div',{staticClass:"d-flex justify-content-between"},[_c('div',{staticClass:"d-flex align-items-center"},[(feed.user)?_c('img',{staticClass:"avatar rounded-circle",attrs:{"src":feed.user.picture,"alt":"Image placeholder"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"mr-l-10"},[(feed.user)?_c('div',[_vm._v(_vm._s(feed.user.full_name))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"text-muted"},[_vm._v("\n                    Posted on "+_vm._s(_vm.$moment(feed.created_at).format('MMM-DD'))+"\n                  ")])])]),_vm._v(" "),_c('b-dropdown',{staticClass:"sh_postdd",attrs:{"no-caret":""},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('i',{staticClass:"fa fa-ellipsis-v"})]},proxy:true}],null,true)},[_vm._v(" "),_c('button',{staticClass:"dropdown-item text-danger",attrs:{"type":"button"},on:{"click":function($event){return _vm.deleteFeed(feed.id)}}},[_c('i',{staticClass:"ti-trash"}),_vm._v(" Delete Post\n                ")])])],1),_vm._v(" "),_c('div',{staticClass:"mr-t-20 sh_postcontent"},[_vm._v("\n              "+_vm._s(feed.feed_text)+"\n            ")]),_vm._v(" "),(feed.attachments.length > 0)?_c('div',{staticClass:"d-flex align-items-center"},[(feed.attachments[0].type == 'wellness')?_c('div',[_c('img',{staticClass:"avatar mr-r-10 mt-1",attrs:{"src":feed.attachments[0].wellness.banner_url,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"mt-1"},[_c('p',[_c('strong',[_vm._v(_vm._s(feed.attachments[0].wellness.name))])]),_vm._v(" "),_c('span',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$moment(feed.attachments[0].wellness.start_date).format('MMM Do YY, h:mm'))+" - "+_vm._s(_vm.$moment(feed.attachments[0].wellness.end_date).format('MMM Do YY, h:mm'))+" | "),_c('b-badge',[_vm._v(_vm._s(feed.attachments[0].wellness.wellness_category.name))])],1)])]):_vm._e(),_vm._v(" "),(feed.attachments[0].type == 'event')?_c('div',[_c('img',{staticClass:"avatar mr-r-10 mt-1",attrs:{"src":feed.attachments[0].event.banner_url,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"mt-1"},[_c('p',[_c('strong',[_vm._v(_vm._s(feed.attachments[0].event.name))])]),_vm._v(" "),_c('span',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$moment(feed.attachments[0].event.start_time).format('MMM Do YY, h:mm'))+" - "+_vm._s(_vm.$moment(feed.attachments[0].event.end_time).format('MMM Do YY, h:mm'))+" | "),_c('b-badge',[_vm._v(" "+_vm._s(feed.attachments[0].event.event_category.name))])],1)])]):_vm._e(),_vm._v(" "),(feed.attachments[0].type == 'image')?_c('div',[_c('img',{staticClass:"avatar mr-r-10",attrs:{"src":feed.attachments[0].attachment_url,"alt":""}})]):_vm._e()]):_vm._e()])})],2)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/community/index.vue?vue&type=template&id=f5ea0ada&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/AttachButton.vue?vue&type=template&id=17c1cff5&
var AttachButtonvue_type_template_id_17c1cff5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sh_community-res"},[_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"text-muted block\"><i class=\"fa fa-paperclip mr-r-10\"></i> Add Attachment\n  </a> "),_c('modal',{attrs:{"show":_vm.modals.resource,"size":"lg"},on:{"update:show":function($event){return _vm.$set(_vm.modals, "resource", $event)}}},[_c('h3',{staticClass:"mr-tb-20 u-line",attrs:{"slot":"header"},slot:"header"},[_vm._v("\n      ATTACH RESOURCE\n    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('span',{staticClass:"mr-r-20"},[_vm._v("Select attachment from")]),_vm._v(" "),_c('el-select',{staticClass:"select-danger",attrs:{"placeholder":"pick resource ..."},on:{"change":function($event){return _vm.changeSelect($event)}},model:{value:(_vm.selectOption),callback:function ($$v) {_vm.selectOption=$$v},expression:"selectOption"}},[_c('el-option',{staticClass:"select-danger",attrs:{"value":"event","label":"event"}}),_vm._v(" "),_c('el-option',{staticClass:"select-danger",attrs:{"value":"wellness","label":"wellness"}}),_vm._v(" "),_c('el-option',{staticClass:"select-danger",attrs:{"value":"image","label":"image"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[(_vm.selectOption == 'event')?[_c('div',{staticClass:"mr-t-30 bdr pd-10"},[_c('SearchForm',{attrs:{"loading":_vm.loadingSearch},on:{"search":_vm.getEventResult}}),_vm._v(" "),_c('h4',[_vm._v(_vm._s(_vm.noResult))])],1),_vm._v(" "),_c('div',{staticClass:"mr-t-30 bdr pd-10"},_vm._l((_vm.events),function(event){return _c('div',{key:event.id,staticClass:"d-flex sh_modal-resource justify-content-between align-items-center bdr-b pd-b-10 mr-b-10"},[_c('div',{staticClass:"d-flex align-items-center"},[_c('img',{staticClass:"avatar mr-r-10",attrs:{"src":event.banner_url,"alt":""}}),_vm._v(" "),_c('div',{},[_c('strong',[_vm._v(_vm._s(event.name))]),_vm._v(" "),_c('br'),_vm._v("\n                "+_vm._s(_vm.$moment(event.start_time).format('MMM Do YY, h:mm'))+" - "+_vm._s(_vm.$moment(event.end_time).format('MMM Do YY, h:mm'))+" | "+_vm._s(event.event_category.name)+"\n              ")])]),_vm._v(" "),_c('div',[_c('b-form-radio',{attrs:{"value":event.id,"name":"event"},on:{"change":function($event){return _vm.getAttachment(event, 'event')}}})],1)])}),0)]:_vm._e(),_vm._v(" "),(_vm.selectOption == 'wellness')?[_c('div',{staticClass:"mr-t-30 bdr pd-10"},[_c('SearchForm',{attrs:{"loading":_vm.loadingSearch},on:{"search":_vm.getWellnessResult}}),_vm._v(" "),_c('h4',[_vm._v(_vm._s(_vm.noResult))])],1),_vm._v(" "),_c('div',{staticClass:"mr-t-30 bdr pd-10"},_vm._l((_vm.sessions),function(well){return _c('div',{key:well.id,staticClass:"d-flex sh_modal-resource justify-content-between align-items-center bdr-b pd-b-10 mr-b-10"},[_c('div',{staticClass:"d-flex align-items-center"},[_c('img',{staticClass:"avatar mr-r-10",attrs:{"src":well.banner_url,"alt":""}}),_vm._v(" "),_c('div',{},[_c('strong',[_vm._v(_vm._s(well.name))]),_vm._v(" "),_c('br'),_vm._v("\n                "+_vm._s(_vm.$moment(well.start_date).format('MMM Do YY, h:mm'))+" - "+_vm._s(_vm.$moment(well.end_date).format('MMM Do YY, h:mm'))+" | "+_vm._s(well.wellness_category.name)+"\n              ")])]),_vm._v(" "),_c('div',[_c('b-form-radio',{attrs:{"value":well.id,"name":"wellness"},on:{"change":function($event){return _vm.getAttachment(well, 'wellness')}}})],1)])}),0)]:_vm._e(),_vm._v(" "),(_vm.selectOption=='image')?[_c('UploadButton',{attrs:{"service":"community","label":"Upload File (<500KB & size 1125x582)"},model:{value:(_vm.banner_url),callback:function ($$v) {_vm.banner_url=$$v},expression:"banner_url"}})]:_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12 text-right"},[_c('button',{staticClass:"btn btn-default",attrs:{"type":"button"},on:{"click":_vm.addAttach}},[_vm._v("Add to Post")])])])])],2)}
var AttachButtonvue_type_template_id_17c1cff5_staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/AttachButton.vue?vue&type=template&id=17c1cff5&

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

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/shack/UploadButton.vue + 3 modules
var UploadButton = __webpack_require__(103);

// EXTERNAL MODULE: ./components/shack/SearchForm.vue + 4 modules
var SearchForm = __webpack_require__(105);

// EXTERNAL MODULE: ./util/helper.js
var helper = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/AttachButton.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var AttachButtonvue_type_script_lang_js_ = ({
  components: {
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a,
    UploadButton: UploadButton["a" /* default */],
    SearchForm: SearchForm["a" /* default */]
  },

  data() {
    return {
      selectOption: 'image',
      url: null,
      banner_url: null,
      modals: {
        resource: false
      },
      attachmentSelect: {
        type: 'image',
        attachInfo: null
      },
      loadingSearch: false,
      noResult: null
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      sessions: state => state.wellness.sessions.data,
      events: state => state.events.events
    })
  },
  methods: {
    changeSelect(e) {
      this.noResult = null;

      if (e == 'event') {
        this.getEvents();
      }

      if (e == 'wellness') {
        this.getWellness();
      }

      if (e == 'image') {
        this.attachmentSelect.type = 'image';
      }
    },

    async getWellness() {
      try {
        const {
          data
        } = await this.$wellness.getAllWellnessSessions();
        this.$store.commit('wellness/setSessions', data);
      } catch (error) {
        this.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, helper["a" /* default */].notify.error);
      }
    },

    async getEvents() {
      try {
        const {
          data
        } = await this.$event.getEvents();
        this.$store.commit('events/setEvents', data);
      } catch (error) {
        this.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, helper["a" /* default */].notify.error);
      }
    },

    async getEventResult(e) {
      this.loadingSearch = true;

      try {
        const {
          data
        } = await this.$event.getEventsByName(e);

        if (data.data.length == 0) {
          this.noResult = 'We could not find your search parameter';
        } else {
          this.noResult = null;
        }

        this.loadingSearch = false;
        this.$store.commit('events/setEvents', data.data);
      } catch (error) {
        this.loadingSearch = false;
        this.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, helper["a" /* default */].notify.error);
      }
    },

    async getWellnessResult(e) {
      this.loadingSearch = true;

      try {
        const {
          data
        } = await this.$wellness.getWellnessByName(e);

        if (data.data.length == 0) {
          this.noResult = 'We could not find your search parameter';
        } else {
          this.noResult = null;
        }

        this.loadingSearch = false;
        this.$store.commit('wellness/setSessions', data);
      } catch (error) {
        this.loadingSearch = false;
        this.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, helper["a" /* default */].notify.error);
      }
    },

    getAttachment(data, type) {
      this.attachmentSelect.type = type;
      this.attachmentSelect.attachInfo = data;
    },

    addAttach() {
      if (this.attachmentSelect.type == 'image') {
        const imageData = {
          type: this.attachmentSelect.type,
          banner_url: this.banner_url
        };
        this.$store.commit('community/setAttachment', imageData);
        this.modals.resource = false;
      } else {
        this.$store.commit('community/setAttachment', this.attachmentSelect);
        this.modals.resource = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/shack/AttachButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_AttachButtonvue_type_script_lang_js_ = (AttachButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/AttachButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_AttachButtonvue_type_script_lang_js_,
  AttachButtonvue_type_template_id_17c1cff5_render,
  AttachButtonvue_type_template_id_17c1cff5_staticRenderFns,
  false,
  injectStyles,
  null,
  "203d1e02"
  
)

/* harmony default export */ var AttachButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/TopAlert.vue?vue&type=template&id=12452714&
var TopAlertvue_type_template_id_12452714_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid sh-top_alert"},[_c('base-alert',{attrs:{"type":_vm.type,"dismissible":""}},[_vm._t("default"),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"alert","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])],2)],1)}
var TopAlertvue_type_template_id_12452714_staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/TopAlert.vue?vue&type=template&id=12452714&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/TopAlert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TopAlertvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String,
      default: 'success'
    },
    content: {
      type: String,
      default: 'Doloremque non sint, a quam facilis consectetur possimus asperiores. Dicta earum adipisci ipsam.'
    }
  }
});
// CONCATENATED MODULE: ./components/shack/TopAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_TopAlertvue_type_script_lang_js_ = (TopAlertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shack/TopAlert.vue



function TopAlert_injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopAlert_component = Object(componentNormalizer["a" /* default */])(
  shack_TopAlertvue_type_script_lang_js_,
  TopAlertvue_type_template_id_12452714_render,
  TopAlertvue_type_template_id_12452714_staticRenderFns,
  false,
  TopAlert_injectStyles,
  null,
  "681f72b2"
  
)

/* harmony default export */ var TopAlert = (TopAlert_component.exports);
// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/community/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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






/* harmony default export */ var communityvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    AttachButton: AttachButton,
    MainTitle: MainTitle["a" /* default */],
    TopAlert: TopAlert
  },

  async asyncData({
    store
  }) {
    await store.dispatch('community/getAllFeeds');
  },

  data() {
    return {
      modals: {
        classic: false
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      feeds: state => state.community.feeds.data,
      addFeed: state => state.community.addFeed,
      isLoading: state => state.community.isLoading,
      postMessage: state => state.community.postMessage
    }),
    ...Object(external_vuex_map_fields_["mapFields"])({
      feed_text: 'community.addFeed.feed_text'
    })
  },
  methods: {
    postFeed() {
      this.$store.commit('community/setIsLoading');
      this.$store.dispatch('community/createFeed');
    },

    deleteFeed(id) {
      if (!confirm('Are you sure?')) return;
      this.$store.dispatch('community/deleteFeed', id);
    },

    removeAttach() {
      this.$store.commit('community/resetAttachment');
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/community/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_communityvue_type_script_lang_js_ = (communityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/_space/community/index.vue



function community_injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var community_component = Object(componentNormalizer["a" /* default */])(
  _space_communityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  community_injectStyles,
  null,
  "326ae7c8"
  
)

/* harmony default export */ var community = __webpack_exports__["default"] = (community_component.exports);

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

/***/ 96:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    service: {
      type: String,
      default: 'images'
    },
    url: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      publicUrl: null
    };
  },

  methods: {
    async onFileChange(e) {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      if (file.size > 500000) {
        this.$bvToast.toast('File size must not be greater than 500kb', {
          variant: 'warning'
        });
        return;
      }

      let mime = file.type;
      this.url = URL.createObjectURL(file);
      let upload = await this.getSignedUrl(mime);
      this.publicUrl = upload.public_url;
      this.$bvToast.toast('Uploading image. Please wait...'); //upload image here

      let uploadUrl = await this.uploadUrl(upload.signed_url, file, mime).then(res => {
        this.$emit('input', this.publicUrl);
        this.$bvToast.toast('Image uploaded successfully', {
          variant: 'success',
          solid: true
        });
      }).catch(e => {
        this.$bvToast.toast(e.message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    getSignedUrl(mime) {
      const {
        service
      } = this;
      return this.$images.getSignedUrl(service, mime).then(({
        data
      }) => {
        return data.data;
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data.errors), {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    uploadUrl(url, file, mime) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, file, {
        headers: {
          'Content-Type': mime
        }
      }).then(res => {
        return res;
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data), {
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(83)["URL"]))

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=index.js.map