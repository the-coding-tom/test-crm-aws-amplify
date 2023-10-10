exports.ids = [19];
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
  "77e4a826"
  
)

/* harmony default export */ var UploadButton = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/inventory/_id/edit.vue?vue&type=template&id=36abe43e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.editInventory($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Edit Inventory"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_c('i',{staticClass:"fa fa-save"}),_vm._v(" Update Inventory\n        ")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Update Inventory")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Name","placeholder":"Inventory Name"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.description),expression:"description"}],staticClass:"form-control",attrs:{"placeholder":"Inventory description","rows":"4","max-rows":"6"},domProps:{"value":(_vm.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.description=$event.target.value}}})]),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Capacity","type":"number","placeholder":"0"},model:{value:(_vm.capacity),callback:function ($$v) {_vm.capacity=$$v},expression:"capacity"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Price","type":"number","step":"0.01","placeholder":"0.00"},model:{value:(_vm.price),callback:function ($$v) {_vm.price=$$v},expression:"price"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Eatry Category:")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"Select Category"},model:{value:(_vm.eatry_category_id),callback:function ($$v) {_vm.eatry_category_id=$$v},expression:"eatry_category_id"}},_vm._l((_vm.categories),function(category){return _c('el-option',{key:category.id,attrs:{"label":category.name,"value":category.id}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-group',{attrs:{"label":"Eatry Availability"}},[_c('b-form-checkbox-group',{model:{value:(_vm.eatry_availability),callback:function ($$v) {_vm.eatry_availability=$$v},expression:"eatry_availability"}},[_c('b-form-checkbox',{attrs:{"value":_vm.breakfast}},[_vm._v("Breakfast")]),_vm._v(" "),_c('b-form-checkbox',{attrs:{"value":_vm.lunch}},[_vm._v("Lunch")]),_vm._v(" "),_c('b-form-checkbox',{attrs:{"value":_vm.dinner}},[_vm._v("Dinner")]),_vm._v(" "),_c('b-form-checkbox',{attrs:{"value":_vm.all}},[_vm._v("All Times")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-checkbox',{attrs:{"value":"true"},model:{value:(_vm.can_order),callback:function ($$v) {_vm.can_order=$$v},expression:"can_order"}},[_vm._v("Can members start ordering?")])],1),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-checkbox',{attrs:{"value":"true"},model:{value:(_vm.is_special),callback:function ($$v) {_vm.is_special=$$v},expression:"is_special"}},[_vm._v("Is eatry special?")])],1)])]),_vm._v(" "),_c('UploadButton',{attrs:{"service":"eatry","label":"Upload Inventory Banner (<500KB & size 1125x582)"},model:{value:(_vm.banner_url),callback:function ($$v) {_vm.banner_url=$$v},expression:"banner_url"}})],1)])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/eatry/inventory/_id/edit.vue?vue&type=template&id=36abe43e&

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

// EXTERNAL MODULE: ./components/shack/UploadButton.vue + 3 modules
var UploadButton = __webpack_require__(103);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/inventory/_id/edit.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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





/* harmony default export */ var editvue_type_script_lang_js_ = ({
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
    store,
    $eatry,
    error,
    params
  }) {
    const {
      id
    } = params;
    await $eatry.getAllEatryCategories().then(data => {
      store.commit('eatry/setCategories', data);
    }).catch(err => {
      error({
        statusCode: error.status || 404,
        message: err.response ? JSON.stringify(err.response.data.errors) : err.message
      });
    });
    return await $eatry.getOneEatry(id).then(({
      data
    }) => {
      return { ...data,
        eatry_category_id: data.eatry_category.id,
        id,
        eatry_availability: []
      };
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
      is_special: '',
      breakfast: {
        from: '06:00',
        to: '11:00',
        weekdays: [1, 6]
      },
      lunch: {
        from: '12:00',
        to: '14:00',
        weekdays: [1, 6]
      },
      dinner: {
        from: '15:00',
        to: '00:00',
        weekdays: [1, 6]
      },
      all: {
        from: '00:00',
        to: '00:00',
        weekdays: [1, 6]
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      categories: state => state.eatry.categories.data
    })
  },
  methods: {
    async editInventory() {
      const {
        name,
        description,
        capacity,
        price,
        banner_url,
        eatry_category_id,
        eatry_availability,
        can_order,
        is_special,
        id
      } = this;
      this.loading = !this.loading;
      const payload = {
        name,
        description,
        capacity,
        price,
        banner_url,
        eatry_category_id,
        eatry_availability,
        can_order: Boolean(can_order),
        is_special: Boolean(is_special)
      };
      this.$eatry.updateOneEatry(id, payload).then(({
        data
      }) => {
        this.$bvToast.toast(`Eatry updated successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        setTimeout(() => {
          this.$router.push({
            name: 'space-eatry-inventory'
          });
        }, 3000);
        this.loading = !this.loading;
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
        this.loading = !this.loading;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/eatry/inventory/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/eatry/inventory/_id/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "92698704"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

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


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
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
//# sourceMappingURL=edit.js.map