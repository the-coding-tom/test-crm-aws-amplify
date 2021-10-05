exports.ids = [52];
exports.modules = {

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/plans/add.vue?vue&type=template&id=b3b63f0c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addPlan($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Setup Plan"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Add Plan")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Add New Plan")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-12",attrs:{"id":"name","label":"Name of Plan","placeholder":"Entrepreneur","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Plan Description","description":"Description should not exceed 22 characters"}},[_c('b-form-input',{attrs:{"id":"description","maxlength":"22","placeholder":"Add details about the plan","required":""},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Price per cycle"}},[_c('b-form-input',{attrs:{"id":"price_per_cycle","type":"number","placeholder":"0.00","required":""},model:{value:(_vm.price_per_cycle),callback:function ($$v) {_vm.price_per_cycle=$$v},expression:"price_per_cycle"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Charge Cycle","description":"Charge cycle denotes the number of months before charging"}},[_c('b-form-input',{attrs:{"id":"cycle_duration","type":"number","label":"Charge Cycle","required":""},model:{value:(_vm.cycle_duration),callback:function ($$v) {_vm.cycle_duration=$$v},expression:"cycle_duration"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('b-row',[_c('div',{staticClass:"form-group col-md-12"},[_c('label',{staticClass:"form-control-label",attrs:{"for":"planvisibility"}},[_vm._v("Plan Visibility")]),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"md":"10"}},[_c('b-form-checkbox',{attrs:{"id":"planVisibility","value":false,"unchecked-value":true,"name":"planVisibility"},model:{value:(_vm.hidden),callback:function ($$v) {_vm.hidden=$$v},expression:"hidden"}},[_vm._v("Public")]),_vm._v(" "),_c('p',{staticClass:"text-left mt-2"},[_vm._v("\n                          Will be displayed on Apply change and all applicants\n                          can see this plan.\n                        ")])],1)],1)],1)])],1)])])])],1),_vm._v(" "),_c('b-button',{staticClass:"text-primary mb-2",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"ti-angle-left"}),_vm._v(" Back")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/plans/add.vue?vue&type=template&id=b3b63f0c&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(21);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/plans/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainTitle: MainTitle["a" /* default */]
  },

  data() {
    return {
      name: '',
      description: '',
      price_per_cycle: 0,
      cycle_duration: 1,
      hidden: false,
      loading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    addPlan() {
      const {
        name,
        description,
        price_per_cycle,
        cycle_duration,
        hidden,
        space
      } = this;
      this.loading = !this.loading;
      const payload = {
        name,
        description,
        invoice_period: cycle_duration,
        price: price_per_cycle,
        recurring: true,
        hidden
      };
      this.$plan.addPlan(payload).then(({
        data: {
          data
        }
      }) => {
        this.$bvToast.toast(`Plan ~${name}~ created successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.loading = !this.loading;
        this.$router.push({
          name: 'space-plans'
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
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/plans/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var plans_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/plans/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plans_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ea7199d0"
  
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
  "bd5e01f8"
  
)

/* harmony default export */ var MainTitle = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map