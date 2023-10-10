exports.ids = [52];
exports.modules = {

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/plans/_id/edit.vue?vue&type=template&id=ae48786c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.editPlan($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Update Plan"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Update Plan")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-12",attrs:{"value":_vm.plan.name,"readonly":"","label":"Name of Plan","required":"","placeholder":"Entrepreneur"}}),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Plan Description","description":"Description should not exceed 22 characters"}},[_c('b-form-input',{attrs:{"maxlength":"22","placeholder":"Add details about the plan","required":""},model:{value:(_vm.plan.description),callback:function ($$v) {_vm.$set(_vm.plan, "description", $$v)},expression:"plan.description"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Price per cycle"}},[_c('b-form-input',{attrs:{"type":"number","placeholder":"0.00","required":""},model:{value:(_vm.plan.price),callback:function ($$v) {_vm.$set(_vm.plan, "price", $$v)},expression:"plan.price"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Charge Cycle","description":"Charge cycle denotes the number of months before charging"}},[_c('b-form-input',{attrs:{"type":"number","label":"Charge Cycle","required":""},model:{value:(_vm.plan.invoice_period),callback:function ($$v) {_vm.$set(_vm.plan, "invoice_period", $$v)},expression:"plan.invoice_period"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('b-row',[_c('div',{staticClass:"form-group col-md-12"},[_c('label',{staticClass:"form-control-label",attrs:{"for":"planvisibility"}},[_vm._v("Allow Auto-Renew")]),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"md":"10"}},[_c('b-form-checkbox',{attrs:{"value":true,"unchecked-value":false,"name":"planVisibility"},model:{value:(_vm.plan.is_active),callback:function ($$v) {_vm.$set(_vm.plan, "is_active", $$v)},expression:"plan.is_active"}},[_vm._v("Yes")]),_vm._v(" "),_c('p',{staticClass:"text-left mt-2"},[_vm._v("\n                          Will be displayed in plans when inviting a new\n                          member and all applicants can see this Membership\n                          Plan.\n                        ")])],1)],1)],1)])],1)])])])],1),_vm._v(" "),_c('b-button',{staticClass:"text-primary mb-2",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"ti-angle-left"}),_vm._v(" Back")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/plans/_id/edit.vue?vue&type=template&id=ae48786c&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/plans/_id/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainTitle: MainTitle["a" /* default */]
  },

  async asyncData({
    store,
    $plan,
    params,
    error
  }) {
    const {
      id
    } = params;
    return await $plan.getPlan(id).then(({
      data: data
    }) => {
      console.log('------------------------------------');
      console.log(data);
      console.log('------------------------------------');
      return {
        plan: data,
        id
      };
    }).catch(err => {
      error({
        statusCode: err.statusCode,
        message: err.response ? JSON.stringify(err.response.data.message) : err.message
      });
    });
  },

  data() {
    return {
      loading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    editPlan() {
      const {
        id,
        space,
        plan
      } = this;
      this.loading = !this.loading;
      this.$plan.updatePlan(id, plan).then(({
        data: {
          data
        }
      }) => {
        this.$bvToast.toast(`Plan ~${plan.name}~ updated successfully`, {
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
// CONCATENATED MODULE: ./pages/_space/plans/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/plans/_id/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63dee280"
  
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

/***/ })

};;
//# sourceMappingURL=edit.js.map