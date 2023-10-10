exports.ids = [8];
exports.modules = {

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

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'ShackDash',

  async asyncData({
    $checkin,
    store
  }) {
    const subdomain = store.state.space.currentSpace.subdomain;
    return await $checkin.settings(`${subdomain}/checkin-settings`).then(res => {
      return {
        data: res.data
      };
    });
  },

  components: {
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  data: () => ({
    loading: false,
    fields: [{
      key: 'type',
      label: 'Membership Type'
    }, {
      key: 'option',
      label: 'Number of Guests'
    }, {
      key: 'action',
      label: ''
    }],
    setting: {
      option: '1',
      type: ''
    }
  }),
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
      options: state => state.memberships.prefix_type,
      currentSpace: state => state.space.currentSpace
    })
  },
  methods: {
    getLabel(data) {
      let label = '';

      _.each(this.options, (o, i) => {
        if (o.value === data.value) {
          label = o.text;
        }
      });

      return label;
    },

    showErrors(e) {
      this.loading = !this.loading;
      Object(_util_errors__WEBPACK_IMPORTED_MODULE_2__[/* displayError */ "a"])(e);
      this.$bvToast.toast('Something went wrong at our end', {
        variant: 'danger',
        title: 'Error'
      });
    },

    editSetting(data) {
      this.setting = data.item;
      this.$bvModal.show('modal-1');
    },

    saveSetting() {
      this.loading = !this.loading;
      const {
        subdomain
      } = this.currentSpace;
      this.$checkin.saveSetting(subdomain, this.setting).then(res => {
        location.reload();
        this.$bvToast.toast('Setting saved successfully', {
          variant: 'success',
          title: 'Success'
        });
      }).catch(e => {});
    },

    deleteSetting(data) {
      const {
        subdomain
      } = this.currentSpace;
      if (!confirm('Are you sure?')) return;
      this.$checkin.deleteSetting(subdomain, data.item.id).then(res => {
        this.$bvToast.toast('Setting deleted successfully', {
          variant: 'success',
          title: 'Success'
        });
        location.reload();
      }).catch(e => {
        this.showErrors(e);
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/checkins/settings.vue?vue&type=template&id=252fceee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Check-in","subtitle":"Settings"}}),_vm._v(" "),_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":true}}],attrs:{"id":"add-setting-modal","variant":"primary"}},[_vm._v("New Setting")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col\">","</div>",[_c('b-card',{attrs:{"no-body":""}},[_c('b-table',{attrs:{"items":_vm.data,"fields":_vm.fields,"striped":"","hover":"","show-empty":""},scopedSlots:_vm._u([{key:"cell(type)",fn:function(data){return [_c('span',[_vm._v(_vm._s(_vm.getLabel(data)))])]}},{key:"cell(action)",fn:function(data){return [_c('b-button',{attrs:{"variant":"primary","size":"sm"},on:{"click":function($event){return _vm.editSetting(data)}}},[_vm._v("Edit")]),_vm._v(" "),_c('b-button',{staticClass:"text-danger",attrs:{"variant":"transparent","size":"sm"},on:{"click":function($event){return _vm.deleteSetting(data)}}},[_c('i',{staticClass:"ti ti-trash"}),_vm._v(" Remove")])]}}])})],1)],1)]),_vm._ssrNode(" "),_c('b-button',{staticClass:"mb-2 text-primary",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"fas fa-chevron-left"}),_vm._v(" Back")])],2),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"modal-1","static":true,"title":"Settings","hide-footer":""}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.saveSetting($event)}}},[_c('b-form-group',{attrs:{"label":"Membership Type"}},[_c('b-form-select',{attrs:{"options":_vm.options,"required":true},scopedSlots:_vm._u([{key:"first",fn:function(){return [_c('option',{attrs:{"value":"","disabled":""}},[_vm._v("-- Choose a membership --")])]},proxy:true}]),model:{value:(_vm.setting.type),callback:function ($$v) {_vm.$set(_vm.setting, "type", $$v)},expression:"setting.type"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Number of Guests","description":"This is the number of guests the membership type can bring to the space as a general guest"}},[_c('b-form-input',{attrs:{"required":true,"placeholder":"1","type":"number"},model:{value:(_vm.setting.option),callback:function ($$v) {_vm.$set(_vm.setting, "option", $$v)},expression:"setting.option"}})],1),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Save")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/checkins/settings.vue?vue&type=template&id=252fceee&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/checkins/settings.vue?vue&type=script&lang=js&
var settingsvue_type_script_lang_js_ = __webpack_require__(135);

// CONCATENATED MODULE: ./pages/_space/checkins/settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkins_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/checkins/settings.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  checkins_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1ddc9d60"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=settings.js.map