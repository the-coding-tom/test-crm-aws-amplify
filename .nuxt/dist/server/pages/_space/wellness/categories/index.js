exports.ids = [74];
exports.modules = {

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/categories/index.vue?vue&type=template&id=7b0ca754&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateCategory($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between py-4"},[_c('MainTitle',{attrs:{"title":"Resource Categories"}}),_vm._v(" "),_c('div',[_c('b-button',{staticClass:"text-danger mr-r-20",attrs:{"disabled":!_vm.cat,"variant":"transparent"},on:{"click":_vm.deleteCategory}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Remove Category")]),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary",staticStyle:{"color":"white"},attrs:{"type":"submit"}},[_vm._v("Update Category")])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Update Category")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('base-input',{staticClass:"col-md-4",attrs:{"label":"Name","name":"name","required":"","placeholder":"Category Name"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-3",attrs:{"required":"","label":"Color Tag","placeholder":"#4C4D4F"},model:{value:(_vm.color),callback:function ($$v) {_vm.color=$$v},expression:"color"}})],1),_vm._v(" "),_c('div',{staticClass:"row mr-t-40"},[_c('b-form-radio-group',{staticClass:"col-md-6"},[_c('div',{staticClass:"row"},_vm._l((_vm.categories),function(category){return _c('div',{key:category.id,staticClass:"col-md-6"},[_c('b-form-radio',{attrs:{"value":category.id},on:{"change":function($event){return _vm.changeCategory(category)}},model:{value:(_vm.cat),callback:function ($$v) {_vm.cat=$$v},expression:"cat"}},[_vm._v(_vm._s(category.name))])],1)}),0)])],1)])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/wellness/categories/index.vue?vue&type=template&id=7b0ca754&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/categories/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




/* harmony default export */ var categoriesvue_type_script_lang_js_ = ({
  layout: 'ShackDash',

  async asyncData({
    store,
    $wellness
  }) {
    await $wellness.getWellnessCategories().then(({
      data
    }) => {
      store.commit('wellness/setCategories', data);
    });
  },

  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */]
  },
  data: () => ({
    cat: null,
    name: null,
    color: null
  }),
  computed: { ...Object(external_vuex_["mapState"])({
      categories: state => state.wellness.categories.data,
      meta: state => state.wellness.categories.meta,
      links: state => state.wellness.categories.links
    })
  },
  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$wellness.getWellnessCategories(next);
    },

    prev() {
      const {
        prev
      } = this.links;
      this.$wellness.getWellnessCategories(prev);
    },

    changeCategory(cat) {
      this.name = cat.name;
      this.color = cat.color;
    },

    updateCategory() {
      const {
        cat,
        name,
        color
      } = this;
      this.$wellness.updateWellnessCategory(cat, {
        name,
        color
      }).then(res => {
        if (res.data) {
          this.$bvToast.toast('Wellness category updated successfully', {
            title: `Success`,
            variant: 'success',
            solid: true
          });
        }
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

    deleteCategory() {
      if (!confirm('Are you sure?')) return;
      const {
        cat
      } = this;
      this.$wellness.deleteWellnessCategory(cat).then(res => {
        location.reload();
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data.message), {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/wellness/categories/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var wellness_categoriesvue_type_script_lang_js_ = (categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/wellness/categories/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wellness_categoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "295d0c7d"
  
)

/* harmony default export */ var categories = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=index.js.map