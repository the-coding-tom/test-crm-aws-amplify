exports.ids = [6];
exports.modules = {

/***/ 100:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// Exports
module.exports = {};


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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchForm.vue?vue&type=template&id=feea539e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.search($event)}}},[_c('base-input',{staticClass:"mb-0",attrs:{"input-group-classes":"input-group-merge sh-search","group":""}},[_c('template',{slot:"prepend"},[_c('i',{staticClass:"fa fa-search"})]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],staticClass:"form-control",attrs:{"required":_vm.required,"type":"text","placeholder":"Looking for ...","aria-describedby":"button-addon2"},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-default",attrs:{"id":"button-addon2","disabled":_vm.loading,"type":"submit"}},[(_vm.loading)?_c('i',{staticClass:"fa fa-spinner fa-spin"}):_c('span',[_vm._v("\n            Search")])])])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/SearchForm.vue?vue&type=template&id=feea539e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/SearchForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchFormvue_type_script_lang_js_ = ({
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    searchTerm: ''
  }),
  methods: {
    search() {
      this.$emit('input', this.searchTerm);
      this.$emit('search', this.searchTerm);
    }

  }
});
// CONCATENATED MODULE: ./components/shack/SearchForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_SearchFormvue_type_script_lang_js_ = (SearchFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/SearchForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_SearchFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6ddf3cf7"
  
)

