exports.ids = [46];
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchForm.vue?vue&type=template&id=feea539e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.search($event)}}},[_c('base-input',{staticClass:"mb-0",attrs:{"input-group-classes":"input-group-merge sh-search","group":""}},[_c('template',{slot:"prepend"},[_c('i',{staticClass:"fa fa-search"})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],staticClass:"form-control",attrs:{"required":_vm.required,"type":"text","placeholder":"Looking for ...","aria-describedby":"button-addon2"},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-default",attrs:{"id":"button-addon2","disabled":_vm.loading,"type":"submit"}},[(_vm.loading)?_c('i',{staticClass:"fa fa-spinner fa-spin"}):_c('span',[_vm._v("\n            Search")])])])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/SearchForm.vue?vue&type=template&id=feea539e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchFormvue_type_script_lang_js_ = ({
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    searchTerm: ''
  }),
  methods: {
    search() {
      this.$emit('input', this.searchTerm);
      this.$emit('search', this.searchTerm);
    }

  }
});
// CONCATENATED MODULE: ./components/shack/SearchForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_SearchFormvue_type_script_lang_js_ = (SearchFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/SearchForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_SearchFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e594742"
  
)

/* harmony default export */ var SearchForm = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getQueryParams; });
const getQueryParams = url => {
  const urlParam = __webpack_require__(83);

  const parsedUrl = urlParam.parse(url);
  return parsedUrl.search;
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(101);
/* harmony import */ var element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_5__);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    [element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    members: {
      type: Array,
      default: null
    },
    itemLimit: {
      type: Number,
      default: 9
    },
    showModal: {
      type: Boolean,
      default: false
    },
    viewMore: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      loading: false,
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      img: '/img/placeholder.jpg'
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    upperFirst(detail) {
      return _.upperFirst(detail);
    },

    checkStatus(member) {
      if (member.member_since) {
        return 'Connected';
      }

      return 'Not Connected';
    },

    toggleLoading() {
      this.loading = !this.loading;
    },

    resendInvitation(member) {
      this.toggleLoading();
      const {
        id,
        email
      } = member;
      this.$membership.inviteMember(id).then(res => {
        this.toggleLoading();
        this.$bvToast.toast('Membership invitation sent to ' + email, {
          variant: 'success'
        });
      }).catch(e => {
        this.toggleLoading();
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/archived/index.vue?vue&type=template&id=2ba4cb7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Members","subtitle":"Deleted Invitations"}}),_vm._v(" "),_c('SearchForm',{attrs:{"loading":_vm.loading},on:{"search":_vm.search}}),_vm._v(" "),_c('div')],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col\">","</div>",[_c('MembersTable',{attrs:{"members":_vm.members,"view-more":false,"show-modal":""},scopedSlots:_vm._u([{key:"action",fn:function(slotProps){return [_c('b-row',[_c('b-button',{staticClass:"ml-2 text-danger",staticStyle:{"margin-top":"0px","margin-bottom":"0px"},attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.deleteArchivedInvitation(slotProps)}}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Delete Permanently")])],1)]}}])})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev,"input":_vm.changePage}})],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/memberships/archived/index.vue?vue&type=template&id=2ba4cb7c&

// EXTERNAL MODULE: ./components/argon-core/Breadcrumb/RouteBreadcrumb.vue + 14 modules
var RouteBreadcrumb = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/ArchivedInvitesTable.vue?vue&type=template&id=88b55112&
var ArchivedInvitesTablevue_type_template_id_88b55112_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('el-table',{staticClass:"table table-hover table-striped",attrs:{"data":_vm.members,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Name","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('div',{staticClass:"sh-vflex"},[_c('b-link',[_c('b-link',[_vm._v(_vm._s(row.first_name)+" "+_vm._s(row.last_name))])],1)],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Email","prop":"amount","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('div',{staticClass:"float-left"},[_vm._v("\n          "+_vm._s(row.email)+"\n        ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Deleted on","prop":"method","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.created_at))])]}}])}),_vm._v(" "),(_vm.showModal)?_c('el-table-column',{attrs:{"label":"Status","prop":"status"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_vm._t("action",null,null,row)]}}],null,true)}):_vm._e()],1)],1)}
var ArchivedInvitesTablevue_type_template_id_88b55112_staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/ArchivedInvitesTable.vue?vue&type=template&id=88b55112&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/ArchivedInvitesTable.vue?vue&type=script&lang=js&
var ArchivedInvitesTablevue_type_script_lang_js_ = __webpack_require__(141);

// CONCATENATED MODULE: ./components/shack/ArchivedInvitesTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_ArchivedInvitesTablevue_type_script_lang_js_ = (ArchivedInvitesTablevue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/ArchivedInvitesTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_ArchivedInvitesTablevue_type_script_lang_js_,
  ArchivedInvitesTablevue_type_template_id_88b55112_render,
  ArchivedInvitesTablevue_type_template_id_88b55112_staticRenderFns,
  false,
  null,
  null,
  "c2fb310e"
  
)

/* harmony default export */ var ArchivedInvitesTable = (component.exports);
// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: ./components/shack/SearchForm.vue + 4 modules
var SearchForm = __webpack_require__(105);

// EXTERNAL MODULE: ./util/url.js
var url = __webpack_require__(106);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/archived/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var archivedvue_type_script_lang_js_ = ({
  layout: 'ShackDash',

  async asyncData({
    $membership,
    $plan,
    error,
    route
  }) {
    return await $membership.getArchivedInvites().then(({
      data,
      total,
      per_page,
      current_page,
      next_page_url,
      prev_page_url
    }) => {
      return {
        members: data,
        links: {
          next: next_page_url,
          prev: prev_page_url
        },
        meta: {
          total,
          per_page,
          current_page
        }
      };
    }).catch(e => {
      error({
        statusCode: e.statusCode,
        message: e.response ? JSON.stringify(e.response.data.errors) : e.messge
      });
    });
  },

  components: {
    MainTitle: MainTitle["a" /* default */],
    SearchForm: SearchForm["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */],
    MembersTable: ArchivedInvitesTable,
    RouteBreadCrumb: RouteBreadcrumb["a" /* default */]
  },
  data: () => ({
    searchTerm: '',
    loading: false
  }),
  methods: {
    next() {
      const {
        next
      } = this.links;
      const params = Object(url["a" /* getQueryParams */])(next);
      this.$router.push(params);
      location.href = location.origin + this.$route.path + params;
    },

    prev() {
      const {
        prev
      } = this.links;
      const params = Object(url["a" /* getQueryParams */])(prev);
      this.$router.push(params);
      location.href = location.origin + this.$route.path + params;
    },

    changePage(pageNumber) {
      const params = `?page=${pageNumber}`;
      this.$router.push(params);
      location.href = location.origin + this.$route.path + params;
    },

    confirmMember(e) {
      this.$membership.inviteMember(e.id).then(res => {
        this.$bvToast.toast('Member invited successfully', {
          variant: 'success'
        });
        setTimeout(() => {
          location.reload();
        }, 5000);
      }).catch(e => {
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    inviteAllPendingMembers() {
      this.$membership.inviteAllPendingMembers().then(res => {
        this.$bvToast.toast('Members invited successfully', {
          variant: 'success'
        });
        setTimeout(() => {
          location.reload();
        }, 5000);
      }).catch(e => {
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
      console.log('invite all');
    },

    cancelMember(e) {
      if (!confirm('Are you sure')) return;
      this.$membership.deleteMembership(e.id).then(res => {
        this.$bvToast.toast('Member deleted successfully', {
          variant: 'success'
        });
        setTimeout(() => {
          location.reload();
        }, 5000);
      }).catch(e => {
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    deleteArchivedInvitation(e) {
      if (!confirm('Are you sure')) return;
      this.$membership.deleteArchivedInvite(e.id).then(res => {
        this.$bvToast.toast('Invitation deleted successfully', {
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    search(query) {
      this.loading = !this.loading;
      const link = `filter[search]=${query}`;
      this.$membership.getArchivedInvites(link).then(({
        data,
        total,
        per_page,
        current_page,
        next_page_url,
        prev_page_url
      }) => {
        this.members = data;
        this.links = {
          next: next_page_url,
          prev: prev_page_url
        }; //this.meta = meta

        this.loading = false;
      }).catch(e => {
        this.loading = !this.loading;
        this.$bvToast.toast(e.response ? JSON.stringify(e.response.data.errors) : e.message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/memberships/archived/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var memberships_archivedvue_type_script_lang_js_ = (archivedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/_space/memberships/archived/index.vue





/* normalize component */

var archived_component = Object(componentNormalizer["a" /* default */])(
  memberships_archivedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2ac3a553"
  
)

/* harmony default export */ var archived = __webpack_exports__["default"] = (archived_component.exports);

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