exports.ids = [64];
exports.modules = {

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/settings/index.vue?vue&type=template&id=3a6e941b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.changePassword($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Settings","subtitle":"Change Password"}})],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('card',[_c('div',{staticClass:"row"},[_c('base-input',{staticClass:"col-md-6",attrs:{"id":"currentPassword","type":"password","label":"Current Password","placeholder":"Current Password"},model:{value:(_vm.old_password),callback:function ($$v) {_vm.old_password=$$v},expression:"old_password"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"newPassword","type":"password","label":"New Password","placeholder":"New Password"},model:{value:(_vm.new_password),callback:function ($$v) {_vm.new_password=$$v},expression:"new_password"}}),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('b-button',{attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary","block":""}},[_vm._v("Save")])],1)],1)])],1)])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/settings/index.vue?vue&type=template&id=3a6e941b&

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    MainTitle: MainTitle["a" /* default */]
  },

  data() {
    return {
      loading: false,
      new_password: '',
      old_password: ''
    };
  },

  methods: {
    changePassword() {
      this.loading = !this.loading;
      const {
        new_password,
        old_password
      } = this;
      this.$settings.changePassword({
        new_password,
        old_password
      }).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Password changed successfully', {
          title: 'Success',
          variant: 'success'
        });
      }).catch(e => {
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.loading = !this.loading;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/settings/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _space_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "52c64262"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=index.js.map