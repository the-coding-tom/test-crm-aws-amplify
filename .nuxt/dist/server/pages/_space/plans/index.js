exports.ids = [54];
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

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/plans/index.vue?vue&type=template&id=19954df2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Plans","subtitle":"All"}}),_vm._v(" "),_c('b-button',{staticClass:"text-white",attrs:{"to":{ name: 'space-plans-add' },"squared":"","variant":"primary"}},[_vm._v("Add New Plan")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_c('Table',{attrs:{"plans":_vm.plans}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/plans/index.vue?vue&type=template&id=19954df2&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/StripedTable.vue?vue&type=template&id=7026b3b5&
var StripedTablevue_type_template_id_7026b3b5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('el-table',{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{"data":_vm.plans,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Plan","min-width":"310px","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_c('nuxt-link',{attrs:{"to":{ name: 'space-plans-id-edit', params: { id: row.id } }}},[_vm._v(_vm._s(row.name))])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Members Subscribed","min-width":"250","prop":"subscriptions","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_c('nuxt-link',{attrs:{"to":{
              name: 'space-members-subscribed',
              params: { id: row.id },
              query: { plan: row.id, name: row.name },
            }}},[_vm._v(_vm._s(row.subscriptions.length))])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Subscription Type","prop":"price_per_cycle","min-width":"180px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var row = ref.row;
return [_c('span',[_vm._v("\n          "+_vm._s(_vm._f("currency")(row.price,_vm.space.currency_symbol))+" every\n          "),(row.cycle_duration === 12)?_c('span',[_vm._v("year")]):_c('span',[_vm._v(_vm._s(row.invoice_period)+" month(s)")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"140px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var row = ref.row;
return [_c('b-button',{staticClass:"text-primary",attrs:{"disabled":_vm.loading,"to":{ name: 'space-plans-id-edit', params: { id: row.id } },"type":"submit","variant":"transparent"}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit\n        ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"140px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var row = ref.row;
return [_c('b-button',{staticClass:"text-danger",attrs:{"disabled":_vm.loading,"type":"submit","variant":"transparent"},on:{"click":function($event){return _vm.removePlan(row)}}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Remove\n        ")])]}}])})],1)],1)}
var StripedTablevue_type_template_id_7026b3b5_staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/StripedTable.vue?vue&type=template&id=7026b3b5&

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

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/StripedTable.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var StripedTablevue_type_script_lang_js_ = ({
  name: 'Table',
  components: {
    [lib_table_default.a.name]: lib_table_default.a,
    [lib_table_column_default.a.name]: lib_table_column_default.a
  },
  props: {
    plans: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },

  data() {
    return {
      loading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    async removePlan(row) {
      this.loading = !this.loading;
      await this.$plan.removePlan(row.id).then(res => {
        this.$bvToast.toast('Plan removed successfully', {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.$store.commit('plans/removePlan', row.id);
        this.loading = !this.loading;
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.message) : err.message;
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
// CONCATENATED MODULE: ./components/shack/StripedTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_StripedTablevue_type_script_lang_js_ = (StripedTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/StripedTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_StripedTablevue_type_script_lang_js_,
  StripedTablevue_type_template_id_7026b3b5_render,
  StripedTablevue_type_template_id_7026b3b5_staticRenderFns,
  false,
  null,
  null,
  "8bf1342c"
  
)

/* harmony default export */ var StripedTable = (component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/plans/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




/* harmony default export */ var plansvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    Table: StripedTable
  },

  async asyncData({
    store,
    $plan,
    error
  }) {
    await $plan.getAllPlan().then(({
      data
    }) => {
      store.commit('plans/setPlans', data);
    }).catch(err => {
      error({
        statusCode: err.statusCode,
        message: err.response ? JSON.stringify(err.response.data.errors) : err.message
      });
    });
  },

  computed: { ...Object(external_vuex_["mapState"])({
      plans: state => state.plans.plans.data,
      meta: state => state.plans.plans.meta,
      links: state => state.plans.plans.links
    })
  },
  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$plan.getAllPlan(next).then(({
        data
      }) => {
        this.$store.commit('plans/setPlans', data);
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
      this.$plan.getAllPlan(prev).then(({
        data
      }) => {
        this.$store.commit('plans/setPlans', data);
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
// CONCATENATED MODULE: ./pages/_space/plans/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_plansvue_type_script_lang_js_ = (plansvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/_space/plans/index.vue





/* normalize component */

var plans_component = Object(componentNormalizer["a" /* default */])(
  _space_plansvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "749320a1"
  
)

/* harmony default export */ var plans = __webpack_exports__["default"] = (plans_component.exports);

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