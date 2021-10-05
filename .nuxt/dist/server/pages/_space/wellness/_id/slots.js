exports.ids = [68];
exports.modules = {

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  async asyncData({
    $wellness,
    route,
    error
  }) {
    return await $wellness.getAWellnessSession(route.params.id).then(({
      data
    }) => {
      return {
        slots: _.sortBy(data.data.slots, ['day', 'start'])
      };
    }).catch(e => {
      error({
        statusCode: 404,
        message: e.response ? JSON.stringify(e.response.data.message) : e.message
      });
    });
  },

  components: {
    BaseHeader: _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    SectionTitle: _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  data: () => ({
    loading: false,
    slot: {
      day: 0,
      start: '08:00',
      duration: 30,
      capacity: 1
    },
    selects: [{
      text: 'Sunday',
      value: 0
    }, {
      text: 'Monday',
      value: 1
    }, {
      text: 'Tuesday',
      value: 2
    }, {
      text: 'Wednesday',
      value: 3
    }, {
      text: 'Thursday',
      value: 4
    }, {
      text: 'Friday',
      value: 5
    }, {
      text: 'Saturday',
      value: 6
    }]
  }),
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },

    updateWellnessSlots() {
      this.toggleLoading();
      const {
        id
      } = this.$route.params;
      const {
        slots
      } = this;
      this.$wellness.updateWellnessSlots(id, {
        slots
      }).then(res => {
        this.$bvToast.toast('Wellness slots updated successfully', {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.$router.go(-1);
      }).catch(({
        response
      }) => {
        this.toggleLoading();
        this.$bvToast.toast(JSON.stringify(response.data.errors), {
          title: 'Errors',
          variant: 'danger',
          solid: true
        });
      });
    },

    addSlot() {
      const {
        slot
      } = this;
      this.slots.push(slot);
    },

    removeSlot(i) {
      this.slots.splice(i, 1);
    },

    translateDay(day) {
      const {
        selects
      } = this;
      return _.filter(selects, o => {
        return o.value == day;
      })[0]['text'];
    },

    editSlot(slot) {
      this.slot = slot;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/_id/slots.vue?vue&type=template&id=1268e217&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateWellnessSlots($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between py-4"},[_c('MainTitle',{attrs:{"title":"Slots"}}),_vm._v(" "),_c('b-button',{attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Update Slots")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Add a Slot")]),_vm._v(" "),_c('client-only',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addSlot($event)}}},[_c('div',{staticClass:"row"},[_c('b-form-group',{staticClass:"col-md-3",attrs:{"label":"Day"}},[_c('b-form-select',{attrs:{"options":_vm.selects},model:{value:(_vm.slot.day),callback:function ($$v) {_vm.$set(_vm.slot, "day", $$v)},expression:"slot.day"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-2",attrs:{"label":"Start time"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","width":"100%","input-class":"form-control","lang":"en","value-type":"format","confirm":"","type":"time","format":"HH:mm","placeholder":"00:00"},model:{value:(_vm.slot.start),callback:function ($$v) {_vm.$set(_vm.slot, "start", $$v)},expression:"slot.start"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-2",attrs:{"label":"Duration"}},[_c('b-form-input',{attrs:{"type":"number","required":""},model:{value:(_vm.slot.duration),callback:function ($$v) {_vm.$set(_vm.slot, "duration", $$v)},expression:"slot.duration"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-2",attrs:{"label":"Capacity"}},[_c('b-form-input',{attrs:{"type":"number","required":""},model:{value:(_vm.slot.capacity),callback:function ($$v) {_vm.$set(_vm.slot, "capacity", $$v)},expression:"slot.capacity"}})],1),_vm._v(" "),_c('b-form-group',[_c('template',{slot:"label"},[_vm._v(" ")]),_vm._v(" "),_c('b-button',{staticClass:"sh-dashbtn",attrs:{"type":"submit","outline":"","variant":"primary"}},[_vm._v("Add This Slot")])],2)],1)])],1),_vm._v(" "),_c('div',{staticClass:"mr-tb-80"},[_c('div',{staticClass:"m-n25"},[_c('table',{staticClass:"table table-hover table-striped"},[_c('thead',[_c('tr',[_c('th',[_vm._v("Day")]),_vm._v(" "),_c('th',[_vm._v("Start Time")]),_vm._v(" "),_c('th',[_vm._v("Duration (mins)")]),_vm._v(" "),_c('th',[_vm._v("Capacity")]),_vm._v(" "),_c('th')])]),_vm._v(" "),_c('tbody',_vm._l((_vm.slots),function(slot,i){return _c('tr',{key:i},[_c('td',[_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.translateDay(slot.day)))])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(slot.start))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(slot.duration))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(slot.capacity))]),_vm._v(" "),_c('td',[_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.editSlot(slot)}}},[_c('i',{staticClass:"fa fa-edit"}),_vm._v(" Edit")]),_vm._v(" "),_c('b-button',{staticClass:"text-danger",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.removeSlot(i)}}},[_c('i',{staticClass:"fa fa-times"}),_vm._v(" Delete")])],1)])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"sh-alert d-flex align-items-center"},[_c('i',{staticClass:"ion-android-bulb fs20"}),_vm._v(" "),_c('span',[_vm._v("If a slot on this wellness is already booked, you will be unable to modify the slots unless all bookings are refunded")])])])])],1)],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/wellness/_id/slots.vue?vue&type=template&id=1268e217&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/wellness/_id/slots.vue?vue&type=script&lang=js&
var slotsvue_type_script_lang_js_ = __webpack_require__(170);

// CONCATENATED MODULE: ./pages/_space/wellness/_id/slots.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_slotsvue_type_script_lang_js_ = (slotsvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/wellness/_id/slots.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_slotsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "681a214a"
  
)

/* harmony default export */ var slots = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=slots.js.map