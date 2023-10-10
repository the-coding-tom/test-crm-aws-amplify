exports.ids = [67];
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

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/tags/index.vue?vue&type=template&id=373ca984&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Tags","subtitle":"All"}}),_vm._v(" "),_c('b-button',{staticClass:"text-white",attrs:{"to":{name:'space-tags-add'},"squared":"","variant":"primary"}},[_vm._v("Add Tag")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_c('el-table',{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{"data":_vm.tags,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Tag","min-width":"310px","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('h4',[_vm._v(_vm._s(row.name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Type","prop":"type","min-width":"140px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.type))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"180px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-primary",attrs:{"disabled":_vm.loading,"variant":"transparent"},on:{"click":function($event){return _vm.showEditModal(row)}}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit\n              ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"180px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('b-button',{staticClass:"text-danger",attrs:{"disabled":_vm.loading,"type":"submit","variant":"transparent"},on:{"click":function($event){return _vm.removeTag(row)}}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Remove\n              ")])]}}])})],1)],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('b-modal',{attrs:{"id":"edit-modal","static":true,"hide-footer":""},scopedSlots:_vm._u([{key:"modal-title",fn:function(){return [_vm._v("Edit Tag")]},proxy:true}])},[_vm._v(" "),_c('b-form',{on:{"submit":function($event){$event.preventDefault();}}},[_c('div',{staticClass:"row"},[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Name of Tag","placeholder":"cities, ui, ux","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Tag Type","disabled":"","required":"","placeholder":"profile_interest"},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}})],1),_vm._v(" "),_c('b-button',{staticClass:"text-white float-right",attrs:{"disabled":_vm.loading,"squared":"","variant":"primary"},on:{"click":_vm.editTag}},[_vm._v("\n          Update\n        ")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/tags/index.vue?vue&type=template&id=373ca984&

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

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/tags/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



/* harmony default export */ var tagsvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_table_default.a.name]: lib_table_default.a,
    [lib_table_column_default.a.name]: lib_table_column_default.a
  },

  async asyncData({
    store,
    $tag,
    error
  }) {
    await $tag.getAllTags().then(({
      data
    }) => {
      store.commit('tags/setTags', data);
    }).catch(err => {
      const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
      error({
        statusCode: err.status,
        message
      });
    });
  },

  data() {
    return {
      loading: false,
      name: '',
      type: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      tags: state => state.tags.tags.data,
      meta: state => state.tags.tags.meta,
      space: state => state.space.currentSpace
    })
  },
  methods: {
    next() {
      const {
        current_page,
        last_page
      } = this.meta;
      const nextPage = last_page === current_page ? 1 : current_page + 1;
      this.$tag.getAllTags(nextPage).then(({
        data
      }) => {
        this.$store.commit('tags/setTags', data);
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
        current_page
      } = this.meta;
      const prevPage = current_page === 1 ? 1 : current_page - 1;
      this.$tag.getAllTags(prevPage).then(({
        data
      }) => {
        this.$store.commit('tags/setTags', data);
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    async removeTag(row) {
      const tagType = row.type;
      const payload = {
        data: {
          name: row.name
        }
      };
      this.loading = !this.loading;
      await this.$tag.removeTag(tagType, payload).then(res => {
        this.$bvToast.toast('Tag removed successfully', {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.$store.commit('tags/removeTag', row);
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
    },

    showEditModal(data) {
      this.$bvModal.show('edit-modal');
      this.name = data.name;
      this.type = data.type;
      this.old_tag = data.name;
    },

    async editTag() {
      const {
        name,
        type,
        old_tag
      } = this;
      const payload = {
        old_tag,
        new_tag: name
      };
      this.loading = !this.loading;
      this.$tag.updateTag(type, payload).then(({
        data: {
          data
        }
      }) => {
        this.$bvToast.toast(`Tag ~${name}~ updated successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.$store.commit('tags/updateTag', {
          data,
          old_tag
        });
        this.loading = !this.loading;
        this.$bvModal.hide('edit-modal');
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
// CONCATENATED MODULE: ./pages/_space/tags/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_tagsvue_type_script_lang_js_ = (tagsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/tags/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _space_tagsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a7b05e50"
  
)

/* harmony default export */ var tags = __webpack_exports__["default"] = (component.exports);

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