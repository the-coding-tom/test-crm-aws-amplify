exports.ids = [71];
exports.modules = {

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    SectionTitle: _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  data: () => ({
    sessions: []
  }),
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    dateChange({
      startDate,
      endData
    }) {
      const date = this.$moment(startDate).format('YYYY-MM-DD');
      const dayOfWeek = this.$moment(startDate).day();
      let sessions = [];
      this.$wellness.getWellnessByDate(date).then(({
        data
      }) => {
        _.map(data.data, o => {
          console.log(data.data);
          return _.each(o.slots, v => {
            if (v.day == dayOfWeek) {
              sessions.push({
                title: o.name,
                start: this.$moment(`${date} ${v.start}:00`).format('YYYY-MM-DD HH:mm:ss'),
                end: this.$moment(`${date} ${v.start}:00`).add(v.duration, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                backgroundColor: o.wellness_category.color,
                extendedProps: o
              });
            }
          });
        });

        this.sessions = sessions;
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data.errors), {
          variant: 'dange'
        });
      });
    },

    eventClick(event) {
      this.$router.push({
        name: 'space-wellness-bookings-id',
        params: {
          id: event.extendedProps.id
        }
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/bookings/index.vue?vue&type=template&id=46de0516&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Wellness Bookings"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_c('card',[_c('client-only',[_c('full-calendar',{attrs:{"events":_vm.sessions,"right":null,"views":_vm.views,"default-view":"list"},on:{"eventClick":_vm.eventClick,"dateChange":_vm.dateChange}})],1)],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/wellness/bookings/index.vue?vue&type=template&id=46de0516&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/bookings/index.vue?vue&type=script&lang=js&
var bookingsvue_type_script_lang_js_ = __webpack_require__(147);

// CONCATENATED MODULE: ./pages/_space/wellness/bookings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var wellness_bookingsvue_type_script_lang_js_ = (bookingsvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/wellness/bookings/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wellness_bookingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d47a003"
  
)

/* harmony default export */ var bookings = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=index.js.map