exports.ids = [14];
exports.modules = {

/***/ 108:
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
  "b6f21844"
  
)

/* harmony default export */ var HtmlEditor = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/directory/_id/notes.vue?vue&type=template&id=06286662&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addNote($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Directory","subtitle":"Notes"}}),_vm._v(" "),_c('b-button',{attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Add Note")])],1)]),_vm._v(" "),_c('b-container',{staticClass:"col-md-12"},[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('b-card',{attrs:{"title":"New Note"}},[_c('html-editor',{attrs:{"placeholder":"Content"},model:{value:(_vm.body),callback:function ($$v) {_vm.body=$$v},expression:"body"}}),_vm._v(" "),_c('b-form-checkbox',{staticClass:"mt-2",attrs:{"value":true,"unchecked-value":false},model:{value:(_vm.sticky_note),callback:function ($$v) {_vm.sticky_note=$$v},expression:"sticky_note"}},[_vm._v("Sticky Note")])],1)],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"6"}},[_c('b-card',{attrs:{"title":"Administrator Notes"}},[_c('div',{staticStyle:{"max-height":"500px","overflow-y":"auto","margin":"0 -25px"}},[_c('table',{staticClass:"table table-hover table-striped"},[_c('tbody',_vm._l((_vm.notes),function(note,i){return _c('tr',{key:note.id},[_c('td',[_c('div',{staticClass:"d-flex justify-content-between"},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.$moment(note.updated_at).format('MMM DD, YYYY HH:mm:ss')))]),_vm._v(" "),_c('span',[_vm._v("~ "+_vm._s(note.user.name))])]),_vm._v(" "),(note.user.id == _vm.user)?_c('div',[_c('b-button',{staticClass:"text-danger",attrs:{"variant":"transparent","size":"sm"},on:{"click":function($event){return _vm.deleteNote(i)}}},[_c('i',{staticClass:"fa fa-trash"})])],1):_vm._e()]),_vm._v(" "),_c('span',{domProps:{"innerHTML":_vm._s(note.body)}})])])}),0)])])])],1)],1)],1)],1),_vm._ssrNode(" "),_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"fa fa-chevron-left"}),_vm._v(" Back")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/directory/_id/notes.vue?vue&type=template&id=06286662&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/argon-core/Inputs/HtmlEditor.vue + 4 modules
var HtmlEditor = __webpack_require__(108);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/directory/_id/notes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var notesvue_type_script_lang_js_ = ({
  layout: 'ShackDash',

  async asyncData({
    $membership,
    params
  }) {
    return await $membership.getAllNotes(params.id).then(({
      data
    }) => {
      return {
        notes: data
      };
    }).catch(e => {
      console.log(e.response.data.message);
    });
  },

  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    HtmlEditor: HtmlEditor["a" /* default */]
  },
  data: () => ({
    loading: false,
    body: '',
    sticky_note: false,
    notes: []
  }),
  computed: { ...Object(external_vuex_["mapState"])({
      user: state => state.auth.user.id
    })
  },
  methods: {
    addNote() {
      const {
        body,
        sticky_note
      } = this;
      const {
        id
      } = this.$route.params;
      this.loading = !this.loading;
      this.$membership.addNote(id, {
        body,
        sticky_note
      }).then(({
        data
      }) => {
        this.body = '';
        this.loading = !this.loading;
        this.$bvToast.toast('Note added successfully', {
          title: 'Success',
          variant: 'success'
        });
        this.notes.push(data);
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    deleteNote(i) {
      if (!confirm('Are you sure?')) return;
      this.loading = !this.loading;
      const {
        id
      } = this.$route.params;
      const noteId = this.notes[i].id;
      this.$membership.deleteNote(id, noteId).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Note added successfully', {
          title: 'Success',
          variant: 'success'
        });
        this.notes.splice(i, 1);
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/directory/_id/notes.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_notesvue_type_script_lang_js_ = (notesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/directory/_id/notes.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_notesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a53ee3e"
  
)

/* harmony default export */ var notes = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=notes.js.map