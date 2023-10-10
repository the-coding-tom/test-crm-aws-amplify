exports.ids = [26];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/UploadButton.vue?vue&type=template&id=04e589d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"preview\" class=\"mr-b-20\">"+((_vm.url)?("<img"+(_vm._ssrAttr("src",_vm.url))+">"):"<!---->")+"</div> <div class=\"bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0\"><button class=\"btn\"><i class=\"fa fa-paperclip mr-r-10\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.label))+"</button> <input"+(_vm._ssrAttr("name",_vm.name))+" type=\"file\" accept=\"image/*\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/UploadButton.vue?vue&type=template&id=04e589d2&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/UploadButton.vue?vue&type=script&lang=js&
var UploadButtonvue_type_script_lang_js_ = __webpack_require__(98);

// CONCATENATED MODULE: ./components/shack/UploadButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_UploadButtonvue_type_script_lang_js_ = (UploadButtonvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/UploadButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_UploadButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "77e4a826"
  
)

/* harmony default export */ var UploadButton = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayError; });
const displayError = function (e, vm = null) {
  if (e.response) {
    processError(e.response.data.message, vm);

    if (e.response.data.errors) {
      _.each(e.response.data.errors, (o, i) => {
        return _.each(o, (v, k) => processError(v, vm));
      });
    }

    return;
  }

  processError(e.message, vm);
};