/* harmony default export */ var SearchForm = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getQueryParams; });
const getQueryParams = url => {
  const urlParam = __webpack_require__(83);

  const parsedUrl = urlParam.parse(url);
  return parsedUrl.search;
};

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_option_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_select_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_argon_core_Breadcrumb_RouteBreadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _components_shack_MembersCheckinHistory_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(225);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94);
/* harmony import */ var _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95);
/* harmony import */ var _components_shack_SearchForm_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(105);
/* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(104);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _util_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(109);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Checkin',
  layout: 'ShackDash',
  components: {
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    SearchForm: _components_shack_SearchForm_vue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    SectionTitle: _components_shack_SectionTitle_vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    MembersCheckin: _components_shack_MembersCheckinHistory_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    RouteBreadCrumb: _components_argon_core_Breadcrumb_RouteBreadcrumb__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    [element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a,
    QrcodeStream: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 182))
  },

  async asyncData({
    $membership,
    $checkin,
    error,
    route
  }) {
    try {
      const moment = __webpack_require__(24);

      const link = `filter[status]=accepted&include=profile`;
      const checkinFilter = `?page=${route.query.page}`;
      let imeta, ilinks;
      const checkins = await $checkin.checkins(checkinFilter).then(({
        data,
        meta,
        links
      }) => {
        imeta = meta;
        ilinks = links;
        return data;
      });
      return await $membership.getAllMemberships(link).then(({
        data
      }) => {
        return {
          data,
          checkins,
          meta: imeta,
          links: ilinks
        };
      });
    } catch (e) {
      const message = e.response ? e.response.data.message : e.message;
      error({
        statusCode: e.statusCode,
        message: message
      });
    }
  },

  data: () => ({
    searching: false,
    type: 0,
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    email: '',
    membership_id: '',
    booking_id: '',
    booking_info: '',
    loading: false,
    scanComplete: false,
    meeting_guest: false,
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: ''
  }),
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapState"])({
      bookings: state => state.resources.bookingsForDate
    })
  },

  mounted() {
    const data = {
      from: this.$moment().format('YYYY-MM-DD'),
      to: this.$moment().add(1, 'days').format('YYYY-MM-DD')
    };
    this.$store.dispatch('resources/getBookingsByDate', data);
  },

  methods: {
    onDecode(data) {
      if (data) {
        this.scanComplete = true;
        this.membership_id = data.split('//')[1];
        this.checkinMember('scan');
      }
    },

    next() {
      const {
        next
      } = this.links;
      const params = Object(_util_url__WEBPACK_IMPORTED_MODULE_12__[/* getQueryParams */ "a"])(next);
      this.$router.push(params);
      location.href = location.origin + this.$route.path + params;
    },

    prev() {
      const {
        prev
      } = this.links;
      const params = Object(_util_url__WEBPACK_IMPORTED_MODULE_12__[/* getQueryParams */ "a"])(prev);
      this.$router.push(params);
      location.href = location.origin + this.$route.path + params;
    },

    changePage(pageNumber) {
      const params = `?page=${pageNumber}`;
      this.$router.push(params);
      location.href = location.origin + this.$route.path + params;
    },

    searchMembers(query) {
      const link = `filter[search]=${query}&filter[status]=accepted`;
      this.searching = !this.searching;

      const _self = this;

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({
          data
        }) => {
          _self.searching = !_self.searching;
          _self.data = data;
        });
      }, 350)();
    },

    checkinGuest() {
      this.loading = !this.loading;
      this.booking_id = this.booking_info.split(' ')[0];
      this.membership_id = this.membership_id ? this.membership_id : this.booking_info.split(' ')[1];
      const {
        first_name,
        last_name,
        email,
        company,
        membership_id,
        booking_id,
        meeting_guest
      } = this;
      this.$checkin.checkin({
        type: 'guest',
        first_name,
        last_name,
        email,
        company,
        membership_id,
        booking_id,
        meeting_guest
      }).then(({
        data
      }) => {
        this.loadiing = !this.loading; // this.checkins.push(data)

        this.$bvToast.toast(`Guest checked in successfully`, {
          title: 'Success',
          variant: 'success'
        });
        this.$bvModal.hide('checkin');
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message; // console.log(e.message)
        // this.$bvToast.toast(e.message, { title: 'Error', variant: 'danger' })

        this.$bvToast.toast(`Error - ${message}`, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    checkinMember(source = 'manual') {
      this.loading = !this.loading;
      const {
        membership_id
      } = this;

      try {
        this.$checkin.checkin({
          type: 'member',
          checkin_type: source,
          membership_id,
          membership: membership_id
        }).then(({
          data
        }) => {
          this.loading = false; // this.checkins.push(data)

          this.$bvToast.toast('Member checked in successfully', {
            title: 'Success',
            variant: 'success'
          });
          this.$bvModal.hide('scanqrcode');
          this.$bvModal.hide('checkin');
          location.reload();
        }).catch(error => {
          this.$bvModal.hide('scanqrcode');
          this.loading = !this.loading;
          const message = error.response ? error.response.data.message : error.message;
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          });
        });
      } catch (e) {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message;
        this.$bvModal.hide('scanqrcode');
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      }
    },

    togggleLoading() {
      this.loading = !this.loading;
    },

    toggleModal(id) {
      this.$bvModal.show(id);
      this.scanComplete = false;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_table_column_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(101);
/* harmony import */ var element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_table_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    [element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_table__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_table_column__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    itemLimit: {
      type: Number,
      default: 9
    },
    showModal: {
      type: Boolean,
      default: false
    },
    checkins: {
      type: Array,
      default: () => []
    },
    toggleLoading: {
      type: Function,
      default: () => {}
    },
    status: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      prefix_type: [{
        text: 'Founding Member',
        value: '0'
      }]
    };
  },

  computed: {
    // getMembershipType() {
    //   let type = null
    //   _.each(this.prefix_type, o => {
    //     if (o.value == this.member.status.prefix_type) {
    //       type = o.text
    //     }
    //   })
    //   return type
    // }
    checkedInMembers: function () {
      return this.checkins;
    }
  },
  methods: {
    checkout(d) {
      this.toggleLoading();
      this.$checkin.checkout(d.id).then(({
        data
      }) => {
        const message = d.type == 'guest' ? 'Guest checked out successfully' : 'Member checked out successfully';

        const i = _.findIndex(this.checkins, d);

        this.checkins[i] = data;
        this.toggleLoading();
        this.$bvToast.toast(message, {
          title: 'Success',
          variant: 'success'
        }); //location.reload()
        //this.checkins
      }).catch(e => {
        this.toggleLoading();
        this.$bvToast.toast('Checkout failed. Try again', {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    guestOf(data) {
      // if (data.item.)
      console.log('------------------------------------');
      console.log(data);
      console.log('------------------------------------');
      return this.$membership.getAMembership(data.value).then(res => {
        return res.data.first_name;
      }).catch(e => {
        Object(_util_errors__WEBPACK_IMPORTED_MODULE_5__[/* displayError */ "a"])(e);
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MembersCheckinHistory.vue?vue&type=template&id=4ebeffc6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('el-table',{staticClass:"table table-hover table-striped table-responsive",attrs:{"data":_vm.checkedInMembers,"header-row-class-name":"thead-light"}},[_c('el-table-column',{attrs:{"label":"Name  /  Company","prop":"name","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('div',{staticClass:"sh-vflex"},[(row.membership)?_c('div',[_c('nuxt-link',{attrs:{"to":{
                name: 'space-directory-id',
                params: { id: row.membership },
              }}},[_vm._v("\n              "+_vm._s(row.first_name + '  ' + row.last_name)),(row.member != null && row.member.prefix_type === '0')?_c('b-badge',{attrs:{"pill":"","variant":"secondary"}},[_c('i',{staticClass:"fa fa-star"})]):_vm._e()],1),_vm._v(" "),_c('br'),_vm._v("\n            "+_vm._s(row.company)+"\n          ")],1):_c('div',[_vm._v("\n            "+_vm._s(row.first_name + '  ' + row.last_name)),_c('br'),_vm._v("\n            "+_vm._s(row.company)+"\n          ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Type","prop":"type","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var row = ref.row;
return [_c('div',[_vm._v("\n          "+_vm._s(row.type)+"\n        ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"For","prop":"member_id","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var row = ref.row;
return [(row.type == 'guest')?_c('div',{staticClass:"float-left"},[_vm._v("\n          "+_vm._s(row.member
              ? ((row.member.first_name) + " " + (row.member.last_name))
              : 'deleted member')+"\n        ")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Meeting Guest","prop":"meeting_guest","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var row = ref.row;
return [(row.meeting_guest)?_c('b-badge',{attrs:{"variant":"primary"}},[_vm._v("Yes")]):_c('b-badge',{attrs:{"variant":"primary"}},[_vm._v("No")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Timestamp: Check-in","min-width":"100px","prop":"method","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.checkin_timestamp))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Check-out Time","prop":"status","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var row = ref.row;
return [_c('span',[_vm._v(_vm._s(row.checkout_timestamp))])]}}])})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/MembersCheckinHistory.vue?vue&type=template&id=4ebeffc6&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MembersCheckinHistory.vue?vue&type=script&lang=js&
var MembersCheckinHistoryvue_type_script_lang_js_ = __webpack_require__(134);

// CONCATENATED MODULE: ./components/shack/MembersCheckinHistory.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_MembersCheckinHistoryvue_type_script_lang_js_ = (MembersCheckinHistoryvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/MembersCheckinHistory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_MembersCheckinHistoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e463805"
  
)

/* harmony default export */ var MembersCheckinHistory = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/checkins/history.vue?vue&type=template&id=178cdd52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Members","subtitle":"Checkin History"}}),_vm._v(" "),_c('div',{staticStyle:{"visibility":"hidden"}},[_c('b-button',{attrs:{"to":{ name: 'space-checkins-settings' },"variant":"transparent"}},[_c('i',{staticClass:"fa fa-cogs"}),_vm._v(" Settings")]),_vm._v(" "),_c('b-button',{attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.toggleModal('scanqrcode')}}},[_c('i',{staticClass:"fas fa-qrcode"}),_vm._v(" Scan QR Code")]),_vm._v(" "),_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.checkin",modifiers:{"checkin":true}}],attrs:{"variant":"primary"}},[_vm._v("Manual Check-in")])],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col\">","</div>",[_c('MembersCheckin',{attrs:{"checkins":_vm.checkins,"loading":_vm.loading,"toggle-loading":_vm.togggleLoading}})],1)])]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"checkin","static":true,"title":"Checkin","hide-footer":""}},[_c('b-tabs',{staticClass:"nav-fill flex-column flex-sm-row",attrs:{"pills":"","card":""},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('b-tab',{attrs:{"active":"","title":"Member"}},[_c('b-form',{staticClass:"member-checkin-form",on:{"submit":function($event){$event.preventDefault();return _vm.checkinMember('manual')}}},[_c('b-form-group',{attrs:{"label":"Member"}},[_c('el-select',{attrs:{"remote-method":_vm.searchMembers,"loading":_vm.searching,"required":"","filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose a member"},model:{value:(_vm.membership_id),callback:function ($$v) {_vm.membership_id=$$v},expression:"membership_id"}},_vm._l((_vm.data),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.first_name + ' ' + option.last_name,"value":option.id}})}),1)],1),_vm._v(" "),_c('b-button',{staticClass:"float-right member-checkin-btn",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Checkin")])],1)],1),_vm._v(" "),_c('b-tab',{attrs:{"title":"Guest"}},[_c('b-form',{staticClass:"guest-checkin-form",on:{"submit":function($event){$event.preventDefault();return _vm.checkinGuest($event)}}},[_c('b-form-group',{attrs:{"label":"Member"}},[_c('el-select',{attrs:{"remote-method":_vm.searchMembers,"loading":_vm.searching,"required":"","filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose a member"},model:{value:(_vm.membership_id),callback:function ($$v) {_vm.membership_id=$$v},expression:"membership_id"}},_vm._l((_vm.data),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.first_name + ' ' + option.last_name,"value":option.id}})}),1)],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Bookings"}},[_c('el-select',{attrs:{"filterable":"","placeholder":"Choose a booking"},model:{value:(_vm.booking_info),callback:function ($$v) {_vm.booking_info=$$v},expression:"booking_info"}},_vm._l((_vm.bookings),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.title,"value":option.id + ' ' + option.membership.id}})}),1)],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"First Name"}},[_c('b-form-input',{attrs:{"id":"firstName","placeholder":"John","required":""},model:{value:(_vm.first_name),callback:function ($$v) {_vm.first_name=$$v},expression:"first_name"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Last Name"}},[_c('b-form-input',{attrs:{"id":"lastName","placeholder":"Doe","required":""},model:{value:(_vm.last_name),callback:function ($$v) {_vm.last_name=$$v},expression:"last_name"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Email"}},[_c('b-form-input',{attrs:{"id":"email","type":"email","placeholder":"john@doe.com","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Company"}},[_c('b-form-input',{attrs:{"id":"company","placeholder":"SHACK15","required":""},model:{value:(_vm.company),callback:function ($$v) {_vm.company=$$v},expression:"company"}})],1),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Checkin")])],1)],1)],1)],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"scanqrcode","title":_vm.scanComplete ? 'Please Wait' : 'Show QR Code To The Camera',"hide-footer":""}},[(!_vm.scanComplete)?_c('qrcode-stream',{on:{"onDecode":_vm.onDecode}}):_c('div',[_c('b-spinner',{attrs:{"variant":"primary","type":"grow","label":"Spinning"}}),_vm._v(" "),_c('span',[_vm._v("Processing...")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev,"input":_vm.changePage}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/checkins/history.vue?vue&type=template&id=178cdd52&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/checkins/history.vue?vue&type=script&lang=js&
var historyvue_type_script_lang_js_ = __webpack_require__(133);

// CONCATENATED MODULE: ./pages/_space/checkins/history.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkins_historyvue_type_script_lang_js_ = (historyvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/checkins/history.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  checkins_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75aa36ff"
  
)

/* harmony default export */ var checkins_history = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=history.js.map