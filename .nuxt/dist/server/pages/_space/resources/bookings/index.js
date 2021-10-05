exports.ids = [59];
exports.modules = {

/***/ 143:
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
/* harmony import */ var _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94);
/* harmony import */ var _components_bookings_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(226);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuex_map_fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony import */ var vuex_map_fields__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuex_map_fields__WEBPACK_IMPORTED_MODULE_9__);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BookingModal: _components_bookings_Modal__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    BaseHeader: _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    [element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.name]: element_ui_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    [element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_option__WEBPACK_IMPORTED_MODULE_2___default.a
  },

  async asyncData({
    store,
    $membership,
    $resource,
    error
  }) {
    try {
      await store.dispatch('resources/getAllBookings');
      await store.dispatch('resources/getAllRooms');
      const link = 'filter[status]=accepted&include=profile';
      return await $membership.getAllMemberships(link).then(({
        data
      }) => {
        return {
          data
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

  data() {
    return {
      processing: false,
      loading: false,
      searching: false,
      newBooking: {
        from: null,
        to: null,
        title: null,
        membership_id: null,
        room_id: null,
        payment_method: null,
        card: null,
        source: null,
        purpose: 'room-booking'
      },
      timePickerOptions: {
        start: '00:00',
        step: '00:15',
        end: '23:30'
      },
      calendarPlugin: 'dayGridMonth,timeGridWeek',
      views: {
        listWeek: {
          noEventsMessage: 'No bookings to display'
        }
      },
      bookdata: {
        from: null,
        to: null,
        title: null,
        membership_id: null,
        room_id: null,
        booking_id: null
      },
      modalText: 'Add New Booking',
      showmodal: true,
      modalUpdate: false,
      disabledates: [],
      paymenttype: [{
        id: 1,
        name: 'card'
      }, {
        id: 2,
        name: 'credit'
      }],
      payCards: []
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapState"])({
      allRooms: state => state.resources.rooms.data,
      bookings: state => state.resources.bookings,
      space: state => state.space.currentSpace
    }),
    ...Object(vuex_map_fields__WEBPACK_IMPORTED_MODULE_9__["mapFields"])({
      from: 'resources.addBooking.from',
      to: 'resources.addBooking.to',
      title: 'resources.addBooking.title',
      id: 'resources.addBooking.id'
    }),

    not_before() {
      return this.$moment().format('HH:mm');
    }

  },

  created() {
    this.bookings.map(booked => {
      this.disabledates.push(booked.start);
      this.disabledates.push(booked.end);
    });
  },

  methods: {
    valueChange(value) {
      this.newBooking.source = null;
    },

    searchMembers(query) {
      const link = `filter[search]=${query}`;
      this.loading = !this.loading;

      const _self = this;

      _.debounce(() => {
        _self.$membership.getAllMemberships(link).then(({
          data
        }) => {
          _self.loading = !_self.loading;
          _self.data = data;
        });
      }, 350)();
    },

    async searchResource(query) {
      this.searching = !this.searching;
      const link = `/${this.space.subdomain}/admin/rooms/?search=${query}`;
      await this.$store.dispatch('resources/getAllRooms', link);
      this.searching = !this.searching;
    },

    eventClick(e) {
      this.bookdata.from = this.$moment(e.start).format('YYYY-MM-DD HH:mm');
      this.bookdata.to = this.$moment(e.end).format('YYYY-MM-DD HH:mm');
      this.bookdata.title = e.title;
      this.bookdata.membership_id = e.extendedProps.extendProps.membership.id;
      this.bookdata.room_id = e.extendedProps.extendProps.room.id;
      this.bookdata.booking_id = e.extendedProps.extendProps.id;
      this.modalText = 'Update Booking';
      this.modalUpdate = true;
      this.$bvModal.show('booking-modal');
    },

    bookDate(e) {
      this.newBooking.from = this.$moment(e).format('YYYY-MM-DD HH:mm');
      this.newBooking.to = this.$moment(e).add(1, 'hour').format('YYYY-MM-DD HH:mm');
      this.$bvModal.show('new-booking-modal');
    },

    dateChange(e) {
      const data = {
        from: this.$moment(e.startDate).format('YYYY-MM-DD'),
        to: this.$moment(e.endDate).format('YYYY-MM-DD')
      };
      this.$store.dispatch('resources/getAllBookingsByDate', data);
    },

    getRoomBook(id) {
      this.$store.dispatch('resources/bookingsForARoom', id);
    },

    addBooking() {
      const {
        newBooking
      } = this;
      this.processing = !this.processing;
      this.$resource.bookRoomForMember(newBooking.room_id, newBooking).then(res => {
        this.$bvToast.toast('Booking successful', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.processing = !this.processing;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    submitBooking(e) {
      const data = {
        from: this.$moment(e.from).format('YYYY-MM-DD HH:mm'),
        to: this.$moment(e.to).format('YYYY-MM-DD HH:mm'),
        title: e.title,
        membership_id: e.membership_id,
        room_id: e.room_id,
        booking_id: this.bookdata.booking_id
      };
      let ms = this.$moment(data.to).diff(this.$moment(data.from));

      if (ms < 900000) {
        return this.$bvToast.toast('Minimum booking duration should be 15 munites and above', {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      }

      if (this.modalUpdate && this.bookdata.booking_id) {
        this.updateBooking(data);
      } else {
        this.$store.dispatch('resources/createBooking', data);
        this.$bvModal.hide('booking-modal');
      }
    },

    async cancelBook() {
      await this.$resource.cancelRoomBooking(this.bookdata.booking_id);
      this.$bvToast.toast('Booking cancelled', {
        title: 'Success',
        variant: 'success'
      });
      this.$bvModal.hide('booking-modal');
      location.reload();
    },

    async updateBooking(data) {
      await this.$store.dispatch('resources/updateRoomBooking', data);
      location.reload(); // this.$bvModal.hide('booking-modal')
    },

    async getPaymentMethods(e) {
      if (e == 'card') {
        const result = await this.$membership.getPaymentMethods(this.newBooking.membership_id);
        this.payCards = result.data;
      }
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ifrom: {
      type: String,
      default: null
    },
    ito: {
      type: String,
      default: null
    },
    ititle: {
      type: String,
      default: null
    },
    imembership_id: {
      type: String,
      default: null
    },
    iroom_id: {
      type: String,
      default: null
    },
    disableddates: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    membership_id: '',
    from: '',
    to: '',
    title: '',
    members: [],
    rooms: [],
    room_id: '',
    timePickerOptions: {
      start: '00:00',
      step: '00:15',
      end: '23:30'
    }
  }),

  mounted() {
    this.from = this.ifrom ? this.ifrom : this.$moment().format('YYYY-MM-DD HH:mm');
    this.to = this.ito ? this.ito : this.$moment().add(1, 'hour').format('YYYY-MM-DD HH:mm');
    this.title = this.ititle && this.ititle;
    this.membership_id = this.imembership_id && this.imembership_id;
    console.log(this.membership_id);
    this.room_id = this.iroom_id && this.iroom_id;
    this.getConnectedMembers();
    this.getRooms();
  },

  methods: {
    getConnectedMembers() {
      const url = 'filter[status]=accepted&include=profile';
      this.$membership.getAllMembers(url).then(data => {
        console.log(data);
        this.members = _.map(data, o => {
          return {
            text: `${o.first_name} ${o.last_name}`,
            value: o.uuid
          };
        });
      });
    },

    getRooms() {
      this.$resource.getAllRooms().then(({
        data
      }) => {
        this.rooms = _.map(data.data, o => {
          return {
            text: o.name,
            value: o.id
          };
        }); // this.room_id = this.rooms[0].value
      });
    },

    changeDate(e) {
      this.to = this.$moment(e).add(1, 'hour').format('YYYY-MM-DD HH:mm');
    },

    submitDetails() {
      const {
        from,
        to,
        title,
        membership_id,
        room_id
      } = this;
      this.$emit('details', {
        from,
        to,
        title,
        membership_id,
        room_id
      });
    },

    cancelBooking() {
      this.$emit('deleteBooking');
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/bookings/Modal.vue?vue&type=template&id=09dae890&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitDetails($event)}}},[_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Member"}},[_c('b-form-select',{attrs:{"options":_vm.members,"value":_vm.membership_id,"required":""},model:{value:(_vm.membership_id),callback:function ($$v) {_vm.membership_id=$$v},expression:"membership_id"}})],1)],1),_vm._v(" "),_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Room"}},[_c('b-form-select',{attrs:{"options":_vm.rooms,"value":_vm.room_id,"required":""},model:{value:(_vm.room_id),callback:function ($$v) {_vm.room_id=$$v},expression:"room_id"}})],1)],1),_vm._v(" "),_c('b-row',[_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"From"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","time-picker-options":_vm.timePickerOptions,"disabled-days":_vm.disableddates,"width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm","value-type":"format","confirm":"","type":"datetime"},on:{"change":_vm.changeDate},model:{value:(_vm.from),callback:function ($$v) {_vm.from=$$v},expression:"from"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"To"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","time-picker-options":_vm.timePickerOptions,"disabled-days":_vm.disableddates,"width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm","value-type":"format","confirm":"","type":"datetime"},model:{value:(_vm.to),callback:function ($$v) {_vm.to=$$v},expression:"to"}})],1)],1)],1),_vm._v(" "),_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Title"}},[_c('b-form-input',{attrs:{"placeholder":"Reason for booking","required":""},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}})],1)],1),_vm._v(" "),_c('b-row',[_c('b-form-group',{staticClass:"col-md-12"},[_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Save")]),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"type":"button","variant":"default"},on:{"click":_vm.cancelBooking}},[_vm._v("Cancel Booking")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/bookings/Modal.vue?vue&type=template&id=09dae890&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bookings/Modal.vue?vue&type=script&lang=js&
var Modalvue_type_script_lang_js_ = __webpack_require__(144);

// CONCATENATED MODULE: ./components/bookings/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var bookings_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/bookings/Modal.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bookings_Modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5a08b468"
  
)

