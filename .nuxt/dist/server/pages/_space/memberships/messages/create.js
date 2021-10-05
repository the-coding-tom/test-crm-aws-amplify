exports.ids = [48];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertMarkdownToHtml; });
const convertMarkdownToHtml = text => {
  var showdown = __webpack_require__(86);

  var converter = new showdown.Converter();
  const eventDescription = text.replace(/([ ]*\n)/g, `<br/>\n`);
  const finalDescription = eventDescription.replace(/(<br\/>\n<br\/>\n<br\/>)/g, `<br/><br/>`);
  return converter.makeHtml(finalDescription);
};

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/HtmlEditor.vue?vue&type=template&id=277b231e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('client-only',[_c('editor',{ref:"toastuiEditor",attrs:{"initial-value":_vm.editorText,"options":_vm.editorOptions,"initial-edit-type":"wysiwyg","preview-style":"tab"},on:{"change":_vm.onEditorChange},model:{value:(_vm.text),callback:function ($$v) {_vm.text=$$v},expression:"text"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Inputs/HtmlEditor.vue?vue&type=template&id=277b231e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/HtmlEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HtmlEditorvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String,
      default: ''
    },
    editorText: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      editorOptions: {
        useDefaultHTMLSanitizer: false,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: ['heading', 'bold', 'italic', 'strike', 'divider', 'hr', 'quote', 'divider', 'ul', 'ol', 'task', 'indent', 'outdent', 'divider', //'table',
        'image', 'link', 'divider', 'code', 'codeblock']
      },
      text: this.value
    };
  },

  watch: {
    text() {
      this.$emit('input', this.text);
    }

  },
  methods: {
    onEditorChange() {
      let html = this.$refs.toastuiEditor.invoke('getHtml');
      let desc = this.$refs.toastuiEditor.invoke('getValue');
      let markdown = this.$refs.toastuiEditor.invoke('getMarkdown');
      this.text = markdown;
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/Inputs/HtmlEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_HtmlEditorvue_type_script_lang_js_ = (HtmlEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/argon-core/Inputs/HtmlEditor.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Inputs_HtmlEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c8eb076"
  
)

/* harmony default export */ var HtmlEditor = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94);
/* harmony import */ var _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95);
/* harmony import */ var _components_argon_core_Inputs_HtmlEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(107);
/* harmony import */ var _util_convertMarkdownToHtml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(106);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CreateMessage',
  layout: 'ShackDash',
  components: {
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    SectionTitle: _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    HtmlEditor: _components_argon_core_Inputs_HtmlEditor__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    [element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a
  },

  async asyncData({
    $membership
  }) {
    const link = `include=profile`;
    return await $membership.getAllMemberships(link).then(({
      data
    }) => {
      return {
        data
      };
    });
  },

  data() {
    return {
      searching: false,
      emails: [],
      subject: '',
      content: '',
      loading: false
    };
  },

  methods: {
    validate() {
      if (this.emails.length == 0) {
        this.$bvToast.toast('Receipient email missing', {
          variant: 'warning'
        });
        return true;
      }

      if (this.content.length < 50) {
        this.$bvToast.toast('Email Content is required and must be more than 50 characters', {
          variant: 'warning'
        });
        return true;
      }
    },

    searchMembers(query) {
      const link = `filter[search]=${query}`;

      const _self = this;

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({
          data
        }) => {
          _self.data = data;
        });
      }, 350)();
    },

    sendEmail() {
      if (this.validate()) {
        return;
      }

      this.loading = !this.loading;
      const {
        emails,
        subject,
        content
      } = this;
      const body = Object(_util_convertMarkdownToHtml__WEBPACK_IMPORTED_MODULE_8__[/* convertMarkdownToHtml */ "a"])(content);
      this.$email.createEmail({
        emails,
        subject,
        content: body
      }).then(res => {
        this.$bvToast.toast('Email sent successfully', {
          title: 'Success',
          variant: 'success'
        });
        this.$router.push({
          name: 'space-memberships-messages-id',
          params: {
            id: res.data.id
          }
        });
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/messages/create.vue?vue&type=template&id=0a2c0fb8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.sendEmail($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Messages","subtitle":"New"}}),_vm._v(" "),_c('b-button',{attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_c('i',{staticClass:"fa fa-paper-plane"}),_vm._v(" Send Email")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6 mr-b-30"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('div',{staticClass:"m-n25 sh-message-box"},[_c('table',{staticClass:"table"},[_c('tbody',[_c('tr',[_c('td',[_c('base-input',[_c('span',{staticClass:"mr-r-10"},[_vm._v("To")]),_vm._v(" "),_c('el-select',{attrs:{"remote-method":_vm.searchMembers,"loading":_vm.searching,"required":"","multiple":"","filterable":"","remote":"","reserve-keyword":"","placeholder":"Add Member(s)"},model:{value:(_vm.emails),callback:function ($$v) {_vm.emails=$$v},expression:"emails"}},_vm._l((_vm.data),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.first_name + ' ' + option.last_name,"value":option.email}})}),1)],1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"form-inline"},[_c('label',{staticClass:"mr-r-10",attrs:{"for":""}},[_vm._v("Subject")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.subject),expression:"subject"}],staticClass:"fg-1 form-control",attrs:{"id":"subject","type":"text","placeholder":"Add Subject for Email Here","required":""},domProps:{"value":(_vm.subject)},on:{"input":function($event){if($event.target.composing){ return; }_vm.subject=$event.target.value}}})])])]),_vm._v(" "),_c('tr',[_c('td',[_c('html-editor',{model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)])])])])])],1),_vm._v(" "),_c('b-link',{on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"fa fa-angle-left mr-r-10"}),_vm._v(" Back")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/memberships/messages/create.vue?vue&type=template&id=0a2c0fb8&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/memberships/messages/create.vue?vue&type=script&lang=js&
var createvue_type_script_lang_js_ = __webpack_require__(148);

// CONCATENATED MODULE: ./pages/_space/memberships/messages/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/memberships/messages/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  messages_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e94b92ee"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

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
  "1090309e"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=create.js.map