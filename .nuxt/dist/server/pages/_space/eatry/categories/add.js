exports.ids = [17];
exports.modules = {

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/categories/add.vue?vue&type=template&id=227bfbee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addCategory($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Setup Category"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_c('i',{staticClass:"fa fa-save"}),_vm._v(" Add Category\n        ")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',{staticClass:"col-md-6"},[_c('h3',{staticClass:"mb-4 ml--2"},[_vm._v("Add New Category")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Name","placeholder":"Fruit drink","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Description"}},[_c('b-form-textarea',{staticClass:"col-md-12",attrs:{"placeholder":"Drink for everyone","rows":"3"},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1)],1)])])])],1),_vm._v(" "),_c('b-button',{staticClass:"text-primary mb-2",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"ti-angle-left"}),_vm._v(" Back\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/eatry/categories/add.vue?vue&type=template&id=227bfbee&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/categories/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      name: '',
      description: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    addCategory() {
      const {
        name,
        description
      } = this;
      this.loading = !this.loading;
      this.$eatry.addOneCategory({
        name,
        description
      }).then(({
        data
      }) => {
        this.loading = !this.loading;
        this.$bvToast.toast(`${name} add successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        setTimeout(() => {
          this.$router.push({
            name: 'space-eatry-categories'
          });
        }, 3000);
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
// CONCATENATED MODULE: ./pages/_space/eatry/categories/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/eatry/categories/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3be6969c"
  
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