/* harmony default export */ var Modal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/resources/bookings/index.vue?vue&type=template&id=2c9a4be3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Bookings","subtitle":"Calendar"}}),_vm._v(" "),_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.new-booking-modal",modifiers:{"new-booking-modal":true}}],attrs:{"id":"modal-btn","variant":"primary"}},[_vm._v("Add New Booking")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"card-deck flex-column flex-xl-row\">","</div>",[_c('card',[(_vm.showmodal)?_c('b-modal',{attrs:{"id":"booking-modal","title":_vm.modalText,"hide-footer":""}},[_c('booking-modal',{attrs:{"ifrom":_vm.bookdata.from,"ito":_vm.bookdata.to,"ititle":_vm.bookdata.title,"imembership_id":_vm.bookdata.membership_id,"iroom_id":_vm.bookdata.room_id,"disableddates":_vm.disabledates},on:{"details":_vm.submitBooking,"deleteBooking":_vm.cancelBook}})],1):_vm._e(),_vm._v(" "),_c('b-modal',{attrs:{"id":"new-booking-modal","hide-footer":"","title":"Add New Booking"}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addBooking($event)}}},[_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Member"}},[_c('el-select',{attrs:{"remote-method":_vm.searchMembers,"loading":_vm.loading,"required":"","filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose a member"},on:{"change":_vm.valueChange},model:{value:(_vm.newBooking.membership_id),callback:function ($$v) {_vm.$set(_vm.newBooking, "membership_id", $$v)},expression:"newBooking.membership_id"}},_vm._l((_vm.data),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.first_name + ' ' + option.last_name,"value":option.id}})}),1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Resource to book"}},[_c('el-select',{attrs:{"remote-method":_vm.searchResource,"loading":_vm.searching,"required":"","filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose a resource"},model:{value:(_vm.newBooking.room_id),callback:function ($$v) {_vm.$set(_vm.newBooking, "room_id", $$v)},expression:"newBooking.room_id"}},_vm._l((_vm.allRooms),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.name,"value":option.id}})}),1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Choose payment type"}},[_c('el-select',{attrs:{"disabled":!_vm.newBooking.membership_id,"required":"","placeholder":"Choose payment type"},on:{"change":_vm.getPaymentMethods},model:{value:(_vm.newBooking.source),callback:function ($$v) {_vm.$set(_vm.newBooking, "source", $$v)},expression:"newBooking.source"}},_vm._l((_vm.paymenttype),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.name,"value":option.name}})}),1)],1),_vm._v(" "),(_vm.newBooking.source == 'card')?_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Choose card"}},[_c('el-select',{attrs:{"required":"","placeholder":"Choose card"},model:{value:(_vm.newBooking.payment_method),callback:function ($$v) {_vm.$set(_vm.newBooking, "payment_method", $$v)},expression:"newBooking.payment_method"}},_vm._l((_vm.payCards),function(option){return _c('el-option',{key:option.id,attrs:{"label":option.card_brand,"value":option.id}})}),1)],1):_vm._e(),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"From"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","time-picker-options":_vm.timePickerOptions,"not-before":_vm.not_before,"disabled-days":_vm.disabledates,"width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm","value-type":"format","confirm":"","type":"time"},model:{value:(_vm.newBooking.from),callback:function ($$v) {_vm.$set(_vm.newBooking, "from", $$v)},expression:"newBooking.from"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"To"}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","time-picker-options":_vm.timePickerOptions,"not-before":_vm.not_before,"disabled-days":_vm.disabledates,"width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD HH:mm","value-type":"format","confirm":"","type":"time"},model:{value:(_vm.newBooking.to),callback:function ($$v) {_vm.$set(_vm.newBooking, "to", $$v)},expression:"newBooking.to"}})],1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"Title for Booking"}},[_c('b-form-input',{attrs:{"type":"text","placeholder":"Title for booking","required":""},model:{value:(_vm.newBooking.title),callback:function ($$v) {_vm.$set(_vm.newBooking, "title", $$v)},expression:"newBooking.title"}})],1)],1),_vm._v(" "),_c('b-button',{attrs:{"disabled":_vm.processing,"type":"submit","variant":"primary"}},[_vm._v("Book")])],1)],1),_vm._v(" "),_c('client-only',[_c('full-calendar',{attrs:{"events":_vm.bookings,"views":_vm.views,"right":_vm.calendarPlugin,"default-view":"timeGridWeek"},on:{"eventClick":_vm.eventClick,"dateClick":_vm.bookDate,"dateChange":_vm.dateChange}})],1)],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/resources/bookings/index.vue?vue&type=template&id=2c9a4be3&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/resources/bookings/index.vue?vue&type=script&lang=js&
var bookingsvue_type_script_lang_js_ = __webpack_require__(143);

// CONCATENATED MODULE: ./pages/_space/resources/bookings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var resources_bookingsvue_type_script_lang_js_ = (bookingsvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/resources/bookings/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resources_bookingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cca2030a"
  
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
//# sourceMappingURL=index.js.map