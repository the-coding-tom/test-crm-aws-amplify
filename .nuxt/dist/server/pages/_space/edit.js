exports.ids = [24];
exports.modules = {

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/edit.vue?vue&type=template&id=70e04684&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateSpace($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Update Space"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_vm._v("Update")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Update Space Details")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-6",attrs:{"required":"","label":"Name","placeholder":"SHACK15"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Unit","placeholder":"Suite 201"},model:{value:(_vm.unit),callback:function ($$v) {_vm.unit=$$v},expression:"unit"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.description),expression:"description"}],staticClass:"form-control",attrs:{"placeholder":"Details about the space","rows":"4","max-rows":"6","description":"description"},domProps:{"value":(_vm.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.description=$event.target.value}}})]),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Currency","placeholder":"USD"},model:{value:(_vm.currency),callback:function ($$v) {_vm.currency=$$v},expression:"currency"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Currency Symbol","placeholder":"$"},model:{value:(_vm.currency_symbol),callback:function ($$v) {_vm.currency_symbol=$$v},expression:"currency_symbol"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Tax Rate","placeholder":"20","type":"number"},model:{value:(_vm.tax_rate),callback:function ($$v) {_vm.tax_rate=$$v},expression:"tax_rate"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('label',[_vm._v("Payment Instruction")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.payment_instructions),expression:"payment_instructions"}],staticClass:"form-control",attrs:{"placeholder":"Extra instructions for members when making payment","rows":"4","max-rows":"6","description":"payment_instructions"},domProps:{"value":(_vm.payment_instructions)},on:{"input":function($event){if($event.target.composing){ return; }_vm.payment_instructions=$event.target.value}}})]),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Timezone","placeholder":"America/Los_Angeles"},model:{value:(_vm.timezone),callback:function ($$v) {_vm.timezone=$$v},expression:"timezone"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Timezone Name","placeholder":"Pacific Daylight Time"},model:{value:(_vm.timezone_name),callback:function ($$v) {_vm.timezone_name=$$v},expression:"timezone_name"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-l-20"},[_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Wifi Name","placeholder":"SHACK15 WIFI"},model:{value:(_vm.wifi_name),callback:function ($$v) {_vm.wifi_name=$$v},expression:"wifi_name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Wifi Password","placeholder":"password"},model:{value:(_vm.wifi_password),callback:function ($$v) {_vm.wifi_password=$$v},expression:"wifi_password"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-12"},[_c('b-form-checkbox',{attrs:{"value":"true","unchecked-value":"false"},model:{value:(_vm.in_eu),callback:function ($$v) {_vm.in_eu=$$v},expression:"in_eu"}},[_vm._v("Is space in the European Union ?")])],1),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Address","placeholder":"19 Ella Street"},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"City","placeholder":"Palo Alto"},model:{value:(_vm.city),callback:function ($$v) {_vm.city=$$v},expression:"city"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Zip Code","placeholder":"94306"},model:{value:(_vm.zipcode),callback:function ($$v) {_vm.zipcode=$$v},expression:"zipcode"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Country","placeholder":"Country"},model:{value:(_vm.country),callback:function ($$v) {_vm.country=$$v},expression:"country"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Neighborhood","placeholder":"The Palo"},model:{value:(_vm.neighborhood),callback:function ($$v) {_vm.neighborhood=$$v},expression:"neighborhood"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Latitude","placeholder":"40.6892° N"},model:{value:(_vm.latitude),callback:function ($$v) {_vm.latitude=$$v},expression:"latitude"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Longitude","placeholder":"74.0445° W"},model:{value:(_vm.longitude),callback:function ($$v) {_vm.longitude=$$v},expression:"longitude"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-3",attrs:{"label":"Capacity","placeholder":"100","type":"number"},model:{value:(_vm.capacity),callback:function ($$v) {_vm.capacity=$$v},expression:"capacity"}})],1)])])])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/edit.vue?vue&type=template&id=70e04684&

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: ./components/shack/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(95);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SectionTitle: SectionTitle["a" /* default */]
  },

  async asyncData({
    store
  }) {
    const space = store.state.space.currentSpace;
    return { ...space
    };
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
    updateSpace() {
      const {
        name,
        description,
        unit,
        currency,
        currency_symbol,
        tax_rate,
        payment_instructions,
        timezone,
        timezone_name,
        wifi_name,
        wifi_password,
        capacity,
        in_eu,
        address,
        city,
        zipcode,
        country,
        neighborhood,
        latitude,
        longitude,
        id
      } = this;
      const payload = {
        name,
        description,
        unit,
        currency,
        currency_symbol,
        tax_rate,
        payment_instructions,
        timezone,
        timezone_name,
        wifi_name,
        wifi_password,
        capacity,
        in_eu: Boolean(in_eu),
        address,
        city,
        zipcode,
        country,
        neighborhood
      };
      if (latitude) payload[latitude] = latitude;
      if (longitude) payload[longitude] = longitude;
      this.loading = !this.loading;
      this.$space.updateOneSpace(id, payload).then(({
        data
      }) => {
        this.$store.commit('space/setSpace', data);
        this.$bvToast.toast(`Updated ${name} successfully`, {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        this.loading = !this.loading;
        setTimeout(() => {
          this.$router.push({
            name: 'space'
          });
        }, 3000);
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
// CONCATENATED MODULE: ./pages/_space/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _space_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _space_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "984870f4"
  
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

/***/ })

};;
//# sourceMappingURL=edit.js.map