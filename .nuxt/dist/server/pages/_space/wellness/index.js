exports.ids = [74];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {//
//
//
//
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
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    slotsList() {
      return _.sortBy(this.data.slots, 'day');
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/index.vue?vue&type=template&id=1be4327a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Wellness","subtitle":"All"}}),_vm._v(" "),_c('nuxt-link',{staticClass:"btn btn-primary",attrs:{"to":{ name: 'space-wellness-add'}}},[_vm._v("Add Wellness")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"row equal\">","</div>",_vm._l((_vm.sessions),function(session){return _vm._ssrNode("<div class=\"col-md-4\">","</div>",[_c('card',{staticClass:"sh-book-res"},[_c('div',{staticClass:"m-n25 img-wrap"},[_c('img',{staticClass:"img-fluid",attrs:{"src":session.banner_url,"alt":"banner_url"}}),_vm._v(" "),_c('badge',[_vm._v(_vm._s(session.wellness_category.name))])],1),_vm._v(" "),_c('div',{staticClass:"mr-t-50"},[_c('div',{staticClass:"d-flex justify-content-between mr-b-20"},[_c('h3',[_vm._v(_vm._s(session.name))]),_vm._v(" "),_c('h3',{staticClass:"text-muted"},[_vm._v(_vm._s(session.price_per_session)+" "+_vm._s(_vm.space.currency)+" / session")])]),_vm._v(" "),_c('p',{staticClass:"text-muted"},[_vm._v(_vm._s(session.description))])]),_vm._v(" "),_c('div',{staticClass:"mt-2"},[_c('p',[_vm._v("Location: "+_vm._s(session.location))]),_vm._v(" "),_c('p',[_vm._v("Start Date: "+_vm._s(_vm.$moment(session.start_date).format('MMM Do YYYY H:mm:ss')))]),_vm._v(" "),_c('p',[_vm._v("End Date: "+_vm._s(_vm.$moment(session.end_date).format('MMM Do YYYY H:mm:ss')))])]),_vm._v(" "),_c('slots',{attrs:{"data":session}}),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-between"},[_c('nuxt-link',{attrs:{"to":{ name: 'space-wellness-id', params: { id: session.id }}}},[_c('i',{staticClass:"ti-pencil"}),_vm._v(" Edit Resource\n              ")]),_vm._v(" "),_c('a',{staticClass:"text-danger",on:{"click":function($event){return _vm.deleteWellness(session.id)}}},[_c('i',{staticClass:"ti-trash"}),_vm._v(" Delete Resource\n              ")])],1)])],1)],1)}),0),_vm._ssrNode(" "),(_vm.sessions.length == 0)?_c('card',[_c('p',[_vm._v("No sessions available")])]):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/wellness/index.vue?vue&type=template&id=1be4327a&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/wellness/slots.vue?vue&type=template&id=0f16afaa&
var slotsvue_type_template_id_0f16afaa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"mr-t-20\"><p style=\"text-decoration: underline;\">Slots</p> "+(_vm._ssrList((_vm.slotsList()),function(slot,i){return ("<p>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$moment().day(slot.day).format('dddd'))+" "+_vm._s(slot.start)+" - "+_vm._s(_vm.$moment(slot.start, "H:mm").add(slot.duration, 'minutes').format('HH:mm'))+"\n    ")+"</p>")}))+"</div>")])}
var slotsvue_type_template_id_0f16afaa_staticRenderFns = []


// CONCATENATED MODULE: ./components/wellness/slots.vue?vue&type=template&id=0f16afaa&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/wellness/slots.vue?vue&type=script&lang=js&
var slotsvue_type_script_lang_js_ = __webpack_require__(130);

// CONCATENATED MODULE: ./components/wellness/slots.vue?vue&type=script&lang=js&
 /* harmony default export */ var wellness_slotsvue_type_script_lang_js_ = (slotsvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/wellness/slots.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wellness_slotsvue_type_script_lang_js_,
  slotsvue_type_template_id_0f16afaa_render,
  slotsvue_type_template_id_0f16afaa_staticRenderFns,
  false,
  injectStyles,
  null,
  "c66dd98a"
  
)

/* harmony default export */ var slots = (component.exports);
// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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





/* harmony default export */ var wellnessvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */],
    Slots: slots
  },

  async asyncData({
    store,
    $wellness,
    error
  }) {
    await $wellness.getAllWellnessSessions().then(({
      data
    }) => {
      console.log(data);
      store.commit('wellness/setSessions', data);
    });
  },

  data: () => ({}),
  computed: { ...Object(external_vuex_["mapState"])({
      sessions: state => state.wellness.sessions.data,
      meta: state => state.wellness.sessions.meta,
      links: state => state.wellness.sessions.links,
      space: state => state.space.currentSpace
    })
  },
  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$wellness.getAllWellnessSessions(next);
    },

    prev() {
      const {
        prev
      } = this.links;
      this.$wellness.getAllWellnessSessions(prev);
    },

    deleteWellness(id) {
      if (!confirm('Are you sure?')) return;
      this.$wellness.deleteWellnessSession(id).then(res => {
        location.reload();
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data.errors), {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/wellness/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_wellnessvue_type_script_lang_js_ = (wellnessvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/_space/wellness/index.vue



function wellness_injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var wellness_component = Object(componentNormalizer["a" /* default */])(
  _space_wellnessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  wellness_injectStyles,
  null,
  "79bce07c"
  
)

/* harmony default export */ var wellness = __webpack_exports__["default"] = (wellness_component.exports);

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