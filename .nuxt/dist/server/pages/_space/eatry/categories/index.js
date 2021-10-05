exports.ids = [18];
exports.modules = {

/***/ 100:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/categories/index.vue?vue&type=template&id=955e08f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Eatry","subtitle":"Category"}}),_vm._v(" "),_c('div',[_c('b-button',{staticClass:"text-white",attrs:{"disabled":_vm.loading,"to":{name:'space-eatry-categories-add'},"variant":"primary"}},[_vm._v("Add Category")])],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_c('el-table',{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{"data":_vm.categories,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Name","min-width":"100px","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_vm._v(_vm._s(row.name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Description","prop":"type","min-width":"150px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.description))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"100px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-primary",attrs:{"disabled":_vm.loading,"variant":"transparent"},on:{"click":function($event){return _vm.showModal(row)}}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit\n              ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"100px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-danger",attrs:{"disabled":_vm.loading,"variant":"transparent"},on:{"click":function($event){return _vm.removeCategory(row.id)}}},[_c('i',{staticClass:"fa fa-trash"}),_vm._v(" Remove\n              ")])]}}])})],1)],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('b-modal',{attrs:{"id":"modal-edit-eatry-category","hide-footer":""},scopedSlots:_vm._u([{key:"modal-title",fn:function(){return [_vm._v("Eatry Category")]},proxy:true}])},[_vm._v(" "),_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.editCategory($event)}}},[_c('div',[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Name","placeholder":"Fruit drink","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Description"}},[_c('b-form-textarea',{staticClass:"col-md-12",attrs:{"placeholder":"Drink for everyone","rows":"3"},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('b-button',{attrs:{"disabled":_vm.loading,"variant":"primary","type":"submit"}},[_c('i',{staticClass:"fa fa-save"}),_vm._v("\n                Update Category\n              ")]),_vm._v(" "),_c('b-button',{staticClass:"text-danger",attrs:{"disabled":_vm.loading,"variant":"transparent"},on:{"click":function($event){return _vm.closeModal('modal-edit-eatry-category')}}},[_vm._v("x Cancel")])],1)],1)],1)])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/eatry/categories/index.vue?vue&type=template&id=955e08f2&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table-column.css
var table_column = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/table-column"
var table_column_ = __webpack_require__(84);
var lib_table_column_default = /*#__PURE__*/__webpack_require__.n(table_column_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table.css
var table = __webpack_require__(101);

// EXTERNAL MODULE: external "element-ui/lib/table"
var table_ = __webpack_require__(85);
var lib_table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/categories/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_table_default.a.name]: lib_table_default.a,
    [lib_table_column_default.a.name]: lib_table_column_default.a
  },

  async asyncData({
    error,
    $eatry,
    store
  }) {
    await $eatry.getAllEatryCategories().then(data => {
      store.commit('eatry/setCategories', data);
    }).catch(err => {
      error({
        statusCode: error.status || 404,
        message: err.response ? JSON.stringify(err.response.data.errors) : err.message
      });
    });
  },

  data() {
    return {
      loading: false,
      name: '',
      description: '',
      currentCategory: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      categories: state => state.eatry.categories.data,
      meta: state => state.eatry.categories.meta,
      links: state => state.eatry.categories.links
    })
  },
  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$eatry.getAllEatryCategories(next).then(({
        data
      }) => {
        this.$store.commit('eatry/setCategories', data);
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    prev() {
      const {
        prev
      } = this.links;
      this.$eatry.getAllEatryCategories(prev).then(({
        data
      }) => {
        this.$store.commit('eatry/setCategories', data);
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    showModal(data) {
      this.$bvModal.show('modal-edit-eatry-category');
      this.name = data.name;
      this.description = data.description;
      this.currentCategory = data.id;
    },

    closeModal() {
      this.$bvModal.hide('modal-edit-eatry-category');
    },

    removeCategory(id) {
      this.loading = !this.loading;
      this.$eatry.removeOneCategory(id).then(res => {
        this.loading = !this.loading;
        this.$store.commit('eatry/removeOneCategory', id);
        this.$bvToast.toast('Category successfully removed', {
          title: 'Success',
          variant: 'success',
          solid: true
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
    },

    editCategory() {
      const {
        name,
        description,
        currentCategory
      } = this;
      this.loading = !this.loading;
      this.$eatry.updateOneCategory(currentCategory, {
        name,
        description
      }).then(({
        data
      }) => {
        this.loading = !this.loading;
        this.$store.commit('eatry/updateOneCategory', data);
        this.closeModal();
        this.$bvToast.toast('Category successfully updated', {
          title: 'Success',
          variant: 'success',
          solid: true
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
// CONCATENATED MODULE: ./pages/_space/eatry/categories/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var eatry_categoriesvue_type_script_lang_js_ = (categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/eatry/categories/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  eatry_categoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bf0f6bba"
  
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
  "bd5e01f8"
  
)

/* harmony default export */ var MainTitle = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map