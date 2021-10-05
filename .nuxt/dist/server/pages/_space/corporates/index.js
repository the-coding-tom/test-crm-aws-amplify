exports.ids = [12];
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

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/corporates/index.vue?vue&type=template&id=293206b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Corporate","subtitle":"All"}}),_vm._v(" "),_c('b-button',{staticClass:"text-white",attrs:{"to":{name:'space-corporates-add'},"squared":"","variant":"primary"}},[_vm._v("Add New Corporate")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_c('el-table',{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{"data":_vm.companies,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Name","min-width":"310px","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_vm._v(_vm._s(row.name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Contact Name","prop":"contact_name","min-width":"180px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.contact_name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Contact Email","prop":"contat_email","min-width":"180px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.contat_email))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Address","prop":"address","min-width":"140px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.address))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"City","prop":"city","min-width":"140px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.city))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"State","prop":"state","min-width":"140px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.state))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Zip Code","prop":"zipcode","min-width":"140px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.zipcode))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Country","prop":"country","min-width":"140px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.country))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Billing Email","prop":"billing_email","min-width":"180px","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.billing_email))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"180px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-primary",attrs:{"disabled":_vm.loading,"to":{name:'space-corporates-id-edit', params: { id: row.uuid}},"variant":"transparent"}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit\n              ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"180px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-danger",attrs:{"disabled":_vm.loading,"type":"submit","variant":"transparent"},on:{"click":function($event){return _vm.removeCompany(row.uuid)}}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Remove\n              ")])]}}])})],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/corporates/index.vue?vue&type=template&id=293206b4&

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

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/corporates/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



/* harmony default export */ var corporatesvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_table_default.a.name]: lib_table_default.a,
    [lib_table_column_default.a.name]: lib_table_column_default.a
  },

  async asyncData({
    store,
    $company,
    error
  }) {
    await $company.getCompanies().then(data => {
      store.commit('company/setCompanies', data);
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
      companies: state => state.company.companies.data,
      meta: state => state.company.companies.meta,
      links: state => state.company.companies.links
    })
  },
  methods: {
    next() {
      const {
        next
      } = this.links;
      this.$company.getcompanies(next).then(({
        data
      }) => {
        store.commit('company/setCompanies', data);
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
      this.$company.getcompanies(prev).then(({
        data
      }) => {
        store.commit('company/setCompanies', data);
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    removeCompany(companyId) {
      if (!confirm('Are you sure ? ')) return;
      this.loading = !this.loading;
      this.$company.removeOneCompany(companyId).then(res => {
        this.$store.commit('company/removeOneCompany', companyId);
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
// CONCATENATED MODULE: ./pages/_space/corporates/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_corporatesvue_type_script_lang_js_ = (corporatesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/corporates/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _space_corporatesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "652d8ac5"
  
)

/* harmony default export */ var corporates = __webpack_exports__["default"] = (component.exports);

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