const processError = function (message, vm) {
  console.log('------------------------------------');
  console.log(message);
  console.log('------------------------------------');
  vm && vm.$bvToast.toast(message, {
    title: 'Error',
    variant: 'danger'
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 107:
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

/***/ 171:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/events/Room.vue?vue&type=template&id=6cb40b06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group col-md-12"},[_c('b-form-group',{attrs:{"id":"rooms","label":"Rooms Available"}},_vm._l((_vm.rooms),function(room){return _c('b-form-radio',{key:room.id,attrs:{"value":room.id,"name":"room"},model:{value:(_vm.selectedRoom),callback:function ($$v) {_vm.selectedRoom=$$v},expression:"selectedRoom"}},[_vm._v(_vm._s(room.name))])}),1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"value":_vm.meta.current_page,"total":_vm.meta.total,"per-page":15,"size":"sm"},on:{"next":_vm.next,"prev":_vm.prev,"input":_vm.changePage}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/events/Room.vue?vue&type=template&id=6cb40b06&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./util/errors.js
var errors = __webpack_require__(104);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/events/Room.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Roomvue_type_script_lang_js_ = ({
  name: 'EventRooms',
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      meta: {},
      links: {},
      selectedRoom: this.value
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      rooms: state => state.events.rooms
    })
  },
  watch: {
    selectedRoom() {
      this.$emit('input', this.selectedRoom);
    }

  },

  created() {
    this.$event.getRooms().then(({
      data
    }) => {
      this.meta = data.meta;
      this.links = data.links;
      this.$store.commit('events/setRooms', data);
    }).catch(e => {
      this.$bvToast.toast('Failed to retrieve rooms', {
        variant: 'danger'
      });
      Object(errors["a" /* displayError */])(e);
    });
  },

  methods: {
    next() {
      const {
        next
      } = this.links;
      this.getRooms(next);
    },

    prev() {
      const {
        prev
      } = this.links;
      this.getRooms(prev);
    },

    changePage(pageNumber) {
      const link = `${this.meta.path}?page=${pageNumber}`;
      this.getRooms(link);
    },

    getRooms(link) {
      this.$resource.getRoomResources(link).then(({
        data
      }) => {
        this.meta = data.meta;
        this.links = data.links;
        this.$store.commit('events/setRooms', data);
      }).catch(e => {
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          variant: 'error',
          title: 'Error'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./components/events/Room.vue?vue&type=script&lang=js&
 /* harmony default export */ var events_Roomvue_type_script_lang_js_ = (Roomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/events/Room.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  events_Roomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8863c2ee"
  
)

/* harmony default export */ var Room = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/_id/edit.vue?vue&type=template&id=3660e028&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateEvent($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Event","subtitle":"Update"}}),_vm._v(" "),_c('div',[_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"type":"submit"}},[(_vm.loading)?_c('b-spinner',{attrs:{"small":"","label":"Small Spinner"}}):_vm._e(),_vm._v(" "),(!_vm.loading)?_c('span',[_vm._v("Update Event")]):_vm._e()],1),_vm._v(" "),_c('b-button',{staticClass:"text-danger",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"fa fa-angle-left"}),_vm._v(" Cancel Update")])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Event Details")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-6",attrs:{"id":"title","label":"Event Title","placeholder":"Awesome Co"},model:{value:(_vm.event.name),callback:function ($$v) {_vm.$set(_vm.event, "name", $$v)},expression:"event.name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"capacity","label":"Capacity (Total Tickets)","type":"number","placeholder":"0"},model:{value:(_vm.event.total_tickets),callback:function ($$v) {_vm.$set(_vm.event, "total_tickets", $$v)},expression:"event.total_tickets"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Event Description")]),_vm._v(" "),_c('html-editor',{attrs:{"id":"description","editor-text":_vm.event.description,"placeholder":"Add details about the event"},model:{value:(_vm.event.description),callback:function ($$v) {_vm.$set(_vm.event, "description", $$v)},expression:"event.description"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Start Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"startTime","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm:ss","value-type":"format","confirm":"","type":"datetime","placeholder":"Start Date"},on:{"change":_vm.startChange},model:{value:(_vm.event.start_time),callback:function ($$v) {_vm.$set(_vm.event, "start_time", $$v)},expression:"event.start_time"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"End Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"endTime","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm:ss","value-type":"format","confirm":"","type":"datetime","placeholder":"End Date"},model:{value:(_vm.event.end_time),callback:function ($$v) {_vm.$set(_vm.event, "end_time", $$v)},expression:"event.end_time"}})],1)],1),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"price","label":"Price","type":"number","step":"0.01","placeholder":"0.00"},model:{value:(_vm.event.price),callback:function ($$v) {_vm.$set(_vm.event, "price", $$v)},expression:"event.price"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"maxTicketPerPerson","label":"Max Ticket Per Person","type":"number","placeholder":"3"},model:{value:(_vm.event.max_ticket_per_person),callback:function ($$v) {_vm.$set(_vm.event, "max_ticket_per_person", $$v)},expression:"event.max_ticket_per_person"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"mminTicketsPerPerson","label":"Minimum Tickets Per Person","type":"number","placeholder":"1"},model:{value:(_vm.event.min_tickets_per_person),callback:function ($$v) {_vm.$set(_vm.event, "min_tickets_per_person", $$v)},expression:"event.min_tickets_per_person"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Event Category:")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"Select Category"},model:{value:(_vm.event.event_category_id),callback:function ($$v) {_vm.$set(_vm.event, "event_category_id", $$v)},expression:"event.event_category_id"}},_vm._l((_vm.categories),function(category){return _c('el-option',{key:category.id,attrs:{"label":category.name,"value":category.id}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-checkbox',{attrs:{"id":"external-1","value":true,"unchecked-value":null,"name":"external-1"},model:{value:(_vm.external),callback:function ($$v) {_vm.external=$$v},expression:"external"}},[_vm._v("\n                    Host at an external location\n                  ")]),_vm._v(" "),(_vm.external)?_c('b-form-input',{attrs:{"placeholder":"External Location","required":""},model:{value:(_vm.event.external_location),callback:function ($$v) {_vm.$set(_vm.event, "external_location", $$v)},expression:"event.external_location"}}):_vm._e()],1),_vm._v(" "),(!_vm.external)?_c('Room',{model:{value:(_vm.event.room_id),callback:function ($$v) {_vm.$set(_vm.event, "room_id", $$v)},expression:"event.room_id"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-checkbox',{attrs:{"id":"sendEmailCheckbox","value":true},model:{value:(_vm.event.send_email),callback:function ($$v) {_vm.$set(_vm.event, "send_email", $$v)},expression:"event.send_email"}},[_vm._v("Send email to attendees")])],1),_vm._v(" "),(_vm.event.send_email)?_c('div',{staticClass:"form-group col-md-12"},[_c('base-input',{attrs:{"id":"emailSubject","label":"Email Subject","placeholder":"Add subject of Email"},model:{value:(_vm.event.email_subject),callback:function ($$v) {_vm.$set(_vm.event, "email_subject", $$v)},expression:"event.email_subject"}}),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Email Content"}},[_c('html-editor',{attrs:{"id":"emailMessage","placeholder":"Message body for attendees email"},model:{value:(_vm.event.email_content),callback:function ($$v) {_vm.$set(_vm.event, "email_content", $$v)},expression:"event.email_content"}})],1)],1):_vm._e()],1)])]),_vm._v(" "),_c('UploadButton',{attrs:{"url":_vm.event.banner_url,"name":"eventbanner","label":"Upload Event Image (<500KB & size 1125x582)","service":"event"},on:{"input":_vm.onEventLogoUploaded},model:{value:(_vm.event.event_logo),callback:function ($$v) {_vm.$set(_vm.event, "event_logo", $$v)},expression:"event.event_logo"}}),_vm._v(" "),_c('UploadButton',{attrs:{"url":_vm.event.banner_image,"name":"eventbanner","label":"Upload Event Banner (<500KB & size 1125x582)","service":"event"},model:{value:(_vm.event.banner_image),callback:function ($$v) {_vm.$set(_vm.event, "banner_image", $$v)},expression:"event.banner_image"}}),_vm._v(" "),_c('UploadButton',{attrs:{"url":_vm.event.host_logo,"name":"hostlogo","label":"Upload Host Logo (<500KB & size 500x500)","service":"event"},model:{value:(_vm.event.host_logo),callback:function ($$v) {_vm.$set(_vm.event, "host_logo", $$v)},expression:"event.host_logo"}})],1)],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/events/_id/edit.vue?vue&type=template&id=3660e028&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(21);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: ./components/argon-core/Inputs/HtmlEditor.vue + 4 modules
var HtmlEditor = __webpack_require__(108);

