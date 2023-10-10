exports.ids = [28];
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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/add.vue?vue&type=template&id=58bfaf21&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Add New Event"}}),_vm._v(" "),_c('div',[_c('b-button',{staticClass:"text-danger",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.addEvent('draft')}}},[_c('i',{staticClass:"fa fa-save"}),_vm._v(" Save As Draft & Close")]),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",on:{"click":_vm.addEvent}},[_vm._v("Add Event")])],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Event Details")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-6",attrs:{"id":"title","label":"Event Title"},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"capacity","label":"Capacity (Total Tickets)","type":"number"},model:{value:(_vm.capacity),callback:function ($$v) {_vm.capacity=$$v},expression:"capacity"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Event Description")]),_vm._v(" "),_c('html-editor',{attrs:{"id":"description","placeholder":"Add details about the event"},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Start Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"startTime","time-picker-options":{
                      start: '00:30',
                      step: '00:15',
                      end: '23:30',
                      format: 'hh:mm a',
                    },"width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm:ss","value-type":"format","type":"datetime","placeholder":"Select Date"},on:{"change":_vm.startChange},model:{value:(_vm.startTime),callback:function ($$v) {_vm.startTime=$$v},expression:"startTime"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"End Date"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"endTime","time-picker-options":{
                      start: '00:30',
                      step: '00:15',
                      end: '23:30',
                      format: 'hh:mm a',
                    },"width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm:ss","value-type":"format","type":"datetime"},model:{value:(_vm.endTime),callback:function ($$v) {_vm.endTime=$$v},expression:"endTime"}})],1)],1),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"price","label":"Price","type":"number","step":"0.01"},model:{value:(_vm.price),callback:function ($$v) {_vm.price=$$v},expression:"price"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"maxTicketPerPerson","label":"Max Ticket Per Person","type":"number"},model:{value:(_vm.max_ticket_per_person),callback:function ($$v) {_vm.max_ticket_per_person=$$v},expression:"max_ticket_per_person"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"id":"mminTicketsPerPerson","label":"Minimum Tickets Per Person","type":"number","placeholder":"1"},model:{value:(_vm.min_tickets_per_person),callback:function ($$v) {_vm.min_tickets_per_person=$$v},expression:"min_tickets_per_person"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Event Category:")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"Select Category"},model:{value:(_vm.category),callback:function ($$v) {_vm.category=$$v},expression:"category"}},_vm._l((_vm.categories),function(category){return _c('el-option',{key:category.id,attrs:{"label":category.name,"value":category.id}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-checkbox',{attrs:{"id":"external-1","value":true,"unchecked-value":null,"name":"external-1"},model:{value:(_vm.external),callback:function ($$v) {_vm.external=$$v},expression:"external"}},[_vm._v("\n                  Host at an external location\n                ")]),_vm._v(" "),(_vm.external)?_c('b-form-input',{attrs:{"placeholder":"External Location","required":""},model:{value:(_vm.external_location),callback:function ($$v) {_vm.external_location=$$v},expression:"external_location"}}):_vm._e()],1),_vm._v(" "),(!_vm.external)?_c('room',{model:{value:(_vm.selectedRoom),callback:function ($$v) {_vm.selectedRoom=$$v},expression:"selectedRoom"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-checkbox',{attrs:{"id":"sendMailCheckbox","value":"true"},model:{value:(_vm.sendMail),callback:function ($$v) {_vm.sendMail=$$v},expression:"sendMail"}},[_vm._v("Send email to attendees")])],1),_vm._v(" "),(_vm.sendMail)?_c('div',{staticClass:"form-group col-md-12"},[_c('base-input',{attrs:{"id":"emailSubject","label":"Email Subject","placeholder":"Add subject of Email"},model:{value:(_vm.emailSubject),callback:function ($$v) {_vm.emailSubject=$$v},expression:"emailSubject"}}),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Email Content"}},[_c('html-editor',{attrs:{"id":"emailMessage","placeholder":"Message body for attendees email"},model:{value:(_vm.emailMessage),callback:function ($$v) {_vm.emailMessage=$$v},expression:"emailMessage"}})],1)],1):_vm._e()],1)])]),_vm._v(" "),_c('UploadButton',{attrs:{"service":"event","label":"Upload Event Image (<500KB & size 1125x582)"},model:{value:(_vm.eventLogo),callback:function ($$v) {_vm.eventLogo=$$v},expression:"eventLogo"}}),_vm._v(" "),_c('UploadButton',{attrs:{"service":"event","label":"Upload Event Banner (<500KB)"},model:{value:(_vm.banner_image),callback:function ($$v) {_vm.banner_image=$$v},expression:"banner_image"}}),_vm._v(" "),_c('UploadButton',{attrs:{"service":"event","label":"Upload Host Logo (<500KB & size 500x500)"},model:{value:(_vm.hostLogo),callback:function ($$v) {_vm.hostLogo=$$v},expression:"hostLogo"}})],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/events/add.vue?vue&type=template&id=58bfaf21&

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

