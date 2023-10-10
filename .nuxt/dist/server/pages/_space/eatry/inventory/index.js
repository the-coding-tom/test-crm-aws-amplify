exports.ids = [22];
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

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/inventory/index.vue?vue&type=template&id=293838fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Inventory","subtitle":"Eatry"}}),_vm._v(" "),_c('b-button',{staticClass:"text-white",attrs:{"to":{name:'space-eatry-inventory-add'},"squared":"","variant":"primary"}},[_vm._v("Add Inventory")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\" data-v-293838fc>","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\" data-v-293838fc>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-293838fc>","</div>",[_c('el-table',{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{"data":_vm.eatries,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Name","min-width":"140px","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_vm._v(_vm._s(row.name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Category","min-width":"140px","prop":"eatry_category","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_vm._v(_vm._s(row.eatry_category.name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Price","prop":"price","min-width":"120px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(_vm.space.currency_symbol)+" "+_vm._s(row.price))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Capacity","prop":"capacity","min-width":"120px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.capacity))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Can Order ?","prop":"can_order","min-width":"120px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [(row.can_order)?_c('div',[_c('b-button',{attrs:{"variant":"success"}},[_vm._v("Yes")])],1):_c('div',[_c('b-button',{attrs:{"variant":"danger"}},[_vm._v("No")])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"View","min-width":"100px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-white",attrs:{"disabled":_vm.loading,"to":{name:'space-eatry-inventory-id', params:{id: row.id}},"variant":"primary"}},[_c('i',{staticClass:"fa fa-eye"})])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"150px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-primary",attrs:{"disabled":_vm.loading,"to":{name:'space-eatry-inventory-id-edit', params:{id: row.id}},"variant":"transparent"}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit\n              ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"160px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-danger",attrs:{"disabled":_vm.loading,"variant":"transparent"},on:{"click":function($event){return _vm.removeEatry(row.id)}}},[_c('i',{staticClass:"fa fa-trash"}),_vm._v(" Remove\n              ")])]}}])})],1)],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-293838fc>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1),_vm._ssrNode(" "),_c('b-button',{staticClass:"text-primary mb-2",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"ti-angle-left"}),_vm._v(" Back\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/eatry/inventory/index.vue?vue&type=template&id=293838fc&scoped=true&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table-column.css
var table_column = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(21);

// EXTERNAL MODULE: external "element-ui/lib/table-column"
var table_column_ = __webpack_require__(84);
var lib_table_column_default = /*#__PURE__*/__webpack_require__.n(table_column_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table.css
var table = __webpack_require__(101);

// EXTERNAL MODULE: external "element-ui/lib/table"
var table_ = __webpack_require__(85);
var lib_table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/eatry/inventory/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



/* harmony default export */ var inventoryvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_table_default.a.name]: lib_table_default.a,
    [lib_table_column_default.a.name]: lib_table_column_default.a
  },

  async asyncData({
    $eatry,
    store,
    error
  }) {
    await $eatry.getAllEatries().then(data => {
      store.commit('eatry/setEatries', data);
    }).catch(err => {
      error({
        statusCode: err.status || 404,
        message: err.response ? JSON.stringify(err.response.data.errors) : err.message
      });
    });
  },

  data() {
    return {
      loading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace,
      eatries: state => state.eatry.eatries.data,
      meta: state => state.eatry.eatries.meta,
      links: state => state.eatry.eatries.links
    })
  },
  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$eatry.getAllEatries(next).then(({
        data
      }) => {
        this.$store.commit('eatry/setEatries', data);
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
      this.$eatry.getAllEatries(prev).then(({
        data
      }) => {
        this.$store.commit('eatry/setEatries', data);
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    removeEatry(eatryId) {
      this.loading = !this.loading;
      this.$eatry.deleteOneEatry(eatryId).then(data => {
        this.$store.commit('eatry/removeOneEatry', eatryId);
        this.$bvToast.toast('Eatry successfully deleted', {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.loading = !this.loading;
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/eatry/inventory/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var eatry_inventoryvue_type_script_lang_js_ = (inventoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/eatry/inventory/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  eatry_inventoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "293838fc",
  "52b77ba3"
  
)

/* harmony default export */ var inventory = __webpack_exports__["default"] = (component.exports);

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