exports.ids = [67];
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/_id/index.vue?vue&type=template&id=23905dce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateWellness($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Wellness"}}),_vm._v(" "),_c('b-button',{attrs:{"to":((_vm.$route.path) + "/slots"),"variant":"info"}},[_vm._v("\n          Update Slots\n        ")]),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary",staticStyle:{"color":"white"},attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Update Wellness")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Wellness Details")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Name","required":"","placeholder":"Awesome Wellness Sesstion"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.description),expression:"description"}],staticClass:"form-control",attrs:{"required":"","placeholder":"Add details about the wellness","rows":"4","max-rows":"6"},domProps:{"value":(_vm.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.description=$event.target.value}}})]),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Start Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm:ss","value-type":"format","confirm":"","type":"datetime","placeholder":"Start Date"},on:{"change":_vm.setEndDate},model:{value:(_vm.start_date),callback:function ($$v) {_vm.start_date=$$v},expression:"start_date"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"End Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm:ss","value-type":"format","confirm":"","type":"datetime","placeholder":"End Date"},model:{value:(_vm.end_date),callback:function ($$v) {_vm.end_date=$$v},expression:"end_date"}})],1)],1),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Price Per Session","type":"number","step":"0.01","placeholder":"0.00"},model:{value:(_vm.price_per_session),callback:function ($$v) {_vm.price_per_session=$$v},expression:"price_per_session"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Location","type":"text","placeholder":"Open Lounge"},model:{value:(_vm.location),callback:function ($$v) {_vm.location=$$v},expression:"location"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('div',{staticClass:"form-group col-md-6"},[_c('label',[_vm._v("Wellness Category:")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"Select Category","required":""},model:{value:(_vm.wellness_category_id),callback:function ($$v) {_vm.wellness_category_id=$$v},expression:"wellness_category_id"}},_vm._l((_vm.categories),function(category){return _c('el-option',{key:category.id,attrs:{"label":category.name,"value":category.id}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"form-group col-md-6"},[_c('label',[_vm._v("Duration:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"number","placeholder":"30"},model:{value:(_vm.duration),callback:function ($$v) {_vm.duration=$$v},expression:"duration"}}),_vm._v(" "),_c('b-form-text',[_vm._v("Duration should be a number that denotes minutes. E.g. 30 is 30 mins")])],1)])]),_vm._v(" "),_c('UploadButton',{attrs:{"url":_vm.banner_url,"service":"wellness","label":"Upload File (<500KB & size 1125x582)"},model:{value:(_vm.banner_url),callback:function ($$v) {_vm.banner_url=$$v},expression:"banner_url"}})],1)])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/wellness/_id/index.vue?vue&type=template&id=23905dce&

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

// EXTERNAL MODULE: ./components/shack/UploadButton.vue + 3 modules
var UploadButton = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/_id/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UploadButton: UploadButton["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */],
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },

  async asyncData({
    $wellness,
    route,
    error
  }) {
    let categories, session;
    await $wellness.getWellnessCategories().then(({
      data
    }) => {
      categories = data.data;
    });
    await $wellness.getAWellnessSession(route.params.id).then(({
      data
    }) => {
      session = data.data;
    }).catch(({
      response
    }) => {
      error({
        statusCode: 404,
        message: JSON.stringify(response.data.message)
      });
    });
    return {
      categories,
      ...session,
      wellness_category_id: categories[0].id
    };
  },

  data() {
    return {
      loading: false,
      name: '',
      description: '',
      price_per_session: 0,
      start_date: '',
      end_date: '',
      location: '',
      duration: 30,
      weekly: true,
      wellness_category_id: null,
      slots: [{
        day: 0,
        start: '08:00',
        capacity: 1
      }],
      banner_url: null,
      selects: [{
        text: 'Sunday',
        value: 0
      }, {
        text: 'Monday',
        value: 1
      }, {
        text: 'Tuesday',
        value: 2
      }, {
        text: 'Wednesday',
        value: 3
      }, {
        text: 'Thursday',
        value: 4
      }, {
        text: 'Friday',
        value: 5
      }, {
        text: 'Saturday',
        value: 6
      }],
      categories: []
    };
  },

  mounted() {
    this.start_date = this.$moment().add(1, 'hour').format('YYYY-MM-DD HH:00:00');
    this.end_date = this.$moment(this.start_date).add(this.duration, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    this.slots[0].day = this.$moment().day();
    this.slots[0].start = this.$moment(this.start_date).format('HH:mm');
  },

  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },

    addSlot() {
      const {
        start_date
      } = this;
      this.slots.push({
        day: this.$moment(start_date).day(),
        start: this.$moment(start_date).format('HH:mm'),
        capacity: 1
      });
    },

    removeSlot(i) {
      this.slots.splice(i, 1);
    },

    setEndDate() {
      const {
        duration,
        start_date
      } = this;
      this.slots[0].day = this.$moment(start_date).day();
      this.slots[0].start = this.$moment(start_date).format('HH:mm');
      this.end_date = this.$moment(start_date).add(duration, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    },

    updateWellness() {
      const {
        id,
        name,
        description,
        banner_url,
        price_per_session,
        duration,
        slots,
        location,
        start_date,
        end_date,
        weekly,
        wellness_category_id
      } = this;
      const payload = {
        name,
        description,
        banner_url,
        location,
        start_date,
        end_date,
        wellness_category_id,
        price_per_session
      };

      if (!banner_url) {
        this.$bvToast.toast('No image provided or please wait for image to complete upload');
      }

      this.toggleLoading();
      this.$wellness.updateWellnessSession(id, payload).then(({
        data
      }) => {
        this.$bvToast.toast('Wellness updated successfully', {
          variant: 'success',
          solid: true
        });
        this.$router.go(-1);
      }).catch(({
        response
      }) => {
        this.toggleLoading();
        this.$bvToast.toast(JSON.stringify(response.data.errors));
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/wellness/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var wellness_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/wellness/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wellness_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0df95d67"
  
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