// EXTERNAL MODULE: ./components/shack/UploadButton.vue + 3 modules
var UploadButton = __webpack_require__(103);

// EXTERNAL MODULE: ./components/argon-core/Inputs/HtmlEditor.vue + 4 modules
var HtmlEditor = __webpack_require__(108);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/events/Room.vue + 4 modules
var Room = __webpack_require__(178);

// EXTERNAL MODULE: ./util/convertMarkdownToHtml.js
var convertMarkdownToHtml = __webpack_require__(107);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/add.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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








/* harmony default export */ var addvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  name: 'EventAdd',
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
    $event
  }) {
    await $event.getEventCategories().then(({
      data
    }) => {
      store.commit('events/setCategories', data);
    }).catch(err => {
      error({
        statusCode: 404,
        message: 'Server Error. Try Again !!!'
      });
    });
  },

  data() {
    return {
      category: '',
      title: '',
      description: '',
      capacity: null,
      //10,
      price: null,
      //10,
      startTime: '',
      endTime: '',
      eventLogo: '',
      hostLogo: '',
      sendMail: false,
      emailSubject: 'Booking Confirmed',
      emailMessage: '',
      selectedRoom: null,
      max_ticket_per_person: null,
      //3,
      min_tickets_per_person: null,
      //3,
      external: false,
      external_location: null,
      banner_image: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      categories: state => state.events.categories,
      space: state => state.space.currentSpace.subdomain
    })
  },

  mounted() {
    this.startTime = this.$moment().format('YYYY-MM-DD HH:00:00');
    this.endTime = this.$moment(this.startTime).add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
    this.category = this.categories[0].id;
  },

  methods: {
    startChange(e) {
      this.endTime = this.$moment(e).add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
    },

    convertTextToHtml(text) {
      return Object(convertMarkdownToHtml["a" /* convertMarkdownToHtml */])(text);
    },

    async addEvent(state) {
      // Change to preferred display format -- 'YYYY-MM-DD HH:mm:ss'
      const start_time = this.$moment(this.startTime).format('YYYY-MM-DD HH:mm:ss');
      const end_time = this.$moment(this.endTime).format('YYYY-MM-DD HH:mm:ss');
      const emailMessage = this.convertTextToHtml(this.emailMessage);

      if (this.external) {
        this.selectedRoom = null;
      } else {
        this.external_location = null;
      }

      const eventDescription = this.description.replace(/(?:<br>)/g, '\n');
      const eventDetails = {
        name: this.title,
        description: eventDescription,
        price: this.price,
        start_time,
        end_time,
        event_logo: this.eventLogo,
        host_logo: this.hostLogo,
        type: 'event',
        room_id: this.selectedRoom,
        event_category_id: this.category,
        max_ticket_per_person: this.max_ticket_per_person,
        min_tickets_per_person: this.min_tickets_per_person,
        total_tickets: this.capacity,
        send_mail: this.sendMail === 'true' ? true : false,
        email_subject: this.emailSubject,
        email_message: emailMessage,
        external_location: this.external_location,
        banner_image: this.banner_image
      };
      if (state === 'draft') eventDetails.is_drafted = true;
      await this.$event.addEvent(eventDetails).then(({
        data
      }) => {
        this.$bvToast.toast(`Event added successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        if (state === 'draft') this.$router.push({
          path: `/${this.space}/events/drafts`
        });else this.$router.push({
          path: `/${this.space}/events/${data.id}`
        });
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data.errors), {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/events/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var events_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/events/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  events_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "799a28a7"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=add.js.map