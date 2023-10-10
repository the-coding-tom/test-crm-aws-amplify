exports.ids = [56];
exports.modules = {

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/promotions/add.vue?vue&type=template&id=c81e722a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addPlan($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Promotion"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Add Promotion")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Promotion Details")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-12",attrs:{"id":"name","label":"Name of Promotion","placeholder":"Entrepreneur","required":""},model:{value:(_vm.promotion.name),callback:function ($$v) {_vm.$set(_vm.promotion, "name", $$v)},expression:"promotion.name"}}),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Promotion Is Allowed In:"}},[_c('b-row',[_c('b-col',{attrs:{"md":"10"}},[_c('b-form-checkbox',{attrs:{"id":"bookingRooms","value":true,"unchecked-value":false,"name":"bookingRooms"},on:{"change":_vm.bookingRoomsSelected},model:{value:(_vm.bookingRooms),callback:function ($$v) {_vm.bookingRooms=$$v},expression:"bookingRooms"}},[_vm._v("Booking Rooms")])],1),_vm._v(" "),_c('b-col',{attrs:{"md":"10"}},[_c('b-form-checkbox',{attrs:{"id":"orderFoodAndDrinks","value":true,"unchecked-value":false,"name":"orderFoodAndDrinks"},on:{"change":_vm.orderingFoodAndDrinksSelected},model:{value:(_vm.orderingFoodAndDrinks),callback:function ($$v) {_vm.orderingFoodAndDrinks=$$v},expression:"orderingFoodAndDrinks"}},[_vm._v("Ordering Food & Drinks")])],1),_vm._v(" "),_c('b-col',{attrs:{"md":"10"}},[_c('b-form-checkbox',{attrs:{"id":"bookingEvents","value":true,"unchecked-value":false,"name":"bookingEvents"},on:{"change":_vm.bookingEventsSelected},model:{value:(_vm.bookingEvents),callback:function ($$v) {_vm.bookingEvents=$$v},expression:"bookingEvents"}},[_vm._v("Booking Events")])],1)],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Promotion Type:","description":"Only one type of a promotion can exist at any given point in time. eg: there can't be two credit type promotions existing at the same time"}},[_c('el-select',{attrs:{"placeholder":"Select Promotion Type"},model:{value:(_vm.promotion.type),callback:function ($$v) {_vm.$set(_vm.promotion, "type", $$v)},expression:"promotion.type"}},_vm._l((_vm.promotionTypes),function(n){return _c('el-option',{key:n.key,attrs:{"label":n.name,"value":n.value}})}),1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Promotion Amount (USD)","description":"An amount to give for this promotion"}},[_c('b-form-input',{attrs:{"id":"price_per_cycle","type":"number","placeholder":"0.00","required":""},model:{value:(_vm.promotion.amount),callback:function ($$v) {_vm.$set(_vm.promotion, "amount", $$v)},expression:"promotion.amount"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Expires on","description":"when this promotion expires"}},[_c('b-form-input',{attrs:{"id":"cycle_duration","type":"date","label":"Charge Cycle","required":""},model:{value:(_vm.promotion.expires_on),callback:function ($$v) {_vm.$set(_vm.promotion, "expires_on", $$v)},expression:"promotion.expires_on"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('b-row',[_c('div',{staticClass:"form-group col-md-12"},[_c('label',{staticClass:"form-control-label",attrs:{"for":"planvisibility"}},[_vm._v("Active")]),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"md":"10"}},[_c('b-form-checkbox',{attrs:{"id":"planVisibility","value":"active","unchecked-value":"inactive","name":"planVisibility"},model:{value:(_vm.promotion.state),callback:function ($$v) {_vm.$set(_vm.promotion, "state", $$v)},expression:"promotion.state"}},[_vm._v("Yes")]),_vm._v(" "),_c('p',{staticClass:"text-left mt-2"},[_vm._v("\n                          Toggle on and off to activate or deactivate the\n                          promotion.\n                        ")])],1)],1)],1)])],1)])])])],1),_vm._v(" "),_c('b-button',{staticClass:"text-primary mb-2",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"ti-angle-left"}),_vm._v(" Back")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/promotions/add.vue?vue&type=template&id=c81e722a&

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

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/promotions/add.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },

  data() {
    return {
      promotion: {
        name: '',
        expires_on: '',
        type: '',
        amount: 0,
        allowed_usage_areas: [],
        state: 'active'
      },
      bookingRooms: false,
      orderingFoodAndDrinks: false,
      bookingEvents: false,
      loading: false,
      promotionTypes: [{
        name: 'Free Credit',
        value: 'credit',
        key: '#1'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    addPlan() {
      const {
        name
      } = this.promotion;
      this.promotion.allowed_usage_areas = JSON.stringify(this.promotion.allowed_usage_areas);
      this.loading = !this.loading;
      this.$promotion.addPromotion(this.promotion).then(({
        data: {
          data
        }
      }) => {
        this.$bvToast.toast(`Promotion ~${name}~ created successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.loading = !this.loading;
        this.$router.push({
          name: 'space-promotions'
        });
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

    bookingRoomsSelected(value) {
      if (value) {
        this.promotion.allowed_usage_areas.push('room_booking');
      } else {
        const index = this.promotion.allowed_usage_areas.indexOf('room_booking');
        this.promotion.allowed_usage_areas.splice(index, 1);
      }
    },

    orderingFoodAndDrinksSelected(value) {
      if (value) {
        this.promotion.allowed_usage_areas.push('food_and_drinks_ordering');
      } else {
        const index = this.promotion.allowed_usage_areas.indexOf('food_and_drinks_ordering');
        this.promotion.allowed_usage_areas.splice(index, 1);
      }
    },

    bookingEventsSelected(value) {
      if (value) {
        this.promotion.allowed_usage_areas.push('event_booking'); //this.promotion.allowed_usage_areas.includes("room_booking");
      } else {
        const index = this.promotion.allowed_usage_areas.indexOf('event_booking');
        this.promotion.allowed_usage_areas.splice(index, 1);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/promotions/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var promotions_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/promotions/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  promotions_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d47e7284"
  
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
//# sourceMappingURL=add.js.map