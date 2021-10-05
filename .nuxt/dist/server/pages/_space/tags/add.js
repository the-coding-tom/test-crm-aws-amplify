exports.ids = [65];
exports.modules = {

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/tags/add.vue?vue&type=template&id=46521cea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addTag($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Setup Tag"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Add Tag")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',{staticClass:"col-md-6"},[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Add New Tag")]),_vm._v(" "),_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Name of Tag","placeholder":"ux","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Tag Type","required":"","placeholder":"profile_interests"},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}})],1)])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/tags/add.vue?vue&type=template&id=46521cea&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/tags/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



/* harmony default export */ var addvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */]
  },

  data() {
    return {
      name: '',
      type: '',
      loading: false
    };
  },

  methods: {
    addTag() {
      const {
        name,
        type
      } = this;
      this.loading = !this.loading;
      this.$tag.addTag({
        name,
        type
      }).then(({
        data
      }) => {
        this.$bvToast.toast(`Tag ~${name}~ added successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.loading = !this.loading;
        this.$router.push({
          name: 'space-tags'
        });
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
// CONCATENATED MODULE: ./pages/_space/tags/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var tags_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/tags/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tags_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f2e973f"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=add.js.map