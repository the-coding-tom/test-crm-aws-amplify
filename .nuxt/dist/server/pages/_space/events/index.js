exports.ids = [32];
exports.modules = {

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

/***/ 121:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/index.vue?vue&type=template&id=4ae25eee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Events","subtitle":"Published"}}),_vm._v(" "),_c('nuxt-link',{staticClass:"btn btn-primary",attrs:{"to":{ name: 'space-events-add' }}},[_vm._v("Add Event")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_c('card',[_c('client-only',[_c('full-calendar',{attrs:{"events":_vm.events,"right":_vm.calendarPlugin},on:{"eventClick":_vm.showEvent,"dateChange":_vm.dateChange,"viewSwitched":_vm.viewSwitched}})],1)],1)],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"eventModal","size":"lg"},scopedSlots:_vm._u([{key:"modal-title",fn:function(){return [_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('h1',[_vm._v(_vm._s(_vm.currentEvent.title))])])],1)]},proxy:true},{key:"modal-footer",fn:function(){return [_c('div',{staticClass:"w-100"},[(_vm.currentEvent.extendedProps.is_drafted)?[_c('b-button',{staticClass:"float-left",attrs:{"variant":"primary"}},[_vm._v("Publish Event")]),_vm._v(" "),_c('b-button',{staticClass:"text-primary float-left",attrs:{"to":{
                name: 'space-events-id-edit',
                params: { id: _vm.currentEvent.id },
              },"variant":"transparent"}},[_c('i',{staticClass:"fa fa-pen"}),_vm._v(" Edit Event")])]:_c('b-button',{staticClass:"float-left",attrs:{"to":{
              name: 'space-events-id-edit',
              params: { id: _vm.currentEvent.id },
            },"variant":"primary"}},[_vm._v("Edit Event")]),_vm._v(" "),_c('b-button',{staticClass:"text-primary float-left",attrs:{"to":{ name: 'space-events-id', params: { id: _vm.currentEvent.id } },"variant":"transparent"}},[_c('i',{staticClass:"fa fa-eye"}),_vm._v(" Preview")]),_vm._v(" "),_c('b-button',{staticClass:"text-primary float-left",attrs:{"to":{
              name: 'space-events-id-attendees',
              params: { id: _vm.currentEvent.id },
            },"variant":"transparent"}},[_c('i',{staticClass:"fa fa-copy"}),_vm._v(" View Attendees")]),_vm._v(" "),_c('b-button',{staticClass:"text-danger float-right",attrs:{"variant":"transparent"},on:{"click":_vm.showConfirmationAlert}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Cancel Event\n          ")])],2)]},proxy:true}])},[_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('p',{staticClass:"d-flex align-items-center text-muted"},[_vm._v("\n            "+_vm._s(_vm.$moment(_vm.currentEvent.start).format('MMMM DD YYYY'))+",\n            "+_vm._s(_vm.formatTime(_vm.currentEvent.start))+" -\n            "+_vm._s(_vm.formatTime(_vm.currentEvent.end))+"\n            "),_c('i',{staticClass:"fa fa-circle mx-2",staticStyle:{"font-size":"5px"}}),_vm._v("\n            "+_vm._s(_vm.getRoomDetail(_vm.currentEvent))+"\n          ")])])],1),_vm._v(" "),_c('span',{domProps:{"innerHTML":_vm._s(
          _vm.currentEvent.extendedProps
            ? _vm.convertMarkdown(_vm.currentEvent.extendedProps.description)
            : null
        )}}),_vm._v(" "),_c('b-row',{staticClass:"mt-2"},[_c('b-col',{attrs:{"md":"12"}},[_c('p',[_vm._v("\n            Price:\n            "+_vm._s(_vm._f("currency")(_vm.currentEvent.extendedProps &&
                _vm.currentEvent.extendedProps.price,_vm.space.currency_symbol))+"\n          ")])])],1),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('badge',{attrs:{"type":"info"}},[_vm._v(_vm._s(_vm.currentEvent.extendedProps &&
              _vm.currentEvent.extendedProps.event_category.name))])],1)],1)],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"deleteConfirmationModal","size":"sm"},scopedSlots:_vm._u([{key:"modal-title",fn:function(){return [_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('h1',[_vm._v("Confirm delete")])])],1)]},proxy:true},{key:"modal-footer",fn:function(){return [_c('div',{staticClass:"w-100"},[_c('b-button',{staticClass:"float-left",attrs:{"variant":"primary"},on:{"click":function($event){return _vm.$bvModal.hide('deleteConfirmationModal')}}},[_vm._v("No, don't delete")]),_vm._v(" "),_c('b-button',{staticClass:"text-danger float-left",attrs:{"variant":"transparent"},on:{"click":_vm.deleteEvent}},[_vm._v("Yes, Delete")])],1)]},proxy:true}])},[_vm._v(" "),(_vm.currentEvent.extendedProps)?[(
            _vm.currentEvent.extendedProps.attendees_count > 0 &&
              _vm.currentEvent.extendedProps.attendees_count > 0
          )?[_c('p',[_vm._v("\n            This event has\n            "+_vm._s(_vm.currentEvent.extendedProps.attendees_count)+" attendees. If you\n            choose to proceed with this event cancellation, a refund will be\n            made to all attendees.\n          ")]),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Auto refund attendess?"}},[_c('b-form-checkbox',{attrs:{"value":true,"unchecked-value":false},model:{value:(_vm.currentEvent.autoRefund),callback:function ($$v) {_vm.$set(_vm.currentEvent, "autoRefund", $$v)},expression:"currentEvent.autoRefund"}},[_vm._v("Yes")])],1)]:_c('p',[_vm._v("Are you sure you want to delete this event?")])]:_vm._e()],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/events/index.vue?vue&type=template&id=4ae25eee&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: ./util/convertMarkdownToHtml.js
var convertMarkdownToHtml = __webpack_require__(107);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__(87);
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/events/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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






/* harmony default export */ var eventsvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    SectionTitle: SectionTitle["a" /* default */]
  },

  async asyncData({
    store,
    params,
    $event,
    error
  }) {// await $event
    //   .getEvents()
    //   .then(({ data }) => {
    //     store.commit('events/setEvents', data)
    //   })
    //   .catch(err => {
    //     const message = err.response
    //       ? JSON.stringify(err.response.data.errros)
    //       : err.message
    //     error({ statusCode: 404, message: message })
    //   })
  },

  data() {
    return {
      calendarPlugin: 'dayGridMonth,timeGridWeek,listWeek',
      currentEvent: {},
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      currentViewType: 'listYear'
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      events: state => state.events.calendarEvents.filter(event => !event.extendedProps.is_drafted),
      space: state => state.space.currentSpace
    })
  },
  methods: {
    convertMarkdown(text) {
      return Object(convertMarkdownToHtml["a" /* convertMarkdownToHtml */])(text);
    },

    getRoomDetail(event) {
      if (event.extendedProps) {
        if (event.extendedProps.room) {
          return event.extendedProps.room.name;
        } else {
          return event.extendedProps.external_location;
        }
      }
    },

    formatTime(time) {
      return external_moment_timezone_default()(time).tz('Africa/Accra').format('HH:mm');
    },

    showEvent(event) {
      this.currentEvent = event;
      console.log(event);
      this.$bvModal.show('eventModal');
    },

    dateChange({
      startDate,
      endDate
    }) {
      startDate = this.currentViewType != 'listYear' ? this.$moment(startDate).format('YYYY-MM-DD') : this.$moment(new Date()).year() > this.$moment(startDate).year() ? this.$moment(startDate).format('YYYY-MM-DD') : this.$moment(new Date()).format('YYYY-MM-DD');
      endDate = this.$moment(endDate).format('YYYY-MM-DD');
      this.$event.getEventsByDate(startDate, endDate).then(({
        data: {
          data
        }
      }) => {
        this.$store.commit('events/setEvents', data);
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

    showConfirmationAlert() {
      this.$bvModal.show('deleteConfirmationModal');
    },

    deleteEvent() {
      const eventId = this.currentEvent.id;
      this.$event.deleteEvent(eventId).then(res => {
        this.$store.commit('events/removeEvent', eventId);
        this.$bvModal.hide('deleteConfirmationModal');
        this.$bvModal.hide('eventModal');
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

    viewSwitched(eventData) {
      this.currentViewType = eventData.viewType;
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/events/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_eventsvue_type_script_lang_js_ = (eventsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/events/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _space_eventsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "eb0ed650"
  
)

/* harmony default export */ var events = __webpack_exports__["default"] = (component.exports);

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