// EXTERNAL MODULE: ./components/shack/UploadButton.vue + 3 modules
var UploadButton = __webpack_require__(103);

// EXTERNAL MODULE: ./components/events/Room.vue + 4 modules
var Room = __webpack_require__(178);

// EXTERNAL MODULE: ./util/convertMarkdownToHtml.js
var convertMarkdownToHtml = __webpack_require__(107);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(5);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "showdown"
var external_showdown_ = __webpack_require__(86);
var external_showdown_default = /*#__PURE__*/__webpack_require__.n(external_showdown_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/_id/edit.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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










/* harmony default export */ var editvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    UploadButton: UploadButton["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */],
    HtmlEditor: HtmlEditor["a" /* default */],
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a,
    Room: Room["a" /* default */]
  },

  async asyncData({
    store,
    $event,
    params,
    error
  }) {
    const {
      id
    } = params;
    await $event.getEventCategories().then(({
      data
    }) => {
      store.commit('events/setCategories', data);
    }).catch(err => {
      error({
        statusCode: err.statusCode,
        message: err.response ? JSON.stringify(err.response.data.message) : err.message
      });
    });
    return await $event.getEvent(id).then(({
      data
    }) => {
      const converter = new external_showdown_default.a.Converter();
      data.description = converter.makeHtml(data.description);
      data.event_category_id = data.event_category.id;
      let external = false;

      if (data.room) {
        data.room_id = data.room ? data.room.id : null;
      } else {
        external = true;
      }

      return {
        external,
        event: data
      };
    }).catch(err => {
      error({
        statusCode: err.statusCode,
        message: err.response ? JSON.stringify(err.response.data.message) : err.message
      });
    });
  },

  data: () => ({
    loading: false,
    content: '<h1>Some initial content</h1>'
  }),
  computed: { ...Object(external_vuex_["mapState"])({
      categories: state => state.events.categories,
      space: state => state.space.currentSpace.subdomain
    })
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },

    startChange(e) {
      this.event.end_time = this.$moment(e).add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
    },

    convertTextToHtml(text) {
      return Object(convertMarkdownToHtml["a" /* convertMarkdownToHtml */])(text);
    },

    onEventLogoUploaded(e) {
      this.event.banner_url = e;
    },

    onEventBannerImageUploaded(e) {
      this.event.banner_image = e;
    },

    onEventHostLogoUploaded(e) {
      this.event.host_logo = e;
    },

    async updateEvent() {
      this.loading = !this.loading;
      const emailMessage = this.convertTextToHtml(this.event.email_content || '');
      const converter = new external_showdown_default.a.Converter();
      let eventUpdate = { ...this.event
      }; //Test
      //eventUpdate.description = this.convertTextToHtml(eventUpdate.description)

      eventUpdate.description = eventUpdate.description.replace(/(?:<br>)/g, '\n'); //Test
      // console.log(eventUpdate.description)
      // console.log(converter.makeMarkdown(eventUpdate.description))
      // //eventUpdate.description = converter.makeMarkdown(eventUpdate.description)
      // console.log(
      //   converter.makeHtml(converter.makeMarkdown(eventUpdate.description))
      // )

      if (this.external) {
        eventUpdate.room_id = null;
      } else {
        eventUpdate.external_location = null;
      } //update logo urls


      eventUpdate.banner_url = this.event.banner_url;
      eventUpdate.banner_image = this.event.banner_image;
      eventUpdate.host_logo = this.event.host_logo;
      await this.$event.updateEvent(this.event.id, { ...eventUpdate,
        email_content: emailMessage
      }).then(({
        data
      }) => {
        this.$bvToast.toast(`Event updated successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.$router.push({
          name: 'space-events-id',
          params: {
            id: this.event.id
          }
        });
      }).catch(({
        response
      }) => {
        this.loading = !this.loading;
        this.$bvToast.toast(JSON.stringify(response.data.errors), {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/events/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/events/_id/edit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(215)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3240c9ae"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

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


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    service: {
      type: String,
      default: 'images'
    },
    url: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      publicUrl: null
    };
  },

  methods: {
    async onFileChange(e) {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      if (file.size > 500000) {
        this.$bvToast.toast('File size must not be greater than 500kb', {
          variant: 'warning'
        });
        return;
      }

      let mime = file.type;
      this.url = URL.createObjectURL(file);
      let upload = await this.getSignedUrl(mime);
      this.publicUrl = upload.public_url;
      this.$bvToast.toast('Uploading image. Please wait...'); //upload image here

      let uploadUrl = await this.uploadUrl(upload.signed_url, file, mime).then(res => {
        this.$emit('input', this.publicUrl);
        this.$bvToast.toast('Image uploaded successfully', {
          variant: 'success',
          solid: true
        });
      }).catch(e => {
        this.$bvToast.toast(e.message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    getSignedUrl(mime) {
      const {
        service
      } = this;
      return this.$images.getSignedUrl(service, mime).then(({
        data
      }) => {
        return data.data;
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

    uploadUrl(url, file, mime) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, file, {
        headers: {
          'Content-Type': mime
        }
      }).then(res => {
        return res;
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data), {
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(83)["URL"]))

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=edit.js.map